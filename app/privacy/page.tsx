import { Container } from "@/components/container";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <Container className="max-w-4xl">
        <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">
          MIFA Dynamics
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-6xl mb-8 md:mb-12">
          Privacy Protocol
        </h1>

        <div className="prose prose-zinc prose-base md:prose-lg max-w-none font-medium text-zinc-600 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              1. Information Architecture
            </h2>
            <p>
              At MIFA Dynamics, our generative engine operates on a principle of
              least privilege. We aggregate technical queries and procedural
              logic without capturing personally identifiable sensitive data
              unless explicitly provided for account management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              2. Data Synthesis & Privacy
            </h2>
            <p>
              Our multi-agent LLM systems process user inputs to render
              simulations. These inputs are used for real-time procedural
              generation and are handled within secure, expert-validated
              technical silos. We do not sell or expose your unique conceptual
              queries to third-party entities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              3. Security Infrastructure
            </h2>
            <p>
              Metadata and session logs are encrypted at rest and in transit. We
              prioritize high-fidelity conceptual integrity, ensuring that your
              research and instructional designs remain proprietary to your
              session context.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-100 italic text-zinc-400 text-sm">
            Last updated: February 26, 2026. For technical inquiries, contact
            our security lab.
          </section>
        </div>
      </Container>
    </main>
  );
}
