import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-40 px-6 md:px-10"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">03</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              About
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start mt-12">
          <div className="md:col-span-7">
            <Reveal delay={100}>
              <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground leading-[1] max-w-[16ch]">
                Every small business deserves a great website.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-10 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[55ch]">
                Armstrong Digital was founded on one simple idea — every small business deserves
                a great website. I work directly with business owners to build something they're
                proud of, without the technical headache.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[55ch]">
                No account managers. No upsells. No jargon. Just a young builder who cares about
                your business as much as you do.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={200}>
              <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>Founder</span>
                  <span className="font-mono">Est. 2026</span>
                </div>
                <div className="mt-10 font-display text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                  Armstrong<span className="text-primary">.</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Independent web studio
                </div>
                <div className="mt-10 pt-6 border-t border-border grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-display text-2xl font-semibold text-foreground">100%</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      Hands-on
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-semibold text-foreground">1:1</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      Direct contact
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
