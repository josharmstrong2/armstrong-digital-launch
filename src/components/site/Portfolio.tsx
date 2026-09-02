import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import clientShot from "@/assets/roofing-hero.jpg";
import landscapingShot from "@/assets/landscaping-hero.jpg";

/**
 * Client + demo projects.
 * Real client work sets `demo: false` and a `to` route (or external `url`).
 */
type Project = {
  name: string;
  industry: string;
  summary: string;
  demo: boolean;
  to?: string;
  url?: string;
  image?: string;
};

const projects: Project[] = [
  {
    name: "Armstrong & Co Roofing",
    industry: "Roofing — Metro Detroit",
    summary:
      "Built from their inquiry in under a week: click-to-call in the header, storm-damage and replacement services, recent job gallery, and a free-inspection CTA on every screen.",
    demo: false,
    to: "/work/armstrong-and-co",
    image: clientShot,
  },
  {
    name: "Landscaping site concept",
    industry: "Landscaping",
    summary:
      "Service list, seasonal offerings, project gallery, and a quote request form above the fold.",
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
            Live client work.
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-muted-foreground max-w-[60ch]">
            Real sites we've launched, plus example concepts showing the structure we
            build for local service businesses.
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
                  <span
                    className={`text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-full border ${
                      p.demo
                        ? "border-border text-muted-foreground"
                        : "border-primary/50 text-primary"
                    }`}
                  >
                    {p.demo ? "Demo" : "Live client"}
                  </span>
                </div>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} website preview`}
                    loading="lazy"
                    className="mt-6 h-40 w-full rounded-xl border border-border object-cover"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="mt-6 h-40 rounded-xl border border-border"
                    style={{
                      background:
                        "linear-gradient(160deg, oklch(1 0 0 / 0.05), oklch(1 0 0 / 0.01))",
                    }}
                  />
                )}
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
                  {p.name}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.summary}</p>
                {p.to && (
                  <Link
                    to={p.to}
                    className="mt-5 inline-block text-sm text-primary hover:underline"
                  >
                    View live site →
                  </Link>
                )}
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
