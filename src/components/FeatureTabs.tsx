import Image from "next/image";
import ciAgentDemo from "@/images/ci-agent-demo-large.gif";

const steps = [
  {
    number: "01",
    title: "Test fails — Replay records",
    description:
      "Every Playwright run in CI is recorded automatically. When a test fails, the full runtime is captured — DOM mutations, network calls, JS execution frames. No changes to your test code.",
  },
  {
    number: "02",
    title: "Replay analyzes the recording",
    description:
      "Replay's agent steps through the execution using time-travel debugging data, identifies the exact sequence of events that caused the failure, and determines the root cause with a confidence score.",
  },
  {
    number: "03",
    title: "Root cause + suggested fix posted to your PR",
    description:
      "Replay comments on your PR with its findings — root cause, evidence trail, and a suggested fix with specific file and line references. Your team reads the comment and applies the fix.",
  },
];

export default function FeatureTabs() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
        Every CI failure, automatically analyzed
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
    </section>
  );
}
