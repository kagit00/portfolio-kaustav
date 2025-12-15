"use client"

import { useState } from "react"

export function ExperienceMinimal() {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Acme Inc.",
      period: "2022 — Present",
      summary:
        "Leading the UI architecture for a cross-platform design system. Focus on performance, accessibility, and robust developer experience.",
      details: [
        "Built a shared component library with strong type-safety and visual consistency.",
        "Reduced bundle size by adopting server components and route-level code splitting.",
        "Established accessibility standards and automated checks across CI.",
      ],
    },
    {
      role: "Frontend Engineer",
      company: "Globex",
      period: "2020 — 2022",
      summary: "Delivered high-impact features for a large-scale dashboard application used by enterprise customers.",
      details: [
        "Introduced data fetching patterns with SWR for cache coherency and simplicity.",
        "Optimized slow rendering paths via memoization and virtualization.",
        "Partnered with design to evolve a minimal, content-first visual language.",
      ],
    },
  ]

  const [open, setOpen] = useState<Record<number, boolean>>({})

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto w-full max-w-5xl px-4 md:px-3 py-16 md:py-20 text-left"
    >
      <header className="mb-8">
        <h2
          id="experience-title"
          className="text-balance text-2xl md:text-3xl font-medium tracking-tight text-foreground"
        >
          Experience
        </h2>
        <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
          A concise snapshot of recent work. Focused on impact, clarity, and long-term craft.
        </p>
      </header>

      {/* Vertical timeline: border-l with dot markers */}
      <ol className="relative border-l border-border pl-6">
        {experiences.map((item, i) => (
          <li key={i} className="mb-8 last:mb-0">
            <div
              className="absolute -left-[7px] mt-1 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20"
              aria-hidden="true"
            />
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="text-pretty text-lg md:text-xl font-medium text-foreground">{item.role}</h3>
                <span className="text-sm text-muted-foreground">· {item.company}</span>
                <span className="ml-auto text-xs md:text-sm text-muted-foreground">{item.period}</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.summary}</p>
              {item.details?.length ? (
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {item.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
