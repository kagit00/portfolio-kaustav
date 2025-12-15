type Cert = {
  name: string
  issuer: string
  year: string
}

const certs: Cert[] = [
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2024" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024" },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <header className="mb-6 md:mb-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Certifications</h2>
        <p className="mt-2 text-muted-foreground">Formal learning that complements my hands-on projects.</p>
      </header>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {certs.map((c) => (
          <li key={`${c.name}-${c.issuer}`} className="rounded-xl border border-border p-5">
            <h3 className="text-base font-medium">{c.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {c.issuer} • {c.year}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
