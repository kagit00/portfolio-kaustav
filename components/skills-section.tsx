import { SkillCard } from "./skill-card"

const skills = [
  { name: "Java", level: "Advanced" },
  { name: "Spring", level: "Advanced" },
  { name: "Redis", level: "Expert" },
  { name: "Kafka", level: "Advanced" },
  { name: "PostgreSQL", level: "Proficient" },
  { name: "Docker", level: "Proficient" },
  { name: "Git", level: "Advanced" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-24 border-t border-border/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Skills & Expertise</h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            A curated selection of technologies and tools I work with to build exceptional digital experiences.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <SkillCard name={skill.name} level={skill.level} />
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Add a scroll hint */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
          <span>Scroll to explore more</span>
        </div>
      </div>
    </section>
  )
}
