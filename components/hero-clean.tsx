"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function HeroClean() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-10 pt-20 pb-16 md:pt-32 md:pb-24 font-sans">
        {/* Top Badge */}
        <div className="mb-8 animate-in fade-in-50">
          <p className="text-sm md:text-base uppercase tracking-[0.28em] text-primary/70 font-semibold">
            Software Engineer
          </p>
        </div>

        {/* Main Headline */}
        <div className="mb-10 animate-in slide-in-from-bottom-2">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight">
            High-performance Systems & Scalable Architecture
          </h1>
          <div className="h-1 w-14 bg-gradient-to-r from-primary to-primary/40 mt-6 rounded-full" />
        </div>

        {/* Professional Summary */}
        <div className="mb-14 max-w-3xl space-y-4 animate-in fade-in-50 text-foreground/90">
          <p className="text-lg md:text-xl leading-relaxed font-light">
            Backend engineer crafting distributed systems, real-time communication platforms, and
            high-throughput matching engines. Focused on production-ready architecture, performance optimization,
            and scalable infrastructure.
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed font-light">
            Skilled in graph algorithms, message queues, distributed transactions, and fault-tolerant systems.
            Currently building advanced matchmaking and collaboration engines.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-in fade-in-50">
          {[{
            label: "Throughput",
            value: "3M+",
            sub: "Matches / Night",
          }, {
            label: "Latency",
            value: "<300ms",
            sub: "P95 Response",
          }, {
            label: "Uptime",
            value: "99.9%",
            sub: "Service Level",
          }, {
            label: "Experience",
            value: "2+ yrs",
            sub: "Professional",
          }].map((item) => (
            <div key={item.label} className="group">
              <p className="text-xs md:text-sm font-semibold text-primary/80 uppercase tracking-widest mb-1.5">
                {item.label}
              </p>
              <p className="text-xl md:text-3xl font-bold text-foreground">{item.value}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-in fade-in-50">
        
          <Link
            href="/resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-white text-foreground font-normal text-base hover:bg-foreground/5 transition-colors"
          >
            Download Resume
          </Link>
        </div>


      </div>
    </section>
  )
}