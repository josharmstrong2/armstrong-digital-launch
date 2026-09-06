import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

const title = "Get Started — Let's Build Your Website | Armstrong Digital";
const description =
  "Tell us a little about your business and we'll build your website. $0 upfront, $149/month with hosting, maintenance, and support included.";
const url = "https://armstrong-digital.lovable.app/get-started";

export const Route = createFileRoute("/get-started")({
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
  component: GetStartedPage,
});

function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav />
      <main className="px-5 md:px-8 pt-16 pb-24 md:pt-24">
        <div className="max-w-[900px] mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground">
            Let's Build Your Website
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-[52ch] leading-relaxed">
            Tell us a little about your business. It takes about a minute.
          </p>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.18em] text-primary">
            $0 Upfront • $149/Month
          </p>
          <div className="mt-12">
            <LeadForm />
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
