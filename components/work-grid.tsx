"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { SystemDesignShowcase } from "./system-design-showcase"
import { projectDatabase } from "../data/projects"
import type { ProjectKey } from "@/types/project"
import { X, ArrowUpRight, Sparkles } from "lucide-react"
import { YearDropdown } from "./year-dropdown"
import { TimelineSection } from "./timeline-section"

export function WorkGrid() {
  const [open, setOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)

  const openProject = (key: ProjectKey) => {
    setActiveProject(key)
    setOpen(true)
  }

  const filteredProjects = (Object.keys(projectDatabase) as ProjectKey[]).filter((key) => {
    if (selectedYear === null) return true
    return projectDatabase[key].year === selectedYear
  })

  const years = Array.from(
    new Set((Object.keys(projectDatabase) as ProjectKey[]).map((key) => projectDatabase[key].year)),
  ).sort((a, b) => b - a)

  const projectCountByYear = years.reduce(
    (acc, year) => {
      acc[year] = (Object.keys(projectDatabase) as ProjectKey[]).filter(
        (key) => projectDatabase[key].year === year,
      ).length
      return acc
    },
    {} as Record<number, number>,
  )

  return (
    <section id="projects" className="mx-auto max-w-5xl px-10 py-20 md:py-32">
      <div className="mb-20 space-y-12 ">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <header className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-balance leading-[1.1]">Featured Work</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl font-light text-pretty leading-relaxed">
              A curated collection of production systems and architectural implementations spanning multiple years
            </p>
          </header>

          <div className="flex items-start">
            <YearDropdown years={years} selectedYear={selectedYear} onYearChange={setSelectedYear} />
          </div>
        </div>

        {/* Enhanced timeline visualization with better visual hierarchy */}
        <div className="relative py-8">
          {/* Horizontal gradient line connecting all dots */}
          <div className="absolute top-[20px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-border to-transparent opacity-60" />
          <div className="absolute top-[20px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm" />

          <div className="relative flex items-start justify-center gap-12 md:gap-20 overflow-x-auto pb-6 scrollbar-hide px-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl p-3 -m-3 transition-transform hover:scale-105"
                aria-label={`Filter projects from ${year}`}
              >
                <TimelineSection year={year} count={projectCountByYear[year]} isActive={selectedYear === year} />
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced filter status banner */}
        {selectedYear && (
          <div className="flex items-center gap-4 px-6 py-5 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-500">
            <div className="flex items-center gap-3 flex-1">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary animate-ping" />
              </div>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium tracking-tight">
                Showing <span className="text-primary font-bold">{filteredProjects.length}</span>{" "}
                {filteredProjects.length === 1 ? "project" : "projects"} from{" "}
                <span className="text-primary font-bold">{selectedYear}</span>
              </span>
            </div>
            <button
              onClick={() => setSelectedYear(null)}
              className="px-5 py-2.5 text-sm font-semibold text-primary hover:text-primary-foreground bg-transparent hover:bg-primary rounded-xl transition-all duration-300 hover:scale-105 border border-primary/30 hover:border-primary"
            >
              Show All
            </button>
          </div>
        )}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-32 animate-in fade-in duration-500">
            <div className="inline-flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-muted-foreground/50" />
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground text-xl font-light">No projects found for {selectedYear}</p>
                <p className="text-muted-foreground/60 text-sm">Try selecting a different year from the timeline</p>
              </div>
            </div>
          </div>
        ) : (
          filteredProjects.map((key, index) => {
            const item = projectDatabase[key]

            return (
              <button
                key={key}
                onClick={() => openProject(key)}
                className="group relative overflow-hidden rounded-3xl bg-card border-2 border-border/40 p-8 text-left hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 hover:scale-[1.03] active:scale-[0.98] animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Year badge with enhanced styling and animation */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full backdrop-blur-sm border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  <span className="text-sm font-semibold tracking-tight">{item.year}</span>
                </div>

                {/* Category badge */}
                <div className="mb-4">
                  <span className="inline-block text-xs text-muted-foreground/70 font-medium uppercase tracking-wider px-3 py-1 bg-muted/40 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Title with better typography */}
                <h3 className="text-xl md:text-2xl font-medium leading-tight mb-6 pr-16 group-hover:text-primary transition-colors duration-500 tracking-tight">
                  {item.title}
                </h3>

                {/* Tagline for better context */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2 text-pretty font-light">
                  {item.tagline}
                </p>

                {/* Metrics preview */}
                {item.metrics && item.metrics.length > 0 && (
                  <div className="flex gap-4 mb-6">
                    {item.metrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-lg font-semibold text-primary">{metric.value}</span>
                        <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech stack and arrow with enhanced layout */}
                <div className="flex justify-between items-end gap-6 pt-6 ">
                  <div className="flex flex-wrap gap-2 flex-1">
                    {item.stack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs text-muted-foreground/70 font-mono tracking-wide px-2 py-1 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.stack.length > 3 && (
                      <span className="text-xs text-muted-foreground/50 font-mono tracking-wide px-2 py-1">
                        +{item.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />
              </button>
            )
          })
        )}
      </div>


      {/* Sheet for project details */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          className="w-[100vw] h-[100vh] max-w-none sm:max-w-none border-0 p-0 bg-background overflow-hidden z-[100] [&>button]:hidden"
        >
          <button
            onClick={() => setOpen(false)}
            className="fixed top-10 right-10 z-[200] p-4 bg-card/80 backdrop-blur-md rounded-full border-2 border-border hover:border-primary/50 hover:bg-card transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:scale-110"
            aria-label="Close case study"
          >
            <X className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>

          {activeProject && <SystemDesignShowcase projectKey={activeProject} onClose={() => setOpen(false)} />}
        </SheetContent>
      </Sheet>
    </section>
  )
}
