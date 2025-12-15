import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({
  id,
  title,
  description,
  children,
  className,
}: {
  id?: string
  title?: string
  description?: string
  children?: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 sm:px-6", className)}>
      {title ? (
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
          {description ? <p className="mt-2 text-foreground/70">{description}</p> : null}
        </div>
      ) : null}
      {children}
    </section>
  )
}
