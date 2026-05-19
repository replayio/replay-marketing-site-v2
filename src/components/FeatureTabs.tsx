import Image from "next/image";
import ciAgentDemo from "@/images/ci-agent-demo-large.gif";

const steps = [
  {
    number: "01",
    title: "Record",
    description:
      "Every E2E test run is automatically recorded — every function call, every DOM mutation, every network request, every state change captured deterministically. No code changes to your tests — just swap in Replay in your Playwright or Cypress config.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "When a test fails, Replay's agent opens the recording and investigates using time-travel debugging data: every function call, every DOM mutation, every network request, every state change. It traces the exact sequence of events that caused the failure.",
  },
  {
    number: "03",
    title: "Report",
    description:
      "The agent posts a detailed analysis as a GitHub comment on your PR: root cause with confidence level, step-by-step failure sequence, suggested fix with specific file and code changes, and an evidence trail citing actual runtime data.",
  },
];

export default function FeatureTabs() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
        Test fails &rarr; Agent investigates &rarr; Fix posted
      </h2>
      <p className="text-muted text-center max-w-2xl mx-auto mb-16">
        Replay does the investigation. Your team gets the root cause and a suggested fix — without spending hours debugging.
      </p>

      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

        {/* Left: Steps */}
        <div className="md:w-[380px] shrink-0 flex flex-col">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              {/* Number + connector */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full border-2 border-brand-pink bg-brand-pink/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-brand-pink">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border my-2" />
                )}
              </div>
              {/* Content */}
              <div className={i < steps.length - 1 ? "pb-8" : ""}>
                <h3 className="text-base font-semibold mb-1.5 leading-snug">{step.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: GIF */}
        <div className="flex-1 w-full">
          <div className="relative w-full rounded-2xl border border-border overflow-hidden bg-surface">
            <Image
              src={ciAgentDemo}
              alt="Replay CI Agent demo"
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>

      </div>

      <div className="flex justify-center mt-12">
        <a
          href="https://app.replay.io/sign-up"
          className="inline-block rounded-full px-8 py-3.5 text-base font-medium text-white hover:opacity-90 transition"
          style={{ background: "var(--brand-gradient)" }}
        >
          Try Replay for free &rarr;
        </a>
      </div>
    </section>
  );
}
