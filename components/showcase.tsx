import { ShowcaseCard } from "./showcase-card"

export function Showcase() {
  const items = [
    {
      title: "Developer Dashboard",
      description: "Real-time analytics dashboard built with Next.js, SWR, and Recharts.",
      image: "/images/work-dash.jpg",
      tags: ["Next.js", "SWR", "Recharts"],
      href: "#",
    },
    {
      title: "Generative Code Explorer",
      description: "Playground for exploring AI-assisted code generation workflows.",
      image: "/images/work-code.jpg",
      tags: ["TypeScript", "AI SDK", "RSC"],
      href: "#",
    },
    {
      title: "Robotics Controller UI",
      description: "Minimal control surface for robotic arms with accessible controls.",
      image: "/images/work-robotics.jpg",
      tags: ["Accessibility", "Design Systems"],
      href: "#",
    },
    {
      title: "Data Viz Suite",
      description: "Clean, high-contrast charts with focus on legibility and motion.",
      image: "/images/work-dataviz.jpg",
      tags: ["Animation", "Charts"],
      href: "#",
    },
  ]

  return (
    <section id="work" aria-label="Selected Work" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Selected Work</h2>
          <a href="#contact" className="text-sm text-primary hover:underline">
            Contact
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((item) => (
            <ShowcaseCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ShowcaseCard {...items[0]} />
          </div>
          <div className="lg:col-span-1">
            <ShowcaseCard {...items[3]} />
          </div>
        </div>
      </div>
    </section>
  )
}
