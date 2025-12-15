import Image from "next/image"

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-16">
      <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] items-center">
        <div>
          <p className="text-sm tracking-wide text-foreground/60">Software Engineer</p>
          <h1 className="text-pretty text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight">
            I design and build simple, fast web experiences.
          </h1>
          <p className="mt-5 text-foreground/75 leading-relaxed max-w-prose">
            Entry‑level developer focused on clarity, accessibility, and performance. I craft clean interfaces and ship
            reliable code.
          </p>
          <div className="mt-7 flex items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
            >
              View Work
            </a>
            <a href="mailto:you@example.com" className="text-sm text-primary hover:opacity-80">
              Get in touch →
            </a>
          </div>
        </div>
        <div className="justify-self-end">
          <Image
            src="/placeholder.jpg"
            alt="Selected work preview"
            width={520}
            height={360}
            className="rounded-xl border border-border"
            priority
          />
        </div>
      </div>
    </section>
  )
}
