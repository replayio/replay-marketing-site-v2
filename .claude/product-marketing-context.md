# Product Marketing Context — Replay

## Company Overview

**Company:** Replay
**Website:** https://replay.io
**Docs:** https://docs.replay.io/basics/replay-mcp/overview
**Category:** Developer tools / AI-assisted debugging
**Core technology:** Deterministic browser recording with time-travel debugging
**Founded insight:** AI coding agents can write code fast but can't debug what they can't see. Replay gives them runtime visibility.

---

## Products

Replay has three products, each targeting a different audience but built on the same core recording + analysis technology.

### 1. Replay MCP (Homepage — `/`)

**What it is:** A Model Context Protocol (MCP) server that connects Replay's recording and analysis engine to coding agents. When an agent encounters a bug, Replay MCP provides the root cause and a detailed, implementation-ready fix drawn from a deterministic browser recording.

**Target audience:** Technical developers and engineering teams who use AI coding agents (Claude Code, Cursor, Copilot, Windsurf).

**Tone:** Technical but clear. Speaks to developers who understand agents, CI, test frameworks, and debugging workflows.

**Key value props:**
- Automated root-cause analysis from deterministic browser recordings
- Delivers specific, implementation-ready fixes (not vague suggestions)
- Works with any MCP-compatible coding agent
- Integrates with existing test frameworks (Cypress, Playwright, Selenium) and CI (GitHub Actions, CircleCI, Jenkins)
- Breaks the guess-patch-retry loop that agents get stuck in

**Positioning vs. alternatives:** Unlike session replay tools (LogRocket, FullStory), Replay captures a deterministic recording of the browser runtime (every DOM mutation, network call, state change) and analyzes it automatically to generate fixes for agents. No human needs to watch anything.

**Primary CTA:** "Add Replay MCP to Your Agent" -> docs link
**Secondary CTA:** "See How It Works" -> #how-it-works anchor
**Pricing:** Free to get started. No credit card required.

**Page sections:**
1. Hero: "Superpowers for your agent"
2. Logo marquee (integration logos)
3. Problem: "Your agent can't debug what it can't see."
4. Solution: "Give your agent eyes on the runtime"
5. How It Works (interactive tabs with video): Record -> Analyze -> Fix -> Ship
6. Key Benefits (3 cards): Root-cause analysis automated / Detailed fixes not vague suggestions / Works with any coding agent
7. Social proof: Case study cards (Glide, Pantheon, Vercel) + endorsement quotes (Dan Abramov, Guillermo Rauch, Sebastian Markbage)
8. Use Cases (4 cards): Agent-assisted development / Flaky tests in CI / Bug triage on autopilot / Unblocking stuck agents
9. Comparison: Replay MCP vs. the old way
10. Integrations: Coding agents (Claude Code, Cursor, Copilot, Windsurf) + Test frameworks & CI (Cypress, Playwright, Selenium, GitHub Actions, CircleCI, Jenkins)
11. FAQ (6 questions)
12. Final CTA: "Stop debugging for your agent. Let Replay do it."

**Testimonials (with attribution):**
- Mark Probst, VP Engineering at Glide: "Before Replay we spent somewhere between 1-2 hours per day per dev in this reproducibility purgatory."
- Shane Duff, Front End Lead at Pantheon: "The tools that we were using before were barely better than useless. You'd say thanks for the console log screenshot and spend 2-3 days trying to recreate the issues."
- Tim Neutkins, Co-author of Next.js at Vercel: "Next.js App Router is now stable in 13.4. Wouldn't have been possible without Replay, we investigated so many super complicated bugs."
- Dan Abramov, React Maintainer: "Replay.io is galaxy brain tooling. Real gamechanger."
- Guillermo Rauch, Founder of Vercel: "I think Replay has a very good chance of creating a new category around collaborative debugging."
- Sebastian Markbage, React Maintainer: "If I don't immediately know the answer to a bug, I immediately reach for Replay.io. It's like HMR for repros."

