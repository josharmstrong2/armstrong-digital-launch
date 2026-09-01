import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PricingSection } from "@/components/site/PricingSection";
import { Compare } from "@/components/site/Compare";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";

const title = "Pricing — $149/Month Websites | Armstrong Digital";
const description =
  "One simple plan: $149/month for a custom website with hosting, SSL, basic SEO, maintenance, minor updates, and support. No $3,000+ upfront bill.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://armstrong-digital.lovable.app/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://armstrong-digital.lovable.app/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <section
          className="relative pt-40 pb-16 px-6 md:px-10"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="max-w-[1100px] mx-auto">
            <Reveal>
              <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.045em] text-foreground leading-[0.98] max-w-[16ch]">
                One plan. Everything included.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A professional website for your business — built, hosted, and maintained
                for one flat monthly price.
              </p>
            </Reveal>
          </div>
        </section>
        <PricingSection label="01" />
        <Compare />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
