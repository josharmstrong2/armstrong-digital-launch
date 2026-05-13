import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* glow orbs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now booking small business websites
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-foreground">
            We build websites that{" "}
            <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
              work for your business.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Custom websites for small businesses — built, hosted, and maintained for you.
            No tech headaches. No bloated agency fees. Just a great site, online and looked after.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">
                Get Your Free Website <ArrowRight className="ml-1" />
              </a>
            </Button>
            <a
              href="#how"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              See how it works →
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <div><span className="text-foreground font-semibold">$0</span> upfront</div>
            <div><span className="text-foreground font-semibold">7–14 days</span> to launch</div>
            <div><span className="text-foreground font-semibold">100%</span> handled for you</div>
          </div>
        </div>
      </div>
    </section>
  );
}