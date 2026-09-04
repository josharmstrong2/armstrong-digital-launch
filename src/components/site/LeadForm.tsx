import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const businessTypes = [
  "Landscaping / Lawn Care",
  "Roofing / Home Improvement",
  "Auto Detailing",
  "Cleaning Services",
  "Plumbing",
  "Electrical",
  "HVAC",
  "Painting",
  "Pressure Washing",
  "Snow Removal",
  "Handyman",
  "Contractor / Remodeling",
  "Other local service business",
];

const needOptions = [
  "New website",
  "Website redesign",
  "Website updates",
  "Not sure yet",
];

export function LeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      business: String(fd.get("business") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim() || null,
      business_type: String(fd.get("business_type") ?? "").trim() || null,
      help_with: String(fd.get("help_with") ?? "").trim() || null,
      message: String(fd.get("message") ?? "").trim() || "—",
    };

    if (!payload.name || !payload.business || !payload.email || !payload.phone) {
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

    form.reset();
    setDone(true);
  };

  if (done) {
    return (
      <div
        className="rounded-3xl border border-primary/40 bg-card/50 p-8 md:p-12 text-center"
        role="status"
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
          Thanks! We received your request.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-[52ch] mx-auto leading-relaxed">
          We'll review your information and reach out shortly to discuss your website.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card/40 p-6 md:p-10 space-y-6"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Name" name="name" placeholder="Jane Smith" required />
        <Field label="Business Name" name="business" placeholder="Smith & Co." required />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Email" name="email" type="email" placeholder="jane@smithco.com" required />
        <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <SelectField label="Business Type" name="business_type" options={businessTypes} />
        <Field
          label="Current Website (optional)"
          name="website"
          type="url"
          placeholder="https://yoursite.com"
        />
      </div>
      <SelectField label="What do you need?" name="help_with" options={needOptions} />

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3"
        >
          Additional Information (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Anything else we should know about your business..."
          className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition resize-none text-base"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Get Started"}
        </button>
        <p className="mt-5 text-sm text-muted-foreground">
          Prefer to talk? Call{" "}
          <a className="text-primary hover:underline" href="tel:+12483092722">
            (248) 309-2722
          </a>{" "}
          or email{" "}
          <a
            className="text-primary hover:underline break-all"
            href="mailto:josh@armstrong-digital.com"
          >
            josh@armstrong-digital.com
          </a>
          .
        </p>
      </div>
    </form>
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
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3"
      >
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
    <div className="min-w-0">
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3"
      >
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
