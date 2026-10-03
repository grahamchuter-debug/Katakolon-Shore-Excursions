export interface SiteImage {
  src: string;
  alt: string;
}

const B = "/images";

export const siteImages = {
  hero: {
    src: `${B}/olympia-stadium-krypte.jpg`,
    alt: "The vaulted Krypte tunnel leading into the ancient Stadium at Olympia",
  },
  ogDefault: {
    src: `${B}/og-default.jpg`,
    alt: "The vaulted Krypte tunnel leading into the ancient Stadium at Olympia",
  },
  logo: {
    src: `${B}/logo-mark.svg`,
    alt: "Katakolon Shore Excursions",
  },
  port: {
    src: `${B}/katakolon-cruise-port.jpg`,
    alt: "A cruise ship berthed in Katakolon harbour, with the wooded coast of the Peloponnese behind",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  "ancient-olympia": {
    src: `${B}/ancient-olympia-aerial.jpg`,
    alt: "Aerial view of the archaeological site of Ancient Olympia among pine and olive trees",
  },
  "olympia-stadium": {
    src: `${B}/olympia-stadium-track.jpg`,
    alt: "The ancient Stadium at Olympia: the earth running track between grassy embankments",
  },
  "temple-zeus": {
    src: `${B}/temple-of-zeus-olympia.jpg`,
    alt: "The re-erected Doric column and stone foundations at the west end of the Temple of Zeus, Olympia",
  },
  museum: {
    src: `${B}/hermes-of-praxiteles-olympia-museum.jpg`,
    alt: "The marble Hermes carrying the infant Dionysus, attributed to Praxiteles, in the Archaeological Museum of Olympia",
  },
  "olympic-games-house": {
    src: `${B}/museum-history-olympic-games-antiquity.jpg`,
    alt: "The neoclassical building of the Museum of the History of the Olympic Games in Antiquity, Olympia",
  },
  "katakolon-village": {
    src: `${B}/katakolon-esplanade.jpg`,
    alt: "Fishing boats and waterfront tavernas on the Katakolon esplanade",
  },
  food: {
    src: `${B}/greek-salad-tzatziki.jpg`,
    alt: "A Greek salad with feta, served with tzatziki and bread",
  },
  "olive-grove": {
    src: `${B}/olive-trees-ancient-olympia.jpg`,
    alt: "Old olive trees growing among the ruins of Ancient Olympia",
  },
  winery: {
    src: `${B}/monemvasia-vineyards.jpg`,
    alt: "Vineyards below the hills at Monemvasia in the southern Peloponnese",
  },
  "one-day": {
    src: `${B}/ancient-olympia-aerial.jpg`,
    alt: "Aerial view of the archaeological site of Ancient Olympia among pine and olive trees",
  },
  "worth-it": {
    src: `${B}/olympia-stadium-krypte.jpg`,
    alt: "The vaulted Krypte tunnel leading into the ancient Stadium at Olympia",
  },
  "olympia-vs-katakolon": {
    src: `${B}/katakolon-esplanade.jpg`,
    alt: "Fishing boats and waterfront tavernas on the Katakolon esplanade",
  },
  highlights: {
    src: `${B}/ancient-olympia-aerial.jpg`,
    alt: "Aerial view of the archaeological site of Ancient Olympia among pine and olive trees",
  },
  coast: {
    src: `${B}/katakolon-coastline.jpg`,
    alt: "The wooded coastline and harbour front of Katakolon seen from the sea",
  },
  "private-tour": {
    src: `${B}/philippeion-olympia.jpg`,
    alt: "The circular Philippeion memorial with its restored Ionic columns at Ancient Olympia",
  },
  planner: {
    src: `${B}/ancient-olympia-aerial.jpg`,
    alt: "Aerial view of the archaeological site of Ancient Olympia among pine and olive trees",
  },
  "best-time": {
    src: `${B}/ancient-olympia-aerial.jpg`,
    alt: "Aerial view of the archaeological site of Ancient Olympia among pine and olive trees",
  },
  independent: {
    src: `${B}/ancient-olympia-aerial.jpg`,
    alt: "Aerial view of the archaeological site of Ancient Olympia among pine and olive trees",
  },
  beach: {
    src: `${B}/kourouta-beach-sunset.jpg`,
    alt: "Sunset over the Ionian Sea at Kourouta beach in the western Peloponnese",
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
