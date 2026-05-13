export function About() {
  return (
    <section id="about" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">About</p>
            <div className="aspect-square rounded-2xl bg-[image:var(--gradient-accent)] relative overflow-hidden shadow-[var(--shadow-glow)]">
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-primary-foreground">
                  <div className="text-xs uppercase tracking-widest opacity-70">Founder</div>
                  <div className="text-xl font-bold">Armstrong Digital</div>
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground leading-tight">
              Every small business deserves a great website.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Armstrong Digital was founded on one simple idea — every small business deserves
              a great website. I work directly with business owners to build something they're
              proud of, without the technical headache.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              No account managers. No upsells. No jargon. Just a young builder who cares about
              your business as much as you do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}