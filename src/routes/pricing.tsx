import { createFileRoute } from "@tanstack/react-router";
import { Globe, Zap, Lock, Wrench, Smartphone, HandHelping, Check, ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Armstrong Digital" },
      { name: "description", content: "Simple, transparent pricing. Free to start, then $50–75/month for a custom website with hosting, security, and support included." },
      { property: "og:title", content: "Pricing — Armstrong Digital" },
      { property: "og:description", content: "No upfront costs. No surprise fees. Just a great website and one flat monthly rate." },
    ],
  }),
  component: PricingPage,
});

const features = [
  { icon: Globe, title: "Custom Website", desc: "Built specifically for your business. No templates." },
  { icon: Zap, title: "Hosting Included", desc: "Your site stays live 24/7, fully managed for you." },
  { icon: Lock, title: "Security & SSL", desc: "Padlock certificate and ongoing security maintenance." },
  { icon: Wrench, title: "Maintenance", desc: "Updates, fixes, and tweaks handled without you lifting a finger." },
  { icon: Smartphone, title: "Mobile Ready", desc: "Looks great on phones, tablets, and desktops." },
  { icon: HandHelping, title: "Direct Support", desc: "Reach me directly. No call centres, no waiting around." },
];

const covers = [
  { title: "Website hosting", desc: "your site is live and accessible around the clock" },
  { title: "SSL certificate", desc: "the padlock in the browser that builds customer trust" },
  { title: "Performance monitoring", desc: "I keep an eye on your site so you don't have to" },
  { title: "Small content updates", desc: "change hours, add a photo, update a price" },
  { title: "Technical maintenance", desc: "behind the scenes upkeep to keep everything running" },
  { title: "Direct support", desc: "if something goes wrong, I'm one message away" },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        {/* Header */}
        <section
          className="relative pt-40 pb-20 px-6 overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative max-w-5xl mx-auto text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Pricing</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.95] text-foreground">
              Simple. Transparent.{" "}
              <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">Pricing.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No upfront costs. No surprise fees. Just a great website and one flat monthly rate.
            </p>
          </div>
        </section>

        {/* Main Pricing Card */}
        <section className="relative px-6 -mt-10 pb-24">
          <div className="max-w-5xl mx-auto">
            <div
              className="relative rounded-3xl border border-primary/30 bg-card p-8 md:p-12 overflow-hidden"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-hero)" }} />
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs font-medium text-primary mb-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    Most Popular
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    The Armstrong Plan
                  </h2>
                  <p className="mt-2 text-muted-foreground">Everything You Need</p>
                </div>
                <div className="md:text-right">
                  <div className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Free to start</div>
                  <div className="flex items-baseline gap-2 md:justify-end">
                    <span className="text-5xl md:text-6xl font-bold tracking-tighter bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
                      $50–75
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="group p-6 rounded-2xl border border-border bg-card/60 backdrop-blur hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="h-10 w-10 rounded-lg bg-[image:var(--gradient-accent)] flex items-center justify-center mb-4 shadow-[var(--shadow-glow)]">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground text-center mb-8">
                No contracts. Cancel anytime. Your domain (~$12/yr) billed separately.
              </p>

              <div className="flex justify-center">
                <Button asChild variant="hero" size="xl">
                  <a href="/#contact">
                    Get Your Free Website <ArrowRight className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What Your Monthly Fee Covers */}
        <section className="relative py-24 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">The Breakdown</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                What your monthly fee covers.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
              {covers.map(({ title, desc }) => (
                <div key={title} className="flex gap-4 items-start py-4 border-b border-border">
                  <div className="mt-1 h-6 w-6 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Note */}
        <section className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-2xl border border-primary/30 bg-card p-8 md:p-10 overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Full Transparency</p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Your monthly subscription keeps your website live and maintained. If you ever decide to pause or cancel,
                your site will be taken offline — but{" "}
                <span className="text-primary font-semibold">all your content is saved</span> and can be restored the
                moment you're ready to continue. <span className="text-foreground font-semibold">No data is ever deleted.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 px-6 border-t border-border overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/15 blur-3xl" />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
              Ready to get your free website?<br />
              <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">Let's talk.</span>
            </h2>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="hero" size="xl">
                <a href="/#contact">
                  Get Your Free Website <ArrowRight className="ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}