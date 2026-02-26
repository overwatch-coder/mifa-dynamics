import { Container } from "@/components/container";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <Container className="max-w-4xl">
        <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">
          MIFA Dynamics
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-6xl mb-8 md:mb-12">
          Cookie Management
        </h1>

        <div className="prose prose-zinc prose-base md:prose-lg max-w-none font-medium text-zinc-600 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              1. Essential Logic Cookies
            </h2>
            <p>
              We use technical identifiers to maintain session context for our
              multi-agent LLM systems. These allow the simulation engine to
              track variable manipulations and logic delta states during active
              procedural generation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              2. Performance Optimization
            </h2>
            <p>
              Subtle tracking mechanisms allow our lab to monitor engine latency
              and simulation rendering speeds. These are aggregated to improve
              our procedurally-generated output and expert-validated accuracy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              3. User Sovereignty
            </h2>
            <p>
              You may modulate your technical preference in browser settings to
              reject non-essential identifiers. Note that certain high-fidelity
              interactive features of the MIFA engine rely on low-latency
              session persistence.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-100 italic text-zinc-400 text-sm">
            Last updated: February 26, 2026. Managed by the Data Integrity Lab.
          </section>
        </div>
      </Container>
    </main>
  );
}
