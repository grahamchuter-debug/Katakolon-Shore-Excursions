import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export const terminals: Terminal[] = [
  {
    name: "Katakolon Cruise Pier",
    quay: "Central waterfront — main cruise berths along the village",
    usedBy:
      "Most mainstream cruise lines calling at Katakolon (MSC, Costa, Celebrity, Norwegian, Royal Caribbean and similar)",
    cityAccess:
      "2–5 min walk to village shops and cafés; 35–45 min drive to Ancient Olympia",
  },
  {
    name: "Outer pier berths",
    quay: "Extended quay when multiple ships call",
    usedBy: "Peak-season scheduling and larger vessels",
    cityAccess:
      "Slightly longer walk to village centre; same Olympia transfer times from taxi rank",
  },
  {
    name: "Tender operations",
    quay: "Rare — used only in exceptional port arrangements",
    usedBy: "Smaller ships or when pier capacity is exceeded",
    cityAccess:
      "Confirm tender timing on your ship — adds 15–20 minutes each way to village access",
  },
];

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideSections: PortGuideSection[] = [
  {
    heading: "Where cruise ships dock in Katakolon",
    paragraphs: [
      "Cruise ships berth directly along the waterfront of Katakolon — a small Ionian fishing village that serves as the cruise gateway to Ancient Olympia. Unlike large urban ports, you step off the gangway into a compact settlement where shops, cafés and the sea are minutes away on foot.",
      "Most passengers disembark onto the main pier road with taxis, excursion coaches and village lanes immediately visible. Your cruise documents confirm the exact berth; when two ships call, outer berths may add a few minutes to the walk into the centre.",
    ],
  },
  {
    heading: "Walking into Katakolon and distance to Olympia",
    paragraphs: [
      "Katakolon village centre is 200–500 metres from most berths — a flat, easy walk along the waterfront. Allow 5–10 minutes to reach the main shopping street, railway museum or a harbour-side café.",
      "Ancient Olympia lies approximately 35 km inland in the Elis region — typically 35–45 minutes each way by coach or taxi on the road through Pyrgos. The modern town of Olympia (Archadia) sits beside the archaeological site and museum.",
      "Kourouta Beach on the Ionian coast is about 20 km west — a possible add-on on longer port days. Pyrgos, the regional capital, is roughly 10 minutes from Katakolon.",
    ],
  },
  {
    heading: "Taxis, shore excursions and traffic",
    paragraphs: [
      "Taxis queue near the pier. Agree on using the meter or confirm a fixed round-trip fare to Olympia before departing — waiting time at the site should be included in private arrangements. Organised shore excursions are the safest option for Olympia on standard port days: pier pickup, licensed guides and cruise-timed returns.",
      "Morning departures beat midday heat at the exposed archaeological site and reduce convoy congestion at the gates. Afternoon returns are usually straightforward on the inland road, but build a 45–60 minute buffer before all-aboard.",
      "Independent travellers can hire taxis for Olympia, but underestimating site time and transfer duration creates real return-to-ship risk on calls under seven hours.",
    ],
  },
  {
    heading: "Currency, tipping and practicalities",
    paragraphs: [
      "Greece uses the euro (EUR). Cards are accepted at major sights, restaurants and larger shops; carry cash for small village vendors, tips and rural tastings. ATMs are available in Katakolon village.",
      "Tipping is appreciated — round up taxi fares and leave 5–10% at sit-down restaurants if service was good. Museum shops use fixed prices.",
      "Download offline maps before leaving the ship. Mobile signal is generally reliable but do not rely on ship Wi-Fi for time-critical planning.",
    ],
  },
  {
    heading: "Weather, heat and walking",
    paragraphs: [
      "The Peloponnese enjoys a Mediterranean climate — warm springs and autumns, hot dry summers (June–September), mild wet winters. Ancient Olympia has limited shade on the main paths; summer temperatures regularly exceed 32°C.",
      "Wear sun protection, a hat and comfortable walking shoes for both village cobbles and Olympia's uneven ancient stone. Carry at least one litre of water per person for an Olympia visit.",
      "Spring (April–May) and autumn (September–October) offer the best balance of warmth and manageable crowds for cruise passengers.",
    ],
  },
  {
    heading: "Best excursions and return-to-ship advice",
    paragraphs: [
      "For first-time visitors with 6+ hours ashore, a dedicated Ancient Olympia tour is the strongest default — focused, memorable and aligned with why ships call here. Museum combinations, small-group tours and private options suit photographers, families and passengers who want pacing control.",
      "On calls under five hours, stay in Katakolon village or book a highlights tour that does not attempt a rushed Olympia round trip. See our one-day itineraries for hour-by-hour planning.",
      "Ships do not wait. Even on organised tours, keep personal awareness of the time — allow 45–60 minutes before all-aboard for Olympia returns and 20–30 minutes for village-only days.",
    ],
  },
];

export const portGuideFaqs: FAQ[] = [
  {
    question: "How far is Ancient Olympia from Katakolon cruise port?",
    answer:
      "About 35 km inland — roughly 35–45 minutes each way by road depending on traffic and your exact berth.",
  },
  {
    question: "Can I walk from the cruise ship into Katakolon?",
    answer:
      "Yes. The village is compact and most berths are a few minutes' walk from shops, cafés and the waterfront.",
  },
  {
    question: "Do I need euros in Katakolon?",
    answer:
      "Yes. Greece uses the euro. Cards work at many businesses but cash is useful for taxis, tips and small vendors.",
  },
  {
    question: "How hot does Olympia get in summer?",
    answer:
      "Very hot and exposed — often above 32°C from June through August. Hat, sunscreen and water are essential.",
  },
  {
    question: "What is the best shore excursion from Katakolon?",
    answer:
      "Ancient Olympia for most first-time visitors. Museum combinations, winery visits and village tours suit longer port days or repeat callers.",
  },
  {
    question: "How early should I return to the ship from Olympia?",
    answer:
      "Plan to be back at the pier 45–60 minutes before all-aboard. Organised tours build buffers, but traffic and site delays happen.",
  },
];
