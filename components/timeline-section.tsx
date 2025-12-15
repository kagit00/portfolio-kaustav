"use client"

interface TimelineSectionProps {
  year: number
  count: number
  isActive: boolean
}

export function TimelineSection({ year, count, isActive }: TimelineSectionProps) {
  return (
    <div className="relative flex items-center gap-6 group cursor-pointer">
      {/* Timeline dot and connector line */}
      <div className="relative flex flex-col items-center">
        {/* Main dot with enhanced animations */}
        <div
          className={`
            relative w-4 h-4 rounded-full border-2 transition-all duration-700 ease-out
            ${
              isActive
                ? "bg-primary border-primary scale-[1.4] shadow-[0_0_20px_rgba(var(--primary),0.5)]"
                : "bg-card border-border group-hover:border-primary/60 group-hover:scale-125 group-hover:bg-primary/10"
            }
          `}
        >
          {/* Inner pulse animation for active state */}
          {isActive && <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />}
        </div>

        {/* Vertical connecting line */}
        <div
          className={`
            w-[2px] transition-all duration-700 ease-out mt-2
            ${
              isActive
                ? "h-16 bg-gradient-to-b from-primary via-primary/40 to-transparent"
                : "h-10 bg-gradient-to-b from-border/60 to-transparent group-hover:from-primary/30"
            }
          `}
        />
      </div>

      {/* Year and project count with enhanced typography */}
      <div className="flex flex-col gap-1 min-w-[100px]">
        <span
          className={`
            font-medium tracking-tight transition-all duration-500
            ${
              isActive
                ? "text-primary text-2xl font-semibold"
                : "text-foreground/70 text-xl group-hover:text-primary group-hover:translate-x-1"
            }
          `}
        >
          {year}
        </span>
        <div className="flex items-center gap-2">
          <div
            className={`
              h-[2px] transition-all duration-500 rounded-full
              ${isActive ? "w-8 bg-primary" : "w-6 bg-border/60 group-hover:w-8 group-hover:bg-primary/60"}
            `}
          />
          <span className="text-xs text-muted-foreground/70 font-light uppercase tracking-wider">
            {count} {count === 1 ? "project" : "projects"}
          </span>
        </div>
      </div>
    </div>
    // </CHANGE>
  )
}
