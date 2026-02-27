import Link from "next/link";

export default function AudienceSplit() {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <Link
        href="/for-engineers"
        className="group rounded-xl border border-border bg-surface p-8 transition hover:border-foreground/20"
      >
        <p className="text-2xl mb-3">
          <span role="img" aria-label="tools">🛠</span>
        </p>
        <h3 className="text-lg font-semibold mb-2">Building with an IDE?</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Replay MCP connects directly to your coding agent. One command to
          install.
        </p>
        <span className="text-sm font-medium text-brand-pink group-hover:opacity-80 transition">
          Get started &rarr;
        </span>
      </Link>

      <Link
        href="/for-vibe-coders"
        className="group rounded-xl border border-border bg-surface p-8 transition hover:border-foreground/20"
      >
        <p className="text-2xl mb-3">
          <span role="img" aria-label="art">🎨</span>
        </p>
        <h3 className="text-lg font-semibold mb-2">
          Building with Lovable, Replit, or Base44?
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">
          Replay Extension runs in Chrome. No setup needed. Capture a bug, get a
          fix.
        </p>
        <span className="text-sm font-medium text-brand-pink group-hover:opacity-80 transition">
          Install Extension &rarr;
        </span>
      </Link>
    </div>
  );
}
