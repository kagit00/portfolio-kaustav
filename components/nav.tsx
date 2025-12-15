"use client"

import Link from "next/link"

export function Nav() {
  const links = [
    { href: "#work", label: "Work" },
    { href: "#skills", label: "skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/placeholder-logo.svg" alt="" className="h-5 w-5" />
            <span className="text-sm font-medium tracking-tight">Your Name</span>
          </Link>
          <ul className="hidden sm:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/professional-resume.png"
            className="text-sm text-foreground/80 hover:text-foreground underline underline-offset-4"
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  )
}
