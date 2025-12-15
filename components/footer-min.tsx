export function FooterMin() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Your Name</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground">
            GitHub
          </a>
          <a href="#" className="hover:text-foreground">
            Twitter
          </a>
          <a href="#" className="hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
