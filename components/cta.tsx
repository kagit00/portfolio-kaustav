export function CTA() {
  return (
    <section id="contact" aria-label="Contact" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-balance text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Let’s create something great.
        </h2>
        <p className="mt-4 text-foreground/80 leading-relaxed">
          I’m available for internships, junior roles, and freelance projects. Based in [City], open to remote.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-background hover:opacity-95 transition"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/your-handle"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-foreground/90 hover:text-foreground hover:border-white/25 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
