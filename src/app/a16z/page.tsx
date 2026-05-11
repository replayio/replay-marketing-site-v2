import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WarpSpeedBg from "@/components/WarpSpeedBg";
import TwoWaysToConnect from "@/components/TwoWaysToConnect";
import greenfieldGamesPhoto from "@/images/greenfieldGames_photo.png";

export const metadata: Metadata = {
  title: "Replay for a16z Portfolio Companies",
  description:
    "Replay is a fellow a16z company. We're offering portfolio companies 20% off Replay Growth and a design partner path. Time-travel debugging for your coding agents.",
  robots: { index: false, follow: false },
};

export default function A16ZPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-sm text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
            For a16z Portfolio Companies
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Your agents build faster
            <br />
            <span className="text-brand-pink">when they can see what breaks.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-4 leading-relaxed">
            Replay is a fellow a16z portfolio company. We&apos;ve built the time-travel debugger that gives AI coding agents runtime visibility — so they can find root causes, not just symptoms.
          </p>
          <p className="text-base text-muted max-w-xl mb-10 leading-relaxed">
            We&apos;re in good company. And we want to make it easy for portcos to get started with an exclusive offer.
          </p>
          <a
            href="mailto:partners@replay.io?subject=a16z%20Portfolio%20Discount"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Claim your portco discount &rarr;
          </a>
          <p className="text-xs text-muted mt-3">
            20% off · 14-day free trial · No credit card required
          </p>
        </section>
      </div>

      {/* CI Pipeline Pitch */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-20 max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-4">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Your agents write code fast.
            <br className="hidden sm:block" />
            They debug blind.
          </h2>
          <div className="space-y-4 text-muted text-lg leading-relaxed text-left max-w-2xl mx-auto">
            <p>
              AI coding agents can ship features faster than ever — but when something breaks at runtime, they&apos;re guessing. They read the error message, form a hypothesis, try a fix, and loop. That&apos;s not debugging. That&apos;s trial and error at scale.
            </p>
            <p>
              Replay records every test run — every DOM change, network request, and JS execution frame. Replay MCP gives your agent time-travel access to that recording. It can rewind to any moment, inspect state that was never logged, and trace the full causal chain from failure to root cause.
            </p>
            <p>
              The result: your agent finds the root cause and posts a suggested fix — automatically, on every PR, without a human in the loop.
            </p>
          </div>
        </section>
      </div>

      <TwoWaysToConnect />

      {/* Greenfield Games */}
      <div className="relative overflow-hidden bg-surface-tinted">
        <Image
          src={greenfieldGamesPhoto}
          alt=""
          fill
          className="object-cover object-center opacity-15"
          aria-hidden="true"
        />
        <section className="relative px-6 py-20 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border bg-surface overflow-hidden">
            <div className="px-8 pt-8 pb-6 border-b border-border">
              <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-1">
                Greenfield Games — CodeTV
              </p>
              <h2 className="text-2xl font-bold">
                An autonomous Replay agent entered a blind coding competition. The judges didn&apos;t know.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-0">
              <div className="px-8 py-8 border-b sm:border-b-0 sm:border-r border-border">
                <blockquote className="text-2xl font-semibold leading-snug mb-4">
                  &ldquo;I hope to God that bot didn&apos;t win.&rdquo;
                </blockquote>
                <p className="text-sm text-muted mb-6">
                  — Dana Lawson, CTO of Netlify — seconds before the winner was revealed
                </p>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  C.H.A.D.S. — Replay&apos;s autonomous agent loop powered by Replay MCP — competed against two teams of experienced human developers in a six-hour build competition. The judges evaluated all three apps blind, with no knowledge of which team built which.
                </p>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Before the reveal, Dana said: <em>&ldquo;This feels like I&apos;m going to put my stuff in it.&rdquo;</em> Craig Dennis (Cloudflare) noted: <em>&ldquo;This is the one that none of them all did. That was a pretty key Linear feature — the roadmap view.&rdquo;</em>
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  C.H.A.D.S. won. The room&apos;s reaction when they found out: <em>&ldquo;NO. NO, NO, NO. GET OUT OF HERE.&rdquo;</em>
                </p>
              </div>
              <div className="px-8 py-8 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    C.H.A.D.S. didn&apos;t win because it was creative or had taste. It won because it read the requirements, built a complete working product, and shipped. The roadmap view the judges called out? It was in the spec. C.H.A.D.S. built it.
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    Every other agent debugged blind. Replay MCP gave C.H.A.D.S. a deterministic recording of everything that happened at runtime — it could rewind, inspect state, and trace failures without guessing.
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    The scorecard, as the host put it: <em>&ldquo;C.H.A.D.S. one, humans zero.&rdquo;</em>
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-xs text-muted mb-3">The reveal is at 18:56. Dana&apos;s reaction is everything.</p>
                  <a
                    href="https://youtu.be/9AoMFGVffV0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-pink hover:opacity-80 transition"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6 3.5l6 4.5-6 4.5V3.5z"/>
                    </svg>
                    Watch Episode 1 on YouTube &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Proof Points */}

      <section className="px-6 py-20 max-w-5xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
          Proof points
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 leading-tight">
          The evidence
        </h2>
        <p className="text-muted text-center text-base max-w-2xl mx-auto mb-10">
          A benchmark, and two real debugging investigations that show what agents can do with time-travel access to the runtime.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
            <p className="text-4xl font-bold text-brand-pink mb-3">+15pp</p>
            <h3 className="text-base font-semibold mb-3">
              Replay MCP adds 15 percentage points to agent debugging accuracy
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
              Claude Code + Replay MCP scored 76% on 177 hard, realistic bugs in agent-built web apps. Claude Code alone scored 61%.
            </p>
            <a
              href="https://blog.replay.io/web-debug-bench"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-pink hover:opacity-80 transition mb-2"
            >
              Read the post &rarr;
            </a>
            <p className="text-xs text-muted">— Brian Hackett</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
            <p className="text-4xl font-bold text-brand-pink mb-3">7 min</p>
            <h3 className="text-base font-semibold mb-3">
              Solved a React bug faster than Dan Abramov did
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
              Replay MCP agents traced a React 19 race condition to root cause in as little as 7 minutes. Dan had been manually debugging the same bug.
            </p>
            <a
              href="https://www.replay.io/blog/replay-time-travelogue-how-replay-mcp-helped-find-a-react-bug-faster-than-dan-abramov-did"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-pink hover:opacity-80 transition mb-2"
            >
              Read the story &rarr;
            </a>
            <p className="text-xs text-muted">— Mark Erikson</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
            <p className="text-4xl font-bold text-brand-pink mb-3">4–9 min</p>
            <h3 className="text-base font-semibold mb-3">
              The architectural fix Nadia spent days finding — solved automatically
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
              An AI agent recommended the exact server-side prefetching fix Nadia had eventually discovered through days of manual investigation.
            </p>
            <a
              href="https://www.replay.io/blog/replay-time-travelogue-improving-nadias-debugging-with-ai-results-using-replay-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-pink hover:opacity-80 transition mb-2"
            >
              Read the story &rarr;
            </a>
            <p className="text-xs text-muted">— Mark Erikson</p>
          </div>
        </div>
      </section>

      {/* The Offer */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-20 max-w-4xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-4 text-center">
            The offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 leading-tight">
            Two ways to get started
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 20% off */}
            <div className="rounded-xl border border-brand-pink/30 bg-brand-pink/5 p-8 flex flex-col">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-pink border border-brand-pink/30 rounded-full px-3 py-1 mb-6 self-start">
                a16z Portfolio Exclusive
              </span>
              <h3 className="text-2xl font-bold mb-2">20% off Replay Growth</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">$239</span>
                <span className="text-muted">/mo</span>
                <span className="text-sm text-muted line-through ml-1">$299</span>
                <span className="text-xs text-muted">(billed annually)</span>
              </div>
              <ul className="space-y-2 text-sm text-muted mb-8 flex-1">
                {[
                  "500 AI analyses per month",
                  "Unlimited recordings",
                  "Full CI Agent + Replay MCP access",
                  "All coding agent integrations",
                  "14-day free trial included",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-brand-pink mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:partners@replay.io?subject=a16z%20Portfolio%20Discount"
                className="rounded-full px-6 py-3 text-sm font-medium text-white text-center hover:opacity-90 transition"
                style={{ background: "var(--brand-gradient)" }}
              >
                Claim your discount &rarr;
              </a>
              <p className="text-xs text-muted text-center mt-3">
                Email us from your company domain and we&apos;ll get you set up.
              </p>
            </div>

            {/* Design Partner */}
            <div className="rounded-xl border border-brand-purple/30 bg-brand-purple/5 p-8 flex flex-col">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-purple border border-brand-purple/30 rounded-full px-3 py-1 mb-6 self-start">
                Limited Spots
              </span>
              <h3 className="text-2xl font-bold mb-2">Join as a Design Partner</h3>
              <p className="text-4xl font-bold mb-6">Free</p>
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                We&apos;re working with a small group of engineering teams who take CI/CD automation seriously to build and refine Replay. Design partners get full, free access to everything — in exchange for real usage and regular feedback.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-8">
                If your team is shipping fast with AI agents and wants to shape how Replay develops, this is the path.
              </p>
              <a
                href="mailto:partners@replay.io?subject=a16z%20Design%20Partner"
                className="rounded-full px-6 py-3 text-sm font-medium text-brand-purple border border-brand-purple/40 text-center hover:bg-brand-purple/10 transition"
              >
                Apply to partner &rarr;
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stop debugging for your agent. Give it time-travel.
        </h2>
        <p className="text-muted mb-8 text-lg leading-relaxed">
          Questions? Reach us at{" "}
          <a href="mailto:partners@replay.io" className="text-brand-pink hover:opacity-80 transition">
            partners@replay.io
          </a>
          . We&apos;re happy to do a quick demo or help you evaluate fit.
        </p>
        <a
          href="mailto:partners@replay.io?subject=a16z%20Portfolio%20Discount"
          className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
          style={{ background: "var(--brand-gradient)" }}
        >
          Get in touch &rarr;
        </a>
      </section>

      <Footer />
    </div>
  );
}
