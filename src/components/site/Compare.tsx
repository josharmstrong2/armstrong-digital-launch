import { Reveal } from "./Reveal";

const rows = [
  ["Upfront cost", "Often thousands of dollars", "$0 to start"],
  ["Monthly cost", "Varies by vendor", "$149/month"],
  ["Hosting", "May be billed separately", "Included"],
  ["Maintenance", "May cost extra", "Included"],
  ["Minor updates", "May require additional fees", "Included"],
  ["Who you deal with", "Multiple vendors and services", "One company handles everything"],
];

export function Compare() {
  return (
    <section id="why" className="relative py-28 md:py-36 px-6 md:px-10 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">05</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Why Armstrong Digital
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground leading-[1] max-w-[18ch]">
            A simpler way to get a professional website.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 border-b border-border bg-card/40">
              <div className="p-4 md:p-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                &nbsp;
              </div>
              <div className="p-4 md:p-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Traditional agency
              </div>
              <div className="p-4 md:p-6 text-xs uppercase tracking-[0.18em] text-primary">
                Armstrong Digital
              </div>
            </div>
            {rows.map(([label, agency, us], i) => (
              <div
                key={label}
                className={`grid grid-cols-3 ${i !== rows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-4 md:p-6 text-sm md:text-base text-muted-foreground">{label}</div>
                <div className="p-4 md:p-6 text-sm md:text-base text-muted-foreground">{agency}</div>
                <div className="p-4 md:p-6 text-sm md:text-base text-foreground font-medium">{us}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-6 text-sm text-muted-foreground max-w-[70ch]">
            Agency pricing varies widely — this comparison reflects the common structure of
            upfront build fees plus separate hosting, maintenance, and update charges.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
