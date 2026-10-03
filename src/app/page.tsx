import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { VisitorTypeSelector } from "@/components/VisitorTypeSelector";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { coreSections, getHomepageFaqs } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Katakolon Shore Excursions — Gateway to Ancient Olympia",
  description: SITE.description,
  path: "/",
  keywords: ["Katakolon shore excursions", "Ancient Olympia from Katakolon", "Katakolon cruise port guide", "Olympia shore excursion"],
});

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Katakolon Shore Excursions — Gateway to Ancient Olympia",
            description: SITE.tagline,
            path: "/",
          }),
        ]}
      />

      <section className="home-hero">
        <img src={siteImages.hero.src} alt={siteImages.hero.alt} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100">Gateway to Ancient Olympia</p>
          <h1 className="home-hero-heading">Walk Where the Olympic Games Began</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Katakolon is the cruise gateway to Ancient Olympia — the Olympic Stadium, Temple of Zeus and 2,700 years of history inland from your ship. Plan your port day around Olympia, the Archaeological Museum, Greek food, olive oil and wine with return-to-ship confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/ancient-olympia-from-katakolon" className="btn-accent">Ancient Olympia Guide</Link>
            <Link href="/best-katakolon-shore-excursions" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">Best Shore Excursions</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Ancient Olympia — the hero experience</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Return-to-ship confidence built in</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Independent &amp; passenger-first</span>
          </div>
        </div>
      </section>

      <VisitorTypeSelector />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Katakolon for cruise passengers</p>
          <h2 className="section-title mt-2">The leading independent Katakolon cruise planning authority</h2>
          <p className="section-subtitle">Not a generic Greece guide — Olympia logistics, village timing, heat and walking advice, and honest port-day planning from Katakolon pier to Ancient Olympia and back.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSections.map((s) => (
              <Link key={s.slug} href={s.href} className="nav-card group flex h-full flex-col">
                <span className="font-display text-2xl font-bold text-coastal-200">{s.number}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{s.description}</p>
                <span className="mt-3 text-sm font-semibold text-maple-600">{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-50">
        <div className="container-wide">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title">Featured Shore Excursions</h2>
              <p className="section-subtitle">Cruise-timed Olympia tours, museum visits, winery experiences, village highlights and Greek food.</p>
            </div>
            <Link href="/shore-excursions" className="btn-secondary shrink-0">All Excursions</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => {
              const image = getExcursionImage(e.slug);
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent" aria-hidden="true" />
                    <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{e.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">{e.duration} · {e.pace} · {e.snapshot.returnConfidence} return confidence</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">Here for Ancient Olympia?</h3>
            <p className="mt-3 text-gray-700">The Olympic Stadium, Temple of Zeus and sanctuary ruins are why most ships call at Katakolon. Our flagship guide covers travel times, heat, walking and return-to-ship advice for the birthplace of the Games.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/ancient-olympia-from-katakolon" className="btn-secondary text-sm">Ancient Olympia Guide</Link>
              <Link href="/is-ancient-olympia-worth-visiting-from-a-cruise-ship" className="btn-secondary text-sm">Is Olympia Worth It?</Link>
            </div>
          </div>
          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">Prefer Katakolon village?</h3>
            <p className="mt-3 text-gray-700">Waterfront cafés, shops and a short stroll from the pier suit shorter port calls. Compare Olympia versus the village before you commit your day.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/olympia-vs-katakolon-which-is-best-for-cruise-passengers" className="btn-secondary text-sm">Olympia vs Katakolon</Link>
              <Link href="/katakolon-guide" className="btn-secondary text-sm">Katakolon Guide</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Build your personalised Katakolon cruise plan</h2>
          <p className="mt-4 text-white/85">Answer a few questions about your ship and interests — get tailored Olympia excursions, port-day timing and return-to-ship advice for the Peloponnese.</p>
          <Link href="/katakolon-cruise-planner" className="btn-accent mt-8 inline-flex">Start the Cruise Planner</Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Katakolon Cruise Planning FAQs" />
        </div>
      </section>
    </>
  );
}
