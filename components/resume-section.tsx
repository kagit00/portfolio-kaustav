import Link from "next/link"

export function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-5xl px-10 py-14 md:py-20 text-left">
      <header className="mb-6 md:mb-10">
        <h2 className="text-3xl font-light tracking-tight md:text-5xl">Resume</h2>
        <p className="mt-2 text-muted-foreground">
          Snapshot of experience, projects, and impact. Full PDF available on request.
        </p>
      </header>

      <div className="rounded-2xl border border-border p-6 md:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left column: quick facts & links */}
          <aside className="space-y-4 md:col-span-1">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Contact</h3>
              <ul className="mt-2 text-sm">
                <li>you@example.com</li>
                <li>San Francisco, CA (Remote OK)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Links</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <Link href="https://github.com/your-handle" className="underline underline-offset-4">
                    github.com/your-handle
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/your-handle" className="underline underline-offset-4">
                    linkedin.com/in/your-handle
                  </Link>
                </li>
                <li>
                  <Link href="https://your-site.com" className="underline underline-offset-4">
                    your-site.com
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Core Skills</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {["TypeScript", "React/Next.js", "Node.js", "SWR", "Testing Library", "A11y"].map((s) => (
                  <li key={s}>
                    <span className="inline-flex items-center rounded-md border border-primary/20 bg-card px-2.5 py-1 text-xs">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right column: summary & experience */}
          <div className="md:col-span-2 space-y-8">
            <section>
              <h3 className="text-base font-semibold tracking-tight">Summary</h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-muted-foreground">
                Software engineer focused on building reliable, performant web apps. I value accessibility, simple
                abstractions, and tight feedback loops. Comfortable across the stack with a frontend bias.
              </p>
            </section>

            <section aria-label="Experience timeline">
              <h3 className="text-base font-semibold tracking-tight">Experience</h3>
              <ol className="mt-4 relative border-l border-border pl-6 space-y-6">
                <li className="relative">
                  <div
                    className="absolute -left-[7px] mt-1 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20"
                    aria-hidden="true"
                  />
                  <p className="text-sm md:text-base font-medium">
                    Senior Frontend Engineer · Acme Inc. <span className="text-muted-foreground">— 2022–Present</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Leading UI architecture and performance initiatives across a multi-squad org.
                  </p>
                  <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Improved LCP by 28% and reduced shipped JS by 35%.</li>
                    <li>Shipped a typed design system adopted by 6 squads.</li>
                    <li>Established RSC + SWR patterns for simpler data flows.</li>
                  </ul>
                </li>
                <li className="relative">
                  <div
                    className="absolute -left-[7px] mt-1 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20"
                    aria-hidden="true"
                  />
                  <p className="text-sm md:text-base font-medium">
                    Frontend Engineer · Globex <span className="text-muted-foreground">— 2020–2022</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Delivered data-heavy dashboards and improved delivery reliability.
                  </p>
                  <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Virtualization + memoization for smooth UIs under load.</li>
                    <li>Stabilized tests and cut CI time; shipped more frequently.</li>
                    <li>Partnered with design on accessible patterns and audits.</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h3 className="text-base font-semibold tracking-tight">Selected Projects</h3>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>
                  Analytics Explorer — Next.js + Recharts. Interactive drill‑downs, CSV export, and role‑based access.
                </li>
                <li>Docs System — MDX + custom UI. 250+ pages with full‑text search and versioning.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-semibold tracking-tight">Education</h3>
              <p className="mt-2 text-sm text-muted-foreground">B.S. Computer Science — Your University</p>
            </section>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/resume.pdf"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Download PDF
              </Link>
              <Link
                href="https://www.linkedin.com/in/your-handle"
                className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
