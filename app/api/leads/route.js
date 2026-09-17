import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { insertLead, listLeads } from "@/lib/db";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_DIGITS_RE = /^\+?[0-9]{7,15}$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  // Honeypot: bots that fill every field get silently accepted-but-dropped.
  if (String(body.company ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || email.length > 320 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (!phone || !PHONE_DIGITS_RE.test(phone.replace(/[\s()-]/g, ""))) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (message.length > 4000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  try {
    await insertLead({ name, email, phone, message });
  } catch (err) {
    console.error("Failed to store lead", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  const session = await verifySessionToken(token);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const leads = await listLeads();
  return NextResponse.json({ leads });
}
