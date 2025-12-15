export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <nav aria-label="Social links" className="flex items-center gap-4">
            <a className="hover:text-primary" href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-primary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hover:text-primary" href="mailto:you@example.com">
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
