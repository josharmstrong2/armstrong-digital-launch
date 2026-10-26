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
import { Contact } from "@/components/site/Contact";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

const title = "Armstrong Digital — Affordable Small Business Website Design, $1,250 Flat Fee";
const description =
  "Professional website development for small businesses for a one-time $1,250 fee. Up to 5 custom pages, mobile-responsive design, contact form, and basic SEO.";
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
          slogan: "Professional Websites. One Simple Price.",
          offers: [
            {
              "@type": "Offer",
              name: "Professional Website",
              price: "1250",
              priceCurrency: "USD",
              description:
                "One-time fee: up to 5 custom pages, mobile-responsive design, contact form, basic on-page SEO, click-to-call, social links, basic performance optimization, one round of revisions, and launch assistance.",
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
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
