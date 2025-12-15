import Link from "next/link"

export function CtaMin() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="rounded-2xl border border-border p-8 md:p-12">
        <h3 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Let’s work together.</h3>
        <p className="mt-3 text-pretty text-muted-foreground md:text-lg">
          Open to software engineering roles (frontend or full‑stack). Focus areas: Next.js, TypeScript, Node.js,
          performance, and modern testing.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="mailto:you@example.com"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Email me
          </Link>
          <Link
            href="https://github.com/your-handle"
            className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}
