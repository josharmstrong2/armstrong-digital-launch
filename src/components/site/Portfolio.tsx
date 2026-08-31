import { Reveal } from "./Reveal";

/**
 * Demo/example projects.
 * Replace an entry with a real client project by updating the fields below
 * (set `demo: false` and add a `url` to link out to the live site).
 */
type Project = {
  name: string;
  industry: string;
  summary: string;
  demo: boolean;
  url?: string;
};

const projects: Project[] = [
  {
    name: "Landscaping site concept",
    industry: "Landscaping",
    summary:
      "Service list, seasonal offerings, project gallery, and a quote request form above the fold.",
    demo: true,
  },
  {
    name: "Roofing site concept",
    industry: "Roofing",
    summary:
      "Storm-damage and replacement services, service-area map, and click-to-call on every screen.",
    demo: true,
  },
  {
    name: "HVAC site concept",
    industry: "HVAC",
    summary:
      "Emergency service banner, maintenance plan explainer, and a simple scheduling form.",
    demo: true,
  },
  {
    name: "Marine & dock site concept",
    industry: "Dock / Marine",
    summary:
      "Installation and removal services, seasonal booking window, and a photo-led project section.",
    demo: true,
  },
];

export function Portfolio() {
  return (
    <section
      id="work"
      className="relative py-28 md:py-36 px-6 md:px-10"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">06</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Work
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground leading-[1] max-w-[18ch]">
            Examples of what we build.
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-muted-foreground max-w-[60ch]">
            These are example concepts showing the structure we build for local service
            businesses. Client projects are added here as they go live.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="h-full rounded-2xl border border-border bg-background p-8 hover:border-primary/40 transition-colors duration-500">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {p.industry}
                  </span>
                  {p.demo && (
                    <span className="text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full border border-border text-primary">
                      Demo
                    </span>
                  )}
                </div>
                <div
                  aria-hidden
                  className="mt-6 h-40 rounded-xl border border-border"
                  style={{
                    background:
                      "linear-gradient(160deg, oklch(1 0 0 / 0.05), oklch(1 0 0 / 0.01))",
                  }}
                />
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
                  {p.name}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.summary}</p>
                {p.url && (
                  <a
                    href={p.url}
                    className="mt-5 inline-block text-sm text-primary hover:underline"
                  >
                    Visit site →
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
