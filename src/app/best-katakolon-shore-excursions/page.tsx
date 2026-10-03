import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { EnquiryCTA } from "@/components/ConversionBlocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { getExcursionImage, subjectImages } from "@/lib/images";
import { getTier1Guides } from "@/data/guides";

const path = "/best-katakolon-shore-excursions";
const image = subjectImages.highlights;

export const metadata = buildMetadata({
  title: "Best Katakolon Shore Excursions for Cruise Passengers",
  description:
    "Compare the best Katakolon shore excursions for cruise passengers — Ancient Olympia, museum visits, winery and olive oil experiences, village highlights and honest return-to-ship timing.",
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["best Katakolon shore excursions", "Ancient Olympia shore excursion", "Katakolon cruise excursions"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Best Katakolon Shore Excursions", path },
];

const comparison = {
  title: "Excursion comparison for cruise passengers",
  headers: ["Excursion", "Duration", "Return confidence", "Best for"],
  rows: excursions.map((e) => [e.title, e.duration, e.snapshot.returnConfidence, e.bestFor]),
};

const faqs = [
  { question: "What is the best Katakolon shore excursion for first-time visitors?", answer: "An Ancient Olympia tour is the strongest first choice — the Olympic Stadium, Temple of Zeus and archaeological site with cruise-timed returns from the pier." },
  { question: "Can I visit Olympia and the museum on one port day?", answer: "Yes, on calls with 6–7+ usable hours. Combined museum tours pair both sites with built-in return margins." },
  { question: "Is Katakolon village worth it instead of Olympia?", answer: "On short calls or for passengers who prefer a relaxed waterfront day over ancient ruins and summer heat. The village is walkable from the pier." },
  { question: "Are Katakolon shore excursions better than going independent?", answer: "Organised tours remove Olympia transfer timing risk. Independent taxis work for confident passengers with longer port windows." },
  { question: "What should I avoid booking on a short port call?", answer: "Full-day Olympia plus winery, or Olympia plus beach combinations. Stick to village highlights or a focused Olympia run on 5-hour calls." },
  { question: "How do I choose between food tours and Olympia?", answer: "Olympia on standard-length calls; food and olive oil tours pair well with longer port days or as village add-ons." },
];

export default function BestKatakolonShoreExcursionsPage() {
  const featured = excursions.filter((e) => e.featured);
  const tier1 = getTier1Guides();

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs), articleSchema({ title: "Best Katakolon Shore Excursions", description: metadata.description as string, path, image: image.src })]} />
      <PhotoHeroBand image={image} eyebrow="Excursion guide" title="Best Katakolon Shore Excursions" subtitle="Honest comparisons for cruise passengers — Ancient Olympia, museum, winery, olive oil and return-to-ship confidence on every option." compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-lg leading-relaxed text-gray-700">
            Katakolon rewards cruise passengers who plan around Ancient Olympia — birthplace of the Olympic Games — with village strolls, Greek food and Peloponnese wine as strong alternatives on longer calls. Use the comparison table below, then open each excursion for full cruise-passenger details.
          </p>

          <div className="mt-10 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  {comparison.headers.map((h) => <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {comparison.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} className={`px-4 py-3 ${i === 0 ? "font-medium text-gray-900" : "text-gray-600"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-6">Top picks for cruise passengers</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((e) => {
              const img = getExcursionImage(e.slug);
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{e.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-2 text-xs font-medium text-coastal-700">Return confidence: {e.snapshot.returnConfidence}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12">
            <h2 className="section-title text-2xl mb-6">Plan before you book</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tier1.map((g) => (
                <Link key={g.slug} href={g.path} className="nav-card">
                  <h3 className="font-display text-base font-bold text-gray-900">{g.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{g.tagline}</p>
                </Link>
              ))}
            </div>
          </div>

          <EnquiryCTA />

          <div className="mt-12"><FAQSection faqs={faqs} title="Best Katakolon Shore Excursions — FAQs" /></div>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
