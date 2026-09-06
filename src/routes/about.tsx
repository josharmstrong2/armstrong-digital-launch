import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { About } from "@/components/site/About";
import { WhyArmstrong } from "@/components/site/WhyArmstrong";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const title = "About — Armstrong Digital";
const description =
  "Armstrong Digital builds, hosts, and maintains professional websites for small businesses. Professional websites, personal service — built for your business, managed for you.";
const url = "https://armstrong-digital.lovable.app/about";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main>
        <section className="px-5 md:px-8 pt-16 pb-4 md:pt-24">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground max-w-[16ch]">
              Professional Websites. Personal Service.
            </h1>
          </div>
        </section>
        <About showLink={false} />
        <WhyArmstrong />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
