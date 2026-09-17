"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [values, setValues] = useState({ username: "", password: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Invalid username or password.");
      }

      router.refresh();
    } catch (error) {
      setStatus({ state: "error", message: error.message || "Something went wrong." });
    }
  };

  const sending = status.state === "sending";

  return (
    <div className="fade-up mx-auto mt-24 w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
      <h1 className="text-2xl font-bold">Admin login</h1>
      <p className="mt-1 text-sm text-[color:var(--muted)]">Sign in to view submitted leads.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4" noValidate>
        <label className="grid gap-1.5 text-sm text-[color:var(--muted)]">
          Username
          <input
            type="text"
            name="username"
            required
            autoComplete="username"
            value={values.username}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent-1)] focus:ring-2 focus:ring-[color:var(--accent-1)]/40"
          />
        </label>

        <label className="grid gap-1.5 text-sm text-[color:var(--muted)]">
          Password
          <input
            type="password"
            name="password"
            required
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent-1)] focus:ring-2 focus:ring-[color:var(--accent-1)]/40"
          />
        </label>

        <button
          type="submit"
          disabled={sending}
          className="mt-1 rounded-xl bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] px-5 py-3 font-semibold text-[#100c29] transition disabled:cursor-wait disabled:opacity-70 hover:opacity-90"
        >
          {sending ? "Signing in..." : "Sign in"}
        </button>

        {status.state === "error" && (
          <p className="text-sm text-red-300" aria-live="polite">
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
