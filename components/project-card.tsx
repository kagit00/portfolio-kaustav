import Image from "next/image"

export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  image?: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link ?? "#"}
      className="snap-start shrink-0 w-[280px] sm:w-[320px] rounded-lg overflow-hidden border border-border bg-card hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[16/9]">
        <Image
          src={project.image ?? ("/placeholder.svg?height=180&width=320&query=project+thumbnail" || "/placeholder.svg")}
          alt={`${project.title} thumbnail`}
          fill
          sizes="320px"
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="text-base font-semibold text-balance">{project.title}</h3>
        <p className="mt-1 text-sm text-foreground/80 line-clamp-2">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-sm bg-secondary px-2 py-0.5 text-[11px] text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
