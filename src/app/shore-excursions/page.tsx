import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { EnquiryCTA } from "@/components/ConversionBlocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { excursionsHubImage, getExcursionImage } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Katakolon Shore Excursions",
  description:
    "Premium Katakolon shore excursions for cruise passengers — Ancient Olympia, museum visits, winery and olive oil experiences, village highlights and Greek food, all timed around your ship.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: ["Katakolon shore excursions", "Ancient Olympia shore excursion", "Katakolon cruise excursions"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Shore Excursions", path: "/shore-excursions" },
];

export default function ShoreExcursionsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Katakolon Shore Excursions", description: "Premium Katakolon shore excursions for cruise passengers.", path: "/shore-excursions" })]} />
      <PhotoHeroBand
        image={excursionsHubImage}
        eyebrow="Gateway to Ancient Olympia"
        title="Katakolon Shore Excursions"
        subtitle="Passenger-first tours built around your port day — Ancient Olympia, museum, winery, olive oil and Peloponnese scenery with reliable return-to-ship timing."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            Every excursion below is designed for cruise passengers — pier pickup, Olympia timing, honest walking notes and return-to-ship confidence ratings. Open any tour for the full cruise-passenger snapshot, FAQs and enquiry options.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursions.map((e) => {
              const image = getExcursionImage(e.slug);
              return (
                <Link key={e.slug} href={`/shore-excursions/${e.slug}`} className="card-editorial group overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent" aria-hidden="true" />
                    <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{e.title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">{e.duration} · Return confidence: {e.snapshot.returnConfidence}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <EnquiryCTA />
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
