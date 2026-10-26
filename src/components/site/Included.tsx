import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import {
  Paintbrush,
  Smartphone,
  Phone,
  Gauge,
  Search,
  MessageCircle,
} from "lucide-react";

const features = [
  { icon: Paintbrush, t: "Custom Design", d: "Built specifically for your business." },
  { icon: Smartphone, t: "Mobile Ready", d: "Looks great on phones, tablets and desktops." },
  { icon: Phone, t: "Click-to-Call", d: "Customers can call you with one tap, plus links to your social media." },
  { icon: Gauge, t: "Fast Loading", d: "Basic performance optimization so pages load quickly." },
  { icon: Search, t: "SEO Ready", d: "Basic on-page SEO setup so search engines understand your site." },
  { icon: MessageCircle, t: "Contact Form", d: "A working contact form, one round of revisions, and launch assistance." },
];

export function Included() {
  return (
    <section id="included" className="px-5 md:px-8 py-24 md:py-32 bg-background">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            What you get
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground max-w-[18ch]">
            Everything in the Professional Website.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={i * 60}>
              <article className="h-full rounded-2xl border border-border bg-card/40 p-7 hover:border-primary/40 transition-colors">
                <f.icon className="h-5 w-5 text-primary" aria-hidden />
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {f.t}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{f.d}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary">
              $1,250 — One-Time Payment
            </p>
            <Link
              to="/get-started"
              className="inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
