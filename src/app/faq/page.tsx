import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getAllFaqs } from "@/data/faqs";

const path = "/faq";

export const metadata = buildMetadata({
  title: "Katakolon Cruise FAQ",
  description: "Frequently asked questions about Katakolon cruise planning — pier access, Ancient Olympia, shore excursions, heat and walking, and getting back to your ship.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path },
];

export default function FaqPage() {
  const faqs = getAllFaqs();

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(faqs), webPageSchema({ title: "Katakolon Cruise FAQ", description: "Frequently asked questions about Katakolon cruise planning.", path })]} />
      <PageHero title="Katakolon Cruise Planning FAQ" subtitle="Answers to the most common questions from Katakolon cruise passengers." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <FAQSection faqs={faqs} />
          <div className="mt-12"><PlanningLinks /></div>
        </div>
      </section>
    </>
  );
}
