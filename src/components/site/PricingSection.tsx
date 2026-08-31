import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export const planFeatures = [
  "Custom website",
  "Hosting",
  "SSL / security",
  "Basic SEO",
  "Google Search Console",
  "Maintenance",
  "Minor updates",
  "Support",
];

export function PricingSection({ label = "04" }: { label?: string }) {
  return (
    <section
      id="pricing"
      className="relative py-28 md:py-36 px-6 md:px-10"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">{label}</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Pricing
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground leading-[1] max-w-[16ch]">
            Simple pricing.{" "}
            <span className="text-muted-foreground">No huge upfront bill.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div
            className="mt-14 rounded-3xl p-8 md:p-14 border border-border"
            style={{ background: "var(--surface-2, oklch(1 0 0 / 0.04))", boxShadow: "var(--shadow-card)" }}
          >
            <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
              <div className="md:col-span-5">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  The Armstrong Plan
                </div>
                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display text-6xl md:text-7xl font-semibold tracking-[-0.05em] text-foreground">
                    $149
                  </span>
                  <span className="pb-3 text-muted-foreground">/month</span>
                </div>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  One plan. Everything your website needs, built and managed by one company.
                </p>
                <Button asChild variant="hero" size="xl" className="mt-8 w-full md:w-auto">
                  <a href="/#contact">Get Started</a>
                </Button>
              </div>

              <div className="md:col-span-7">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {planFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 py-1">
                      <Check className="h-4 w-4 text-primary shrink-0" strokeWidth={2} />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-8 text-center md:text-left text-muted-foreground">
            No $3,000+ upfront website bill. No complicated packages. Just one simple
            monthly price.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
