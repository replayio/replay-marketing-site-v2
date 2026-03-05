import Image from "next/image";
import browserSidebarRevealGif from "@/images/BrowserSidebarReveal.gif";
import cliAnimationGif from "@/images/CLIAnimation.gif";

export default function TwoWaysToConnect() {
  return (
    <div className="bg-surface-tinted">
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 leading-tight">
          Works where you already work.
        </h2>
        <p className="text-muted text-center text-lg max-w-xl mx-auto mb-12">
          Same recording engine. Two ways to connect.
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-purple mb-4">
              From your IDE
            </p>
            <div className="rounded-lg border border-border bg-surface-tinted overflow-hidden mb-6">
              <Image
                src={cliAnimationGif}
                alt="Replay MCP install demo"
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <p className="text-base text-muted leading-relaxed mb-6">
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
          <div className="rounded-xl border border-border bg-surface p-8 flex flex-col">
            <p className="text-xs font-medium uppercase tracking-widest text-brand-pink mb-4">
              From Chrome
            </p>
            <div className="rounded-lg border border-border bg-surface-tinted overflow-hidden mb-6">
              <Image
                src={browserSidebarRevealGif}
                alt="Replay Chrome extension demo"
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <p className="text-base text-muted leading-relaxed mb-6">
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
