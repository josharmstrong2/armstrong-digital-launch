import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export const steps = [
  {
    n: "01",
    title: "Tell Us About Your Business",
    desc: "Share what you do, who you serve, and the look you want. It takes about a minute.",
  },
  {
    n: "02",
    title: "We Build Your Website",
    desc: "We design and write a website around your business, services, and service area.",
  },
  {
    n: "03",
    title: "You Review It",
    desc: "You see the site before anything goes live and tell us what you'd like changed.",
  },
  {
    n: "04",
    title: "We Launch & Manage It",
    desc: "We publish it and take care of hosting, security, maintenance, and updates.",
  },
];

export function HowItWorks({ showCta = true }: { showCta?: boolean }) {
  return (
    <section id="how" className="px-5 md:px-8 py-24 md:py-32 bg-background">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            How it works
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground">
            Four steps. Zero stress.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="grid md:grid-cols-12 gap-4 md:gap-10 py-8 md:py-10 group">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-primary">{s.n}</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.03em] text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal delay={120}>
            <Link
              to="/get-started"
              className="mt-12 inline-flex items-center rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started for $0 Upfront
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
