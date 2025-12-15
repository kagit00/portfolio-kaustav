export function PainPoints() {
  const items = [
    {
      title: "Performance & Core Web Vitals",
      desc: "Audit, profiling, and pragmatic fixes to ship a noticeably faster app.",
      icon: "✓",
    },
    {
      title: "Slow delivery pipelines",
      desc: "Stabilize tests, reduce bottlenecks, and shorten idea‑to‑prod cycles.",
      icon: "✓",
    },
    {
      title: "Data fetching & state complexity",
      desc: "Lean patterns with RSC + SWR for reliable, predictable UI.",
      icon: "✓",
    },
  ]
  return (
    <section className="bg-[#0e0f12] text-[#e5e7eb]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-center font-serif text-3xl md:text-4xl leading-tight">
          I help teams ship faster with modern web engineering
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((s, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <div className="text-xl"> {s.icon} </div>
              <p className="mt-3 font-medium">{s.title}</p>
              <p className="text-sm text-[#9aa4b2]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
