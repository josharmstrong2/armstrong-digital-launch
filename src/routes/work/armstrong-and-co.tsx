import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/roofing-hero.jpg";
import work1 from "@/assets/roofing-work-1.jpg";
import work2 from "@/assets/roofing-work-2.jpg";

const title = "Armstrong & Co Roofing — Roof Repair & Replacement in Metro Detroit";
const description =
  "Armstrong & Co Roofing installs and repairs residential roofs across Metro Detroit. Free inspections, storm damage repair, and full roof replacement. Call 248-309-2722.";
const url = "https://armstrong-digital.lovable.app/work/armstrong-and-co";

export const Route = createFileRoute("/work/armstrong-and-co")({
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
          "@type": "RoofingContractor",
          name: "Armstrong & Co Roofing",
          description,
          url,
          telephone: "+1-248-309-2722",
          areaServed: ["Metro Detroit", "Oakland County", "Macomb County"],
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: ClientSite,
});

const services = [
  {
    title: "Roof Replacement",
    body: "Full tear-off and new architectural shingle systems, installed to manufacturer spec with a written warranty.",
  },
  {
    title: "Storm & Hail Damage",
    body: "Fast inspections after a storm, documented photos, and direct help working through your insurance claim.",
  },
  {
    title: "Leak Repair",
    body: "We find the actual source — flashing, valleys, boots, or decking — and fix it, not just the stain on your ceiling.",
  },
  {
    title: "Gutters & Ventilation",
    body: "Seamless gutters, guards, and attic ventilation that keeps your new roof performing through Michigan winters.",
  },
];

const steps = [
  { n: "01", t: "Free inspection", d: "We climb it, photograph it, and show you exactly what we found." },
  { n: "02", t: "Clear written quote", d: "One page. Real numbers. No pressure and no surprise line items." },
  { n: "03", t: "Install in a day", d: "Most homes are torn off and finished in a single day, site left spotless." },
];

const reviews = [
  {
    q: "They found the leak two other companies missed, fixed it the same week, and charged less than the estimates I had.",
    a: "Dana R., Royal Oak",
  },
  {
    q: "Whole roof done in one day. The crew cleaned up so well you couldn't tell they'd been here.",
    a: "Mike T., Sterling Heights",
  },
  {
    q: "Walked me through the insurance claim step by step. Honest people, which is rare in this trade.",
    a: "Priya S., Troy",
  },
];

function ClientSite() {
  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#16202b] antialiased font-sans">
      {/* Portfolio banner from Armstrong Digital */}
      <div className="bg-[#16202b] text-[#f7f6f3] text-sm px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="opacity-80">A live client site built by Armstrong Digital.</span>
        <Link to="/" className="underline underline-offset-4 hover:opacity-80">
          Get one like it for $149/month →
        </Link>
      </div>

      <header className="sticky top-0 z-40 bg-[#f7f6f3]/90 backdrop-blur border-b border-[#16202b]/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold tracking-tight text-lg">
            Armstrong <span className="text-[#c2410c]">&amp; Co</span> Roofing
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-[#c2410c]">Services</a>
            <a href="#work" className="hover:text-[#c2410c]">Our work</a>
            <a href="#process" className="hover:text-[#c2410c]">Process</a>
            <a href="#quote" className="hover:text-[#c2410c]">Free quote</a>
          </nav>
          <a
            href="tel:+12483092722"
            className="rounded-full bg-[#c2410c] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#9a3412] transition-colors"
          >
            248-309-2722
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <img
            src={heroImg}
            alt="Armstrong & Co Roofing crew installing architectural shingles on a suburban home"
            width={1600}
            height={1104}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16202b]/92 via-[#16202b]/75 to-[#16202b]/30" />
          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36 text-[#f7f6f3]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#fdba74]">
              Serving Metro Detroit since 2011
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-[16ch]">
              A roof done right, in a single day.
            </h1>
            <p className="mt-6 text-lg text-[#f7f6f3]/80 max-w-[52ch]">
              Free inspections, honest written quotes, and licensed crews for roof repair,
              storm damage, and full replacement across Oakland and Macomb County.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="rounded-full bg-[#c2410c] px-7 py-3.5 font-medium hover:bg-[#9a3412] transition-colors"
              >
                Get my free inspection
              </a>
              <a
                href="tel:+12483092722"
                className="rounded-full border border-[#f7f6f3]/40 px-7 py-3.5 font-medium hover:bg-[#f7f6f3]/10 transition-colors"
              >
                Call 248-309-2722
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl">
              {[
                ["1,200+", "Roofs installed"],
                ["4.9★", "Google rating"],
                ["24 hr", "Storm response"],
                ["10 yr", "Workmanship warranty"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-semibold">{v}</dt>
                  <dd className="text-sm text-[#f7f6f3]/65">{l}</dd>
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
            <p className="mt-4 text-[#16202b]/70 max-w-[58ch]">
              Residential roofing only — it's all we do, and it's why we're fast and
              accurate at it.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="rounded-2xl bg-white border border-[#16202b]/10 p-8 hover:border-[#c2410c]/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[#16202b]/70 leading-relaxed">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-24 px-6 bg-white border-y border-[#16202b]/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Recent jobs
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {[
                { img: work1, alt: "Completed shingle roof replacement on a brick suburban home", t: "Full replacement — Troy, MI", d: "Tear-off and new architectural shingles, completed in one day." },
                { img: work2, alt: "Roofer inspecting storm-damaged shingles", t: "Storm claim — Rochester Hills, MI", d: "Hail damage documented and approved by the homeowner's insurer." },
              ].map((w) => (
                <figure key={w.t} className="rounded-2xl overflow-hidden border border-[#16202b]/10">
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
                    <p className="mt-2 text-sm text-[#16202b]/70">{w.d}</p>
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
                <li key={s.n} className="rounded-2xl bg-white border border-[#16202b]/10 p-8">
                  <span className="text-sm font-mono text-[#c2410c]">{s.n}</span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-2 text-[#16202b]/70">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-24 px-6 bg-[#16202b] text-[#f7f6f3]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              What neighbors say
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {reviews.map((r) => (
                <blockquote
                  key={r.a}
                  className="rounded-2xl border border-[#f7f6f3]/15 p-8 bg-[#f7f6f3]/[0.04]"
                >
                  <p className="text-[#f7f6f3]/85 leading-relaxed">“{r.q}”</p>
                  <footer className="mt-5 text-sm text-[#fdba74]">{r.a}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Get your free roof inspection
            </h2>
            <p className="mt-4 text-[#16202b]/70">
              Call or text and we'll be out within 48 hours — no charge, no obligation.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+12483092722"
                className="rounded-full bg-[#c2410c] text-white px-8 py-4 font-medium hover:bg-[#9a3412] transition-colors"
              >
                Call 248-309-2722
              </a>
              <a
                href="mailto:jricharm7@icloud.com?subject=Free%20roof%20inspection"
                className="rounded-full border border-[#16202b]/25 px-8 py-4 font-medium hover:bg-[#16202b]/5 transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#16202b]/10 px-6 py-12 text-sm text-[#16202b]/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-between">
          <p>© {new Date().getFullYear()} Armstrong &amp; Co Roofing — Metro Detroit, MI</p>
          <p>
            Website by{" "}
            <Link to="/" className="text-[#c2410c] hover:underline">
              Armstrong Digital
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
