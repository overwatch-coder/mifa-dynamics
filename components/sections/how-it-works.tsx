import { Container } from "@/components/container";

const steps = [
  {
    number: "INIT",
    title: "Enter a concept",
    description:
      "Input technical topics, mathematical proofs, or physics mechanics in natural language.",
    details: ["Multi-modal parsing", "Semantic mapping"],
  },
  {
    number: "PROC",
    title: "Generative Logic",
    description:
      "Our multi-agent system constructs executable logic, rendering complex simulations on the fly.",
    details: ["Procedural engines", "Manim integration"],
  },
  {
    number: "EXEC",
    title: "Real-time Iteration",
    description:
      "Manipulate variables, shift paradigms, and observe the immediate technical shift.",
    details: ["Variable locking", "Delta observation"],
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-zinc-900 overflow-hidden relative"
    >
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-500/10 blur-[100px] md:blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-600/10 blur-[100px] md:blur-[150px] -z-10" />

      <Container>
        <div className="max-w-3xl mb-12 md:mb-20">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">
            Pipeline Architecture
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl leading-tight">
            How our generative engine <br className="hidden sm:block" />{" "}
            achieves expert-level precision.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-zinc-800" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="size-14 md:size-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-8 md:mb-10 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all duration-500 relative z-10">
                <span className="text-[10px] md:text-xs font-bold font-mono text-zinc-400 group-hover:text-indigo-400">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-extrabold text-white mb-4 md:mb-6 group-hover:translate-x-1 transition-transform">
                {step.title}
              </h3>

              <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed mb-8">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {step.details.map((detail, d) => (
                  <span
                    key={d}
                    className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-wider"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
