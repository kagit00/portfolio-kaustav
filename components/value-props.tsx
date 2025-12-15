export function ValueProps() {
  const props = [
    {
      title: "Focused, sprint‑based process",
      desc: "One clear sprint to get your core site live in weeks.",
    },
    {
      title: "Deliverables that match startup needs",
      desc: "Start with the essentials to launch with credibility.",
    },
    {
      title: "Clear pricing that makes sense",
      desc: "Upfront packages so you know exactly what you’re getting.",
    },
  ]
  return (
    <section id="pricing" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-center font-serif text-3xl md:text-4xl">Built for the reality startups live in</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {props.map((p, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                ✓
              </span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
