export function SkillCard({ name, level }: { name: string; level?: string }) {
  return (
    <div className="group snap-start shrink-0 w-[180px] rounded-lg border border-border/60 bg-gradient-to-br from-card via-card to-secondary/30 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
      <div className="relative overflow-hidden rounded-lg">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative px-4 py-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            {level && (
              <span className="shrink-0 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary border border-primary/20">
                {level}
              </span>
            )}
          </div>

          {/* Animated progress indicator */}
          <div className="mt-3 h-1 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full transition-all duration-500 group-hover:w-full"
              style={{ width: level === "Expert" ? "95%" : level === "Advanced" ? "85%" : "70%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
