"use client";

import { useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 w-full">
      <p className="bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] px-4 py-2 text-center text-xs font-medium text-[#100c29] sm:text-sm">
        🚧 This is a temporary page — Waveseed is being built. Stay tuned, updates land right here.
      </p>

      <header className="w-full border-b border-white/5 bg-[#100c29]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-bold tracking-tight">
            wave<span className="text-[color:var(--accent-1)]">seed</span>
          </a>

          <nav className="hidden gap-8 text-sm text-[color:var(--muted)] sm:flex">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[color:var(--text)]">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] px-4 py-2 text-sm font-semibold text-[#100c29] transition hover:opacity-90 sm:inline-block"
          >
            Start a project
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-[color:var(--text)] sm:hidden"
          >
            <span className="sr-only">Menu</span>
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-white/5 px-6 py-4 text-sm text-[color:var(--muted)] sm:hidden">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 transition hover:bg-white/5 hover:text-[color:var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}
