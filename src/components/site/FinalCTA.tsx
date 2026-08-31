import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section
      className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="max-w-[900px] mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground leading-[1]">
            Ready for a website your business can be proud of?
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-[58ch] mx-auto">
            Get a professional website without the huge upfront cost. We'll build it, host
            it, and handle the ongoing maintenance.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <Button asChild variant="hero" size="xl" className="mt-10">
            <a href="/#contact">Get Started</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
