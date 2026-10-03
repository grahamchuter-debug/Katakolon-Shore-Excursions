import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { KatakolonCruisePlanner } from "@/components/KatakolonCruisePlanner";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { subjectImages } from "@/lib/images";

const path = "/katakolon-cruise-planner";
const image = subjectImages.planner;

export const metadata = buildMetadata({
  title: "Katakolon Cruise Planner",
  description:
    "Build a personalised Katakolon cruise plan — Ancient Olympia excursions, port-day timing and return-to-ship advice tailored to your ship, interests and mobility.",
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["Katakolon cruise planner", "plan Katakolon port day", "Olympia cruise planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Katakolon Cruise Planner", path },
];

export default function KatakolonCruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Katakolon Cruise Planner", description: metadata.description as string, path })]} />
      <PhotoHeroBand image={image} eyebrow="Gateway to Ancient Olympia" title="Katakolon Cruise Planner" subtitle="Answer a few questions and get tailored Olympia excursions, port guides and a realistic day plan for your Katakolon cruise visit." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <KatakolonCruisePlanner />
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
