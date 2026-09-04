import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ValueProps } from "@/components/site/ValueProps";
import { Included } from "@/components/site/Included";
import { PortfolioPreview } from "@/components/site/PortfolioPreview";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WhyArmstrong } from "@/components/site/WhyArmstrong";
import { PricingSection } from "@/components/site/PricingSection";
import { FAQ, faqs } from "@/components/site/FAQ";
import { About } from "@/components/site/About";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

const title = "Armstrong Digital — Managed Small Business Websites, $149/Month";
const description =
  "Your website professionally built and completely managed. $0 upfront, $149/month — custom design, hosting, maintenance, basic SEO, and support for local service businesses.";
const url = "https://armstrong-digital.lovable.app/";

export const Route = createFileRoute("/")({
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Armstrong Digital",
          description,
          url,
          email: "josh@armstrong-digital.com",
          telephone: "+1-248-309-2722",
          areaServed: "United States",
          slogan: "Built for your business. Managed for you.",
          offers: [
            {
              "@type": "Offer",
              name: "Website & Care",
              price: "149",
              priceCurrency: "USD",
              description:
                "Custom website, hosting, SSL, backups, monitoring, basic SEO, maintenance, updates, and support for $149/month with $0 upfront.",
            },
            {
              "@type": "Offer",
              name: "Website Ownership",
              price: "1499",
              priceCurrency: "USD",
              description:
                "One-time custom website build with domain connection, launch, first-year domain registration, hosting, and 30 days post-launch support.",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <ValueProps />
        <Included />
        <PortfolioPreview />
        <HowItWorks />
        <WhyArmstrong />
        <PricingSection />
        <FAQ />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
