import { excursions } from "./excursions";

export type VisitorTypeId = "port-day" | "embarking" | "disembarking" | "staying";

export interface PlannerInput {
  visitorType: VisitorTypeId;
  timeframe: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  style: "guided" | "mix" | "diy";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const INTEREST_OPTIONS = [
  { id: "olympia", label: "Ancient Olympia & Olympic history" },
  { id: "museum", label: "Archaeological Museum" },
  { id: "village", label: "Katakolon village & waterfront" },
  { id: "food", label: "Greek food & meze" },
  { id: "wine", label: "Winery & olive oil" },
  { id: "coast", label: "Ionian coast & beach" },
  { id: "history", label: "Ancient history depth" },
];

const INTEREST_TO_EXCURSION: Record<string, string[]> = {
  olympia: ["ancient-olympia-tour", "olympia-small-group-tour", "private-olympia-tour"],
  museum: ["ancient-olympia-and-museum-tour", "ancient-olympia-tour", "olympia-small-group-tour"],
  village: ["katakolon-highlights-tour", "katakolon-scenic-tour", "greek-food-experience"],
  food: ["greek-food-experience", "katakolon-highlights-tour", "olympia-and-olive-oil-experience"],
  wine: ["olympia-and-winery-tour", "olympia-and-olive-oil-experience", "katakolon-scenic-tour"],
  coast: ["olympia-and-beach-tour", "katakolon-scenic-tour", "katakolon-highlights-tour"],
  history: ["ancient-olympia-and-museum-tour", "ancient-olympia-tour", "olympia-small-group-tour"],
};

function excursionLink(slug: string, why: string): PlannerLink | null {
  const e = excursions.find((x) => x.slug === slug);
  if (!e) return null;
  return { label: e.title, href: `/shore-excursions/${slug}`, why };
}

export function generateKatakolonPlan(input: PlannerInput): PlannerResult {
  const { visitorType, timeframe, adults, children, interests, mobility, style } = input;
  const party = adults + children;
  const hasKids = children > 0;

  const excSlugs: string[] = [];
  const pushSlug = (s: string) => {
    if (s && !excSlugs.includes(s)) excSlugs.push(s);
  };

  const activeInterests = interests.length ? interests : ["olympia", "history"];
  for (const interest of activeInterests) {
    for (const s of INTEREST_TO_EXCURSION[interest] ?? []) pushSlug(s);
  }
  if (hasKids) pushSlug("katakolon-highlights-tour");
  if (mobility === "limited") pushSlug("private-olympia-tour");
  if (style === "diy") pushSlug("katakolon-highlights-tour");

  const shortDay = visitorType === "port-day" && timeframe === "short";
  if (visitorType === "port-day") {
    if (shortDay) pushSlug("katakolon-highlights-tour");
    else if (timeframe === "long") pushSlug("olympia-and-winery-tour");
    else pushSlug("ancient-olympia-tour");
  }

  const excursionLinks = excSlugs
    .slice(0, 5)
    .map((s) => {
      const e = excursions.find((x) => x.slug === s);
      return excursionLink(s, e?.tagline ?? "A strong match for your interests.");
    })
    .filter((x): x is PlannerLink => x !== null);

  const transfers: PlannerLink[] = [
    {
      label: "Katakolon Cruise Port Guide",
      href: "/katakolon-cruise-port-guide",
      why: "Distance to Olympia, taxis and return-to-ship timing.",
    },
    {
      label: "Ancient Olympia From Katakolon",
      href: "/ancient-olympia-from-katakolon",
      why: "The flagship guide — travel times and what to see at the birthplace of the Games.",
    },
  ];

  const stay: PlannerLink[] = [];
  if (visitorType === "embarking" || visitorType === "staying") {
    stay.push({
      label: "Best Time to Visit Katakolon",
      href: "/best-time-to-visit-katakolon",
      why: "Seasons, heat and crowd patterns for your cruise dates.",
    });
  }

  const logistics: PlannerLink[] = [];
  if (visitorType === "port-day") {
    logistics.push({
      label: "Katakolon Cruise Ship Schedule",
      href: "/katakolon-cruise-ship-schedule",
      why: "Check how many ships share your port day before booking.",
    });
    logistics.push({
      label: "One Day in Katakolon from a Cruise Ship",
      href: "/one-day-in-katakolon-from-a-cruise-ship",
      why: "A realistic plan built around your hours ashore.",
    });
    logistics.push({
      label: "Best Katakolon Shore Excursions",
      href: "/best-katakolon-shore-excursions",
      why: "Compare guided options with honest return-to-ship notes.",
    });
  }

  const dayPlan: { time: string; text: string }[] = [];
  if (visitorType === "port-day") {
    const topExc = excursionLinks[0]?.label ?? "Ancient Olympia";
    dayPlan.push({
      time: "On arrival",
      text: "Disembark at the Katakolon pier and meet your coach or stroll into the village — allow 10–15 minutes to clear the terminal.",
    });
    dayPlan.push({
      time: "Morning",
      text: shortDay
        ? "Explore Katakolon village — waterfront cafés, shops and the railway museum."
        : `Depart early for ${topExc}. Beat midday heat and coach convoys at Olympia.`,
    });
    dayPlan.push({
      time: "Midday",
      text: interests.includes("food")
        ? "Lunch in Katakolon village or a meze stop near the harbour."
        : shortDay
          ? "Greek coffee and a short stroll along the waterfront."
          : "On-site at Ancient Olympia — carry water and take shade breaks.",
    });
    if (timeframe !== "short")
      dayPlan.push({
        time: "Afternoon",
        text: interests.includes("wine")
          ? "Winery or olive oil tasting in the Elis countryside before the road back to port."
          : "Return from Olympia or explore Katakolon before heading back to the ship.",
      });
    dayPlan.push({
      time: "Return buffer",
      text: "Be back at the pier at least 45–60 minutes before all-aboard after Olympia; 20–30 minutes for village-only days.",
    });
  } else if (visitorType === "embarking") {
    dayPlan.push({
      time: "On landing",
      text: "Transfer from Athens International (ATH) or regional airports — allow several hours if connecting from Athens to the Peloponnese.",
    });
    dayPlan.push({
      time: "Check-in window",
      text: "Arrive at the Katakolon cruise terminal at the start of your check-in window.",
    });
    dayPlan.push({
      time: "Spare time",
      text: "If you have hours before boarding, walk the Katakolon waterfront — the village is compact and walkable from the pier.",
    });
  } else if (visitorType === "disembarking") {
    dayPlan.push({ time: "07:00–09:30", text: "Disembark. Have your onward transfer arranged in advance." });
    dayPlan.push({
      time: "Spare hours",
      text: "Enjoy a final Greek coffee, village browsing or a quick look at the railway museum before your transfer.",
    });
    dayPlan.push({
      time: "Onward travel",
      text: "Head to your airport or hotel with a comfortable buffer; pre-book transfers on busy cruise days.",
    });
  } else {
    dayPlan.push({
      time: "Choose a base",
      text: "Katakolon village for port proximity; modern Olympia town if you want dawn access to the site before crowds.",
    });
    dayPlan.push({
      time: "Day 1",
      text: "Ancient Olympia, Archaeological Museum and House of the Olympic Games.",
    });
    dayPlan.push({
      time: "Day 2",
      text: "Mercouri Estate winery, olive oil tasting and Kourouta Beach on the Ionian coast.",
    });
  }

  const typeLabels: Record<VisitorTypeId, string> = {
    "port-day": "Katakolon Port-Day Plan",
    embarking: "Katakolon Embarkation Plan",
    disembarking: "Katakolon Disembarkation Plan",
    staying: "Katakolon Pre/Post-Cruise Plan",
  };

  const summaries: Record<VisitorTypeId, string> = {
    "port-day": `A ${timeframe === "short" ? "short" : timeframe === "long" ? "long" : "standard"} port day for ${party} guest${party === 1 ? "" : "s"} focused on ${activeInterests.map((i) => INTEREST_OPTIONS.find((o) => o.id === i)?.label ?? i).join(", ").toLowerCase()}.`,
    embarking: `An embarkation plan for ${party} guest${party === 1 ? "" : "s"} — Katakolon timing and what to see before you board.`,
    disembarking: `A disembarkation plan for ${party} guest${party === 1 ? "" : "s"} — getting to your onward destination smoothly.`,
    staying: `A pre/post-cruise stay for ${party} guest${party === 1 ? "" : "s"} — Olympia, food, wine and Peloponnese coast options.`,
  };

  return {
    headline: typeLabels[visitorType],
    summary: summaries[visitorType],
    excursions: excursionLinks,
    transfers,
    stay,
    logistics,
    dayPlan,
  };
}
