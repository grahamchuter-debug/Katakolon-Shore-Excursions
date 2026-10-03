/**
 * Image-credit registry for every photograph in public/images.
 *
 * Rendered on /image-credits. Every entry is a verified Wikimedia Commons
 * source page; do not add an image without one.
 */

export type ImageCredit = {
  filename: string;
  workTitle: string;
  creator: string;
  sourcePlatform: string;
  sourceUrl: string;
  licence: string;
  licenceUrl: string;
  shareAlike: boolean;
  modifications: string;
};

const RESIZED = "Resized and re-encoded as JPEG. No other changes.";
const LANDSCAPE_CROP = "Cropped to a 3:2 landscape frame and resized.";
const OG_CROP = "Cropped to 1200 x 630 and resized for social sharing previews.";

export const IMAGE_CREDITS: ImageCredit[] = [
  {
    filename: "olympia-stadium-krypte.jpg",
    workTitle: "Krypte monumental entrance at the Stadium in Olympia, Greece (51222344712)",
    creator: "dronepicr",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Krypte_monumental_entrance_at_the_Stadium_in_Olympia,_Greece_(51222344712).jpg",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    shareAlike: false,
    modifications: RESIZED,
  },
  {
    filename: "og-default.jpg",
    workTitle: "Krypte monumental entrance at the Stadium in Olympia, Greece (51222344712)",
    creator: "dronepicr",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Krypte_monumental_entrance_at_the_Stadium_in_Olympia,_Greece_(51222344712).jpg",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    shareAlike: false,
    modifications: OG_CROP,
  },
  {
    filename: "olympia-stadium-track.jpg",
    workTitle: "Stadium in Olympia, Greece (51223824364)",
    creator: "dronepicr",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stadium_in_Olympia,_Greece_(51223824364).jpg",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    shareAlike: false,
    modifications: RESIZED,
  },
  {
    filename: "ancient-olympia-aerial.jpg",
    workTitle: "Aerial view of the archaeological site of Ancient Olympia, Greece (51223832734)",
    creator: "dronepicr",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_the_archaeological_site_of_Ancient_Olympia,_Greece_(51223832734).jpg",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    shareAlike: false,
    modifications: RESIZED,
  },
  {
    filename: "temple-of-zeus-olympia.jpg",
    workTitle: "Temple of Zeus at Olympia (west end)",
    creator: "Michael Nicht",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Temple_of_Zeus_at_Olympia_(west_end).jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "hermes-of-praxiteles-olympia-museum.jpg",
    workTitle: "Hermes bearing the infant Dionysus, traditionally attributed to Praxiteles and dated to the 4th century BC, discovered in 1877 in the ruins of the Temple of Hera at Olympia, Archaeological Museum of Olympia (16373294135)",
    creator: "Carole Raddato",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hermes_bearing_the_infant_Dionysus,_traditionally_attributed_to_Praxiteles_and_dated_to_the_4th_century_BC,_discovered_in_1877_in_the_ruins_of_the_Temple_of_Hera_at_Olympia,_Archaeological_Museum_of_Olympia_(16373294135).jpg",
    licence: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    shareAlike: true,
    modifications: LANDSCAPE_CROP,
  },
  {
    filename: "museum-history-olympic-games-antiquity.jpg",
    workTitle: "Syngreion Museum of the History of the Olympic Games of Antiquity in Olympia, Greece (51223059801)",
    creator: "dronepicr",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Syngreion_Museum_of_the_History_of_the_Olympic_Games_of_Antiquity_in_Olympia,_Greece_(51223059801).jpg",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    shareAlike: false,
    modifications: RESIZED,
  },
  {
    filename: "philippeion-olympia.jpg",
    workTitle: "The Philippeion in Olympia, Greece (51223821424)",
    creator: "dronepicr",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_Philippeion_in_Olympia,_Greece_(51223821424).jpg",
    licence: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    shareAlike: false,
    modifications: RESIZED,
  },
  {
    filename: "olive-trees-ancient-olympia.jpg",
    workTitle: "20190506 214 olympia",
    creator: "Jean Housen",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20190506_214_olympia.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "katakolon-cruise-port.jpg",
    workTitle: "GR-Katakolon-Hafen",
    creator: "Balou46",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:GR-Katakolon-Hafen.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "katakolon-esplanade.jpg",
    workTitle: "Katakolo esplanade. Pyrgos, Western Elis, Greece",
    creator: "Mstyslav Chernov",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Katakolo_esplanade._Pyrgos,_Western_Elis,_Greece.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "katakolon-coastline.jpg",
    workTitle: "Katakolo coast 2010 12",
    creator: "Wknight94",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Katakolo_coast_2010_12.jpg",
    licence: "CC BY-SA 3.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "kourouta-beach-sunset.jpg",
    workTitle: "Sunset in Kourouta, western Peloponnese, Greece",
    creator: "Λίβων",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sunset_in_Kourouta,_western_Peloponnese,_Greece.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "monemvasia-vineyards.jpg",
    workTitle: "Ampelones ",
    creator: "Winelover10",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ampelones_.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: RESIZED,
  },
  {
    filename: "greek-salad-tzatziki.jpg",
    workTitle: "Greek salad and Tzatziki",
    creator: "Paasikivi",
    sourcePlatform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Greek_salad_and_Tzatziki.jpg",
    licence: "CC BY-SA 4.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    shareAlike: true,
    modifications: LANDSCAPE_CROP,
  },
];