**Social proof companies:** Vercel, Glide, Tablecheck, Pantheon

**FAQ (MCP page):**
- What is Replay MCP? — MCP server connecting Replay's recording/analysis to your coding agent for automated root-cause analysis and fixes.
- Which coding agents does it work with? — Any MCP-compatible agent: Claude Code, Cursor, Copilot, Windsurf.
- How is this different from session replay tools like LogRocket? — Deterministic recording vs. video/logs; automated analysis for agents vs. humans watching.
- Does recording slow down my app or tests? — Minimal overhead, comparable to screen recording.
- Do I need to change my test setup? — No. Integrates with Cypress, Playwright, Selenium, WebDriver.
- Is it free? — Yes, free to get started.

---

### 2. Replay Chrome Extension (`/extension`)

**What it is:** A free Chrome extension that records what happens in the browser while a user uses their app. When they hit a bug, Replay analyzes the recording, finds the root cause, and tells the AI agent exactly how to fix it.

**Target audience:** Non-technical "vibecoders" — people building with AI tools like Lovable, Base44, Bolt, and Replit who can't open DevTools or read stack traces.

**Tone:** Simple, direct, non-technical. No jargon. Speaks to builders, not developers.

**Key value props:**
- No coding required — Replay handles the technical debugging
- Works with any browser-based AI coding tool (Lovable, Base44, Bolt, Replit)
- Breaks the debugging loop where the AI says "fixed it" but it's still broken
- Records what happened in the browser so the AI can see the actual bug, not just a description

**Pain point:** "Your AI says 'fixed it.' But it's still broken." Users are stuck going back and forth with an AI that can't see what's happening. It's guessing, and they have no way to help it.

**Solution framing:** "Record the bug. Get the fix." The extension records exactly what happened — every click, error, network request — then analyzes it and tells the AI agent how to fix it. No DevTools required.

**Primary CTA:** "Get Replay for Chrome" -> # (placeholder)
**Secondary CTA:** "See How It Works" -> #how-it-works anchor
**Pricing:** Free to get started.

**Compatible tools displayed:** Lovable, Base44, Bolt, Replit (shown as pills with logos)

**How It Works (3 steps):**
1. Install the extension — Add from Chrome Web Store, takes 10 seconds
2. Record the bug — Click Replay icon, use app normally, stop when bug appears
3. Get the fix — Replay analyzes, finds root cause, gives AI agent step-by-step fix

**Benefits (3 cards):**
- No coding required
- Works everywhere you vibe code
- Breaks the debugging loop

**FAQ (Extension page):**
- What is the Replay Chrome Extension? — Free Chrome extension that records your browser, analyzes bugs, tells your AI how to fix them.
- Do I need to know how to code? — Nope, built for AI tool users.
- Which AI tools does it work with? — Any browser-based AI coding tool.
- Is it free? — Yes, free to get started.

---

### 3. Replay Builder (`/builder`)

**What it is:** An AI coding environment (like Lovable or Replit) with Replay's time-travel debugging built in. When the AI hits a bug, it can see exactly what went wrong. Flat monthly pricing, not per-message.

**Target audience:** Same non-technical vibecoders as the Extension page, but specifically those frustrated with per-message pricing models where bugs cost extra money.

**Tone:** Simple, direct, non-technical. Emphasizes fairness and frustration with current pricing.

**Key value props:**
- Flat pricing — no per-message fees, no credit packs, no anxiety
- Built-in debugging — AI can see what happened (time-travel debugging), fixes bugs on first try
- Familiar experience — same as Lovable/Base44/Bolt/Replit but with better debugging

**Pain point:** "Every bug costs you money." Per-message pricing means you pay for every failed fix attempt. Ten messages to fix one bug = ten charges. You're not paying for building, you're paying for debugging.

**Solution framing:** "Build more. Debug less. Pay flat." AI coding environment with time-travel debugging built in — AI sees every click, error, state change. Fixes on first try. One flat price.

