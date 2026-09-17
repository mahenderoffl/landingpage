import LeadForm from "./LeadForm";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20">
      <div className="glow-orb -top-10 -left-10 h-72 w-72" />
      <div className="glow-orb bottom-0 right-0 h-96 w-96" style={{ animationDelay: "1.5s" }} />

      <div className="fade-up relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:p-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[color:var(--muted)]">
          Temporary launch page
        </span>

        <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          waveseed.co is taking shape
        </h1>

        <p className="mt-3 leading-relaxed text-[color:var(--muted)]">
          We are building something new. If you are reaching out for a collaboration, project, or
          launch update, share your details below and we will get back to you.
        </p>

        <LeadForm />
      </div>
    </main>
  );
}
