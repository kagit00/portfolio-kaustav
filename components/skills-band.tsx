export function SkillsBand() {
  const skills = [
    "Next.js",
    "TypeScript",
    "React",
    "SWR",
    "Tailwind CSS",
    "Accessibility",
    "Server Actions",
    "API Routes",
    "Unit Testing",
    "CI/CD",
  ]
  return (
    <section id="skills" aria-label="skills" className="py-14 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-medium text-foreground/90">skills</h2>
        <div
          className="mt-5 flex gap-2 overflow-x-auto pb-1"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)",
          }}
        >
          {skills.map((s) => (
            <span
              key={s}
              className="shrink-0 rounded-full border border-white/12 px-3.5 py-1.5 text-sm text-foreground/80"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
