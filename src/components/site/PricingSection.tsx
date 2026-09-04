import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const carePlan = [
  "Custom website",
  "Up to 5 pages",
  "Mobile responsive",
  "Business-specific content",
  "Contact form",
  "Basic SEO setup",
  "Basic SEO maintenance",
  "Hosting",
  "SSL / security",
  "Automated backups",
  "Website monitoring",
  "Technical maintenance",
  "Reasonable website updates",
  "Standard website features & add-ons",
  "Domain management",
  "Ongoing support",
];

const ownershipPlan = [
  "Custom website",
  "Up to 5 pages",
  "Mobile responsive",
  "Business-specific content",
  "Contact form",
  "Basic SEO",
  "Domain connection",
  "Website launch",
  "First-year domain registration",
  "Hosting included",
  "30 days post-launch support",
  "Website ownership",
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
            One managed service. Two ways to start.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr] items-start">
          {/* Featured: Website & Care */}
          <Reveal>
            <div
              className="rounded-3xl border border-primary/40 bg-card/60 p-8 md:p-10"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Website &amp; Care
                </h3>
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                  Most popular
                </span>
              </div>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground">
                  $149
                </span>
                <span className="text-muted-foreground">/month</span>
              </p>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-primary">
                $0 upfront
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                12-month initial commitment, then month-to-month.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {carePlan.map((f) => (
                  <Item key={f}>{f}</Item>
                ))}
              </ul>

              <Link
                to="/get-started"
                className="mt-10 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started for $0 Upfront
              </Link>
            </div>
          </Reveal>

          {/* Website Ownership */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card/30 p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Website Ownership
              </h3>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground">
                  $1,499
                </span>
                <span className="text-muted-foreground">one-time</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">Own your website.</p>

              <ul className="mt-8 grid gap-3">
                {ownershipPlan.map((f) => (
                  <Item key={f}>{f}</Item>
                ))}
              </ul>

              <p className="mt-8 text-sm text-muted-foreground">
                50% upfront • 50% before launch
              </p>

              <Link
                to="/get-started"
                className="mt-8 inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-border px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                Get Started
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <p className="mt-8 text-sm text-muted-foreground max-w-[70ch]">
            Bought your website outright? You can move to Website &amp; Care for
            $149/month at any time to have hosting, maintenance, updates, and support
            handled for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
