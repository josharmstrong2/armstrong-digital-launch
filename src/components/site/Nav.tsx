import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[image:var(--gradient-accent)] shadow-[var(--shadow-glow)]" />
          <span className="font-bold tracking-tight text-foreground">
            Armstrong<span className="text-primary">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#included" className="hover:text-foreground transition-colors">What's included</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
        </nav>
        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
        >
          Get started
        </a>
      </div>
    </header>
  );
}