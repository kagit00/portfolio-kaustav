export function FooterClean() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-10 md:py-12">
      <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-6 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. Built with Next.js.</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#experience" className="hover:text-foreground transition-colors">
            experience
          </a>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-foreground transition-colors">
            skills
          </a>
          <a href="#certifications" className="hover:text-foreground transition-colors">
            certifications
          </a>
          <a href="#resume" className="hover:text-foreground transition-colors">
            resume
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            contact
          </a>
        </div>
      </div>
    </footer>
  )
}
