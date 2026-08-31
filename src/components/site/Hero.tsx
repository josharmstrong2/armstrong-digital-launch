import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute top-[15%] right-[-10%] h-[640px] w-[640px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--primary) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/40 backdrop-blur text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Websites for small &amp; local businesses
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display font-semibold text-foreground text-[11vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6.2vw] leading-[0.95] tracking-[-0.045em] max-w-[19ch]">
            A professional website without the $3,000+ agency bill.
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Armstrong Digital builds, hosts, and maintains professional websites for
            small businesses — all for one simple monthly price.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Button asChild variant="hero" size="xl" className="group">
              <a href="#contact">
                Get My Free Website
                <ArrowUpRight className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <a
              href="#how"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              See How It Works →
            </a>
          </div>
        </Reveal>

        <Reveal delay={520}>
          <div className="mt-20 pt-8 border-t border-border">
            <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl">
              {[
                ["$149", "per month"],
                ["$0", "upfront build cost"],
                ["Everything", "handled for you"],
              ].map(([k, v]) => (
                <div key={v}>
                  <div className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                    {k}
                  </div>
                  <div className="mt-1 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
