"use client"

import Link from "next/link"

export function FooterClean() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#skills", label: "skills" },
    { href: "#certifications", label: "certifications" },
    { href: "#resume", label: "resume" },
    { href: "mailto:kaustavofficial09@gmail.com", label: "contact" },
  ]

  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 md:py-12">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center md:gap-8">
        {/* Left: Copyright */}
        <p className="text-sm text-muted-foreground">
          © {currentYear} Kaustav Manna. Built with Next.js & Tailwind.
        </p>

        {/* Right: Navigation Links */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="lowercase tracking-[0.15em] hover:text-foreground transition-colors"
              {...(link.href.startsWith("mailto:") ? { rel: "noopener" } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
