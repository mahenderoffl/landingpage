const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#top" className="text-lg font-bold tracking-tight">
            wave<span className="text-[color:var(--accent-1)]">seed</span>
          </a>
          <p className="mt-2 max-w-xs text-sm text-[color:var(--muted)]">
            Building AI-powered SaaS, digital products, and custom software.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[color:var(--muted)]">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[color:var(--text)]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-[color:var(--muted)]">
          <a href="mailto:support@waveseed.app" className="transition hover:text-[color:var(--text)]">
            support@waveseed.app
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-white/5 pt-6 text-xs text-[color:var(--muted)]">
        © {new Date().getFullYear()} Waveseed. All rights reserved.
      </div>
    </footer>
  );
}
