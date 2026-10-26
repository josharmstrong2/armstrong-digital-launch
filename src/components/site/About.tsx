import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function About({ showLink = true }: { showLink?: boolean }) {
  return (
    <section id="about" className="px-5 md:px-8 py-24 md:py-32 bg-background">
      <div className="max-w-[1280px] mx-auto grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              About Armstrong Digital
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground max-w-[16ch]">
              Professional Websites. Personal Service.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <Reveal delay={100}>
            <p>
              Armstrong Digital exists to help small businesses get a professional online
              presence for one simple, one-time price — without a large agency bill or a
              monthly website subscription.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p>
              You get a website built around your actual business: your services, your
              service area, and the customers you want to reach. You work directly
              with a person, not a ticket queue, and if you want help after launch,
              maintenance and updates are available through a separate quote.
            </p>
          </Reveal>
          {showLink && (
            <Reveal delay={220}>
              <Link
                to="/about"
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                Learn More →
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
