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
    schemaReady = db.execute(`
      CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT,
        created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
      )
    `);
  }
  await schemaReady;
}

export async function getDb() {
  const db = getClient();
  await ensureSchema(db);
  return db;
}

export async function insertLead({ name, email, message }) {
  const db = await getDb();
  await db.execute({
    sql: "INSERT INTO leads (name, email, message) VALUES (?, ?, ?)",
    args: [name, email, message ?? null],
  });
}

export async function listLeads() {
  const db = await getDb();
  const result = await db.execute(
    "SELECT id, name, email, message, created_at FROM leads ORDER BY id DESC"
  );
  return result.rows;
}
