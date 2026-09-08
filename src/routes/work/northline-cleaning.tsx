import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/cleaning-hero.jpg";
import work1 from "@/assets/cleaning-work-1.jpg";
import work2 from "@/assets/cleaning-work-2.jpg";

const title = "Northline Cleaning Co. — Home & Office Cleaning in Metro Detroit";
const description =
  "Northline Cleaning Co. provides recurring home cleaning, deep cleans, move-in/move-out, and small office cleaning across Metro Detroit. Flat pricing, vetted cleaners.";
const url = "https://armstrong-digital.lovable.app/work/northline-cleaning";

export const Route = createFileRoute("/work/northline-cleaning")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HouseCleaningService",
          name: "Northline Cleaning Co.",
          description,
          url,
          areaServed: ["Metro Detroit", "Oakland County", "Macomb County"],
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: NorthlineSite,
});

const services = [
  { t: "Recurring home cleaning", d: "Weekly, biweekly, or monthly — same crew each visit, so nothing gets re-explained.", meta: "from $129" },
  { t: "Deep clean", d: "Baseboards, inside appliances, grout, vents, and the corners that get skipped.", meta: "from $289" },
  { t: "Move in / move out", d: "Empty-home clean built to pass a landlord walkthrough or a closing.", meta: "from $319" },
  { t: "Small office & studio", d: "After-hours cleaning for offices, salons, and clinics under 5,000 sq ft.", meta: "custom quote" },
];

