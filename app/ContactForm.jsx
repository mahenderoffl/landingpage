"use client";

import { useState } from "react";

const initialState = { name: "", email: "", phone: "", message: "", company: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "Sending your note..." });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Could not send form right now.");
      }

      const firstName = values.name.trim().split(/\s+/)[0] || "there";
      setStatus({ state: "success", message: `Thanks, ${firstName}. We got your message and will reach out soon.` });
      setValues(initialState);
    } catch (error) {
      setStatus({ state: "error", message: error.message || "Something went wrong. Please try again." });
    }
  };

  const sending = status.state === "sending";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      {/* Honeypot field — hidden from real users, catches simple bots */}
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label className="grid gap-1.5 text-sm text-[color:var(--muted)]">
        Full name
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent-1)] focus:ring-2 focus:ring-[color:var(--accent-1)]/40"
        />
      </label>

      <label className="grid gap-1.5 text-sm text-[color:var(--muted)]">
        Email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent-1)] focus:ring-2 focus:ring-[color:var(--accent-1)]/40"
        />
      </label>

      <label className="grid gap-1.5 text-sm text-[color:var(--muted)]">
        Phone number
        <input
          type="tel"
          name="phone"
          required
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent-1)] focus:ring-2 focus:ring-[color:var(--accent-1)]/40"
        />
      </label>

      <label className="grid gap-1.5 text-sm text-[color:var(--muted)]">
        Tell us about the project
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          className="resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent-1)] focus:ring-2 focus:ring-[color:var(--accent-1)]/40"
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="mt-1 rounded-xl bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] px-5 py-3 font-semibold text-[#100c29] transition disabled:cursor-wait disabled:opacity-70 hover:opacity-90"
      >
        {sending ? "Sending..." : "Send message"}
      </button>

      <p
        aria-live="polite"
        className={
          "min-h-[1.5rem] text-sm " +
          (status.state === "error" ? "text-red-300" : "text-[color:var(--muted)]")
        }
      >
        {status.message}
      </p>
    </form>
  );
}
