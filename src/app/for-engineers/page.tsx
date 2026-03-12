import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import WarpSpeedBg from "@/components/WarpSpeedBg";

export const metadata: Metadata = {
  title: "Replay for Engineers",
  description:
    "Monitoring tells you a bug happened. Replay shows your agent exactly why — deterministic runtime recording, React internals, JS execution. Not logs. The execution itself.",
  alternates: { canonical: "/for-engineers" },
  openGraph: {
    title: "Replay for Engineers",
    description:
      "Monitoring tells you a bug happened. Replay shows your agent exactly why.",
  },
};

export default function ForEngineersPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            Monitoring is a signal.{" "}
            <span className="text-brand-pink">
              Replay is the recording.
            </span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mb-10 leading-relaxed">
            Replay MCP gives your coding agent a deterministic recording of your
            app&rsquo;s runtime &mdash; React renders, JS execution, network
            calls, DOM state. Not logs. The execution itself.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.replay.io/basics/replay-chrome-extension/getting-started"
              className="inline-block rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
              style={{ background: "var(--brand-gradient)" }}
            >
              Install the Chrome Extension
            </a>
            <a
              href="https://docs.replay.io/basics/replay-mcp/quickstart"
              className="inline-block rounded-full px-7 py-3.5 text-base font-medium border border-border hover:bg-surface transition"
            >
              Set up Replay MCP
            </a>
          </div>
        </section>
      </div>

      {/* Monitoring Reframe */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Your stack has logs, traces, and alerts.{" "}
            <span className="text-brand-pink">
              Your agent still can&apos;t debug.
            </span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Datadog, Honeycomb, and LogRocket are good at what they do:
              surface anomalies, trace requests, alert when error rates spike.
              But when your agent gets a bug ticket, none of that tells it{" "}
              <em>why</em> the React selector returned stale data, or which
              render cascade triggered the race condition, or what state
              mutation fired the wrong handler.
            </p>
            <p>
              That analysis requires the actual execution &mdash; not a
              sampled, aggregated representation of it.{" "}
              <span className="text-foreground font-medium">
                One tells you something happened. The other shows you everything that did.
              </span>
            </p>
          </div>
        </section>
      </div>

      {/* Depth Section */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          The analysis that used to take a staff engineer.
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-16">
          Three classes of bugs that require seeing the actual execution &mdash;
          not a trace. Now deliverable by your agent.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Render-to-cause chains
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Why did this component re-render? Trace it backwards through the
              dependency graph to the exact state mutation that triggered it.
              Not a guess &mdash; the actual render tree at the moment it
              happened.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;CartSummary re-rendered 14 times on a single click. Root
              cause: useCartState returned a new object reference on every call.
              The selector was never memoized.&rdquo;
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              Selector reference tracking
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Which selector read stale data? When did it change? Replay tracks
              every reference so your agent can answer these questions without
              adding a single log line to your codebase.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;selectUserPermissions returned the pre-login value at
              t+340ms. The auth slice updated at t+280ms but the selector cache
              wasn&apos;t invalidated.&rdquo;
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold mb-3">
              JS execution, frame by frame
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Step through any JavaScript frame in order. Add console.logs
              retroactively. Set breakpoints that didn&apos;t exist when the
              bug happened. This is impossible with logs &mdash; it requires the
              recording.
            </p>
            <div className="rounded-lg bg-surface-tinted p-4 text-xs text-muted italic leading-relaxed">
              &ldquo;The race condition is in PaymentFlow.tsx line 83. The
              onSubmit handler fires before the async validation resolves.
              Here&apos;s the fix.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Built for the bugs monitoring can&apos;t explain.
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Three scenarios where logs and traces run out &mdash; and Replay
            picks up.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Agents stuck in a loop",
                description:
                  "Your agent keeps patching the same failing test. Feeding it more logs doesn\u2019t break the loop \u2014 the logs don\u2019t contain what it needs. Replay gives it the runtime execution. That\u2019s what breaks the loop.",
              },
              {
                title: "Flaky tests in CI",
                description:
                  "Your test suite has a flake that fails one in ten runs. Nobody can reproduce it locally, and the logs tell you what failed \u2014 not why. Replay records every CI run. When it flakes, Replay MCP delivers the root cause to your agent directly from the recording.",
              },
              {
                title: "User-reported bugs you can\u2019t reproduce",
                description:
                  "A user reports something broken. You try to reproduce it. You can\u2019t. The Replay Chrome Extension captures the user\u2019s session as it happens \u2014 state, timing, render sequence \u2014 so your agent gets the recording, not a description of it.",
              },
            ].map((uc) => (
              <div
                key={uc.title}
                className="rounded-xl border border-border bg-surface p-8"
              >
                <h3 className="text-lg font-semibold mb-2">{uc.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Works in your workflow */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <div className="rounded-xl border border-brand-purple/20 bg-brand-purple/5 p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-purple mb-3">
            Getting started
          </p>
          <h3 className="text-xl font-semibold mb-3">
            The Chrome Extension is the fastest way in.
          </h3>
          <p className="text-base text-muted leading-relaxed mb-4">
            Install the{" "}
            <a href="https://docs.replay.io/basics/replay-chrome-extension/getting-started" className="text-brand-purple hover:opacity-80 transition font-medium">
              Replay Chrome Extension
            </a>
            , open your app, hit Record, reproduce the bug. That&rsquo;s it
            &mdash; you have a recording your agent can analyze. No CI setup, no
            config, no instrumentation.
          </p>
          <p className="text-base text-muted leading-relaxed mb-6">
            Once you have recordings, connect Replay MCP to Cursor, Claude Code,
            Copilot, or Windsurf. Your agent gets the full runtime &mdash;
            React renders, JS execution, network calls &mdash; right inside your
            IDE.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { name: "Claude Code", logo: "/logos/claude.svg" },
              { name: "Cursor", logo: "/logos/cursor.svg" },
              { name: "Copilot", logo: "/logos/copilot.svg" },
              { name: "Windsurf", logo: "/logos/windsurf.svg" },
            ].map((item) => (
              <span
                key={item.name}
                className="rounded-full border border-brand-purple/30 bg-brand-purple/5 px-3 py-1 text-xs inline-flex items-center gap-1.5"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 dark:invert"
                />
                {item.name}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://docs.replay.io/basics/replay-chrome-extension/getting-started"
              className="inline-block text-sm font-medium text-brand-purple hover:opacity-80 transition"
            >
              Install the Chrome Extension &rarr;
            </a>
            <a
              href="https://docs.replay.io/basics/replay-mcp/quickstart"
              className="inline-block text-sm font-medium text-muted hover:text-foreground transition"
            >
              Set up Replay MCP &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="bg-surface-tinted">
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What engineers are saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Next.js App Router is now stable in 13.4. Wouldn\u2019t have been possible without Replay, we investigated so many super complicated bugs.",
                name: "Tim Neutkins",
                role: "Co-author of Next.js",
                company: "Vercel",
                avatar: "/avatars/tim-neutkins.svg",
                logo: "/logos/vercel.svg",
              },
              {
                quote:
                  "If I don\u2019t immediately know the answer to a bug, I immediately reach for Replay.io. It\u2019s like HMR for repros.",
                name: "Sebastian Markb\u00E5ge",
                role: "React Maintainer",
                avatar: null,
                logo: null,
                company: null,
              },
              {
                quote:
                  "The tools that we were using before were barely better than useless. You\u2019d say thanks for the console log screenshot and spend 2\u20133 days trying to recreate the issues.",
                name: "Shane Duff",
                role: "Front End Lead",
                company: "Pantheon",
                avatar: "/avatars/shane-duff.svg",
                logo: "/logos/pantheon.png",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border bg-surface p-6 flex flex-col"
              >
                <blockquote className="text-sm leading-relaxed mb-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {t.avatar && (
                      <div className="w-10 h-10 rounded-full bg-surface-hover overflow-hidden flex-shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="text-sm">
                      <span className="font-semibold">{t.name}</span>
                      <br />
                      <span className="text-muted text-xs">
                        {t.role}
                        {t.company && `, ${t.company}`}
                      </span>
                    </div>
                  </div>
                  {t.logo && (
                    <Image
                      src={t.logo}
                      alt={t.company || ""}
                      width={80}
                      height={24}
                      className="h-5 w-auto object-contain opacity-50 dark:invert dark:opacity-40 flex-shrink-0"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Stop feeding your agent logs.
          <br />
          Give it the execution.
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-8 text-lg">
          Free to get started. No credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://docs.replay.io/basics/replay-chrome-extension/getting-started"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
            style={{ background: "var(--brand-gradient)" }}
          >
            Install the Chrome Extension
          </a>
          <a
            href="https://docs.replay.io/basics/replay-mcp/quickstart"
            className="inline-block rounded-full px-8 py-3.5 text-base font-medium border border-border hover:bg-surface transition"
          >
            Set up Replay MCP
          </a>
        </div>
        <p className="text-xs text-muted mt-4">
          New to Replay? Start with the extension &mdash; get your first recording in under a minute.
        </p>
      </section>

      <Footer />
    </div>
  );
}
