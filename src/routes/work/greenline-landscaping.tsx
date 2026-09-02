import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/landscaping-hero.jpg";
import work1 from "@/assets/landscaping-work-1.jpg";
import work2 from "@/assets/landscaping-work-2.jpg";

const title = "Greenline Landscaping — Lawn Care & Landscape Design in Metro Detroit";
const description =
  "Demo concept site by Armstrong Digital: Greenline Landscaping offers lawn care, landscape design, patios, and seasonal cleanups across Metro Detroit.";
const url = "https://armstrong-digital.lovable.app/work/greenline-landscaping";

export const Route = createFileRoute("/work/greenline-landscaping")({
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
          "@type": "LandscapingBusiness",
          name: "Greenline Landscaping",
          description,
          url,
          telephone: "+1-248-555-0147",
          areaServed: ["Metro Detroit", "Oakland County", "Macomb County"],
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: DemoSite,
});

const services = [
  {
    title: "Weekly Lawn Care",
    body: "Mowing, edging, and blowing on a set schedule — your yard looks kept without you thinking about it.",
  },
  {
    title: "Landscape Design & Install",
    body: "Bed design, plantings, mulch, and stone edging planned for your property and Michigan's climate.",
  },
  {
    title: "Patios & Retaining Walls",
    body: "Paver patios, walkways, and retaining walls built to last — and to drain properly through freeze-thaw cycles.",
  },
  {
    title: "Spring & Fall Cleanups",
    body: "Leaf removal, bed refresh, pruning, and gutter-adjacent cleanup so each season starts clean.",
  },
];

const steps = [
  { n: "01", t: "Walk the property", d: "We come out, look at sun, drainage, and soil, and talk through what you want." },
  { n: "02", t: "Straightforward quote", d: "A clear price per visit or per project. No hourly mystery math." },
  { n: "03", t: "We handle the rest", d: "Scheduled crews, tidy job sites, and a text when we're done." },
];

const reviews = [
  {
    q: "Our backyard went from a muddy slope to a patio we actually use every weekend. Worth every penny.",
    a: "Sarah M., Rochester Hills",
  },
  {
    q: "They've mowed for us two seasons now. Same day every week, gates always closed, stripes always straight.",
    a: "Tom W., Shelby Township",
  },
  {
    q: "The fall cleanup crew had the whole yard done in one afternoon — leaves, beds, everything.",
    a: "Alicia G., Troy",
  },
];

