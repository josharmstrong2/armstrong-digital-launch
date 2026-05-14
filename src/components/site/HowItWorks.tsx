import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "We talk about your business",
    desc: "A quick conversation about who you serve, what makes you different, and what you want your site to do.",
  },
  {
    n: "02",
    title: "I build your website for free",
    desc: "You see a real, working site — not a mockup. We refine it together until it feels exactly right.",
  },
  {
    n: "03",
    title: "Stay online for a simple monthly fee",
    desc: "Hosting, updates, edits, and support — all included. One predictable price, no surprises.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32 md:py-40 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">02</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              How it works
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-foreground leading-[0.95]">
            Three steps.{" "}
            <span className="text-muted-foreground">Zero stress.</span>
          </h2>
        </Reveal>

        <div className="mt-24 divide-y divide-border border-y border-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 group">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-primary">{s.n}</span>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.035em] text-foreground group-hover:text-primary transition-colors duration-500">
                    {s.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
