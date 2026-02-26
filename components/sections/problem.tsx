import { Container } from "@/components/container";

const problems = [
  {
    icon: "01",
    title: "The Visualization Barrier",
    description:
      "Multidimensional technical concepts are inherently difficult to capture in 2D media, leading to surface-level grasp of fundamental principles.",
  },
  {
    icon: "02",
    title: "Static Content Limitations",
    description:
      "Traditional videos and textbooks are immutable. They cannot pivot to address specific edge cases or student confusion in real-time.",
  },
  {
    icon: "03",
    title: "High Production Overhead",
    description:
      "Expert educators often lack the time or technical skill to build the high-fidelity interactive tools required for modern learning.",
  },
];

export function Problem() {
  return (
    <section id="product" className="py-24 md:py-32 bg-zinc-50/30">
      <Container>
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-5xl leading-tight">
            Education is moving faster than its tools. Traditional methods fall
            short.
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-[2rem] border border-zinc-200/60 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6 text-6xl font-black text-zinc-50 group-hover:text-indigo-50/50 transition-colors pointer-events-none">
                {problem.icon}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-extrabold text-zinc-900 mb-4 md:mb-6 flex items-center gap-3 text-balance">
                  <div className="size-2 rounded-full bg-indigo-500 shrink-0" />
                  {problem.title}
                </h3>
                <p className="text-sm md:text-base text-zinc-600 font-medium leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
