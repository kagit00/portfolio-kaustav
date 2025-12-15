"use client"

import type React from "react"

import { useRef } from "react"
import { cn } from "@/lib/utils"

export function Row({
  id,
  title,
  children,
  className,
}: {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const scrollByAmount = (dir: number) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.9), behavior: "smooth" })
  }

  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-3 flex items-end justify-between">
        <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
        <div className="hidden sm:flex gap-2">
          <button
            aria-label="Scroll left"
            onClick={() => scrollByAmount(-1)}
            className="h-8 w-8 rounded-md border border-border hover:bg-accent"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByAmount(1)}
            className="h-8 w-8 rounded-md border border-border hover:bg-accent"
          >
            <span aria-hidden>›</span>
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className={cn(
          "group relative flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2",
          "[-webkit-mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]",
          "[mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]",
          className,
        )}
      >
        {children}
      </div>
    </section>
  )
}
