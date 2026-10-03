import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Katakolon Shore Excursions",
  description: "About Katakolon Shore Excursions — the leading independent Katakolon cruise planning hub for passengers exploring Ancient Olympia from the Peloponnese cruise port.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Katakolon Shore Excursions", description: "About Katakolon Shore Excursions.", path })]} />
      <PageHero title="About Katakolon Shore Excursions" subtitle="Gateway to Ancient Olympia — an independent planning hub built for cruise passengers." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Katakolon &mdash; the gateway to Ancient Olympia, where the Olympic Games began. Many passengers arrive unsure how to fit the archaeological site, museum and village into a single port day. Our goal is to make that planning straightforward.
            </p>
            <p>
              We focus on practical port-day decisions: which excursions fit your time in port, how long the drive to Olympia really takes, when Katakolon village beats the ancient ruins, and how to build a comfortable return buffer before all-aboard. Every guide is written for real cruise timings, not generic Greece tourism.
            </p>
            <p>
              We are not affiliated with any cruise line, tour operator or the Port of Katakolon. Use our enquiry form for personalised advice on your ship and interests.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
