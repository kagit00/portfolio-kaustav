"use client"

import type React from "react"
import { Github, ExternalLink, MapPin, Calendar } from "lucide-react"

type Project = {
  name: string
  description: string
  concepts: string[]
  links?: { label: string; url: string; icon?: "repo" | "demo" }[]
}

type ExperienceItem = {
  company: string
  role: string
  period: string
  location?: string
  summary: string
  projects: Project[]
  techStack?: string
}

const experiences: ExperienceItem[] = [
  {
    company: "Independent Product Engineering",
    role: "Backend Engineer",
    period: "Mar 2024 – Present",
    location: "Remote",
    summary: "Production-grade prototypes for offline matching and ranking (benchmarked and validated)",
    projects: [
      {
        name: "ScheduleX - Graph-based Matchmaking Engine",
        description:
          "Engineered a high-throughput offline pipeline using LSH and Top-K Weighted Greedy refinement to produce over 300K matches in 10 minutes, scaling to 3M+ matches nightly across datasets of 100K+ nodes. Decoupled computation through Kafka, Parquet exports, and PostgreSQL-COPY based ingestion for high-throughput batch processing.",
        concepts: ["Graphs", "Algorithms", "Multithreading", "Batch Processing", "Hashing"],
        links: [{ label: "Repository", url: "#", icon: "repo" }],
      },
      {
        name: "FlairBit - Reels-First Dating Platform",
        description:
          "Architected a reels-first dating platform end-to-end, integrating a custom-built real-time chat system to boost retention and engagement. Scaled to 20K+ daily active users, processing 1M+ interactions/day with consistently sub-second response times.",
        concepts: ["Graphs", "Algorithms", "Multithreading", "Real-Time Systems"],
        links: [{ label: "Repository", url: "#", icon: "repo" }],
      },
      {
        name: "Distributed Chat Microservice",
        description:
          "Designed and implemented a distributed, high-scale chat microservice using the Outbox Pattern and RabbitMQ STOMP relay for guaranteed message delivery with <300 ms P95 latency. Achieved horizontal scalability for millions of concurrent WebSocket sessions via atomic persistence and exponential backoff retries.",
        concepts: ["Distributed Systems", "Messaging", "Fault Tolerance", "Real-Time Communication"],
        links: [{ label: "Repository", url: "#", icon: "repo" }],
      },
    ],
  },
  {
    company: "TechBulls SoftTech Pvt. Ltd",
    role: "Software Developer",
    period: "Jun 2022 – Dec 2023",
    location: "Pune (Hybrid)",
    summary:
      "Standards-compliant financial APIs and core Sanctions Screening engines in high-compliance enterprise environment",
    projects: [
      {
        name: "Account Aggregator & Sanctions Screening APIs",
        description:
          "Developed standards-compliant financial APIs aligned with Account Aggregator and FCC Sanctions Screening specifications, enabling product teams to ship features 20% faster while significantly strengthening data-sharing security.",
        concepts: ["API Design", "Compliance", "Security"],
        links: [{ label: "Demo", url: "#", icon: "demo" }],
      },
      {
        name: "FIU APIs & Sanctions Screening Enhancement",
        description:
          "Enhanced FIU APIs and Sanctions Screening engines, improving overall performance by 15–25% and reducing end-user latency across distributed components.",
        concepts: ["Performance Optimization", "Distributed Systems"],
      },
      {
        name: "GitLab CI/CD Pipeline Automation",
        description:
          "Collaborated with DevOps and QA teams to automate GitLab-based CI/CD pipelines for zero-downtime deployments, cutting release cycles by 20% and maintaining 99.9% service uptime.",
        concepts: ["DevOps", "CI/CD", "Infrastructure"],
      },
    ],
    techStack:
      "Java 8 · Spring Framework · Redis · AngularJS · PostgreSQL · Oracle · Highcharts · Hazelcast · SQL · HTML · CSS · LESS · JSON · MyBatis · Liquibase",
  },
]

function ActionButton({
  href,
  children,
  icon = "demo",
}: {
  href: string
  children: React.ReactNode
  icon?: "repo" | "demo"
}) {
  const Icon = icon === "repo" ? Github : ExternalLink

  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 hover:border-primary/60 transition-all duration-200 hover:shadow-sm"
    >
      <Icon className="w-3 h-3" />
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

                {/* Summary */}
                <p className="text-base text-muted-foreground/90 mb-6 leading-relaxed font-light">{exp.summary}</p>

                {/* Projects Timeline */}
                <div className="space-y-5">
                  {exp.projects.map((project, projIdx) => (
                    <div
                      key={project.name}
                      className=" hover:bg-primary/5 rounded-r-lg pl-4 py-3 px-4 transition-all duration-300"
                    >
                      {/* Project Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                        <h4 className="font-bold text-sm text-foreground">{project.name}</h4>
                        {project.links && project.links.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {project.links.map((link) => (
                              <ActionButton key={link.label} href={link.url} icon={link.icon}>
                                {link.label}
                              </ActionButton>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Project Description */}
                      <p className="text-medium font-thin text-foreground/85 mb-3 leading-relaxed">{project.description}</p>

                      {/* Concepts as inline tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.concepts.map((concept, idx) => (
                          <span
                            key={concept}
                            className="inline-block px-2.5 py-1 text-xs font-medium text-primary/80 bg-primary/8 rounded-full border border-primary/20 hover:border-primary/40 transition-colors"
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack for second role */}
                {exp.techStack && (
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
