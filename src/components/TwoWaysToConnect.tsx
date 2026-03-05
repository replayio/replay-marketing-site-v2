import Image from "next/image";
import browserSidebarRevealGif from "@/images/BrowserSidebarReveal.gif";
import cliAnimationGif from "@/images/CLIAnimation.gif";

export default function TwoWaysToConnect() {
  return (
    <div className="bg-surface-tinted">
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">
          Works where you already work.
        </h2>
        <p className="text-muted text-center mb-10">
          Same recording engine. Two ways to connect.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-surface p-6 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-purple mb-3">
              From your IDE
            </p>
            <div className="rounded-lg border border-border bg-surface-tinted overflow-hidden mb-4">
              <Image
                src={cliAnimationGif}
                alt="Replay MCP install demo"
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Connects to Cursor, Claude Code, Copilot, and Windsurf. Your
              agent gets root cause and a specific fix automatically.
            </p>
            <a
              href="https://docs.replay.io/basics/replay-mcp/overview"
              className="text-sm font-medium text-brand-purple hover:opacity-80 transition mt-auto"
            >
              Read the docs &rarr;
            </a>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-3">
              From Chrome
            </p>
            <div className="rounded-lg border border-border bg-surface-tinted overflow-hidden mb-4">
              <Image
                src={browserSidebarRevealGif}
                alt="Replay Chrome extension demo"
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Record a bug in your browser, get a plain-English fix to paste
              into your AI tool. No setup required.
            </p>
            <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink border border-brand-pink/20 mt-auto self-start">
              Coming Soon
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
