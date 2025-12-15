import Image from "next/image"

export type ProjectTileProps = {
  title: string
  description: string
  tags?: string[]
  link?: string
  image?: string
}

export function ProjectTile({ title, description, tags = [], link = "#", image }: ProjectTileProps) {
  return (
    <a href={link} className="group block overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-[16/9]">
        <Image
          src={image ?? "/placeholder.svg?height=540&width=960&query=project+preview"}
          alt={`${title} preview`}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-foreground/75">{description}</p>
        {tags.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </a>
  )
}
