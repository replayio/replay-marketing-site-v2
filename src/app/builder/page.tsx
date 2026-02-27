import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { FAQSchema } from "@/components/JsonLd";
import Nav from "@/components/Nav";
import WarpSpeedBg from "@/components/WarpSpeedBg";

export const metadata: Metadata = {
  title: "Replay Builder — Flat Pricing, Built-in Debugging",
  description:
    "Stop paying for your AI's mistakes. Replay Builder has flat pricing and built-in time-travel debugging so bugs get fixed on the first try.",
  alternates: { canonical: "/builder" },
  openGraph: {
    title: "Replay Builder — Flat Pricing, Built-in Debugging",
    description:
      "Stop paying for your AI's mistakes. Replay Builder has flat pricing and built-in time-travel debugging so bugs get fixed on the first try.",
  },
};

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FAQSchema
        items={[
          {
            q: "What is Replay Builder?",
            a: "It\u2019s an AI coding tool \u2014 like Lovable or Replit \u2014 with one big difference: built-in time-travel debugging. When your AI hits a bug, it can see exactly what went wrong instead of guessing. And you pay a flat monthly price, not per message.",
          },
          {
            q: "Do I need to know how to code?",
            a: "No. Replay Builder works the same way as other AI builders. Describe what you want in plain language and the AI builds it. The debugging happens automatically behind the scenes.",
          },
          {
            q: "How is this different from Lovable or Replit?",
            a: "Most AI builders charge per message and can\u2019t see bugs \u2014 so you pay for every failed fix attempt. Replay Builder has flat pricing and built-in debugging, so bugs get fixed faster and you don\u2019t pay extra for them.",
          },
          {
            q: "Is it free to try?",
            a: "Yes. You can start building with Replay Builder for free and upgrade when you\u2019re ready.",
          },
        ]}
      />
      {/* Nav */}
      <Nav />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <WarpSpeedBg
          className="absolute inset-0 opacity-30 dark:opacity-40"
          config={{
            speed: 10,
            targetSpeed: 10,
            speedAdjFactor: 0.8,
            density: 0.7,
            starSize: 2,
            warpEffect: true,
            warpEffectLength: 5,
            depthFade: true,
            shape: "square",
            backgroundColor: "#FFFFFF",
            starColor: "hsl(263,45%,7%)",
          }}
          darkConfig={{
            backgroundColor: "hsl(263,45%,7%)",
            starColor: "#FFFFFF",
          }}
        />
        <section className="hero-fade-in relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Stop paying for your
            <br />
            <span className="text-brand-pink">AI&apos;s mistakes.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Other AI builders charge you every time your agent loops on a bug.
            Replay Builder has flat pricing and built-in debugging — so bugs get
            fixed on the first try, not the fifth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              Try Replay Builder Free
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-border px-7 py-3.5 text-base font-medium text-muted hover:border-foreground/20 hover:text-foreground transition"
            >
              See How It Works
            </a>
          </div>
        </section>
      </div>

      {/* Problem */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 leading-tight">
            Every bug costs you money.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                Your AI builder hits a bug. It tries to fix it. Fails. Tries
                again. Fails again. Each attempt burns through your credits or
                adds to your bill — and the bug is still there.
              </p>
              <p>
                With per-message pricing,{" "}
                <span className="text-foreground font-medium">
                  you&apos;re paying for every wrong guess.
                </span>{" "}
                Ten messages to fix one bug means ten charges for work that
                didn&apos;t need to happen.
              </p>
              <p>
                You&apos;re not paying for building. You&apos;re paying for
                debugging. And that&apos;s broken.
              </p>
            </div>
            {/* Video placeholder */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-surface">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted pointer-events-none">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-3 opacity-40"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span className="text-sm opacity-60">Video coming soon</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Solution */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-brand-pink mb-4">
          That&apos;s why we built Replay Builder
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          Build more. Debug less.{" "}
          <br className="hidden sm:block" />
          Pay flat.
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Replay Builder is an AI coding environment with time-travel debugging
          built in. When your AI hits a bug, it can actually see what happened —
          every click, every error, every state change. So it fixes things on
          the first try instead of guessing in circles. And you pay one flat
          price, no matter how many messages it takes.
        </p>
      </section>

      {/* How It Works */}
      <div id="how-it-works" className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            How it works
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Start building in under a minute.
          </p>
          <div className="flex flex-col gap-8">
            {[
              {
                step: "1",
                title: "Open Replay Builder",
                description:
                  "Describe what you want to build and Replay Builder starts writing code. Same experience as the tools you already know.",
              },
              {
                step: "2",
                title: "Bugs get caught automatically",
                description:
                  "When something breaks, Replay\u2019s built-in debugger captures exactly what went wrong \u2014 no screenshots or copy-pasting error messages.",
              },
              {
                step: "3",
                title: "Your AI fixes it for real",
                description:
                  "Your AI sees the actual bug, not your description of it. It gets the root cause and applies the right fix the first time.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-border bg-surface overflow-hidden flex flex-col md:flex-row"
              >
                <div className="p-8 flex flex-col justify-center text-center md:text-left md:w-1/2">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-lg flex items-center justify-center mx-auto md:mx-0 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {/* GIF placeholder */}
                <div className="relative w-full md:w-1/2 aspect-video bg-surface-hover flex-shrink-0">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-2 opacity-30"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                      <line x1="7" y1="2" x2="7" y2="22" />
                      <line x1="17" y1="2" x2="17" y2="22" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <line x1="2" y1="7" x2="7" y2="7" />
                      <line x1="2" y1="17" x2="7" y2="17" />
                      <line x1="17" y1="7" x2="22" y2="7" />
                      <line x1="17" y1="17" x2="22" y2="17" />
                    </svg>
                    <span className="text-xs opacity-40">GIF coming soon</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Benefits */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why builders switch to Replay
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Same building experience. Better debugging. Fairer pricing.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Flat pricing, no surprises
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Pay one price. Build as much as you want. No per-message fees, no
              credit packs, no anxiety watching your balance while your AI spins
              its wheels on a bug.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Debugging that actually works
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Other builders make you describe the bug to your AI. Replay shows
              it exactly what happened. That&apos;s the difference between
              guessing and knowing.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Familiar if you vibe code
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              If you&apos;ve used Lovable, Base44, Bolt, or Replit, you already
              know how this works. Describe what you want, watch it get built.
              Replay just fixes bugs faster.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "What is Replay Builder?",
                a: "It\u2019s an AI coding tool \u2014 like Lovable or Replit \u2014 with one big difference: built-in time-travel debugging. When your AI hits a bug, it can see exactly what went wrong instead of guessing. And you pay a flat monthly price, not per message.",
              },
              {
                q: "Do I need to know how to code?",
                a: "No. Replay Builder works the same way as other AI builders. Describe what you want in plain language and the AI builds it. The debugging happens automatically behind the scenes.",
              },
              {
                q: "How is this different from Lovable or Replit?",
                a: "Most AI builders charge per message and can\u2019t see bugs \u2014 so you pay for every failed fix attempt. Replay Builder has flat pricing and built-in debugging, so bugs get fixed faster and you don\u2019t pay extra for them.",
              },
              {
                q: "Is it free to try?",
                a: "Yes. You can start building with Replay Builder for free and upgrade when you\u2019re ready.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-border pb-6">
                <h3 className="text-base font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Stop paying for bugs.
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
          Flat pricing. Built-in debugging. Start building for free.
        </p>
        <a
          href="#"
          className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
          style={{ background: "var(--brand-gradient)" }}
        >
          Try Replay Builder Free
        </a>
      </section>

      <Footer />
    </div>
  );
}
