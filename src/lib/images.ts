export interface SiteImage {
  src: string;
  alt: string;
}

const B = "/images";

export const siteImages = {
  hero: {
    src: `${B}/hero-home.jpg`,
    alt: "The ancient Olympic Stadium at Olympia — starting line and stone seating in the Peloponnese",
  },
  ogDefault: {
    src: `${B}/og-default.jpg`,
    alt: "Ancient Olympia and the Olympic Stadium — Katakolon shore excursion planning",
  },
  logo: {
    src: `${B}/logo-mark.svg`,
    alt: "Katakolon Shore Excursions",
  },
  port: {
    src: `${B}/cruise-port.jpg`,
    alt: "Katakolon cruise port village on the Ionian coast of the Peloponnese",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  "ancient-olympia": {
    src: `${B}/olympia-site.jpg`,
    alt: "Panoramic view of the Ancient Olympia archaeological site in the Peloponnese",
  },
  "olympia-stadium": {
    src: `${B}/hero-home.jpg`,
    alt: "The ancient Olympic Stadium at Olympia with the vaulted entrance and starting line",
  },
  "temple-zeus": {
    src: `${B}/temple-zeus.jpg`,
    alt: "Ruins of the Temple of Zeus at Ancient Olympia",
  },
  museum: {
    src: `${B}/museum.jpg`,
    alt: "Artefacts in the Archaeological Museum of Olympia",
  },
  "olympic-games-house": {
    src: `${B}/museum.jpg`,
    alt: "House of the Olympic Games museum near Ancient Olympia",
  },
  "katakolon-village": {
    src: `${B}/katakolon-village.jpg`,
    alt: "Shops and cafés along the waterfront in Katakolon village",
  },
  food: {
    src: `${B}/food.jpg`,
    alt: "Greek meze and local dishes in the Peloponnese",
  },
  "olive-grove": {
    src: `${B}/olive-grove.jpg`,
    alt: "Olive groves in the Elis region near Katakolon",
  },
  winery: {
    src: `${B}/winery.jpg`,
    alt: "Vineyards and winery estate in the Peloponnese near Olympia",
  },
  "one-day": {
    src: `${B}/olympia-site.jpg`,
    alt: "Planning one day in Katakolon from a cruise ship",
  },
  "worth-it": {
    src: `${B}/hero-home.jpg`,
    alt: "Ancient Olympia for cruise passengers — is it worth the drive from Katakolon",
  },
  "olympia-vs-katakolon": {
    src: `${B}/katakolon-village.jpg`,
    alt: "Comparing Ancient Olympia and Katakolon village for cruise passengers",
  },
  highlights: {
    src: `${B}/olympia-site.jpg`,
    alt: "Katakolon shore excursion highlights — Ancient Olympia and the Peloponnese",
  },
  coast: {
    src: `${B}/coast.jpg`,
    alt: "Ionian coast scenery near Katakolon",
  },
  "private-tour": {
    src: `${B}/private-tour.jpg`,
    alt: "Private guided tour from Katakolon cruise port to Ancient Olympia",
  },
  planner: {
    src: `${B}/olympia-site.jpg`,
    alt: "Planning a Katakolon cruise port day",
  },
  "best-time": {
    src: `${B}/olympia-site.jpg`,
    alt: "Best time to visit Katakolon and Ancient Olympia on a cruise",
  },
  independent: {
    src: `${B}/olympia-site.jpg`,
    alt: "Independent versus cruise line shore excursions from Katakolon",
  },
  beach: {
    src: `${B}/coast.jpg`,
    alt: "Kourouta Beach on the Ionian coast near Katakolon",
  },
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "ancient-olympia-tour": "ancient-olympia",
  "ancient-olympia-and-museum-tour": "museum",
  "olympia-and-winery-tour": "winery",
  "katakolon-highlights-tour": "katakolon-village",
  "olympia-small-group-tour": "olympia-stadium",
  "private-olympia-tour": "private-tour",
  "olympia-and-beach-tour": "beach",
  "olympia-and-olive-oil-experience": "olive-grove",
  "greek-food-experience": "food",
  "katakolon-scenic-tour": "coast",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "ancient-olympia");
}

export const excursionsHubImage = pick("olympia-stadium");

const guideImageKeys: Record<string, string> = {
  "ancient-olympia-from-katakolon": "ancient-olympia",
  "is-ancient-olympia-worth-visiting-from-a-cruise-ship": "worth-it",
  "olympia-vs-katakolon-which-is-best-for-cruise-passengers": "olympia-vs-katakolon",
  "one-day-in-katakolon-from-a-cruise-ship": "one-day",
  "olympic-stadium-guide": "olympia-stadium",
  "temple-of-zeus-guide": "temple-zeus",
  "archaeological-museum-guide": "museum",
  "house-of-the-olympic-games-guide": "olympic-games-house",
  "katakolon-guide": "katakolon-village",
  "greek-food-guide": "food",
  "olive-oil-guide": "olive-grove",
  "local-winery-guide": "winery",
  "best-time-to-visit-katakolon": "best-time",
  "independent-vs-cruise-line-excursions": "independent",
};

export function getGuideImage(key: string): SiteImage {
  return pick(guideImageKeys[key] ?? key);
}
