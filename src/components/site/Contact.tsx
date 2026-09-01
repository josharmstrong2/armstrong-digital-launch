import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { supabase } from "@/integrations/supabase/client";

const businessTypes = [
  "Landscaping",
  "Roofing",
  "HVAC",
  "Plumbing / Electrical",
  "Cleaning",
  "Construction / Remodeling",
  "Dock / Marine",
  "Other local service business",
];

const helpOptions = [
  "I need a brand new website",
  "I need my current website redesigned",
  "I need hosting and maintenance taken over",
  "I'm not sure yet — I'd like advice",
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      business: String(fd.get("business") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim() || null,
      business_type: String(fd.get("business_type") ?? "").trim() || null,
      help_with: String(fd.get("help_with") ?? "").trim() || null,
      message: String(fd.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.business || !payload.email || !payload.phone || !payload.message) {
      toast.error("Please fill in every required field.");
      return;
    }
    if (payload.phone.length < 7 || payload.phone.length > 30) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    if (payload.message.length > 4000) {
      toast.error("Message is too long.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert(payload);
    setSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Please email josh@armstrong-digital.com directly.");
      return;
    }

    toast.success("Thanks! I'll be in touch within 24 hours.");
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">09</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Contact
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground leading-[1] max-w-[16ch]">
            Tell us about your business.{" "}
            <span className="text-muted-foreground">We'll take it from there.</span>
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <form
            onSubmit={onSubmit}
            className="mt-14 rounded-3xl p-8 md:p-12 space-y-6 backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(180deg, oklch(1 0 0 / 0.09), oklch(1 0 0 / 0.05))",
              border: "1px solid oklch(1 0 0 / 0.14)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" placeholder="Jane Smith" required />
              <Field label="Business name" name="business" placeholder="Smith & Co." required />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Email" name="email" type="email" placeholder="jane@smithco.com" required />
              <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Field
                label="Business website (optional)"
                name="website"
                type="url"
                placeholder="https://yoursite.com"
              />
              <SelectField
                label="What type of business do you have?"
                name="business_type"
                options={businessTypes}
              />
            </div>
            <SelectField
              label="What do you need help with?"
              name="help_with"
              options={helpOptions}
            />
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3"
              >
                Tell us more
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="What you do, who you serve, and what you're hoping for..."
                className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition resize-none text-base"
              />
            </div>
            <div className="pt-4">
              <Button type="submit" variant="hero" size="xl" className="w-full md:w-auto" disabled={submitting}>
                {submitting ? "Sending..." : "Get My Free Website"}
              </Button>
              <p className="mt-5 text-sm text-muted-foreground">
                Prefer to talk? Email{" "}
                <a className="text-primary hover:underline" href="mailto:josh@armstrong-digital.com">
                  josh@armstrong-digital.com
                </a>{" "}
                or call{" "}
                <a className="text-primary hover:underline" href="tel:+12483092722">
                  (248) 309-2722
                </a>
                .
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition text-base"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground focus:outline-none focus:border-primary transition text-base [&>option]:bg-background [&>option]:text-foreground"
      >
        <option value="">Select an option</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
