import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ValueProps } from "@/components/site/ValueProps";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const title = "How It Works — Armstrong Digital";
const description =
  "Four simple steps: tell us about your business, we build your website, you review it, and we launch and manage it. $0 upfront, $149/month.";
const url = "https://armstrong-digital.lovable.app/how-it-works";

export const Route = createFileRoute("/how-it-works")({
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
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main>
        <section className="px-5 md:px-8 pt-16 pb-10 md:pt-24">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground max-w-[18ch]">
              How working with Armstrong Digital works.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-[58ch] leading-relaxed">
              You tell us about your business once. We handle the design, the writing,
              the launch, and everything technical that comes after it.
            </p>
          </div>
        </section>
        <HowItWorks />
        <ValueProps />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
