import { Container } from "@/components/container";

const teamMembers = [
  {
    name: "Mark",
    role: "Biomedical Researcher",
    description:
      "Expert in deep-tech pedagogical structures and research-driven simulation validation.",
  },
  {
    name: "Farhan",
    role: "Software Engineer",
    description:
      "Architecting the core multi-agent LLM systems and procedural rendering pipelines.",
  },
  {
    name: "Atsu",
    role: "Full-Stack Engineer",
    description:
      "Driving the integration of advanced web rendering and embedded system logic.",
  },
  {
    name: "Israel",
    role: "Security & Data Scientist",
    description:
      "Ensuring high-fidelity data integrity and robust, expert-level system security.",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-zinc-50/30">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">
              Core Contributors
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-5xl leading-tight">
              Driven by researchers, <br className="hidden sm:block" /> built by
              engineers.
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-sm md:text-base text-zinc-500 font-bold max-w-sm">
              A multidisciplinary team focused on solving the hardest problems
              in technical education.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-zinc-200/60 bg-white hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500"
            >
              <div className="size-12 md:size-14 rounded-2xl bg-zinc-50 border border-zinc-100 mb-6 md:mb-8 flex items-center justify-center text-zinc-400 font-mono text-xs md:text-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-500">
                0{index + 1}
              </div>
              <h3 className="text-lg md:text-xl font-extrabold text-zinc-900 mb-1">
                {member.name}
              </h3>
              <p className="text-[10px] md:text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4 md:mb-6">
                {member.role}
              </p>
              <p className="text-xs md:text-sm text-zinc-500 font-semibold leading-relaxed group-hover:text-zinc-700 transition-colors">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
