import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section
      className="px-5 md:px-8 py-24 md:py-32 border-t border-border"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[900px] mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground">
            Ready to Upgrade Your Online Presence?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.18em] text-primary">
            $0 Upfront • $149/Month
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="tel:+12483092722"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Call (248) 309-2722
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
