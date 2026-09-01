import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

export const faqs = [
  {
    q: "Do I have to pay anything upfront?",
    a: "No. There is no upfront build fee — you start with the $149/month plan once your website is approved and goes live.",
  },
  {
    q: "What's included in the $149/month?",
    a: "Your custom website, hosting, SSL/security, basic SEO setup, Google Search Console setup, contact forms, maintenance, minor updates, and support.",
  },
  {
    q: "Do you host the website?",
    a: "Yes. Hosting is included in the monthly price, so there is no separate hosting bill to manage.",
  },
  {
    q: "Can I request changes to my website?",
    a: "Yes. Minor updates — photos, phone numbers, hours, service details, and similar changes — are included. Larger additions such as brand-new pages or major redesigns can be quoted separately.",
  },
  {
    q: "How long does it take to build my website?",
    a: "Most websites are ready to review within a couple of weeks of receiving your business details and content. Timelines depend on the size of the site and how quickly feedback comes back.",
  },
  {
    q: "Do you provide SEO?",
    a: "We handle foundational SEO: page titles, meta descriptions, clean structure, mobile performance, and Google Search Console setup so your site can be properly understood by search engines. We do not guarantee rankings or lead volume.",
  },
  {
    q: "Do I own my website?",
    a: "You own your content, images, domain, and business information. The website is built and managed by Armstrong Digital as part of the monthly service — reach out if you'd like details on transferring a site.",
  },
  {
    q: "What happens if I cancel?",
    a: "You can cancel at any time. When the plan ends the managed website is taken offline, but your content is retained and the site can be restored if you decide to come back.",
  },
];

export function FAQ({ label = "07" }: { label?: string }) {
  return (
    <section id="faq" className="relative py-28 md:py-36 px-6 md:px-10 bg-background">
      <div className="max-w-[1000px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">{label}</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              FAQ
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground leading-[1] max-w-[16ch]">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <Accordion type="single" collapsible className="mt-12 border-t border-border">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-lg md:text-xl font-semibold text-foreground py-6 hover:no-underline hover:text-primary transition-colors">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6 max-w-[70ch]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
