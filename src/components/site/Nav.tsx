import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#included", label: "Services" },
  { href: "/#how", label: "How it works" },
  { href: "/#work", label: "Work" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-display font-semibold tracking-tight text-foreground text-lg">
            Armstrong<span className="text-primary">.</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Link
            to="/pricing"
            className="hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground" }}
          >
            Pricing
          </Link>
        </nav>
        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
        >
          Get Started
          <span className="h-1 w-1 rounded-full bg-primary" />
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-6 gap-1 text-base">
            {links.map((l) => (
              <a
                key={l.href}
                onClick={() => setOpen(false)}
                href={l.href}
                className="py-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Link
              onClick={() => setOpen(false)}
              to="/pricing"
              className="py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <a
              onClick={() => setOpen(false)}
              href="/#about"
              className="py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              onClick={() => setOpen(false)}
              href="/#contact"
              className="mt-4 inline-flex items-center justify-center text-sm font-medium px-4 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
