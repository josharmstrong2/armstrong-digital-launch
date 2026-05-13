import { Globe, Server, LifeBuoy } from "lucide-react";

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
    <section id="included" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">What's Included</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Everything you need.<br />
            <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute top-8 right-8 text-xs font-mono text-muted-foreground/40">
                0{i + 1}
              </div>
              <div className="h-12 w-12 rounded-xl bg-[image:var(--gradient-accent)] flex items-center justify-center mb-6 shadow-[var(--shadow-glow)]">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}