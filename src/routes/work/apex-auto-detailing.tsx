import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/detailing-hero.jpg";
import work1 from "@/assets/detailing-work-1.jpg";
import work2 from "@/assets/detailing-work-2.jpg";

const title = "Apex Auto Detailing — Mobile Ceramic Coating & Paint Correction";
const description =
  "Apex Auto Detailing brings showroom-level paint correction, ceramic coating, and interior detailing to your driveway across Metro Detroit. Book online in 60 seconds.";
const url = "https://armstrong-digital.lovable.app/work/apex-auto-detailing";

export const Route = createFileRoute("/work/apex-auto-detailing")({
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
          "@type": "AutoDetailing",
          name: "Apex Auto Detailing",
          description,
          url,
          areaServed: ["Metro Detroit", "Oakland County"],
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: ApexSite,
});

const packages = [
  {
    tier: "01",
    name: "Refresh",
    price: "$149",
    time: "2 hrs",
    for: "Daily drivers that need a reset.",
    items: ["Hand wash & decontamination", "Wheels, tires, arches", "Interior vacuum & wipe-down", "Glass in and out"],
  },
  {
    tier: "02",
    name: "Signature",
    price: "$349",
    time: "5 hrs",
    for: "The one most people book.",
    items: ["Everything in Refresh", "One-step paint enhancement", "Leather clean & condition", "6-month sealant", "Engine bay detail"],
    featured: true,
  },
  {
    tier: "03",
    name: "Apex Ceramic",
    price: "$1,190",
    time: "2 days",
    for: "Long-term protection, done once.",
    items: ["Multi-stage paint correction", "9H ceramic coating", "Wheel face & glass coating", "Full interior deep clean", "5-year warranty"],
  },
];

