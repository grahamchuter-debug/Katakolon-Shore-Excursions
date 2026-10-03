import type { FAQ, VisitorType } from "./types";

export const visitorTypes: VisitorType[] = [
  {
    id: "olympia",
    label: "I want to see Ancient Olympia — where the Games began",
    shortLabel: "Ancient Olympia",
    description:
      "Olympic Stadium, Temple of Zeus and the birthplace of the ancient Games — the headline reason most passengers book from Katakolon.",
    href: "/ancient-olympia-from-katakolon",
    cta: "Plan your Olympia day",
  },
  {
    id: "village",
    label: "I prefer Katakolon village and the waterfront",
    shortLabel: "Katakolon",
    description:
      "Cafés, shops and a short stroll from the pier — a relaxed port day without the inland drive.",
    href: "/katakolon-guide",
    cta: "Explore the village",
  },
  {
    id: "food",
    label: "I'm here for Greek food, olive oil and wine",
    shortLabel: "Food & wine",
    description:
      "Meze, local olive oil, Mercouri Estate wines and Peloponnese flavours on a cruise schedule.",
    href: "/greek-food-guide",
    cta: "Food guide",
  },
  {
    id: "full-day",
    label: "I have a full day — Olympia plus more",
    shortLabel: "Full day",
    description:
      "Olympia, museum, winery, olive oil or beach — realistic plans for 8–10+ hour calls.",
    href: "/one-day-in-katakolon-from-a-cruise-ship",
    cta: "See itineraries",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "ancient-olympia-from-katakolon",
    number: "01",
    title: "Ancient Olympia From Katakolon",
    description:
      "The flagship guide — transfer times, what to see, heat and walking, guided vs independent visits and return-to-ship confidence.",
    href: "/ancient-olympia-from-katakolon",
    cta: "Read the guide",
  },
  {
    slug: "best-katakolon-shore-excursions",
    number: "02",
    title: "Best Katakolon Shore Excursions",
    description:
      "Curated Olympia tours, museum visits, winery and olive oil experiences, village highlights and beach options for every port window.",
    href: "/best-katakolon-shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "katakolon-cruise-port-guide",
    number: "03",
    title: "Katakolon Cruise Port Guide",
    description:
      "Where ships dock, distance to Olympia, taxis, currency, weather and return-to-ship timing.",
    href: "/katakolon-cruise-port-guide",
    cta: "Port logistics",
  },
  {
    slug: "one-day-in-katakolon",
    number: "04",
    title: "One Day in Katakolon From a Cruise Ship",
    description:
      "Realistic itineraries for 4, 6, 8 and 10+ hour port windows — Olympia, museum, village, food and wine.",
    href: "/one-day-in-katakolon-from-a-cruise-ship",
    cta: "See day plans",
  },
  {
    slug: "shore-excursions",
    number: "05",
    title: "Shore Excursions",
    description:
      "Guided and private excursions timed to your ship — Olympia, museum, winery, olive oil and Peloponnese scenery.",
    href: "/shore-excursions",
    cta: "View all excursions",
  },
  {
    slug: "katakolon-cruise-planner",
    number: "06",
    title: "Katakolon Cruise Planner",
    description:
      "Answer a few questions and get a tailored plan for your exact Katakolon port day.",
    href: "/katakolon-cruise-planner",
    cta: "Start planning",
  },
  {
    slug: "katakolon-cruise-ship-schedule",
    number: "07",
    title: "Katakolon Cruise Ship Schedule",
    description:
      "See which ships are in port at Katakolon before you book excursions or plan your day ashore.",
    href: "/katakolon-cruise-ship-schedule",
    cta: "Check schedules",
  },
  {
    slug: "is-olympia-worth-it",
    number: "08",
    title: "Is Ancient Olympia Worth Visiting?",
    description:
      "Honest decision guide — who will love Olympia, who may prefer the village, and when not to attempt it alone.",
    href: "/is-ancient-olympia-worth-visiting-from-a-cruise-ship",
    cta: "Read the guide",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Why is Katakolon called the gateway to Ancient Olympia?",
      answer:
        "Most cruise ships calling at Katakolon carry passengers whose priority is Ancient Olympia — birthplace of the Olympic Games and a UNESCO World Heritage site. The port village is the practical access point, roughly 35 km from the archaeological site.",
    },
    {
      question: "How long does it take to reach Ancient Olympia from the cruise port?",
      answer:
        "About 35–45 minutes each way by road — roughly 35 km inland through the Peloponnese. Allow at least 2–2.5 hours on site plus transfers.",
    },
    {
      question: "Should I visit Olympia or stay in Katakolon on a port day?",
      answer:
        "Olympia on calls of 6+ hours; Katakolon village and waterfront on shorter calls or if ancient ruins and summer heat are not your priority. See our comparison guide for an honest side-by-side.",
    },
    {
      question: "What is the must-see at Ancient Olympia?",
      answer:
        "The Olympic Stadium with its starting line, Temple of Zeus ruins, Temple of Hera, Philippeion and the Archaeological Museum — ideally with a guide who explains the Games in context.",
    },
    {
      question: "Can I walk around Katakolon from the pier?",
      answer:
        "Yes — the village is compact. Shops, cafés and the waterfront are a few minutes on foot from most cruise berths.",
    },
    {
      question: "How much time do I need to get back to my ship?",
      answer:
        "Build 45–60 minutes before all-aboard for Olympia returns. Village-only days need 20–30 minutes. Ships do not wait.",
    },
  ];
}