function DemoSite() {
  return (
    <div className="min-h-screen bg-[#f4f3ec] text-[#1c2b21] antialiased font-sans">
      {/* Demo banner from Armstrong Digital */}
      <div className="bg-[#1c2b21] text-[#f4f3ec] text-sm px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="opacity-80">
          Demo concept site built by Armstrong Digital.
        </span>
        <Link to="/" className="underline underline-offset-4 hover:opacity-80">
          Get one like it for $149/month →
        </Link>
      </div>

      <header className="sticky top-0 z-40 bg-[#f4f3ec]/90 backdrop-blur border-b border-[#1c2b21]/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold tracking-tight text-lg">
            Greenline <span className="text-[#2f6b3a]">Landscaping</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-[#2f6b3a]">Services</a>
            <a href="#work" className="hover:text-[#2f6b3a]">Our work</a>
            <a href="#process" className="hover:text-[#2f6b3a]">Process</a>
            <a href="#quote" className="hover:text-[#2f6b3a]">Free quote</a>
          </nav>
          <a
            href="tel:+12485550147"
            className="rounded-full bg-[#2f6b3a] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#245530] transition-colors"
          >
            248-555-0147
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <img
            src={heroImg}
            alt="Greenline Landscaping crew edging a fresh lawn and mulch beds at a suburban home"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c2b21]/92 via-[#1c2b21]/75 to-[#1c2b21]/30" />
          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-[#f4f3ec]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#a7c4a0]">
              Serving Metro Detroit since 2015
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-[16ch]">
              A yard you're proud of, without the weekends.
            </h1>
            <p className="mt-6 text-lg text-[#f4f3ec]/80 max-w-[52ch]">
              Weekly lawn care, full landscape installs, and hardscapes across
              Oakland and Macomb County — quoted clearly, done on schedule.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="rounded-full bg-[#2f6b3a] px-7 py-3.5 font-medium hover:bg-[#245530] transition-colors"
              >
                Get my free quote
              </a>
              <a
                href="tel:+12485550147"
                className="rounded-full border border-[#f4f3ec]/40 px-7 py-3.5 font-medium hover:bg-[#f4f3ec]/10 transition-colors"
              >
                Call 248-555-0147
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl">
              {[
                ["300+", "Yards maintained"],
                ["4.8★", "Google rating"],
                ["48 hr", "Quote turnaround"],
                ["100%", "Satisfaction guarantee"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-semibold">{v}</dt>
                  <dd className="text-sm text-[#f4f3ec]/65">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What we do
            </h2>
            <p className="mt-4 text-[#1c2b21]/70 max-w-[58ch]">
              One crew for everything outside — from weekly mowing to full
              backyard builds.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl bg-white border border-[#1c2b21]/10 p-8 hover:border-[#2f6b3a]/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[#1c2b21]/70 leading-relaxed">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-24 px-6 bg-white border-y border-[#1c2b21]/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Recent projects
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                { img: work1, alt: "Paver patio with retaining walls, fountain, and landscape lighting at dusk", t: "Patio & retaining wall — Rochester Hills, MI", d: "Sloped backyard rebuilt with terraced walls, pavers, and lighting." },
                { img: work2, alt: "Landscaper trimming hedges along a manicured lawn", t: "Full-season maintenance — Troy, MI", d: "Weekly mowing plus hedge trimming, mulch, and seasonal cleanups." },
              ].map((w) => (
                <figure key={w.t} className="rounded-2xl overflow-hidden border border-[#1c2b21]/10">
                  <img
                    src={w.img}
                    alt={w.alt}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full h-64 object-cover"
                  />
                  <figcaption className="p-6">
                    <h3 className="font-semibold tracking-tight">{w.t}</h3>
                    <p className="mt-2 text-sm text-[#1c2b21]/70">{w.d}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              How it works
            </h2>
            <ol className="mt-12 grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl bg-white border border-[#1c2b21]/10 p-8">
                  <span className="text-sm font-mono text-[#2f6b3a]">{s.n}</span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-2 text-[#1c2b21]/70">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-24 px-6 bg-[#1c2b21] text-[#f4f3ec]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What neighbors say
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <blockquote
                  key={r.a}
                  className="rounded-2xl border border-[#f4f3ec]/15 p-8 bg-[#f4f3ec]/[0.04]"
                >
                  <p className="text-[#f4f3ec]/85 leading-relaxed">“{r.q}”</p>
                  <footer className="mt-5 text-sm text-[#a7c4a0]">{r.a}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Get your free quote
            </h2>
            <p className="mt-4 text-[#1c2b21]/70">
              Tell us about your yard and we'll walk it within 48 hours — free, no obligation.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+12485550147"
                className="rounded-full bg-[#2f6b3a] text-white px-8 py-4 font-medium hover:bg-[#245530] transition-colors"
              >
                Call 248-555-0147
              </a>
              <a
                href="mailto:josh@armstrong-digital.com?subject=Landscaping%20demo%20inquiry"
                className="rounded-full border border-[#1c2b21]/25 px-8 py-4 font-medium hover:bg-[#1c2b21]/5 transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1c2b21]/10 px-6 py-12 text-sm text-[#1c2b21]/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-between">
          <p>© {new Date().getFullYear()} Greenline Landscaping — Metro Detroit, MI (demo concept)</p>
          <p>
            Website by{" "}
            <Link to="/" className="text-[#2f6b3a] hover:underline">
              Armstrong Digital
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
