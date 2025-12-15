type ShowcaseCardProps = {
  title: string
  description: string
  image: string
  tags?: string[]
  href?: string
}

export function ShowcaseCard({ title, description, image, tags = [], href }: ShowcaseCardProps) {
  return (
    <a
      href={href || "#"}
      className="group relative block overflow-hidden rounded-xl bg-[color:var(--card)] border border-white/10"
      aria-label={title}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="text-foreground text-base sm:text-lg font-medium drop-shadow">{title}</h3>
        <p className="mt-1 text-foreground/75 text-sm line-clamp-2">{description}</p>

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] tracking-wide text-foreground/75"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}
