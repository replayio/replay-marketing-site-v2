import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Pricing — Replay",
  description:
    "Simple, volume-based pricing. Replay records your web app, delivers an AI root cause analysis, and proposes a fix — right where you work.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Replay",
    description:
      "Simple, volume-based pricing. Replay records your web app, delivers an AI root cause analysis, and proposes a fix — right where you work.",
  },
};

const Check = () => (
  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30">
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      className="stroke-emerald-500"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="1.5,4.5 3.5,7 7.5,2" />
    </svg>
  </span>
);

const tiers = [
  {
    label: "Starter",
    name: "For individuals & small teams",
    desc: "When hard bugs come up occasionally and you need answers fast.",
    price: "TBD",
    pricePrefix: "$",
    billing: "per month · billed annually",
    volume: "~XX sessions / month",
    featuresLabel: "Includes",
    features: [
      "Full session recording & replay",
      "AI root cause analysis per session",
      "Proposed fix with code context",
      "IDE (MCP) + Chrome extension access",
      "7-day session history",
      "Community support",
    ],
    cta: "Get started",
    ctaHref: "#partner",
    variant: "default" as const,
  },
  {
    label: "Professional",
    name: "For teams shipping fast",
    desc: "Growing teams with no dedicated QA, where every debugging hour is an hour not shipping.",
    price: "TBD",
    pricePrefix: "$",
    billing: "per month · billed annually",
    volume: "~XXX sessions / month",
    featuresLabel: "Everything in Starter, plus",
    features: [
      "Higher monthly session volume",
      "Team sharing & collaborative sessions",
      "30-day session history",
      "Priority RCA queue",
      "Slack-based support",
      "Usage analytics dashboard",
    ],
    cta: "Talk to us",
    ctaHref: "#partner",
    variant: "featured" as const,
  },
  {
    label: "Enterprise",
    name: "For high-stakes, high-volume teams",
    desc: "When production bugs affect revenue or user trust at scale. Custom volume, custom terms.",
    price: "Custom",
    pricePrefix: "",
    billing: "volume-based · negotiated annually",
    volume: "Unlimited or defined session cap",
    featuresLabel: "Everything in Professional, plus",
    features: [
      "Dedicated Replay engineer support",
      "Custom data retention & compliance",
      "SSO & advanced access controls",
      "SLA guarantees",
      "Private deployment options",
      "Roadmap input & joint planning",
    ],
    cta: "Contact us",
    ctaHref: "#partner",
    variant: "outline" as const,
  },
];

