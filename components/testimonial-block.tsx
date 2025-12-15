export function TestimonialBlock() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid items-center gap-6 md:grid-cols-[320px_1fr]">
        <img
          src="/diverse-person-portrait.png"
          alt="Client portrait"
          className="mx-auto h-[240px] w-[240px] rounded-xl bg-white object-cover md:mx-0"
        />
        <blockquote className="text-pretty">
          <p className="text-lg md:text-xl leading-relaxed">
            “We’ve worked with multiple agencies; this is the first time what we envisioned actually made it onto the
            screen.”
          </p>
          <footer className="mt-4 text-sm opacity-90">Head of Operations, Tahoe Therapeutics</footer>
        </blockquote>
      </div>
    </section>
  )
}
