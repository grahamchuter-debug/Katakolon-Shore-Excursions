import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShipScheduleHubView } from "@/components/ShipScheduleHubView";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getSchedulePortBySlug } from "@/data/schedules";
import { SCHEDULE_BASE, SCHEDULE_PORT_SLUG } from "@/lib/schedule-utils";

const path = SCHEDULE_BASE;

export const metadata = buildMetadata({
  title: "Katakolon Cruise Ship Schedule",
  description:
    "Katakolon cruise ship schedule by year and month. See which ships are in port before booking Ancient Olympia shore excursions and planning your day ashore.",
  path,
  keywords: ["Katakolon cruise ship schedule", "Katakolon cruise calendar", "ships in port Katakolon"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Katakolon Cruise Ship Schedule", path },
];

export default function KatakolonCruiseShipSchedulePage() {
  const port = getSchedulePortBySlug(SCHEDULE_PORT_SLUG);
  if (!port) return null;

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Katakolon Cruise Ship Schedule", description: port.intro, path }), ...(port.faqs ? [faqSchema(port.faqs)] : [])]} />
      <PageHero title="Katakolon Cruise Ship Schedule" subtitle={port.description} compact />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <ShipScheduleHubView port={port} />
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
