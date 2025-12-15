"use client"

import { useMemo } from "react"
import { Cloud, GitBranch, Zap, Server, Code, Link, GitPullRequest, User, Target, Lightbulb, X } from "lucide-react"
import type { ProjectKey } from "@/types/project"
import { projectDatabase } from "@/data/projects"

interface SystemDesignShowcaseProps {
  projectKey: ProjectKey
  onClose?: () => void
}

export function SystemDesignShowcase({ projectKey, onClose }: SystemDesignShowcaseProps) {
  const data = projectDatabase[projectKey]

  const sections = useMemo(
    () =>
      [
        {
          id: "problem",
          title: "Problem Statement",
          icon: Target,
          content: data ? data.problemStatement : "",
        },
        {
          id: "overview",
          title: "Overview",
          icon: GitBranch,
          content: data ? data.overview : "",
        },
        {
          id: "architecture",
          title: "Architecture Summary",
          icon: Server,
          content: data ? data.architecture : "",
        },
        data &&
          data.designHighlights && {
            id: "design",
            title: "Key Design Highlights",
            icon: Lightbulb,
            content: data.designHighlights,
            isList: true,
          },
        {
          id: "challenges",
          title: "Key Challenges & Solutions",
          icon: Zap,
          content: data ? data.keyChallenges : [],
          isList: true,
        },
        {
          id: "stack",
          title: "Technology Stack",
          icon: Code,
          content: data ? data.stack : [],
          isList: true,
        },
      ].filter(Boolean),
    [data],
  )

  if (!data) {
    return <div className="text-destructive p-10">Project data not found.</div>
  }

  return (
    <div className="relative text-foreground p-6 md:p-16 lg:p-20 max-w-[1400px] mx-auto overflow-y-auto h-full">
      {onClose && (
        <button
          onClick={onClose}
          className="fixed top-10 right-10 z-[200] p-4 bg-card/80 backdrop-blur-md rounded-full border-2 border-border hover:border-primary/50 hover:bg-card transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:scale-110"
          aria-label="Close case study"
        >
          <X className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
        </button>
      )}

      {/* Header */}
      <header className="mb-20 pt-20 md:pt-12">
        <h1 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight leading-[1.1]">{data.title}</h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6 max-w-4xl">{data.tagline}</p>

        <div className="flex items-center gap-3 text-muted-foreground text-base md:text-lg font-light mb-10">
          <User className="w-5 h-5 text-primary" />
          <span>{data.role}</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {data.metrics.map((metric, index) => (
            <div
              key={index}
              className="group p-7 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-500"
            >
              <p className="text-3xl md:text-4xl font-extralight text-primary mb-2">{metric.value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </header>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Main Content */}
        <div className="lg:col-span-8">
          {data.title === "ScheduleX" && (
            <section className="mb-24 scroll-mt-24" id="flow">
              <h2 className="text-3xl md:text-4xl font-extralight mb-10 flex items-center gap-4">
                <Cloud className="w-8 h-8 text-primary" />
                Pipeline Architecture
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Nodes Import",
                    desc: "External systems send import requests via Kafka or S3. Entity data is bulk-loaded into PostgreSQL using COPY with idempotent handling for partial failures.",
                  },
                  {
                    step: 2,
                    title: "Potential Matches Computation",
                    desc: "LSH-based similarity computation identifies candidate matches. Edges are stored in LMDB for fast streaming without JVM heap pressure.",
                  },
                  {
                    step: 3,
                    title: "Perfect Match Selection",
                    desc: "Top-K pruning and business constraints refine candidates into final matches persisted in PostgreSQL.",
                  },
                  {
                    step: 4,
                    title: "Match Transfer",
                    desc: "Matches are streamed via JDBC to Parquet/JSON exports with backpressure and Kafka notifications for delivery guarantees.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {sections.map((section: any) => (
            <section key={section.id} id={section.id} className="mb-24 scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-extralight mb-10 flex items-center gap-4">
                <section.icon className="w-8 h-8 text-primary" />
                {section.title}
              </h2>

              {section.isList ? (
                <ul className="space-y-5 ml-7 list-disc marker:text-primary">
                  {(section.content as string[]).map((item, i) => (
                    <li key={i} className="text-lg md:text-xl font-light">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg md:text-xl font-light max-w-3xl">{section.content}</p>
              )}
            </section>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <aside className="sticky top-28 space-y-10">
            <div>
              <h3 className="text-xs font-semibold mb-5 text-muted-foreground uppercase tracking-[0.2em]">
                Navigation
              </h3>
              <nav className="space-y-3">
                {data.title === "ScheduleX" && (
                  <a href="#flow" className="block hover:text-zinc-500 transition-colors text-sm font-light leding-relaxed">
                    Pipeline Architecture
                  </a>
                )}
                {sections.map((section: any) => (
                  <a key={section.id} href={`#${section.id}`} className="block hover:text-zinc-500 transition-colors text-sm font-light leding-relaxed">
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-semibold mb-5 text-muted-foreground uppercase tracking-[0.2em]">Resources</h3>
              <div className="space-y-4 text-sm font-light leding-relaxed">
                <a
                  href={data.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary hover:text-zinc-500"
                >
                  <GitPullRequest className="w-5 h-5" />
                  GitHub Repository
                </a>

                {data.links.demo && (
                  <a
                    href={data.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-zinc-500"
                  >
                    <Server className="w-5 h-5" />
                    Demo
                  </a>
                )}

                {data.links.docs && (
                  <a
                    href={data.links.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-zinc-500"
                  >
                    <Link className="w-5 h-5" />
                    Design Documents
                  </a>
                )}

                {data.links.live && (
                  <a
                    href={data.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-zinc-500"
                  >
                    <Zap className="w-5 h-5" />
                    Live Deployment
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="h-32" />
    </div>
  )
}
