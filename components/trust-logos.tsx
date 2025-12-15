export function TrustLogos() {
  const logos = ["Convex", "PhantomBuster", "TAHOE", "wing", "Pencil", "atolio"]
  return (
    <section aria-label="Trusted by" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] opacity-80">Trusted by early‑stage teams</p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-6 opacity-95">
          {logos.map((name) => (
            <li key={name} className="text-sm md:text-base font-medium">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
