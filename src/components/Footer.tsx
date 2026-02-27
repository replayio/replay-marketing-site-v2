import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
      <span>&copy; 2026 Replay. All rights reserved.</span>
      <div className="flex gap-6">
        <Link href="/about" className="hover:text-foreground transition">
          About
        </Link>
        <Link href="/security" className="hover:text-foreground transition">
          Security
        </Link>
        <Link href="/privacy" className="hover:text-foreground transition">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-foreground transition">
          Terms
        </Link>
        <a href="mailto:support@replay.io" className="hover:text-foreground transition">
          Contact
        </a>
      </div>
    </footer>
  );
}
