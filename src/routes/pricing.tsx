import { createFileRoute } from "@tanstack/react-router";
import { Globe, Zap, Lock, Wrench, Smartphone, HandHelping, Check, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

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
          className="relative pt-40 md:pt-48 pb-24 md:pb-32 px-6 md:px-10 overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="relative max-w-[1400px] mx-auto">
            <Reveal>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-sm text-primary">01</span>
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Pricing</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display font-semibold text-foreground text-[14vw] sm:text-[11vw] md:text-[8vw] lg:text-[7vw] leading-[0.92] tracking-[-0.045em] max-w-[14ch]">
                Simple. Transparent. <span className="text-muted-foreground">Pricing.</span>
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                No upfront costs. No surprise fees. Just a great website and one flat monthly rate.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Plan card */}
        <section
          className="relative px-6 md:px-10 py-24 md:py-32"
          style={{ backgroundColor: "var(--surface-1)" }}
        >
          <div className="max-w-[1200px] mx-auto">
            <Reveal>
              <div className="flex items-baseline gap-4 mb-12">
                <span className="font-mono text-sm text-primary">02</span>
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">The Armstrong Plan</span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-border bg-card/60 backdrop-blur p-8 md:p-14 relative overflow-hidden">
                <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-14 relative">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Everything you need</div>
                    <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.035em] text-foreground">
                      The Armstrong Plan
                    </h2>
                  </div>
                  <div className="md:text-right">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">Free to start</div>
                    <div className="flex items-baseline gap-2 md:justify-end">
                      <span className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-foreground">
                        $50–75
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
                  {features.map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="group p-6 md:p-8 bg-card hover:bg-card/40 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-primary mb-6" strokeWidth={1.5} />
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2 tracking-tight">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <p className="text-sm text-muted-foreground">
                    No contracts. Cancel anytime. Domain (~$12/yr) billed separately.
                  </p>
                  <Button asChild variant="hero" size="xl" className="group">
                    <a href="/#contact">
                      Get your free website
                      <ArrowUpRight className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Coverage */}
        <section className="relative py-32 md:py-40 px-6 md:px-10 bg-background">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-sm text-primary">03</span>
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">The breakdown</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-foreground leading-[0.95] max-w-[14ch]">
                What your monthly fee covers.
              </h2>
            </Reveal>

            <div className="mt-20 divide-y divide-border border-y border-border">
              {covers.map(({ title, desc }, i) => (
                <Reveal key={title} delay={i * 80}>
                  <div className="grid md:grid-cols-12 gap-6 py-8 md:py-10 group">
                    <div className="md:col-span-1 flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary" strokeWidth={2} />
                    </div>
                    <div className="md:col-span-5">
                      <div className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                        {title}
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        {desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section
          className="relative py-24 md:py-32 px-6 md:px-10"
          style={{ backgroundColor: "var(--surface-1)" }}
        >
          <div className="max-w-[1100px] mx-auto">
            <Reveal>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-sm text-primary">04</span>
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Full transparency</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="font-display text-3xl md:text-5xl font-medium tracking-[-0.035em] text-foreground leading-[1.1]">
                Your monthly subscription keeps your website live and maintained. If you ever
                pause or cancel, your site comes offline — but{" "}
                <span className="text-primary">all your content is saved</span> and can be
                restored the moment you're ready.{" "}
                <span className="text-muted-foreground">No data is ever deleted.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-32 md:py-40 px-6 md:px-10 overflow-hidden bg-background">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="max-w-[1100px] mx-auto">
            <Reveal>
              <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-foreground leading-[0.95] max-w-[14ch]">
                Ready to get your free website?{" "}
                <span className="text-muted-foreground">Let's talk.</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-12">
                <Button asChild variant="hero" size="xl" className="group">
                  <a href="/#contact">
                    Get your free website
                    <ArrowUpRight className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
