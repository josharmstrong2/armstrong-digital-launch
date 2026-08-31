import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Tell us about your business",
    desc: "Fill out a short form and tell us about your business, services, goals, and preferred style.",
  },
  {
    n: "02",
    title: "We build your website",
    desc: "We create a professional website designed specifically around your business.",
  },
  {
    n: "03",
    title: "Go live & let us handle the rest",
    desc: "Once approved, your website goes live. Armstrong Digital handles hosting, maintenance, updates, and ongoing technical management.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28 md:py-36 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">03</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              How it works
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground leading-[1]">
            Three steps.{" "}
            <span className="text-muted-foreground">Zero stress.</span>
          </h2>
        </Reveal>

        <div className="mt-20 divide-y divide-border border-y border-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 group">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-primary">{s.n}</span>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-display text-2xl md:text-4xl font-semibold tracking-[-0.035em] text-foreground group-hover:text-primary transition-colors duration-500">
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
