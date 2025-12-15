type Experience = {
  role: string
  company: string
  period: string
  bullets?: string[]
}

const experience: Experience[] = [
  {
    role: "Frontend Intern",
    company: "Acme Co.",
    period: "Summer 2024",
    bullets: ["Built accessible UI components", "Improved performance and bundle size"],
  },
  {
    role: "Student Developer",
    company: "University Projects",
    period: "2023 — 2024",
    bullets: ["Led team projects with TypeScript", "Adopted testing and CI basics"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <header className="mb-6 md:mb-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Experience</h2>
        <p className="mt-2 text-muted-foreground">
          Roles and projects where I learned fast and delivered thoughtfully.
        </p>
      </header>
      <ul className="space-y-3">
        {experience.map((item) => (
          <li key={`${item.role}-${item.company}`} className="rounded-xl border border-border p-5">
            <div className="flex flex-col items-start justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-lg font-medium">
                  {item.role} <span className="opacity-70">— {item.company}</span>
                </h3>
              </div>
              <span className="text-sm text-muted-foreground">{item.period}</span>
            </div>
            {item.bullets && item.bullets.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
