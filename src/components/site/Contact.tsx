import { useState } from "react";
import { Reveal } from "./Reveal";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "4a29109f-f4ea-49cc-9227-7ded95af32c7";

type Field = "name" | "email" | "phone" | "message";
type Status = "idle" | "sending" | "success" | "error";

const initialValues: Record<Field, string> = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (field: Field) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
      if (status === "error") setStatus("idle");
    };

  const validate = () => {
    const next: Partial<Record<Field, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New inquiry from Armstrong Digital website",
          from_name: "Armstrong Digital Website",
          botcheck: "",
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
        }),
      });
      const data = (await res.json().catch(() => null)) as
        | { success?: boolean }
        | null;
      if (res.ok && data?.success) {
        setStatus("success");
        setValues(initialValues);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="px-5 md:px-8 py-24 md:py-32 border-t border-border"
      style={{ backgroundColor: "var(--surface-1)" }}
    >
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground">
            Get In Touch
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-[52ch] leading-relaxed">
            Have a question or ready to start? Send a message and we'll get
            back to you within one business day.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-12 rounded-3xl border border-border bg-card/40 p-6 md:p-10 space-y-6"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {status === "success" && (
              <div
                role="status"
                className="rounded-2xl border border-primary/40 bg-primary/10 px-5 py-4 text-sm text-foreground"
              >
                Thanks for reaching out — I'll get back to you within one
                business day.
              </div>
            )}
            {status === "error" && (
              <div
                role="alert"
                className="rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-4 text-sm text-foreground"
              >
                Something went wrong — please try again or call (248)
                309-2722.
              </div>
            )}

            {/* Honeypot — hidden from users, left empty */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              aria-hidden="true"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <TextField
                id="contact-name"
                label="Name"
                value={values.name}
                onChange={set("name")}
                error={errors.name}
                required
              />
              <TextField
                id="contact-email"
                label="Email"
                type="email"
                value={values.email}
                onChange={set("email")}
                error={errors.email}
                required
              />
            </div>
            <TextField
              id="contact-phone"
              label="Phone (optional)"
              type="tel"
              value={values.phone}
              onChange={set("phone")}
            />
            <TextField
              id="contact-message"
              label="Message"
              textarea
              value={values.message}
              onChange={set("message")}
              error={errors.message}
              required
            />

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p className="mt-5 text-sm text-muted-foreground">
                Prefer to talk? Call{" "}
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

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  type?: string;
  textarea?: boolean;
}) {
  const inputClass =
    "w-full bg-transparent border-0 border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition text-base";
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id.replace("contact-", "")}
          rows={5}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id.replace("contact-", "")}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClass}
        />
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
