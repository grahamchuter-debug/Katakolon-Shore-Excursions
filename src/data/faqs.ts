import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "How far is Ancient Olympia from Katakolon cruise port?",
    answer:
      "About 35 km inland — roughly 35–45 minutes each way by road. Organised shore excursions remove the guesswork of taxis and timing on a port day.",
  },
  {
    question: "Where do cruise ships dock in Katakolon?",
    answer:
      "Cruise ships berth along the Katakolon waterfront, steps from the village centre. See our Katakolon Cruise Port Guide for Olympia transfer times.",
  },
  {
    question: "Is Katakolon the same as Olympia?",
    answer:
      "No — Katakolon is the cruise port village on the Ionian coast. Ancient Olympia is the archaeological site 35 km inland where the Olympic Games began.",
  },
  {
    question: "Should I book Olympia tours in advance?",
    answer:
      "Yes on busy summer cruise days. Pre-booking secures coach seats and aligns return timing with your ship. Walk-up taxis exist but are risky on tight schedules.",
  },
  {
    question: "What currency and language should I expect?",
    answer:
      "Greece uses the euro. Greek is the local language; English is widely spoken at Olympia, major sights and on organised excursions.",
  },
  {
    question: "Is it safe to eat in Katakolon village?",
    answer:
      "Yes — harbour-side restaurants and cafés cater to cruise passengers daily. See our Greek food guide for cruise-day dining advice.",
  },
  {
    question: "What if I have mobility limitations at Olympia?",
    answer:
      "The site involves uneven ancient stone and limited shade. A private tour allows pacing control; very limited mobility may be better served staying in Katakolon village.",
  },
  {
    question: "Are your excursions and services bookable now?",
    answer:
      "We are an independent Katakolon cruise planning resource. Our guides help you choose the right options for your port day; use the enquiry form for personalised advice.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
