import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

export const faqs = [
  {
    q: "What is included in the $1,250 Professional Website?",
    a: "Up to 5 custom-designed pages, mobile-responsive design, contact form integration, basic on-page SEO setup, click-to-call functionality, social media links, basic performance optimization, one round of revisions, and website launch assistance.",
  },
  {
    q: "Is the $1,250 payment one-time?",
    a: "Yes. The Professional Website is a one-time $1,250 fee for the agreed design and development deliverables. There is no monthly website subscription. Payment terms are confirmed before work begins.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. After the project is completed and all agreed payments are made, you receive ownership of the agreed deliverables, subject to applicable third-party licenses and service terms.",
  },
  {
    q: "Are domain and hosting costs included?",
    a: "No. Domain registration, hosting, premium software, and other third-party services may have separate ongoing costs depending on your setup. We'll walk you through the options before launch.",
  },
  {
    q: "Can I request additional pages?",
    a: "Yes. Projects that need more than five pages or extra functionality can be quoted separately.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. Share your current website URL in the inquiry form and we'll review it as part of your project.",
  },
  {
    q: "Can I request updates after launch?",
    a: "Yes. Updates after launch are available through a separate quote. The package includes one round of revisions before launch.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes, optionally. Website maintenance, updates, and additional development are available through a separate quote. They are not required.",
  },
  {
    q: "What is the process for getting started?",
    a: "Fill out the project inquiry form and we'll reach out to discuss your business. The project scope, timeline, payment terms, revision policy, and deliverables are confirmed before any work begins.",
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
