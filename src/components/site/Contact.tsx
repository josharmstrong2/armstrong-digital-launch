import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
    <section id="contact" className="relative py-32 px-6 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Ready to get your free website?<br />
            <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
              Let's talk.
            </span>
          </h2>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Your name" name="name" placeholder="Jane Smith" required />
            <Field label="Business name" name="business" placeholder="Smith & Co." required />
          </div>
          <Field label="Email" name="email" type="email" placeholder="jane@smithco.com" required />
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Tell me about your business
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="What you do, who you serve, and what you're hoping for..."
              className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition resize-none"
            />
          </div>
          <Button type="submit" variant="hero" size="xl" className="w-full" disabled={submitting}>
            {submitting ? "Sending..." : "Send my request"}
          </Button>
        </form>
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
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
      />
    </div>
  );
}