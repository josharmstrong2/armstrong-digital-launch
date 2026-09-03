import { Reveal } from "./Reveal";

const items = [
  { t: "Custom Website", d: "Built for your business." },
  { t: "Fully Managed", d: "We handle the technical work." },
  { t: "Ongoing Support", d: "Need a change? Just ask." },
  { t: "You Own It", d: "Your website stays yours." },
];

export function ValueProps() {
  return (
    <section
      className="px-5 md:px-8 py-16 md:py-20 border-y border-border"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[1280px] mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i, idx) => (
          <Reveal key={i.t} delay={idx * 70}>
            <div className="h-full rounded-2xl border border-border bg-card/40 p-6 hover:border-primary/40 transition-colors">
              <h3 className="font-display text-lg font-semibold text-foreground">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
