const skills = [
  {
    name: "TypeScript",
    level: "Advanced",
    summary: "Type-safe architectures, strict mode, generics, and utility types for robust DX.",
    tools: ["tsc", "tsconfig", "Zod"],
  },
  {
    name: "React",
    level: "Advanced",
    summary: "Modern React with hooks, memoization, Suspense patterns, and performance profiling.",
    tools: ["Hooks", "Context", "Profiler"],
  },
  {
    name: "Next.js (App Router)",
    level: "Advanced",
    summary: "Streaming RSC, route handlers, server actions, and edge-aware caching strategies.",
    tools: ["RSC", "Server Actions", "SWR"],
  },
  {
    name: "SWR",
    level: "Proficient",
    summary: "Stale-while-revalidate flows, optimistic UI, and cache coherence across views.",
    tools: ["Revalidation", "Mutations"],
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    summary: "Responsive systems, tokens, and accessible UI with utility-first patterns.",
    tools: ["Tokens", "Responsive", "A11y"],
  },
  {
    name: "Testing Library",
    level: "Proficient",
    summary: "User-centric tests with queries and assertions for resilient UIs.",
    tools: ["JSDOM", "Queries"],
  },
  {
    name: "Vitest",
    level: "Proficient",
    summary: "Fast unit tests with good coverage and clear, maintainable suites.",
    tools: ["Coverage", "Snapshots"],
  },
  {
    name: "Accessibility (A11y)",
    level: "Advanced",
    summary: "Keyboard nav, roles, ARIA, and color contrast while preserving visual polish.",
    tools: ["ARIA", "Contrast", "Landmarks"],
  },
]

export function SkillsList() {
  return (
    <section id="skills" className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-20 md:py-24 animate-in fade-in-50">
        <header className="mb-10 md:mb-12">
          <h2 className="text-balance text-3xl md:text-4xl font-light tracking-tight">skills</h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
            Practical, production-focused skills centered on performance, clarity, and maintainable architecture.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {skills.map((s) => (
            <li
              key={s.name}
              className="group rounded-md bg-transparent p-0 shadow-none transition-colors hover:bg-white/5"
            >
              <div className="flex items-start justify-between gap-3 px-4 py-3 md:px-5 md:py-4">
                <h3 className="text-pretty text-base md:text-lg font-medium">{s.name}</h3>
                {s.level ? (
                  <span className="shrink-0 rounded-md bg-white/10 px-2 py-1 text-xs text-foreground/90">
                    {s.level}
                  </span>
                ) : null}
              </div>

              {s.summary ? (
                <p className="px-4 pb-3 text-sm text-muted-foreground leading-relaxed md:px-5">{s.summary}</p>
              ) : null}

              {s.tools?.length ? (
                <div className="px-4 pb-4 md:px-5 flex flex-wrap gap-2">
                  {s.tools.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-xs text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
