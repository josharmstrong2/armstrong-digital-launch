import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/get-started", label: "Get Started" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-display font-semibold text-foreground text-lg">
                Armstrong<span className="text-primary">.</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Professional websites. Personal service.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3 text-sm">
            {nav.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-muted-foreground hover:text-foreground transition-colors w-fit"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="tel:+12483092722"
              className="text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              (248) 309-2722
            </a>
            <a
              href="mailto:josh@armstrong-digital.com"
              className="text-muted-foreground hover:text-foreground transition-colors w-fit break-all"
            >
              josh@armstrong-digital.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          © 2026 Armstrong Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
