import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-20">
      <Container className="text-center">
        <div className="relative mb-8">
          <span className="text-[120px] md:text-[200px] font-black text-zinc-50 leading-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.5em] bg-white px-4">
              Error / Null Pointer
            </p>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6">
          Conceptual gap detected.
        </h1>
        <p className="max-w-md mx-auto text-zinc-500 font-medium leading-relaxed mb-10 px-4">
          The procedural engine could not locate the simulation node you
          requested. It may have been relocated or purged from the laboratory
          index.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full px-8 h-12 font-bold bg-zinc-900 text-white"
          >
            <Link href="/">Back to Command Center</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="rounded-full px-8 h-12 font-bold text-zinc-500"
          >
            <Link href="#contact">Contact Support Lab</Link>
          </Button>
        </div>
      </Container>
    </main>
  );
}
