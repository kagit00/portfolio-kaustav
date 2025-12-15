type Cert = {
  title: string
  issuer: string
  year: string
  url?: string
  credentialId?: string
}

export function CertificationsMinimal() {
  const certs: Cert[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      url: "#",
      credentialId: "ABC-123-XYZ",
    },
    {
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      year: "2023",
      url: "#",
    },
  ]

  return (
    <section
      id="certifications"
      aria-labelledby="certs-title"
      className="mx-auto w-full max-w-5xl px-4 md:px-10 py-16 md:py-20 text-left"
    >
      <header className="mb-8">
        <h2 id="certs-title" className="text-balance text-2xl md:text-5xl font-light tracking-tight text-foreground">
          Certifications
        </h2>
        <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
          Selected professional certifications that complement hands-on experience.
        </p>
      </header>

      <div className="border-t border-border divide-y divide-border">
        {certs.map((c, i) => (
          <article key={i} className="py-6 md:py-8">
            <div>
              <h3 className="text-pretty text-lg md:text-xl font-medium text-foreground">
                {c.url ? (
                  <a
                    href={c.url}
                    className="underline-offset-4 hover:underline focus:outline-none focus:underline-offset-4"
                  >
                    {c.title}
                  </a>
                ) : (
                  c.title
                )}
              </h3>
              <p className="mt-1 text-sm md:text-base text-muted-foreground">
                {c.issuer}
                {c.credentialId ? (
                  <>
                    {" · "}
                    <span className="font-mono">{c.credentialId}</span>
                  </>
                ) : null}
                {" · "} {c.year}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
