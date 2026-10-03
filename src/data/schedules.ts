import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import katakolonSchedule from "./imported-schedules/katakolon.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are the Katakolon cruise ship schedules?",
    answer:
      "Schedules are compiled from published cruise timetables and updated periodically. Times, berths and dates can change, so always confirm your arrival and departure with your cruise line before booking shore excursions.",
  },
  {
    question: "Where do cruise ships dock in Katakolon?",
    answer:
      "Cruise ships berth along the Katakolon waterfront, steps from the village centre. The port is the gateway to Ancient Olympia — see our Katakolon Cruise Port Guide for transfer times.",
  },
  {
    question: "When is Katakolon cruise season?",
    answer:
      "Most calls run from April through November, with peak traffic in June, July and August. Spring and autumn offer milder temperatures for Olympia walking.",
  },
];

const SCHEDULE_TIPS = [
  "Check how many ships are in port before booking Olympia coaches — busy days mean crowded site gates",
  "Confirm your berth so taxis and tours meet you at the correct gangway",
  "Depart for Olympia early on hot summer days to beat midday heat on exposed paths",
  "Compare your time in port before choosing Olympia plus winery or beach combinations",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "katakolon",
    name: "Katakolon",
    country: "Greece",
    seoTitle: "Katakolon Cruise Ship Schedule 2026",
    metaDescription:
      "Katakolon cruise ship schedule hub. See which ships are in port and plan Ancient Olympia, museum and Peloponnese shore excursions around published arrival and departure times.",
    intro:
      "Katakolon is the cruise gateway to Ancient Olympia — one of the Mediterranean's great heritage ports. Check which vessels are scheduled before you book excursions or plan your port day.",
    description:
      "Ionian cruise port — Ancient Olympia, Greek food and Peloponnese wine from the quay.",
    scheduleOverview:
      "Katakolon sees cruise traffic from April through November, concentrated at the village waterfront with occasional multi-ship days in peak summer.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  katakolon: katakolonSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(slug: string): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
