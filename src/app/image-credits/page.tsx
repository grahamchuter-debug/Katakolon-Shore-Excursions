import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { IMAGE_CREDITS } from "@/data/image-credits";

const path = "/image-credits";

export const metadata = buildMetadata({
  title: "Photo Credits",
  description: "Sources, photographers and licences for the photographs used on Katakolon Shore Excursions.",
  path,
  noindex: true,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Photo Credits", path },
];

export default function ImageCreditsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Photo Credits", description: "Photo credits for Katakolon Shore Excursions.", path })]} />
      <PageHero title="Photo Credits" subtitle="The photographers and licences behind the images on this site." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              The photographs on this site are published under Creative Commons licences by the photographers listed below. Follow each link for the original file and the full licence terms.
            </p>
            <ul>
              {IMAGE_CREDITS.map((credit) => (
                <li key={credit.filename}>
                  <strong>{credit.workTitle}</strong> by {credit.creator}, via{" "}
                  <a href={credit.sourceUrl} rel="noopener noreferrer">{credit.sourcePlatform}</a>. Licence:{" "}
                  <a href={credit.licenceUrl} rel="noopener noreferrer license">{credit.licence}</a>. {credit.modifications}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