**Primary CTA:** "Try Replay Builder Free" -> # (placeholder)
**Secondary CTA:** "See How It Works" -> #how-it-works anchor
**Pricing:** Free to start, upgrade when ready. Flat monthly pricing (no per-message).

**How It Works (3 steps):**
1. Open Replay Builder — Describe what you want, AI starts writing code
2. Bugs get caught automatically — Built-in debugger captures what went wrong
3. Your AI fixes it for real — AI sees actual bug, gets root cause, applies right fix first time

**Benefits (3 cards):**
- Flat pricing, no surprises
- Debugging that actually works
- Familiar if you vibe code

**FAQ (Builder page):**
- What is Replay Builder? — AI coding tool like Lovable/Replit with built-in time-travel debugging and flat monthly pricing.
- Do I need to know how to code? — No, same as other AI builders.
- How is this different from Lovable or Replit? — Flat pricing + built-in debugging vs. per-message pricing + no bug visibility.
- Is it free to try? — Yes, free to start.

---

## Brand

**Brand colors:**
- Brand pink: #F02D5E
- Brand purple: #9089fc
- Brand gradient: linear-gradient(135deg, #F02D5E 0%, #9089fc 100%)

**Typography:** Space Grotesk (Google Fonts)

**Design system:**
- Light/dark mode support (CSS custom properties)
- Alternating section backgrounds: `bg-background` and `bg-surface-tinted`
- Cards: `rounded-xl border border-border bg-surface p-8`
- CTAs: Gradient background rounded-full buttons
- Secondary CTAs: Bordered rounded-full buttons

**Voice and tone guidelines:**
- MCP page (developers): Technical but clear. Use developer vocabulary. Can mention DOM, network requests, CI, MCP, test frameworks.
- Extension + Builder pages (vibecoders): Simple, direct, non-technical. No jargon. Use "AI" not "agent" when possible. "Bug" not "runtime error." "Fix" not "patch."

---

## Competitors and Alternatives

**For MCP (developer audience):**
- LogRocket, FullStory, Sentry (session replay / error monitoring) — these capture video/logs for humans; Replay captures deterministic recordings for automated agent analysis
- Manual debugging with DevTools — slow, requires human intervention

**For Extension + Builder (vibecoder audience):**
- Lovable — per-message pricing, no built-in debugging
- Base44 — per-message pricing, no built-in debugging
- Bolt — per-message pricing, no built-in debugging
- Replit — per-message pricing, no built-in debugging

**Key differentiator across all products:** Replay is the only tool that gives AI agents actual runtime visibility (deterministic browser recordings + automated root-cause analysis). Every competitor's AI is debugging blind.

---

## SEO Metadata

**Homepage (`/`):**
- Title: "Replay — Superpowers for Your Agent"
- Description: "Replay records your app, runs automated root-cause analysis, and sends a detailed fix to your coding agent — no manual debugging required."

**Extension (`/extension`):**
- Title: "Replay Chrome Extension — Record Bugs, Get Fixes"
- Description: "The Replay Chrome Extension records what happens in your browser and tells your AI agent exactly how to fix bugs. Works with Lovable, Base44, Bolt, and Replit."

**Builder (`/builder`):**
- Title: "Replay Builder — Flat Pricing, Built-in Debugging"
- Description: "Stop paying for your AI's mistakes. Replay Builder has flat pricing and built-in time-travel debugging so bugs get fixed on the first try."

---

## Site Structure

```
/                   Homepage — Replay MCP (developers)
/extension          Replay Chrome Extension (vibecoders)
/builder            Replay Builder (vibecoders)
/privacy            Privacy Policy
/terms              Terms of Service
/sitemap.xml        Auto-generated sitemap
```

**Navigation:** Flat four-link nav — Replay MCP, Replay Extension, Replay Builder, Docs
**Footer:** Privacy, Terms, Contact (mailto:support@replay.io)

---

## Technical Stack

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4
- TypeScript
- Deployed at replay.io
