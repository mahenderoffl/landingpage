import { createClient } from "@libsql/client";

let client;
let schemaReady;

function getClient() {
  if (!client) {
    const url = process.env.TURSO_DATABASE_URL;
    const authToken = process.env.TURSO_AUTH_TOKEN;
    if (!url || !authToken) {
      throw new Error(
        "Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN environment variables"
      );
    }
    client = createClient({ url, authToken });
  }
  return client;
}

async function ensureSchema(db) {
  if (!schemaReady) {
    schemaReady = (async () => {
      await db.execute(`
        CREATE TABLE IF NOT EXISTS leads (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          message TEXT,
          created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
        )
      `);

      // Added after the table already existed in production — add the
      // column for existing databases; ignore the error if it's already there.
      try {
        await db.execute("ALTER TABLE leads ADD COLUMN phone TEXT");
      } catch (err) {
        if (!String(err.message).includes("duplicate column")) throw err;
      }
    })();
  }
  await schemaReady;
}

export async function getDb() {
  const db = getClient();
  await ensureSchema(db);
  return db;
}

export async function insertLead({ name, email, phone, message }) {
  const db = await getDb();
  await db.execute({
    sql: "INSERT INTO leads (name, email, phone, message) VALUES (?, ?, ?, ?)",
    args: [name, email, phone, message ?? null],
  });
}

export async function listLeads() {
  const db = await getDb();
  const result = await db.execute(
    "SELECT id, name, email, phone, message, created_at FROM leads ORDER BY id DESC"
  );
  return result.rows;
}
