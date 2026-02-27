import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeroFormula from "@/components/HeroFormula";
import { FAQSchema } from "@/components/JsonLd";
import Nav from "@/components/Nav";
import WarpSpeedBg from "@/components/WarpSpeedBg";

export const metadata: Metadata = {
  title: "Replay Chrome Extension — Record Bugs, Get Fixes",
  description:
    "The Replay Chrome Extension records what happens in your browser and tells your AI agent exactly how to fix bugs. Works with Lovable, Base44, Bolt, and Replit.",
  alternates: { canonical: "/extension" },
  openGraph: {
    title: "Replay Chrome Extension — Record Bugs, Get Fixes",
    description:
      "The Replay Chrome Extension records what happens in your browser and tells your AI agent exactly how to fix bugs. Works with Lovable, Base44, Bolt, and Replit.",
  },
};

export default function ExtensionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FAQSchema
        items={[
          {
            q: "What is the Replay Chrome Extension?",
            a: "It\u2019s a free Chrome extension that records what happens in your browser while you use your app. When you hit a bug, Replay analyzes the recording and tells your AI agent exactly how to fix it.",
          },
          {
            q: "Do I need to know how to code?",
            a: "Nope. Replay is built for people who build with AI tools like Lovable, Base44, Bolt, and Replit. You don\u2019t need to read code or understand error messages \u2014 Replay handles the debugging for you.",
          },
          {
            q: "Which AI tools does it work with?",
            a: "Replay works with any AI coding tool that runs in the browser. If you\u2019re building with Lovable, Base44, Bolt, Replit, or similar tools, Replay can help your AI fix bugs faster.",
          },
          {
            q: "Is it free?",
            a: "Yes, Replay is free to get started. Install the extension, record a bug, and get your first fix at no cost.",
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
        <section className="hero-fade-in relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-4xl mx-auto">
          <HeroFormula />
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Build fearlessly.
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            It&apos;s like having a senior engineer watching over your shoulder —
            catching bugs, finding root causes, and telling your AI exactly how
            to fix them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              Get Replay for Chrome
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-border px-7 py-3.5 text-base font-medium text-muted hover:border-foreground/20 hover:text-foreground transition"
            >
              See How It Works
            </a>
          </div>
        </section>

        {/* Compatible Tools */}
        <section className="relative z-10 px-6 pb-20 max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted mb-6">
          Works with your favorite tools
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { name: "Lovable", logo: "/logos/lovable.svg" },
            { name: "Base44", logo: "/logos/base44.svg" },
            { name: "Bolt", logo: "/logos/bolt.svg" },
            { name: "Replit", logo: "/logos/replit.svg" },
          ].map((tool) => (
            <span
              key={tool.name}
              className="rounded-full border border-brand-purple/30 bg-brand-purple/5 px-5 py-2 text-sm inline-flex items-center gap-2"
            >
              <Image
                src={tool.logo}
                alt={tool.name}
                width={18}
                height={18}
                className="w-[18px] h-[18px] dark:invert"
              />
              {tool.name}
            </span>
          ))}
        </div>
        </section>
      </div>

      {/* Problem */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 leading-tight">
            Your AI says &ldquo;fixed it.&rdquo;
            <br />
            But it&apos;s still broken.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                You describe the bug. Your AI says it&apos;s fixed. You refresh
                the page and&hellip; same problem. So you explain it again, maybe
                paste a screenshot. The AI tries something else. Still broken.
              </p>
              <p>
                You&apos;re stuck in a loop — going back and forth with an AI that
                can&apos;t actually see what&apos;s happening in your app.{" "}
                <span className="text-foreground font-medium">
                  It&apos;s guessing, and you have no way to help it.
                </span>
              </p>
              <p>
                You didn&apos;t sign up to be a debugger. You&apos;re building
                something — and you just need the bug gone.
              </p>
            </div>
            {/* Video placeholder — replace the src with a real YouTube embed URL */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-surface">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="about:blank"
                title="Replay Chrome Extension demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
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
          That&apos;s why we built the Replay Extension
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          Record the bug.{" "}
          <br className="hidden sm:block" />
          Get the fix.
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          The Replay Chrome Extension records exactly what happened in your
          browser — every click, every error, every network request. Then it
          analyzes the recording, finds the root cause, and tells your AI agent
          exactly how to fix it. No DevTools required.
        </p>
      </section>

      {/* How It Works */}
      <div id="how-it-works" className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            How it works
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Three steps. No coding required.
          </p>
          <div className="flex flex-col gap-8">
            {[
              {
                step: "1",
                title: "Install the extension",
                description:
                  "Add the Replay Chrome Extension from the Chrome Web Store. It takes 10 seconds.",
              },
              {
                step: "2",
                title: "Record the bug",
                description:
                  "Click the Replay icon and use your app normally. When you hit the bug, stop recording. That\u2019s it.",
              },
              {
                step: "3",
                title: "Get the fix",
                description:
                  "Replay analyzes your recording, finds the root cause, and gives your AI agent a step-by-step fix to apply.",
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
                {/* GIF placeholder — replace src with actual screen recording GIF */}
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
          Why vibecoders love Replay
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Built for builders who&apos;d rather ship than debug.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">No coding required</h3>
            <p className="text-sm text-muted leading-relaxed">
              You don&apos;t need to read code, open DevTools, or understand
              stack traces. Replay handles the technical stuff and gives your AI
              a fix it can actually use.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Works everywhere you vibe code
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Lovable, Base44, Bolt, Replit — wherever you&apos;re building,
              Replay records what happens in the browser and helps your AI debug
              it.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Breaks the debugging loop
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Stop going back and forth with an AI that can&apos;t see the bug.
              Replay shows it exactly what went wrong so it can fix things on the
              first try.
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
                q: "What is the Replay Chrome Extension?",
                a: "It\u2019s a free Chrome extension that records what happens in your browser while you use your app. When you hit a bug, Replay analyzes the recording and tells your AI agent exactly how to fix it.",
              },
              {
                q: "Do I need to know how to code?",
                a: "Nope. Replay is built for people who build with AI tools like Lovable, Base44, Bolt, and Replit. You don\u2019t need to read code or understand error messages \u2014 Replay handles the debugging for you.",
              },
              {
                q: "Which AI tools does it work with?",
                a: "Replay works with any AI coding tool that runs in the browser. If you\u2019re building with Lovable, Base44, Bolt, Replit, or similar tools, Replay can help your AI fix bugs faster.",
              },
              {
                q: "Is it free?",
                a: "Yes, Replay is free to get started. Install the extension, record a bug, and get your first fix at no cost.",
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
          Stop going in circles.
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
          Record the bug. Get the fix. Get back to building.
        </p>
        <a
          href="#"
          className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
          style={{ background: "var(--brand-gradient)" }}
        >
          Get Replay for Chrome
        </a>
      </section>

      <Footer />
    </div>
  );
}
