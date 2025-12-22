"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Mail, Github, Menu, X } from "lucide-react"

export function NavClean() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#skills", label: "skills" },
    { href: "#certifications", label: "certifications" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground border-border"
          : "bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/70 text-foreground border-transparent",
      )}
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-sm lowercase tracking-widest">kaustav</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "lowercase tracking-[0.15em] transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-muted-foreground/90 hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}

          <a
            href="mailto:kaustavofficial09@gmail.com"
            className={cn(
              "rounded-full p-2.5 shadow-sm transition-colors",
              scrolled
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "bg-primary text-primary-foreground hover:opacity-90",
            )}
            aria-label="Email me"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>

          <a
            href="https://github.com/kagit00"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full p-2.5 border transition-colors",
              scrolled
                ? "border-border text-foreground hover:bg-secondary"
                : "border-border/70 text-foreground hover:bg-secondary/50",
            )}
            aria-label="GitHub profile"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="flex flex-col items-start space-y-4 px-6 py-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="lowercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-4 pt-4">
              <a
                href="mailto:kaustavofficial09@gmail.com"
                className="rounded-full p-3 bg-primary text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
                aria-label="Email me"
              >
                <Mail className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/kagit00"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 border border-border hover:bg-secondary transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}