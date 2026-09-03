import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="relative max-w-[1280px] mx-auto">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Websites for local service businesses
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 font-display font-semibold text-foreground text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.04em] max-w-[16ch]">
            Your Website. Professionally Built. Completely Managed.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-[54ch] leading-relaxed">
            A professional website built around your business — with ongoing
            management and support handled for you.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-8 font-mono text-sm tracking-[0.18em] text-primary uppercase">
            $0 Upfront • $149/Month
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started for $0 Upfront
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <p className="mt-8 text-sm text-muted-foreground">
            Custom Design • Hosting • Maintenance • Support
          </p>
        </Reveal>
      </div>
    </section>
  );
}
