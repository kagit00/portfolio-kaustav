"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function NavPro() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled
          ? "backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-white/10"
          : "bg-transparent",
      ].join(" ")}
      role="banner"
    >
      <nav
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link href="/" className="font-medium tracking-tight text-foreground">
          <span className="sr-only">Home</span>
          <span className="text-lg">Your Name</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#work" className="text-foreground/80 hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#skills" className="text-foreground/80 hover:text-foreground transition-colors">
            skills
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/professional-resume.pdf"
            className="inline-flex items-center rounded-full border border-white/15 px-3 py-1.5 text-sm text-foreground/90 hover:text-foreground hover:border-white/25 transition"
          >
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