function NorthlineSite() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#22302c] antialiased font-sans">
      <div className="bg-[#22302c] text-[#fbfaf7] text-sm px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="opacity-80">Demo site concept by Armstrong Digital.</span>
        <Link to="/" className="underline underline-offset-4 hover:opacity-80">
          Get one like it for $149/month →
        </Link>
      </div>

      <header className="sticky top-0 z-40 bg-[#fbfaf7]/85 backdrop-blur border-b border-[#22302c]/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg tracking-tight">
            <span className="font-semibold">Northline</span>{" "}
            <span className="text-[#22302c]/50">Cleaning Co.</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#22302c]/70">
            <a href="#services" className="hover:text-[#3f7d5f]">Services</a>
            <a href="#visit" className="hover:text-[#3f7d5f]">What a visit looks like</a>
            <a href="#areas" className="hover:text-[#3f7d5f]">Service area</a>
          </nav>
          <a
            href="#quote"
            className="rounded-full bg-[#3f7d5f] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#2f6249] transition-colors"
          >
            Get a quote
          </a>
        </div>
      </header>

      <main>
        {/* Hero — editorial split, image in a soft arch */}
        <section className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#3f7d5f]">
                Metro Detroit · Since 2016
              </p>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-[-0.035em] leading-[1.03]">
                Come home to a
                <br />
                <span className="italic font-normal text-[#3f7d5f]">quieter</span> kind of
                clean.
              </h1>
              <p className="mt-6 text-lg text-[#22302c]/65 max-w-[46ch] leading-relaxed">
                Vetted, background-checked cleaners, flat prices you can see up front, and
                the same friendly crew visit after visit.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="rounded-full bg-[#3f7d5f] text-white px-7 py-3.5 font-medium hover:bg-[#2f6249] transition-colors"
                >
                  Get my free quote
                </a>
                <a
                  href="tel:+12483092722"
                  className="rounded-full border border-[#22302c]/20 px-7 py-3.5 font-medium hover:bg-[#22302c]/5 transition-colors"
                >
                  Call 248-309-2722
                </a>
              </div>
              <p className="mt-6 text-sm text-[#22302c]/50">
                Flat pricing · Bring our own supplies · Reschedule anytime
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-t-[14rem] rounded-b-3xl border border-[#22302c]/10">
                <img
                  src={heroImg}
                  alt="Bright, freshly cleaned living room with white sofa and sunlit wood floors"
                  width={1600}
                  height={1104}
                  className="w-full h-[26rem] md:h-[34rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 md:left-auto md:-left-10 md:right-auto md:w-64 rounded-2xl bg-white border border-[#22302c]/10 shadow-[0_18px_40px_-24px_rgba(34,48,44,0.5)] p-5">
                <p className="text-sm text-[#22302c]/60">Typical 3-bed home</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">$149 / visit</p>
                <p className="mt-1 text-sm text-[#22302c]/55">Biweekly, all supplies included</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services — list rows with prices */}
        <section id="services" className="px-6 py-24 md:py-32 bg-white border-y border-[#22302c]/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.035em] max-w-[18ch]">
              Cleaning that fits how you actually live.
            </h2>
            <div className="mt-14 divide-y divide-[#22302c]/10 border-y border-[#22302c]/10">
              {services.map((s) => (
                <article
                  key={s.t}
                  className="group grid gap-3 md:grid-cols-[1fr_auto] md:items-baseline py-8 hover:bg-[#3f7d5f]/[0.04] md:px-4 transition-colors"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-[#3f7d5f] transition-colors">
                      {s.t}
                    </h3>
                    <p className="mt-2 text-[#22302c]/65 max-w-[62ch] leading-relaxed">{s.d}</p>
                  </div>
                  <span className="text-[#3f7d5f] font-medium whitespace-nowrap">{s.meta}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What a visit looks like */}
        <section id="visit" className="px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">
            <div className="grid gap-5">
              <img
                src={work1}
                alt="Uniformed Northline cleaner wiping down a bright kitchen counter"
                loading="lazy"
                width={1200}
                height={900}
                className="rounded-3xl border border-[#22302c]/10 w-full h-64 object-cover"
              />
              <img
                src={work2}
                alt="Spotless modern office with polished floors after a commercial cleaning"
                loading="lazy"
                width={1200}
                height={900}
                className="rounded-3xl border border-[#22302c]/10 w-full h-64 object-cover md:ml-10"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.035em] max-w-[16ch]">
                What a visit looks like.
              </h2>
              <ol className="mt-10 space-y-8">
                {[
                  ["Walkthrough first", "We note your priorities and anything we should leave alone."],
                  ["Room-by-room checklist", "Same order every time, so nothing gets missed in a rush."],
                  ["Final pass with you", "A quick look together — if something's off, we fix it before we go."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-5">
                    <span className="shrink-0 h-9 w-9 rounded-full bg-[#3f7d5f]/12 text-[#3f7d5f] grid place-items-center text-sm font-semibold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{t}</h3>
                      <p className="mt-1 text-[#22302c]/65 leading-relaxed">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Service area */}
        <section id="areas" className="px-6 py-20 bg-[#22302c] text-[#fbfaf7]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Where we clean
            </h2>
            <ul className="mt-8 flex flex-wrap gap-3 text-sm">
              {["Royal Oak", "Ferndale", "Birmingham", "Troy", "Rochester Hills", "Sterling Heights", "Grosse Pointe", "Novi", "Northville"].map(
                (c) => (
                  <li
                    key={c}
                    className="rounded-full border border-[#fbfaf7]/25 px-4 py-2 text-[#fbfaf7]/80"
                  >
                    {c}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-8 text-[#fbfaf7]/60 max-w-[58ch]">
              Not on the list? Call us — we add nearby communities whenever the route
              works.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.035em]">
              Get your flat-rate quote
            </h2>
            <p className="mt-5 text-[#22302c]/65 text-lg">
              Tell us the size of your home and how often you'd like us. We'll send a
              price the same day — no walkthrough required.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+12483092722"
                className="rounded-full bg-[#3f7d5f] text-white px-8 py-4 font-medium hover:bg-[#2f6249] transition-colors"
              >
                Call 248-309-2722
              </a>
              <a
                href="mailto:hello@northlineclean.example?subject=Cleaning%20quote"
                className="rounded-full border border-[#22302c]/20 px-8 py-4 font-medium hover:bg-[#22302c]/5 transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#22302c]/10 px-6 py-12 text-sm text-[#22302c]/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-between">
          <p>© {new Date().getFullYear()} Northline Cleaning Co. — Metro Detroit, MI</p>
          <p>
            Website by{" "}
            <Link to="/" className="text-[#3f7d5f] hover:underline">
              Armstrong Digital
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
