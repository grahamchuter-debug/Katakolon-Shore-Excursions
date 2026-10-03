import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/enquire";

export const metadata = buildMetadata({
  title: "Enquire / Contact",
  description: "Get in touch about Katakolon cruise planning — Ancient Olympia shore excursions, port-day timing, Greek food and return-to-ship questions. We're happy to help you plan your day.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Enquire", path },
];

export default function EnquirePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Enquire / Contact", description: "Get in touch about Katakolon cruise planning.", path })]} />
      <PageHero title="Enquire / Contact" subtitle="Questions about your Katakolon port day, Ancient Olympia excursions or return-to-ship timing? Tell us your ship and interests and we'll point you in the right direction." compact />
      <section className="section-padding">
        <div className="container-wide max-w-xl">
          <Breadcrumbs items={breadcrumbs} />
          <form className="card-feature space-y-4" action={`mailto:${SITE.email}`} method="post" encType="text/plain">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input id="name" name="name" type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="ship" className="block text-sm font-medium text-gray-700 mb-1">Ship &amp; sailing date</label>
              <input id="ship" name="ship" type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" rows={5} placeholder="Tell us your port window, interests (Olympia, museum, food, winery…) and any mobility needs." className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm" />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">Send enquiry</button>
          </form>
          <p className="mt-4 text-xs text-gray-500">Enquiry only — we will respond by email. No online booking yet.</p>
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
