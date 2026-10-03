import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScheduleTable } from "@/components/ScheduleTable";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import {
  getSchedulePortBySlug,
  getScheduleEntriesForYear,
  getScheduleEntriesForMonth,
  getVerifiedMonthKeys,
} from "@/data/schedules";
import {
  parseScheduleYear,
  parseMonthSlug,
  portHubPath,
  portYearPath,
  portMonthPath,
  formatMonthLabel,
  monthKeyToSlug,
  getMonthsWithEntries,
  parseMonthKey,
  isValidScheduleYear,
  SCHEDULE_YEARS,
  SCHEDULE_BASE,
  SCHEDULE_PORT_SLUG,
} from "@/lib/schedule-utils";

export function generateStaticParams() {
  const params: { segment: string }[] = [];
  for (const year of SCHEDULE_YEARS) {
    params.push({ segment: String(year) });
  }
  for (const monthKey of getVerifiedMonthKeys(SCHEDULE_PORT_SLUG)) {
    params.push({ segment: monthKeyToSlug(monthKey) });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ segment: string }> }) {
  const { segment } = await params;
  const port = getSchedulePortBySlug(SCHEDULE_PORT_SLUG);
  if (!port) return {};

  const year = parseScheduleYear(segment);
  if (year) {
    return buildMetadata({
      title: `${port.name} Cruise Ship Schedule ${year}`,
      description: `${port.name} cruise ship arrivals and departures for ${year}. Plan shore excursions around published port times.`,
      path: portYearPath(SCHEDULE_PORT_SLUG, year),
    });
  }

  const monthKey = parseMonthSlug(segment);
  if (monthKey) {
    const label = formatMonthLabel(monthKey);
    return buildMetadata({
      title: `${port.name} Cruise Ship Schedule — ${label}`,
      description: `${port.name} cruise ship schedule for ${label}. Verified arrival and departure times for port-day planning.`,
      path: portMonthPath(SCHEDULE_PORT_SLUG, monthKey),
    });
  }

  return {};
}

export default async function KatakolonScheduleSegmentPage({ params }: { params: Promise<{ segment: string }> }) {
  const { segment } = await params;
  const port = getSchedulePortBySlug(SCHEDULE_PORT_SLUG);
  if (!port) notFound();

  const year = parseScheduleYear(segment);
  const monthKey = parseMonthSlug(segment);
  if (!year && !monthKey) notFound();

  if (year) {
    const entries = getScheduleEntriesForYear(SCHEDULE_PORT_SLUG, year);
    const monthKeys = getMonthsWithEntries(entries);

    const breadcrumbs = [
      { name: "Home", path: "/" },
      { name: "Katakolon Cruise Ship Schedule", path: SCHEDULE_BASE },
      { name: String(year), path: portYearPath(SCHEDULE_PORT_SLUG, year) },
    ];

    return (
      <>
        <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: `${port.name} Cruise Ship Schedule ${year}`, description: port.intro, path: portYearPath(SCHEDULE_PORT_SLUG, year) })]} />
        <PageHero title={`Katakolon — ${year} Cruise Schedule`} subtitle={`Ship calls at Katakolon throughout ${year}. Browse by month or view the full year.`} compact />
        <section className="section-padding">
          <div className="container-wide max-w-5xl">
            <Breadcrumbs items={breadcrumbs} />
            {monthKeys.length > 0 && (
              <section className="mt-8">
                <h2 className="section-title text-2xl mb-4">Browse by Month</h2>
                <div className="flex flex-wrap gap-3">
                  {monthKeys.map((mk) => (
                    <Link key={mk} href={portMonthPath(SCHEDULE_PORT_SLUG, mk)} className="btn-secondary text-sm">{formatMonthLabel(mk)}</Link>
                  ))}
                </div>
              </section>
            )}
            <section className="mt-10">
              <h2 className="section-title text-2xl mb-4">{year} Schedule{entries.length > 0 ? ` (${entries.length} calls)` : ""}</h2>
              <ScheduleTable entries={entries} portName={port.name} />
            </section>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={portHubPath()} className="btn-primary text-sm">Schedule hub</Link>
              <Link href="/katakolon-cruise-port-guide" className="btn-secondary text-sm">Cruise Port Guide</Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  const entries = getScheduleEntriesForMonth(SCHEDULE_PORT_SLUG, monthKey!);
  const label = formatMonthLabel(monthKey!);
  const { year: monthYear } = parseMonthKey(monthKey!);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Katakolon Cruise Ship Schedule", path: SCHEDULE_BASE },
    ...(isValidScheduleYear(monthYear) ? [{ name: String(monthYear), path: portYearPath(SCHEDULE_PORT_SLUG, monthYear) }] : []),
    { name: label, path: portMonthPath(SCHEDULE_PORT_SLUG, monthKey!) },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: `${port.name} — ${label}`, description: port.intro, path: portMonthPath(SCHEDULE_PORT_SLUG, monthKey!) })]} />
      <PageHero title={`Katakolon — ${label}`} subtitle={`Cruise ship calls for ${label}. Confirm all-aboard times with your cruise line.`} compact />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          <section className="mt-6">
            <h2 className="section-title text-2xl mb-4">Ship Calls ({entries.length})</h2>
            <ScheduleTable entries={entries} portName={port.name} />
          </section>
          <div className="mt-8 flex flex-wrap gap-3">
            {isValidScheduleYear(monthYear) && (
              <Link href={portYearPath(SCHEDULE_PORT_SLUG, monthYear)} className="btn-primary text-sm">{monthYear} Overview</Link>
            )}
            <Link href={portHubPath()} className="btn-secondary text-sm">Schedule hub</Link>
            <Link href="/katakolon-cruise-port-guide" className="btn-secondary text-sm">Cruise Port Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
