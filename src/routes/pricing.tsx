import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { PricingSection } from "@/components/site/PricingSection";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const title = "Pricing — $1,250 Flat-Fee Small Business Website | Armstrong Digital";
const description =
  "One Professional Website package for $1,250, paid once: up to 5 custom pages, mobile-responsive design, contact form, basic SEO, click-to-call, and launch assistance.";
const url = "https://armstrong-digital.lovable.app/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main>
        <section className="px-5 md:px-8 pt-16 pb-4 md:pt-24">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground max-w-[16ch]">
              One package. One simple price.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[58ch] leading-relaxed">
              No monthly website subscription and no competing tiers — just one
              professional website for a one-time fee.
            </p>
          </div>
        </section>
        <PricingSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
