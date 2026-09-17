import Nav from "./Nav";
import Footer from "./Footer";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { SparkIcon, LayersIcon, CodeIcon, RocketIcon, CompassIcon, StackIcon } from "./Icons";

const SERVICES = [
  {
    icon: SparkIcon,
    title: "AI-Powered SaaS",
    body: "Cloud software with AI built into the core — designed to ship fast, scale further, and get smarter with use.",
  },
  {
    icon: LayersIcon,
    title: "Digital Products",
    body: "Apps, tools, and experiences designed for real people — from first prototype to public launch.",
  },
  {
    icon: CodeIcon,
    title: "Custom Software",
    body: "Bespoke systems built around how your team actually works, not the other way around.",
  },
  {
    icon: RocketIcon,
    title: "Venture Studio",
    body: "We don't stop at one product. Waveseed incubates and ships many ideas, under one roof.",
  },
];

const PRODUCT_FAMILIES = [
  { icon: SparkIcon, title: "AI Copilots & Assistants" },
  { icon: StackIcon, title: "Internal Tools & Dashboards" },
  { icon: LayersIcon, title: "Consumer Apps" },
  { icon: CompassIcon, title: "B2B Platforms" },
];

const STEPS = [
  { title: "Discover", body: "We dig into the problem before writing a line of code." },
  { title: "Build", body: "Small, senior teams ship in weeks, not quarters." },
  { title: "Scale", body: "We stay on to support, iterate, and grow what we build." },
];

const VALUES = [
  "AI-first engineering",
  "Full-stack, one team",
  "Built to launch fast",
  "Long-term product thinking",
];

export default function HomePage() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-screen w-full items-center overflow-hidden px-6 pt-36">
          <div className="glow-orb -top-10 -left-10 h-72 w-72" />
          <div className="glow-orb bottom-0 right-0 h-96 w-96" style={{ animationDelay: "1.5s" }} />
          <div className="pulse-ring left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2" />
          <div
            className="pulse-ring left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2"
            style={{ animationDelay: "1s" }}
          />

          <div className="fade-up relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[color:var(--muted)]">
              Temporary page · full site under construction
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              We build AI-native software — and the ideas that come after it.
            </h1>

            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[color:var(--muted)]">
              Waveseed is a technology company building AI-powered SaaS, digital products, and custom
              software. It&apos;s also the parent brand behind a growing family of products, all built
              and shipped by the same team.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-sm text-[color:var(--muted)]">
              This page is a preview while the full site is being built — nothing to go looking for
              elsewhere, everything will land right here.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-[color:var(--accent-1)] to-[color:var(--accent-2)] px-6 py-3 font-semibold text-[#100c29] transition hover:opacity-90"
              >
                Start a project
              </a>
              <a
                href="#services"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-[color:var(--text)] transition hover:border-white/30"
              >
                See what we do
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="relative px-6 py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What we build</h2>
            <p className="mt-3 text-[color:var(--muted)]">One team, a few different ways to work with us.</p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Reveal key={service.title}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[color:var(--accent-1)]/20 to-[color:var(--accent-2)]/20 text-[color:var(--accent-1)]">
                    <service.icon />
                  </div>
                  <h3 className="mt-4 font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{service.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Work / product families */}
        <section id="work" className="relative px-6 py-24">
          <div className="glow-orb -right-20 top-1/2 h-80 w-80 -translate-y-1/2" />

          <Reveal className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">One brand, many products</h2>
            <p className="mt-3 text-[color:var(--muted)]">
              Waveseed is the parent brand behind a growing portfolio of products — each one built,
              shipped, and supported by the same team, under one roof.
            </p>
          </Reveal>

          <div className="relative mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
            {PRODUCT_FAMILIES.map((item) => (
              <Reveal key={item.title}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5 text-[color:var(--accent-2)]">
                    <item.icon />
                  </div>
                  <span className="font-medium">{item.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* About / how we work */}
        <section id="about" className="relative px-6 py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How we work</h2>
            <p className="mt-3 text-[color:var(--muted)]">
              Every product starts the same way — a real problem, a small team, and a fast path to
              something people can actually use.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="text-sm font-semibold text-[color:var(--accent-1)]">0{i + 1}</span>
                  <h3 className="mt-2 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-16 max-w-4xl">
            <div className="flex flex-wrap justify-center gap-3">
              {VALUES.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[color:var(--muted)]"
                >
                  {value}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="relative px-6 py-24">
          <div className="glow-orb -left-20 bottom-0 h-80 w-80" />

          <div className="relative mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s build something</h2>
              <p className="mt-4 leading-relaxed text-[color:var(--muted)]">
                Got a product idea, a SaaS you want built, or software your team actually needs? Tell
                us about it below, or reach out directly.
              </p>
              <a
                href="mailto:support@waveseed.app"
                className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-[color:var(--accent-1)] transition hover:text-[color:var(--accent-2)]"
              >
                support@waveseed.app
              </a>
            </Reveal>

            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
