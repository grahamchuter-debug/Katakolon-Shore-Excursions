import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { EnquiryCTA } from "@/components/ConversionBlocks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { subjectImages } from "@/lib/images";
import { guides } from "@/data/guides";

const path = "/things-to-do-in-katakolon-from-a-cruise-ship";
const image = subjectImages["katakolon-village"];

export const metadata = buildMetadata({
  title: "Things To Do In Katakolon From A Cruise Ship",
  description:
    "What to do in Katakolon from a cruise ship — Ancient Olympia, Archaeological Museum, village waterfront, Greek food, olive oil, winery and beach options with honest timing for every port window.",
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["things to do Katakolon cruise ship", "Katakolon port day activities", "Olympia from cruise ship"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Things To Do", path },
];

const activityRows = [
  ["Ancient Olympia archaeological site", "Coach / tour", "2–2.5 hours on site", "6+ hours", "High"],
  ["Archaeological Museum of Olympia", "Walk from site / tour", "45–60 min", "6+ hours", "High"],
  ["Katakolon village & waterfront", "Walk", "1–2 hours", "4+ hours", "High"],
  ["Olympic Stadium & Temple of Zeus", "Within Olympia site", "Included in site visit", "6+ hours", "High"],
  ["Mercouri Estate winery", "Coach from Olympia", "45–60 min", "7+ hours", "Medium"],
  ["Olive oil tasting", "Coach / tour", "30–45 min", "7+ hours", "High"],
  ["Kourouta Beach", "Coach / taxi", "1–2 hours", "6+ hours", "Medium"],
  ["Greek food experience", "Guided / village", "2–3 hours", "5+ hours", "High"],
  ["Peloponnese scenic tour", "Coach", "3–4 hours", "6+ hours", "Medium"],
];

const faqs = [
  { question: "What can I do in Katakolon on a short port call?", answer: "Focus on the village waterfront — shops, cafés and the railway museum are walkable from the pier within minutes." },
  { question: "Is Ancient Olympia walkable from the cruise port?", answer: "No — Olympia is 35 km inland. You need a coach, taxi or organised tour; allow 35–45 minutes each way." },
  { question: "What's the single best activity for first-time visitors?", answer: "Ancient Olympia — the Olympic Stadium and Temple of Zeus are among Greece's greatest heritage sights. An organised tour is the safest way to fit them into a port day." },
  { question: "Can families enjoy Katakolon on a port day?", answer: "Yes. The village fascinates children, Olympia impresses older kids and teens, and beach options suit longer calls. Heat at Olympia requires planning — go early and carry water." },
  { question: "When should I book an organised tour?", answer: "When you want Olympia with comfortable return timing, or Olympia plus museum on a single port day. Independent taxi timing is risky on tight schedules." },
  { question: "How do I plan around multiple interests?", answer: "Use our one-day itineraries or cruise planner — Olympia in the morning on long calls, or village and food on shorter windows." },
];

const destinationGuides = guides.filter((g) =>
  ["ancient-olympia-from-katakolon", "katakolon-guide", "greek-food-guide", "olive-oil-guide", "local-winery-guide", "olympic-stadium-guide"].includes(g.slug),
);

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs), articleSchema({ title: "Things To Do In Katakolon From A Cruise Ship", description: metadata.description as string, path, image: image.src })]} />
      <PhotoHeroBand image={image} eyebrow="Port-day ideas" title="Things To Do In Katakolon From A Cruise Ship" subtitle="Ancient Olympia, museum, village, food, wine and beach — honest timing and return confidence for every port window." compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-lg leading-relaxed text-gray-700">
            Katakolon is one of the Mediterranean&apos;s most focused cruise ports — most passengers head inland to Ancient Olympia, but the village, Peloponnese food and Ionian coast reward those who plan around their hours ashore. Use the activity matrix below, then dive into our destination guides.
          </p>

          <div className="mt-10 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  {["Activity", "How to get there", "Time needed", "Min. port call", "Return confidence"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {activityRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i} className={`px-4 py-3 ${i === 0 ? "font-medium text-gray-900" : "text-gray-600"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="section-title text-2xl mt-12 mb-6">Destination guides</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {destinationGuides.map((g) => (
              <Link key={g.slug} href={g.path} className="nav-card">
                <h3 className="font-display text-base font-bold text-gray-900">{g.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{g.tagline}</p>
              </Link>
            ))}
          </div>

          <EnquiryCTA />

          <div className="mt-12"><FAQSection faqs={faqs} title="Things To Do — FAQs" /></div>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
