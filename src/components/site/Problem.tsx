import { Reveal } from "./Reveal";

const problems = [
  "Your website looks outdated compared to competitors",
  "It's hard to use on a phone",
  "Customers can't easily call, message, or find you",
  "The site doesn't clearly explain the services you offer",
  "You're difficult to find in search results",
  "A redesign quote came back at thousands of dollars",
  "Nobody wants to deal with hosting, updates, or tech issues",
];

export function Problem() {
  return (
    <section id="problem" className="relative py-28 md:py-36 px-6 md:px-10 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-sm text-primary">01</span>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              The problem
            </span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start mt-10">
          <div className="md:col-span-6">
            <Reveal delay={100}>
              <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-foreground leading-[1] max-w-[16ch]">
                Your website should be working for your business.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-[52ch]">
                For most local service businesses, the website is the first thing a
                customer sees — and often the reason they call someone else instead.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-[52ch]">
                Armstrong Digital fixes that end to end. We design the site around the
                work you actually do, put it online, keep it running, and make the small
                changes you need along the way — so you can get back to the job site.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <ul className="divide-y divide-border border-y border-border">
              {problems.map((p, i) => (
                <Reveal key={p} delay={i * 60}>
                  <li className="flex items-start gap-4 py-5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-base md:text-lg text-muted-foreground">{p}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
