export function HeroPro() {
  return (
    <section className="relative min-h-[88svh] flex items-end pt-20" aria-label="Intro">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-ai.jpg"
          alt="Abstract AI glass brain in a premium dark studio"
          className="h-full w-full object-cover"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 pb-14">
        <div className="max-w-2xl">
          <h1 className="text-balance font-semibold tracking-tight text-foreground text-4xl sm:text-5xl lg:text-6xl">
            I build fast, elegant web experiences.
          </h1>
          <p className="mt-4 text-pretty text-foreground/80 leading-relaxed max-w-xl">
            Entry-level Software Engineer focused on Next.js, TypeScript, and clean design. I craft sleek interfaces,
            accessible UX, and performant systems with attention to detail.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-background hover:opacity-95 transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-foreground/90 hover:text-foreground hover:border-white/25 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
