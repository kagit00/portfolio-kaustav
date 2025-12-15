import { SkillCard } from "./skill-card"

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "GraphQL", level: "Proficient" },
      { name: "REST APIs", level: "Advanced" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", level: "Proficient" },
      { name: "AWS", level: "Proficient" },
      { name: "Git", level: "Advanced" },
      { name: "CI/CD", level: "Proficient" },
    ],
  },
]

export function SkillsGrid() {
  return (
    <section className="w-full py-20 md:py-24 border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Technical Expertise</h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            Full-stack capabilities spanning modern web technologies, cloud infrastructure, and development workflows.
          </p>
        </div>

        <div className="grid gap-8 md:gap-10">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${catIndex * 100}ms`,
                animationFillMode: "backwards",
              }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground/90">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