function ApexSite() {
  return (
    <div className="min-h-screen bg-[#08090a] text-[#ededed] antialiased font-sans selection:bg-[#e0ff3c] selection:text-black">
      <div className="bg-[#e0ff3c] text-black text-sm px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-medium">
        <span>Demo site concept by Armstrong Digital.</span>
        <Link to="/" className="underline underline-offset-4">
          Get one like it for $149/month →
        </Link>
      </div>

      <header className="sticky top-0 z-40 bg-[#08090a]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold tracking-[-0.03em] text-lg">
            APEX<span className="text-[#e0ff3c]">.</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#packages" className="hover:text-[#e0ff3c] transition-colors">Packages</a>
            <a href="#work" className="hover:text-[#e0ff3c] transition-colors">Results</a>
            <a href="#process" className="hover:text-[#e0ff3c] transition-colors">How it works</a>
          </nav>
          <a
            href="#book"
            className="rounded-full bg-[#e0ff3c] text-black px-5 py-2.5 text-sm font-semibold hover:bg-white transition-colors"
          >
            Book now
          </a>
        </div>
      </header>

      <main>
        {/* Hero — asymmetric split, oversized type over dark photography */}
        <section className="relative overflow-hidden">
          <img
            src={heroImg}
            alt="Glossy black sedan detailed and ceramic coated, reflecting studio lighting"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/70 to-[#08090a]/20" />
          <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 md:pt-44 md:pb-28">
            <p className="text-xs uppercase tracking-[0.32em] text-[#e0ff3c]">
              Mobile detailing · Metro Detroit
            </p>
            <h1 className="mt-6 text-[13vw] leading-[0.85] md:text-[7.5rem] font-semibold tracking-[-0.05em]">
              Wet
              <br />
              <span className="text-[#e0ff3c]">look.</span> Every
              <br />
              single time.
            </h1>
            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="text-lg text-white/70 max-w-[44ch] leading-relaxed">
                We roll up with water, power, and everything else. You hand over the keys
                and get back a car that looks better than the day you bought it.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="rounded-full bg-[#e0ff3c] text-black px-7 py-3.5 font-semibold hover:bg-white transition-colors"
                >
                  Book my detail
                </a>
                <a
                  href="#packages"
                  className="rounded-full border border-white/25 px-7 py-3.5 font-medium hover:border-[#e0ff3c] hover:text-[#e0ff3c] transition-colors"
                >
                  See packages
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee-style stat strip */}
        <section className="border-y border-white/10 bg-[#0d0f10]">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              ["We come to you", "Home or office"],
              ["7 days a week", "Evenings included"],
              ["Ceramic certified", "Installer trained"],
              ["Fully insured", "Bonded & licensed"],
            ].map(([t, s]) => (
              <div key={t} className="px-4 md:px-8 py-8 first:pl-0 last:pr-0">
                <p className="font-medium tracking-tight">{t}</p>
                <p className="mt-1 text-sm text-white/45">{s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages — numbered rows, not cards */}
        <section id="packages" className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.045em] max-w-[14ch]">
                Pick your level of obsessive.
              </h2>
              <p className="text-white/50 max-w-[34ch]">
                Every package is priced flat. No hourly creep, no surprise add-ons at the
                end.
              </p>
            </div>

            <div className="mt-16 space-y-4">
              {packages.map((p) => (
                <article
                  key={p.name}
                  className={`rounded-3xl border p-8 md:p-10 transition-colors ${
                    p.featured
                      ? "border-[#e0ff3c]/60 bg-[#e0ff3c]/[0.06]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/25"
                  }`}
                >
                  <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-start">
                    <span className="font-mono text-sm text-[#e0ff3c]">{p.tier}</span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-3">
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                          {p.name}
                        </h3>
                        <span className="text-sm text-white/40">{p.time} on site</span>
                        {p.featured && (
                          <span className="rounded-full bg-[#e0ff3c] text-black text-xs font-semibold px-3 py-1">
                            Most booked
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-white/60">{p.for}</p>
                      <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/70">
                        {p.items.map((i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-[#e0ff3c]">/</span>
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:text-right">
                      <p className="text-4xl font-semibold tracking-tight">{p.price}</p>
                      <a
                        href="#book"
                        className={`mt-4 inline-block rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                          p.featured
                            ? "bg-[#e0ff3c] text-black hover:bg-white"
                            : "border border-white/25 hover:border-[#e0ff3c] hover:text-[#e0ff3c]"
                        }`}
                      >
                        Book {p.name}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Results — offset image pair */}
        <section id="work" className="py-24 md:py-32 px-6 bg-[#0d0f10] border-y border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.045em] max-w-[16ch]">
              The part you can see from across the lot.
            </h2>
            <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-10">
              {[
                {
                  img: work1,
                  alt: "Detailer machine polishing a deep blue car hood to remove swirl marks",
                  t: "Paint correction",
                  d: "Swirls and wash marks cut back under controlled lighting, then locked in.",
                  offset: "md:mt-16",
                },
                {
                  img: work2,
                  alt: "Spotless conditioned car interior with clean leather seats and dashboard",
                  t: "Interior reset",
                  d: "Steam, extraction, and conditioning — down to the vents and seat rails.",
                  offset: "",
                },
              ].map((w) => (
                <figure key={w.t} className={`${w.offset}`}>
                  <div className="overflow-hidden rounded-3xl border border-white/10">
                    <img
                      src={w.img}
                      alt={w.alt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="w-full h-72 md:h-96 object-cover hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <h3 className="text-xl font-semibold tracking-tight">{w.t}</h3>
                    <p className="mt-2 text-white/55">{w.d}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Process — horizontal ticker steps */}
        <section id="process" className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.045em]">
              Three steps. That's it.
            </h2>
            <ol className="mt-16 grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
              {[
                ["Book online", "Pick a package and a window that works. Takes about a minute."],
                ["We arrive stocked", "Water, power, lighting, and product — all in the van."],
                ["Keys back, glossy", "Walk-around when we're done, plus care tips for the finish."],
              ].map(([t, d], i) => (
                <li key={t} className="bg-[#08090a] p-8 md:p-10">
                  <span className="font-mono text-sm text-[#e0ff3c]">0{i + 1}</span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{t}</h3>
                  <p className="mt-2 text-white/55 leading-relaxed">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Book */}
        <section id="book" className="px-6 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto rounded-[2rem] bg-[#e0ff3c] text-black px-8 py-16 md:px-16 md:py-24">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.045em] max-w-[16ch]">
              Ready to see it wet-look again?
            </h2>
            <p className="mt-5 text-black/70 max-w-[46ch] text-lg">
              Text a photo of your car and we'll confirm the right package and a time.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:+12483092722"
                className="rounded-full bg-black text-[#e0ff3c] px-8 py-4 font-semibold hover:bg-[#171a1d] transition-colors"
              >
                Call or text 248-309-2722
              </a>
              <a
                href="mailto:hello@apexdetail.example?subject=Detail%20booking"
                className="rounded-full border border-black/30 px-8 py-4 font-medium hover:bg-black/5 transition-colors"
              >
                Email the shop
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-12 text-sm text-white/45">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-between">
          <p>© {new Date().getFullYear()} Apex Auto Detailing — Metro Detroit, MI</p>
          <p>
            Website by{" "}
            <Link to="/" className="text-[#e0ff3c] hover:underline">
              Armstrong Digital
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
