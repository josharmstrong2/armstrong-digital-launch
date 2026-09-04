import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

export const faqs = [
  {
    q: "Is there an upfront fee?",
    a: "No. Website & Care is $149/month with $0 upfront.",
  },
  {
    q: "What does $149/month include?",
    a: "It includes your website, hosting, SSL/security, backups, monitoring, technical maintenance, basic SEO maintenance, domain management while active, reasonable website updates, standard website features, and ongoing support.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. You own your website and domain. Armstrong Digital retains reusable templates, internal tools, systems, and third-party components subject to their licenses.",
  },
  {
    q: "What happens if I cancel?",
    a: "Website & Care has a 12-month initial commitment. After the first 12 months, it becomes month-to-month with 30 days' notice. You can take your website and domain with you.",
  },
  {
    q: "Can I take my website with me?",
    a: "Yes. Your website and domain can be transferred to another hosting provider at no charge.",
  },
  {
    q: "Do you handle my domain?",
    a: "Yes. For Website & Care, domain registration and renewal are included while your service remains active. The domain is registered in your name.",
  },
  {
    q: "Can you make changes to my website?",
    a: "Yes. Website & Care includes reasonable website updates and changes. Major redesigns, additional pages, e-commerce, complex integrations, or substantial new functionality may require a separate quote.",
  },
  {
    q: "What happens after 12 months?",
    a: "After the initial 12-month commitment, Website & Care becomes month-to-month with 30 days' notice.",
  },
  {
    q: "Can you build more than 5 pages?",
    a: "Yes. Additional pages can be added for an additional fee depending on the project.",
  },
  {
    q: "Do you offer SEO?",
    a: "Basic SEO setup and maintenance are included. Advanced SEO services are available separately. We do not guarantee search rankings or traffic.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="px-5 md:px-8 py-24 md:py-32 border-y border-border"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            FAQ
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground">
            Questions, answered.
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <Accordion type="single" collapsible className="mt-12 border-t border-border">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground py-5 hover:no-underline hover:text-primary transition-colors">
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
