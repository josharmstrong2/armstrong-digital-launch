import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[image:var(--gradient-accent)] shadow-[var(--shadow-glow)]" />
          <span className="font-bold tracking-tight text-foreground">
            Armstrong<span className="text-primary">.</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="/#included" className="hover:text-foreground transition-colors">What's included</a>
          <a href="/#how" className="hover:text-foreground transition-colors">How it works</a>
          <Link to="/pricing" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Pricing</Link>
          <a href="/#about" className="hover:text-foreground transition-colors">About</a>
        </nav>
        <a
          href="/#contact"
          className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
        >
          Get started
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-6 gap-1 text-base">
            <a onClick={() => setOpen(false)} href="/#included" className="py-3 text-muted-foreground hover:text-foreground transition-colors">What's included</a>
            <a onClick={() => setOpen(false)} href="/#how" className="py-3 text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <Link onClick={() => setOpen(false)} to="/pricing" className="py-3 text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <a onClick={() => setOpen(false)} href="/#about" className="py-3 text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a
              onClick={() => setOpen(false)}
              href="/#contact"
              className="mt-4 inline-flex items-center justify-center text-sm font-medium px-4 py-3 rounded-md bg-[image:var(--gradient-accent)] text-primary-foreground shadow-[var(--shadow-glow)]"
            >
              Get started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}