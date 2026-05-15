import Image from "next/image";
import ciAgentDemo from "@/images/ci-agent-demo.gif";

const steps = [
  {
    number: "01",
    title: "Test fails — Replay records",
    description:
      "Every Playwright run in CI is recorded automatically. When a test fails, the full runtime is captured — DOM mutations, network calls, JS execution frames.",
  },
  {
    number: "02",
    title: "Replay time-travels through the recording",
    description:
      "Replay's time-travel agent steps forward and backward through the execution, inspects state at any point in time, and traces the exact causal chain from failure to root cause.",
  },
  {
    number: "03",
    title: "Root cause & fix posted as a PR comment",
    description:
      "The CI Agent comments on your PR with the root cause and a suggested fix — which file, which function, what to change, and why. You review the change instead of investigating the failure.",
  },
];

export default function FeatureTabs() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
        The full loop — test failure to merged fix
      </h2>
      <p className="text-muted text-center max-w-2xl mx-auto mb-16">
        How Replay turns a broken CI build into a shipped fix, without a human in the debugging loop.
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
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
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
