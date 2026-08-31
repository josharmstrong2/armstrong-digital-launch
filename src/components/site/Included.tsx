import {
  Globe,
  Smartphone,
  Server,
  Search,
  BarChart3,
  Wrench,
  PencilLine,
  LifeBuoy,
} from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Globe, title: "Custom Website", desc: "Professional website designed around your business." },
  { icon: Smartphone, title: "Mobile Optimized", desc: "Looks great on phones, tablets, and desktops." },
  { icon: Server, title: "Hosting Included", desc: "We handle hosting so you don't have to." },
  { icon: Search, title: "Basic SEO", desc: "We optimize the site so search engines can properly understand your business." },
  { icon: BarChart3, title: "Google Search Console", desc: "We connect and monitor your website through Google Search Console." },
  { icon: Wrench, title: "Maintenance", desc: "We keep your website running properly." },
  { icon: PencilLine, title: "Minor Updates", desc: "Need a photo, phone number, service, or piece of information changed? We'll handle it." },
  { icon: LifeBuoy, title: "Support", desc: "You have someone to contact when you need help with your website." },
];

export function Included() {
  return (
    <section
      id="included"
      className="relative py-28 md:py-36 px-6 md:px-10"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">02</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              What's included
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground max-w-[16ch] leading-[1]">
            Everything you need.{" "}
            <span className="text-muted-foreground">One simple price.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="h-full p-8 bg-background hover:bg-card/70 transition-colors duration-300">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                <h3 className="mt-8 font-display text-xl font-semibold text-foreground tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
