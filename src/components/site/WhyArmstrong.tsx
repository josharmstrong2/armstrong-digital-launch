import { Reveal } from "./Reveal";

const points = [
  { t: "Professional Quality", d: "Built specifically for your business." },
  { t: "Completely Managed", d: "We handle the website for you." },
  { t: "You Own It", d: "Your website and domain belong to you." },
  { t: "Personal Service", d: "Direct support when you need it." },
];

export function WhyArmstrong() {
  return (
    <section
      id="why"
      className="px-5 md:px-8 py-24 md:py-32 border-y border-border"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Why Armstrong Digital
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground max-w-[20ch]">
            Built for Your Business. Managed for You.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card/40 p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">{p.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
