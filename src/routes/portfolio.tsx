import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { PortfolioPreview } from "@/components/site/PortfolioPreview";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const title = "Portfolio — Websites for Local Service Businesses | Armstrong Digital";
const description =
  "Examples of professional websites designed for landscaping, roofing, auto detailing, and cleaning businesses — built and managed by Armstrong Digital.";
const url = "https://armstrong-digital.lovable.app/portfolio";

export const Route = createFileRoute("/portfolio")({
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
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main>
        <section className="px-5 md:px-8 pt-16 pb-10 md:pt-24">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground max-w-[18ch]">
              Websites Built for Businesses Like Yours
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[58ch] leading-relaxed">
              Explore examples of professional websites designed for local service
              businesses. More industry examples are on the way.
            </p>
          </div>
        </section>
        <PortfolioPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
