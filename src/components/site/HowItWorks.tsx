const steps = [
  {
    n: "01",
    title: "We talk about your business",
    desc: "A quick conversation about who you serve, what makes you different, and what you want your site to do.",
  },
  {
    n: "02",
    title: "I build your website for free",
    desc: "You see a real, working site — not a mockup. We refine it together until it feels exactly right.",
  },
  {
    n: "03",
    title: "Stay online for a simple monthly fee",
    desc: "Hosting, updates, edits, and support — all included. One predictable price, no surprises.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Three steps.<br />
            <span className="text-muted-foreground">Zero stress.</span>
          </h2>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="h-24 w-24 rounded-full bg-card border border-border flex items-center justify-center mb-6 relative z-10">
                  <span className="text-3xl font-bold bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
                    {s.n}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}