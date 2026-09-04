import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import roofingShot from "@/assets/roofing-hero.jpg";
import landscapingShot from "@/assets/landscaping-hero.jpg";

type Item = {
  category: string;
  blurb: string;
  image?: string;
  alt?: string;
  to?: "/work/armstrong-and-co" | "/work/greenline-landscaping";
};

export const portfolioItems: Item[] = [
  {
    category: "Landscaping / Lawn Care",
    blurb: "Services, seasonal offerings, project gallery, and a quote request above the fold.",
    image: landscapingShot,
    alt: "Landscaping website example showing a freshly landscaped suburban front yard",
    to: "/work/greenline-landscaping",
  },
  {
    category: "Roofing / Home Improvement",
    blurb: "Click-to-call header, storm damage and replacement services, and a free inspection CTA.",
    image: roofingShot,
    alt: "Roofing website example showing a crew installing shingles on a suburban home",
    to: "/work/armstrong-and-co",
  },
  {
    category: "Auto Detailing",
    blurb: "Package pricing, before-and-after gallery, and simple online booking.",
  },
  {
    category: "Cleaning Services",
    blurb: "Residential and commercial service lists, service area, and a quick quote form.",
  },
];

function Mockup({ item }: { item: Item }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden bg-background">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-card/60">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
      </div>
      {item.image ? (
        <img
          src={item.image}
          alt={item.alt ?? `${item.category} website example`}
          loading="lazy"
          width={1600}
          height={1104}
          className="h-44 w-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="h-44 w-full"
          style={{
            background:
              "linear-gradient(160deg, oklch(1 0 0 / 0.06), oklch(1 0 0 / 0.015))",
          }}
        />
      )}
    </div>
  );
}

export function PortfolioPreview() {
  return (
    <section
      id="work"
      className="px-5 md:px-8 py-24 md:py-32 border-y border-border"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Portfolio
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground max-w-[20ch]">
            Websites Built for Businesses Like Yours
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-muted-foreground max-w-[60ch] leading-relaxed">
            Explore examples of professional websites designed for local service
            businesses.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {portfolioItems.map((item, i) => (
            <Reveal key={item.category} delay={i * 80}>
              <article className="h-full rounded-2xl border border-border bg-card/40 p-5 hover:border-primary/40 transition-colors">
                <Mockup item={item} />
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {item.category}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.blurb}</p>
                {item.to ? (
                  <Link
                    to={item.to}
                    className="mt-5 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    Explore Website →
                  </Link>
                ) : (
                  <span className="mt-5 inline-block text-sm text-muted-foreground">
                    Example coming soon
                  </span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
