export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* watermark */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-x-0 -bottom-6 md:-bottom-10 text-center font-display font-semibold tracking-[-0.05em] leading-none whitespace-nowrap"
        style={{
          fontSize: "clamp(96px, 22vw, 360px)",
          color: "oklch(1 0 0 / 0.025)",
        }}
      >
        Armstrong.
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-40 md:pb-56">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-display font-semibold text-foreground text-lg">
              Armstrong<span className="text-primary">.</span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 text-sm">
            <a
              href="mailto:jricharm7@gmail.com"
              className="text-muted-foreground hover:text-foreground transition"
            >
              jricharm7@gmail.com
            </a>
            <a
              href="tel:+12483092722"
              className="text-muted-foreground hover:text-foreground transition"
            >
              (248) 309-2722
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Armstrong Digital.
          </div>
        </div>
      </div>
    </footer>
  );
}
