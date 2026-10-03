import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/paths";
import { getAllExcursionSlugs } from "@/data/excursions";
import { getAllGuideSlugs, guides } from "@/data/guides";
import { getVerifiedMonthKeys } from "@/data/schedules";
import { SCHEDULE_YEARS, portYearPath, portMonthPath, SCHEDULE_BASE, SCHEDULE_PORT_SLUG } from "@/lib/schedule-utils";

export const dynamic = "force-static";

const NOINDEX_PATHS = new Set(["/privacy", "/terms"]);

const TIER1_PRIORITY = new Set([
  "/",
  "/katakolon-cruise-port-guide",
  "/ancient-olympia-from-katakolon",
  "/is-ancient-olympia-worth-visiting-from-a-cruise-ship",
  "/best-katakolon-shore-excursions",
  "/one-day-in-katakolon-from-a-cruise-ship",
  "/olympia-vs-katakolon-which-is-best-for-cruise-passengers",
  "/olympic-stadium-guide",
  "/greek-food-guide",
  "/house-of-the-olympic-games-guide",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "/",
    "/shore-excursions",
    "/katakolon-cruise-port-guide",
    "/best-katakolon-shore-excursions",
    "/things-to-do-in-katakolon-from-a-cruise-ship",
    "/one-day-in-katakolon-from-a-cruise-ship",
    "/best-time-to-visit-katakolon",
    SCHEDULE_BASE,
    "/katakolon-cruise-planner",
    "/faq",
    "/enquire",
    "/about",
  ];

  const guidePages = getAllGuideSlugs()
    .map((slug) => guides.find((g) => g.slug === slug)?.path)
    .filter((p): p is string => Boolean(p));

  const dynamicPages = [
    ...getAllExcursionSlugs().map((s) => `/shore-excursions/${s}`),
    ...SCHEDULE_YEARS.map((y) => portYearPath(SCHEDULE_PORT_SLUG, y)),
    ...getVerifiedMonthKeys(SCHEDULE_PORT_SLUG).map((mk) => portMonthPath(SCHEDULE_PORT_SLUG, mk)),
  ];

  const all = [...new Set([...staticPages, ...guidePages, ...dynamicPages])].filter(
    (path) => !NOINDEX_PATHS.has(path),
  );

  return all.map((path) => {
    const url = absoluteUrl(SITE.url, path).replace(/\/?$/, "/");
    return {
      url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : TIER1_PRIORITY.has(path) ? 0.9 : 0.7,
    };
  });
}
