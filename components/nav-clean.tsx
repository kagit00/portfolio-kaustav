"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { MailIcon, GithubIcon } from "lucide-react"

export function NavClean() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors border-b",
        scrolled
          ? "bg-background text-foreground border-border"
          : "bg-background/70 backdrop-blur text-foreground border-transparent",
      )}
      role="banner"
    >
      <nav className="mx-auto font-bold flex max-w-6xl items-center justify-between px-4 py-3 md:py-4" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span
            className={cn(
              "text-sm lowercase tracking-widest white",
              scrolled ? "text-foreground" : "text-primary-foreground",
            )}
          >
            Kaustav
          </span>
        </Link>
        <div className="flex items-center gap-3 md:gap-6 text-sm">
          <a
            href="#experience"
            className={cn(
              "lowercase tracking-[0.15em] transition-colors",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/90 hover:text-primary-foreground",
            )}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={cn(
              "lowercase tracking-[0.15em] transition-colors",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/90 hover:text-primary-foreground",
            )}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={cn(
              "lowercase tracking-[0.15em] transition-colors",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/90 hover:text-primary-foreground",
            )}
          >
            skills
          </a>
          <a
            href="#certifications"
            className={cn(
              "lowercase tracking-[0.15em] transition-colors",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/90 hover:text-primary-foreground",
            )}
          >
            Certifications
          </a>
          <a
            href="mailto:you@example.com"
            className={cn(
              "rounded-full p-2 shadow-sm transition-colors",
              scrolled
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "bg-white text-primary hover:bg-white/90",
            )}
            aria-label="Email"
            title="Email"
          >
            <MailIcon className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <a
            href="https://github.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full p-2 border transition-colors",
              scrolled
                ? "border-border text-foreground hover:bg-secondary"
                : "border-white/70 text-primary-foreground hover:bg-white/10",
            )}
            aria-label="GitHub"
            title="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
