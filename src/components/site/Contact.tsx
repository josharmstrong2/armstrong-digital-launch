import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! I'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 px-6 md:px-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">04</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Contact
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-foreground leading-[0.95] max-w-[14ch]">
            Ready to get your free website?{" "}
            <span className="text-muted-foreground">Let's talk.</span>
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <form
            onSubmit={onSubmit}
            className="mt-16 rounded-3xl p-8 md:p-12 space-y-6 backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(180deg, oklch(1 0 0 / 0.04), oklch(1 0 0 / 0.01))",
              border: "1px solid oklch(1 0 0 / 0.08)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Your name" name="name" placeholder="Jane Smith" required />
              <Field label="Business name" name="business" placeholder="Smith & Co." required />
            </div>
            <Field label="Email" name="email" type="email" placeholder="jane@smithco.com" required />
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Tell me about your business
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="What you do, who you serve, and what you're hoping for..."
                className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition resize-none text-base"
              />
            </div>
            <div className="pt-4">
              <Button type="submit" variant="hero" size="xl" className="w-full md:w-auto" disabled={submitting}>
                {submitting ? "Sending..." : "Send my request"}
              </Button>
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
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition text-base"
      />
    </div>
  );
}
