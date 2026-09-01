import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Included } from "@/components/site/Included";
import { HowItWorks } from "@/components/site/HowItWorks";
import { PricingSection } from "@/components/site/PricingSection";
import { Compare } from "@/components/site/Compare";
import { Portfolio } from "@/components/site/Portfolio";
import { FAQ, faqs } from "@/components/site/FAQ";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

const title = "Armstrong Digital — Small Business Websites for $149/Month";
const description =
  "Get a professional website without the $3,000+ agency bill. Custom design, hosting, maintenance, and basic SEO for local service businesses — $149/month.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://armstrong-digital.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://armstrong-digital.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Armstrong Digital",
          description,
          url: "https://armstrong-digital.lovable.app/",
          email: "josh@armstrong-digital.com",
          telephone: "+1-248-309-2722",
          areaServed: "United States",
          offers: {
            "@type": "Offer",
            name: "The Armstrong Plan",
            price: "149",
            priceCurrency: "USD",
            description:
              "Custom website, hosting, SSL, basic SEO, maintenance, minor updates, and support.",
          },
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
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Included />
        <HowItWorks />
        <PricingSection />
        <Compare />
        <Portfolio />
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