const faqs = [
  {
    q: "What counts as a session?",
    a: "A session is one recorded debugging interaction — a bug captured, analyzed, and returned with a root cause and proposed fix. Whether you use the Chrome extension or IDE via MCP, it draws from the same monthly pool.",
  },
  {
    q: "Do I need both the Chrome extension and MCP?",
    a: "No. Use whichever fits your workflow. The Chrome extension is great for capturing bugs as you browse; MCP brings Replay's analysis directly into Cursor, VS Code, or any MCP-compatible IDE. Many teams use both depending on context.",
  },
  {
    q: "When will pricing be finalized?",
    a: "We're still in active design partner phase and setting final numbers based on what we learn with early teams. Reach out now and you'll lock in design-partner rates before general availability.",
  },
  {
    q: "What kinds of bugs does Replay work best for?",
    a: "Hard-to-reproduce bugs: intermittent failures, React state issues, race conditions, anything that disappears when you try to recreate it manually. If you can record it happening, Replay can analyze it and tell you exactly what went wrong.",
  },
  {
    q: "We use AI coding tools. Does Replay help with those bugs?",
    a: "Yes — and this is increasingly the core use case. AI-generated code produces more hard-to-trace logic errors and concurrency bugs than human-written code. Replay gives your AI agent ground truth about what actually happened at runtime, rather than asking it to guess.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="hero-fade-in relative px-6 pt-24 pb-16 max-w-4xl mx-auto text-center">
        {/* Glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(240,45,94,0.09) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
            Simple, volume-based pricing
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.08] tracking-tight mb-5">
            Debug smarter.
            <br />
            <span className="text-brand-pink">Pay for what you use.</span>
          </h1>

          <p className="text-lg text-muted max-w-lg mx-auto leading-relaxed mb-10">
            Replay records your web app, delivers an AI root cause analysis, and
            proposes a fix &mdash; right where you work.
          </p>

          <div className="flex items-center justify-center gap-2 flex-wrap mb-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-surface text-sm text-muted">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="stroke-brand-pink"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <rect x="1" y="2" width="12" height="9" rx="1.5" />
                <path d="M4 11v1.5M10 11v1.5M3 13h8" />
              </svg>
              IDE via MCP
            </span>
            <span className="text-sm text-muted">+</span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border bg-surface text-sm text-muted">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="stroke-brand-pink"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <circle cx="7" cy="7" r="5.5" />
                <path d="M7 1.5C5 3 4 5 4 7s1 4 3 5.5M7 1.5C9 3 10 5 10 7s-1 4-3 5.5M1.5 7h11" />
              </svg>
              Chrome extension
              <span className="text-[9px] font-semibold uppercase tracking-wider text-brand-pink leading-none">
                Coming soon
              </span>
            </span>
          </div>
          <p className="text-xs text-muted">
            Both access points draw from the same session pool &mdash; use
            whichever fits your workflow.
          </p>
        </div>
      </section>

      {/* Pricing tiers + Design Partner overlay */}
      <div className="relative bg-surface-tinted" id="partner">
        {/* Pricing tiers — blurred behind the overlay */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5 blur-[2px] opacity-50 pointer-events-none select-none">
            {tiers.map((tier) => (
            <div
              key={tier.label}
              className={`relative flex flex-col rounded-xl border p-7 transition-all ${
                tier.variant === "featured"
                  ? "border-brand-pink bg-brand-pink/[0.03] dark:bg-brand-pink/[0.04]"
                  : "border-border bg-surface"
              }`}
            >
              {tier.variant === "featured" && (
                <span className="absolute -top-px right-5 bg-brand-pink text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-b-lg tracking-wide">
                  Most popular
                </span>
              )}

              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.1em] mb-2 ${
                  tier.variant === "featured"
                    ? "text-brand-pink"
                    : "text-muted"
                }`}
              >
                {tier.label}
              </p>
              <h2 className="text-xl font-semibold tracking-tight mb-2 leading-snug">
                {tier.name}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-6 min-h-[48px]">
                {tier.desc}
              </p>

              <div
                className={`font-semibold tracking-tight mb-1 leading-none ${
                  tier.price === "Custom"
                    ? "text-[34px]"
                    : "text-[42px]"
                }`}
              >
                {tier.pricePrefix && (
                  <sup className="text-xl font-medium align-top mr-0.5">
                    {tier.pricePrefix}
                  </sup>
                )}
                {tier.price}
              </div>
              <p className="text-xs text-muted mb-4">{tier.billing}</p>

              {/* Volume tag */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-pink/[0.07] border border-brand-pink/[0.18] mb-6">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  className="stroke-brand-pink flex-shrink-0"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                >
                  <circle cx="6.5" cy="6.5" r="5.5" />
                  <path d="M6.5 4v3l2 1.5" />
                </svg>
                <span className="text-xs font-medium text-brand-pink">
                  {tier.volume}
                </span>
              </div>

              <div className="h-px bg-border mb-5" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted mb-3">
                {tier.featuresLabel}
              </p>
              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-muted leading-snug"
                  >
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                className={`block w-full text-center py-3 rounded-xl text-sm font-medium transition ${
                  tier.variant === "featured"
                    ? "bg-brand-pink text-white hover:opacity-90"
                    : tier.variant === "outline"
                      ? "border border-border text-muted hover:border-brand-pink hover:text-brand-pink hover:bg-brand-pink/[0.06]"
                      : "border border-border bg-surface-hover text-muted hover:text-foreground"
                }`}
              >
                {tier.cta}
              </a>
            </div>
            ))}
          </div>
        </section>

        {/* Design Partner CTA — floating overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="w-full max-w-5xl">
            <div className="relative rounded-xl border border-border bg-surface p-10 md:p-14 overflow-hidden shadow-xl">
              {/* Glow */}
              <div
                className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(240,45,94,0.07) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="max-w-lg">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-pink mb-3">
                    Early access &middot; Design partners
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 leading-snug">
                    Shape what Replay becomes
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">
                    We&apos;re working with a small group of engineering teams to
                    build and refine Replay MCP. Design partners get free access
                    during the program and favorable pricing when they convert
                    &mdash; in exchange for real usage and regular feedback. If
                    your team ships a React or Next.js app and hard bugs are
                    costing you hours, we&apos;d like to talk.
                  </p>
                </div>
                <div className="flex flex-row md:flex-col gap-3 flex-shrink-0">
                  <a
                    href="mailto:partners@replay.io"
                    className="rounded-full px-6 py-3 text-sm font-medium text-white text-center transition hover:opacity-90"
                    style={{ background: "var(--brand-gradient)" }}
                  >
                    Apply to partner
                  </a>
                  <a
                    href="mailto:pricing@replay.io"
                    className="rounded-full border border-border px-6 py-3 text-sm font-medium text-muted text-center transition hover:border-foreground/20 hover:text-foreground"
                  >
                    Discuss pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Common questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="group rounded-xl border border-border bg-surface overflow-hidden"
      open={defaultOpen || undefined}
    >
      <summary className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium cursor-pointer list-none select-none hover:text-foreground transition [&::-webkit-details-marker]:hidden">
        {question}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="stroke-muted flex-shrink-0 transition-transform group-open:rotate-45"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M8 3v10M3 8h10" />
        </svg>
      </summary>
      <div className="px-5 pb-4 pt-0 text-sm text-muted leading-relaxed border-t border-border mt-0 pt-3">
        {answer}
      </div>
    </details>
  );
}
