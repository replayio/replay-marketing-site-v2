"use client";

import { useState } from "react";

const tools = ["Lovable", "Base44", "Replit", "Other"];

export default function NotifyForm() {
  const [open, setOpen] = useState(false);
  const [tool, setTool] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-sm text-muted">
        You&apos;re on the list. We&apos;ll let you know when it&apos;s ready.
      </p>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
        style={{ background: "var(--brand-gradient)" }}
      >
        Coming soon: Get notified
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="w-full max-w-sm flex flex-col gap-3"
    >
      <input
        type="email"
        required
        placeholder="Your email"
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
      />
      <select
        required
        value={tool}
        onChange={(e) => setTool(e.target.value)}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-pink/40 appearance-none"
      >
        <option value="" disabled>
          Which tool do you use?
        </option>
        {tools.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      {tool === "Other" && (
        <input
          type="text"
          required
          placeholder="Which tool?"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-pink/40"
        />
      )}
      <button
        type="submit"
        className="rounded-full px-7 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
        style={{ background: "var(--brand-gradient)" }}
      >
        Notify me
      </button>
    </form>
  );
}
