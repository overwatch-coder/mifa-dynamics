import { Container } from "@/components/container";

type CheckOrCross = "yes" | "no" | "partial";

const features = [
  {
    label: "On-demand generation",
    videos: "no",
    staticSims: "no",
    mifa: "yes",
  },
  {
    label: "Real-time variable manipulation",
    videos: "no",
    staticSims: "partial",
    mifa: "yes",
  },
  {
    label: "Domain-specific accuracy",
    videos: "partial",
    staticSims: "yes",
    mifa: "yes",
  },
  {
    label: "Infinite topic coverage",
    videos: "yes",
    staticSims: "no",
    mifa: "yes",
  },
  {
    label: "Custom query — not a library",
    videos: "no",
    staticSims: "no",
    mifa: "yes",
  },
  {
    label: "Classroom & self-study ready",
    videos: "partial",
    staticSims: "partial",
    mifa: "yes",
  },
] as const;

function Cell({
  value,
  isMifa = false,
}: {
  value: CheckOrCross;
  isMifa?: boolean;
}) {
  if (value === "yes") {
    return (
      <span
        className={`inline-flex items-center justify-center w-7 h-7 rounded-lg ${
          isMifa
            ? "bg-indigo-600 shadow-lg shadow-indigo-500/30"
            : "bg-zinc-100"
        }`}
        aria-label="Yes"
      >
        <svg
          className={`w-3.5 h-3.5 ${isMifa ? "text-white" : "text-zinc-400"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-100"
        aria-label="Partial"
      >
        <svg
          className="w-3.5 h-3.5 text-zinc-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="4" y="11" width="16" height="2" rx="1" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-50"
      aria-label="No"
    >
      <svg
        className="w-3 h-3 text-zinc-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
  );
}

export function Comparison() {
  return (
    <section
      id="comparison"
      className="py-24 md:py-32 bg-white overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      <Container>
        {/* Header */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-end mb-12 md:mb-16">
          <div>
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">
              Comparison
            </p>
            <h2
              id="comparison-heading"
              className="text-3xl font-extrabold tracking-tight text-zinc-900 md:text-5xl leading-tight"
            >
              Built for a gap{" "}
              <span className="text-indigo-600">nothing else fills.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-500 font-semibold leading-relaxed lg:pb-2">
            Traditional videos are passive. Static simulations are fixed. MIFA
            Dynamics is the only platform that generates interactive, accurate
            visualizations on demand.
          </p>
        </div>

        {/* Table Container with scroll fade */}
        <div className="relative group">
          <div className="overflow-x-auto rounded-[1.5rem] md:rounded-[2rem] border border-zinc-200 bg-white shadow-xl shadow-zinc-100 no-scrollbar">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-zinc-100">
                  <th className="text-left py-4 md:py-5 px-6 md:px-8 font-bold text-zinc-400 text-[10px] md:text-xs uppercase tracking-widest w-1/2">
                    Feature
                  </th>
                  <th className="text-center py-4 md:py-5 px-4 md:px-6 font-bold text-zinc-400 text-[10px] md:text-xs uppercase tracking-widest">
                    Videos
                  </th>
                  <th className="text-center py-4 md:py-5 px-4 md:px-6 font-bold text-zinc-400 text-[10px] md:text-xs uppercase tracking-widest">
                    Static Sims
                  </th>
                  <th className="text-center py-4 md:py-5 px-4 md:px-6 text-[10px] md:text-xs uppercase tracking-widest">
                    <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 font-black text-indigo-600 whitespace-nowrap">
                      MIFA Dynamics
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`group transition-colors hover:bg-indigo-50/30 ${
                      i < features.length - 1 ? "border-b border-zinc-100" : ""
                    }`}
                  >
                    <td className="py-4 md:py-5 px-6 md:px-8 text-zinc-700 font-semibold text-xs md:text-sm group-hover:text-zinc-900 transition-colors">
                      {row.label}
                    </td>
                    <td className="py-4 md:py-5 px-4 md:px-6 text-center">
                      <Cell value={row.videos} />
                    </td>
                    <td className="py-4 md:py-5 px-4 md:px-6 text-center">
                      <Cell value={row.staticSims} />
                    </td>
                    <td className="py-4 md:py-5 px-4 md:px-6 text-center bg-indigo-50/20">
                      <Cell value={row.mifa} isMifa />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile Scroll Indicator Fade */}
          <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white to-transparent pointer-events-none md:hidden" />
        </div>
      </Container>
    </section>
  );
}
