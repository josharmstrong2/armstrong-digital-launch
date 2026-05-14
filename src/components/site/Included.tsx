import { Globe, Server, LifeBuoy } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Globe,
    title: "Custom Website",
    desc: "Designed and built around your business — not a recycled template. Fast, modern, and made to convert.",
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    desc: "Lightning-fast hosting, SSL, backups, and updates handled. Your site stays online and secure — always.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    desc: "Need a change? Just message me. Copy tweaks, new pages, fresh photos — it's all included.",
  },
];

export function Included() {
  return (
    <section
      id="included"
      className="relative py-32 md:py-40 px-6 md:px-10"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">01</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              What's included
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-foreground max-w-[14ch] leading-[0.95]">
            Everything you need.{" "}
            <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div
                className="group relative h-full p-8 md:p-10 rounded-2xl border border-border bg-card/60 hover:border-primary/40 transition-all duration-500"
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(600px circle at 50% 0%, oklch(0.82 0.16 75 / 0.08), transparent 40%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between mb-10">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    <span className="font-mono text-xs text-muted-foreground/60">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
