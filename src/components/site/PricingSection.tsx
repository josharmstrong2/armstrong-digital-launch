import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

export const PACKAGE_NAME = "Professional Website";
export const PACKAGE_PRICE = "$1,250";

export const packageFeatures = [
  "Up to 5 custom-designed website pages",
  "Mobile-responsive design",
  "Contact form integration",
  "Basic on-page SEO setup",
  "Click-to-call functionality",
  "Social media links",
  "Basic performance optimization",
  "One round of revisions",
  "Website launch assistance",
];

function Item({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-muted-foreground">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="px-5 md:px-8 py-24 md:py-32 bg-background">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Pricing
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground max-w-[18ch]">
            One package. One simple price.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr] items-start">
          <Reveal>
            <div
              className="rounded-3xl border border-primary/40 bg-card/60 p-8 md:p-10"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {PACKAGE_NAME}
              </h3>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground">
                  {PACKAGE_PRICE}
                </span>
                <span className="text-muted-foreground">— One-Time Payment</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                No monthly website subscription.
              </p>

              <p className="mt-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                What you get
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {packageFeatures.map((f) => (
                  <Item key={f}>{f}</Item>
                ))}
              </ul>

              <Link
                to="/get-started"
                className="mt-10 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Request Your Website
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6 rounded-3xl border border-border bg-card/30 p-8 md:p-10 text-sm text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Ownership
                </h3>
                <p className="mt-2">
                  The $1,250 fee covers the agreed website design and development
                  deliverables. Once the project is complete and all agreed payments are
                  made, you own those deliverables, subject to applicable third-party
                  licenses and service terms.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Ongoing costs
                </h3>
                <p className="mt-2">
                  Domain registration, hosting, premium software, and other third-party
                  services may have separate ongoing costs depending on your setup.
                  These are not included in the $1,250 fee.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Optional help after launch
                </h3>
                <p className="mt-2">
                  Maintenance, updates, and additional development are optional and
                  quoted separately. Need more than five pages or extra features? Contact
                  us for a separately quoted project.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
