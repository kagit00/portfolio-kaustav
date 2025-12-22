"use client"

import type React from "react"
import { Github, ExternalLink, MapPin, Calendar } from "lucide-react"

type Project = {
  name: string
  description: string
  bullets: string[]
  techStack?: string
  link?: { label: string; url: string }
}

type ExperienceItem = {
  role: string
  company: string
  period: string
  location?: string
  summary?: string
  projects?: Project[]
  bullets?: string[]
  techStack?: string
}

const experiences: ExperienceItem[] = [
  {
    role: "Backend Engineer (Systems) | Full-Time",
    company: "",
    period: "Mar 2024 – Present",
    location: "Remote",
    summary: "Dedicated full-time work on designing, benchmarking, and validating production-grade backend systems for large-scale data matching.",
    projects: [
      {
        name: "ScheduleX—Graph-Based Matching Engine",
        description: "",
        bullets: [
          "Engineered a multi-stage matching pipeline generating 10M+ per cycle matches for 100k+ entities.",
          "Leveraged LSH and LMDB streaming to eliminate O(n²) complexity and enable memory-efficient Top-K Weighted Greedy refinement.",
          "Designed support for both symmetric and bipartite matching models within the same matching pipeline.",
        ],
        techStack: "Java 17, Spring Boot, Kafka, Redis, Docker, PostgreSQL, Parquet",
        link: { label: "Repo", url: "https://github.com/kagit00/schedule_x/tree/master" },
      },
      {
        name: "FlairBit—A Reels First Dating Platform",
        description: "",
        bullets: [
          "Built FlairBit as a consumer-facing platform on top of the ScheduleX matching engine, separating real-time UX workflows from batch and graph-heavy matching computation.",
          "Implemented a progressive profiling workflow for multi-persona user journeys and personalized media feeds, achieving ~40% latency reduction via tiered caching.",
          "Designed an event-driven architecture for profile synchronization, match delivery, and secure passwordless authentication, using retries, rate limiting, fraud prevention, and the Outbox Pattern to ensure reliable, at-least-once message delivery under load.",
        ],
        techStack: "Java 17, Spring Boot, Kafka, MinIO, Redis, Docker, PostgreSQL, Parquet",
        link: { label: "Repo", url: "https://github.com/kagit00/flairbit/tree/master" },
      },
    ],
  },
  {
    role: "Software Developer | Full-Time",
    company: "TechBulls SoftTech Pvt. Ltd",
    period: "Jun 2022 – Dec 2023",
    location: "Pune (Hybrid)",
    bullets: [
      "Built and evolved standards-compliant financial APIs aligned with RBI Account Aggregator and FCC Sanctions Screening specifications, contributing to 20% faster feature delivery by enabling product teams to iterate safely within sprint-based GitLab workflows.",
      "Owned backend improvements across FIU APIs and sanctions screening pipelines, driving 15–25% performance gains through profiling, validation, and iterative optimization of distributed components.",
      "Worked closely with QA, DevOps, and dependent teams to define API contracts, error handling, and validation rules, reducing release friction and improving production stability through structured defect tracking and fix validation.",
      "Documented requirement changes, technical decisions, and system tradeoffs in tickets and lightweight design notes, supporting predictable delivery under evolving regulatory and operational constraints.",
    ],
    techStack: "Java 8, Spring Framework, Redis, AngularJS, PostgreSQL, Oracle, Highcharts, Hazelcast, SQL, HTML, CSS, LESS, JSON, MyBatis, Liquibase",
  },
]

function ActionButton({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 hover:border-primary/60 transition-all duration-200 hover:shadow-sm underline"
    >
      <ExternalLink className="w-3 h-3" />
      {children}
    </a>
  )
}

export function ExperiencePremium() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-10 py-16 md:py-24">
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-thin text-foreground mb-3 tracking-tight leading-relaxed">Experience</h2>
        <p className="text-lg text-muted-foreground max-w-2xl font-light">
          Production-grade projects and professional roles delivering measurable impact
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/10" />

        {/* Experience Items */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={`${exp.company}-${exp.role}`} className="relative pl-16 md:pl-20">
              {/* Timeline Dot */}
              <div className="absolute -left-6 md:-left-8 top-1 w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/20" />

              {/* Job Card */}
              <div className="group">
                {/* Job Header */}
                <div className="mb-3">
                  <h3 className="text-xl md:text-xl font-light text-foreground mb-1">{exp.role}</h3>
                  <p className="text-base font-semibold text-primary/90 mb-2">{exp.company}</p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary/60" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary/60" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Summary (only for first role) */}
                {exp.summary && (
                  <p className="text-base text-muted-foreground/90 mb-6 leading-relaxed font-light">{exp.summary}</p>
                )}

                {/* Projects (only for first role) */}
                {exp.projects && (
                  <div className="space-y-8">
                    {exp.projects.map((project) => (
                      <div
                        key={project.name}
                        className="hover:bg-primary/5 rounded-r-lg pl-4 py-4 px-4 transition-all duration-300"
                      >
                        {/* Project Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                          <h4 className="font-bold text-foreground">{project.name}</h4>
                          {project.link && (
                            <ActionButton href={project.link.url}>
                              {project.link.label}
                            </ActionButton>
                          )}
                        </div>

                        {/* Bullets */}
                        <ul className="list-disc list-inside space-y-2 text-foreground/85 text-medium font-thin leading-relaxed mb-4">
                          {project.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>

                        {/* Tech Stack */}
                        {project.techStack && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-semibold">Tech Stack:</span> {project.techStack}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* General bullets (for second role) */}
                {exp.bullets && (
                  <ul className="list-disc list-inside space-y-2 text-foreground/85 text-medium font-thin leading-relaxed mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack (for second role) */}
                {exp.techStack && !exp.projects && (
                  <div className="mt-6 pt-6 border-t border-border/40">
                    <p className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-3">Tech Stack</p>
                    <p className="text-sm text-foreground/75 leading-relaxed font-light">{exp.techStack}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}