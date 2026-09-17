# landingpage

waveseed.co launch page — a lead capture form backed by a Turso (SQLite) database,
plus a password-protected `/admin` page to review submitted leads.

## Stack

- Next.js (App Router) + Tailwind CSS
- [Turso](https://turso.tech) (libSQL) for storing leads
- A lightweight cookie-based admin login (no third-party auth service)

## Local setup

```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev
```

## Environment variables

Set these in `.env.local` for local dev, and in your Vercel project's
**Settings → Environment Variables** for production (Vercel redeploys
automatically on push once they're set — no other config needed).

| Variable             | What it is                                                        |
| --------------------- | ------------------------------------------------------------------ |
| `TURSO_DATABASE_URL`  | Your Turso database URL (`libsql://...`), from `turso db show`     |
| `TURSO_AUTH_TOKEN`    | A Turso auth token, from `turso db tokens create <db-name>`        |
| `ADMIN_USERNAME`      | Username you'll use to log in at `/admin`                          |
| `ADMIN_PASSWORD`      | Password you'll use to log in at `/admin`                          |
| `SESSION_SECRET`      | Long random string used to sign the admin session cookie. Generate with `openssl rand -base64 48` |

None of these are committed to the repo — `.env.local` is gitignored, and the
code only ever reads them via `process.env`.

The `leads` table is created automatically the first time the app talks to
the database — no manual migration step needed.

## How it works

- The homepage form posts to `POST /api/leads`, which validates the input and
  inserts a row into the `leads` table in Turso.
- `/admin` shows a login form. Signing in against `ADMIN_USERNAME` /
  `ADMIN_PASSWORD` sets an httpOnly session cookie (no "remember me" — it's a
  browser-session cookie, so it clears when the browser is closed and you're
  asked to sign in again next visit).
- Once signed in, `/admin` lists every lead (`GET /api/leads`, which also
  requires a valid session).

## Deploying

Push to the connected branch/`main` — Vercel's existing CI/CD picks it up and
builds automatically. Just make sure the environment variables above are set
in the Vercel project first, otherwise the build will succeed but requests
that touch the database or admin login will fail at runtime with a clear
"Missing ..." error.
