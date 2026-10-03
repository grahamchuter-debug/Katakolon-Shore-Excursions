import Link from "next/link";
import type { GuidePage } from "@/data/types";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { EnquiryCTA, ReturnToShipBlock } from "@/components/ConversionBlocks";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { getGuideImage } from "@/lib/images";
import { excursions } from "@/data/excursions";
import { getGuideBySlug } from "@/data/guides";

function ContentTable({ table }: { table: { title: string; headers: string[]; rows: string[][] } }) {
  if (!table) return null;
  return (
    <div className="mt-8">
      <h3 className="font-display text-lg font-bold text-gray-900 mb-3">{table.title}</h3>
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-coastal-800 text-white">
            <tr>
              {table.headers.map((h) => (
                <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-gray-700">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function GuideArticle({ guide }: { guide: GuidePage }) {
  const image = getGuideImage(guide.imageKey);
  const related = guide.relatedGuideSlugs
    .map((s) => getGuideBySlug(s))
    .filter(Boolean) as GuidePage[];
  const relatedExcursion = guide.relatedExcursionSlug
    ? excursions.find((e) => e.slug === guide.relatedExcursionSlug)
    : undefined;

  const parent = guide.breadcrumbParent ?? { name: "Katakolon Cruise Port Guide", path: "/katakolon-cruise-port-guide" };
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: parent.name, path: parent.path },
    { name: guide.title, path: guide.path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(guide.faqs),
          articleSchema({ title: guide.seoTitle, description: guide.metaDescription, path: guide.path, image: image.src }),
        ]}
      />
      <PhotoHeroBand image={image} eyebrow={guide.eyebrow} title={guide.title} subtitle={guide.tagline} compact />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          {(guide.distanceFromPort || guide.travelTime || guide.timeNeeded) && (
            <div className="mb-8 grid gap-3 sm:grid-cols-3">
              {guide.distanceFromPort && (
                <div className="card-feature"><p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">Distance</p><p className="mt-1 text-sm font-medium text-gray-900">{guide.distanceFromPort}</p></div>
              )}
              {guide.travelTime && (
                <div className="card-feature"><p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">Travel time</p><p className="mt-1 text-sm font-medium text-gray-900">{guide.travelTime}</p></div>
              )}
              {guide.timeNeeded && (
                <div className="card-feature"><p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">Time needed</p><p className="mt-1 text-sm font-medium text-gray-900">{guide.timeNeeded}</p></div>
              )}
            </div>
          )}

          <p className="text-lg leading-relaxed text-gray-700">{guide.overview}</p>
          <div className="prose-body">
            {guide.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {guide.gettingThere && guide.gettingThere.length > 0 && (
            <>
              <h2 className="section-title text-2xl mt-10 mb-4">How to get there</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-coastal-800 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Method</th>
                      <th className="px-4 py-3 text-left font-semibold">Detail</th>
                      <th className="px-4 py-3 text-left font-semibold">Time</th>
                      <th className="px-4 py-3 text-left font-semibold">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {guide.gettingThere.map((g) => (
                      <tr key={g.method}>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{g.method}</td>
                        <td className="px-4 py-3 text-gray-600">{g.detail}</td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{g.time}</td>
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{g.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {guide.planningTables?.map((table) => <ContentTable key={table.title} table={table} />)}
          {guide.comparisonTables?.map((table) => <ContentTable key={table.title} table={table} />)}

          {guide.didYouKnow && guide.didYouKnow.length > 0 && (
            <div className="mt-10">
              <h2 className="section-title text-2xl mb-4">Did you know?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {guide.didYouKnow.map((fact) => (
                  <div key={fact} className="card-feature text-sm text-gray-700">{fact}</div>
                ))}
              </div>
            </div>
          )}

          {guide.photographyTips && guide.photographyTips.length > 0 && (
            <div className="mt-10">
              <h2 className="section-title text-2xl mb-4">Photography tips</h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                {guide.photographyTips.map((tip) => <li key={tip}>{tip}</li>)}
              </ul>
            </div>
          )}

          {(guide.highlights || guide.tips) && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {guide.highlights && (
                <div className="card-feature">
                  <h2 className="font-display text-xl font-bold text-gray-900">Highlights</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                    {guide.highlights.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              )}
              {guide.tips && (
                <div className="card-feature">
                  <h2 className="font-display text-xl font-bold text-gray-900">Tips for cruise passengers</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                    {guide.tips.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}

          {guide.returnToShip && <ReturnToShipBlock text={guide.returnToShip} />}

          {relatedExcursion && (
            <div className="mt-10 card-accent flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-maple-600">Prefer a guided tour?</p>
                <h2 className="mt-1 font-display text-xl font-bold text-gray-900">{relatedExcursion.title}</h2>
                <p className="mt-1 text-sm text-gray-600">{relatedExcursion.tagline}</p>
              </div>
              <Link href={`/shore-excursions/${relatedExcursion.slug}`} className="btn-primary shrink-0">View excursion</Link>
            </div>
          )}

          {guide.tier === 1 && related.length > 0 && (
            <div className="mt-12">
              <h2 className="section-title text-2xl mb-6">Essential Katakolon cruise planning</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} href={r.path} className="nav-card">
                    <h3 className="font-display text-base font-bold text-gray-900">{r.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{r.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <EnquiryCTA />

          <div className="mt-12">
            <FAQSection faqs={guide.faqs} title={`${guide.title} — FAQs`} />
          </div>

          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
