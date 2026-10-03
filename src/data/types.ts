export interface FAQ {
  question: string;
  answer: string;
}

export type Pace = "Relaxed" | "Moderate" | "Active";
export type FitnessLevel = "Easy" | "Moderate" | "Active";
export type ReturnConfidence = "High" | "Medium" | "Variable";

export interface CruiseSnapshot {
  duration: string;
  distanceFromPort: string;
  walkingRequired: string;
  fitnessLevel: FitnessLevel;
  bestFor: string;
  returnConfidence: ReturnConfidence;
  weather: string;
}

export interface ExcursionPage {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  tagline: string;
  duration: string;
  pace: Pace;
  bestFor: string;
  overview: string;
  body: string[];
  highlights: string[];
  included: string[];
  portLogistics: string;
  tips: string[];
  faqs: FAQ[];
  relatedExcursionSlugs: string[];
  relatedGuideSlug?: string;
  snapshot: CruiseSnapshot;
  featured?: boolean;
}

export interface GettingThereStep {
  method: string;
  detail: string;
  time: string;
  cost: string;
}

export interface ContentTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface GuidePage {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  tagline: string;
  overview: string;
  body: string[];
  tier?: 1 | 2;
  distanceFromPort?: string;
  travelTime?: string;
  timeNeeded?: string;
  gettingThere?: GettingThereStep[];
  highlights?: string[];
  tips?: string[];
  returnToShip?: string;
  didYouKnow?: string[];
  photographyTips?: string[];
  planningTables?: ContentTable[];
  comparisonTables?: ContentTable[];
  faqs: FAQ[];
  relatedGuideSlugs: string[];
  relatedExcursionSlug?: string;
  imageKey: string;
  breadcrumbParent?: { name: string; path: string };
}

export interface ScheduleEntry {
  date: string;
  ship: string;
  cruiseLine: string;
  arrival: string;
  departure: string;
  timeInPort?: string;
  terminal?: string;
  callType?: string;
  notes?: string;
}

export interface ShipSchedulePort {
  slug: string;
  name: string;
  country: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  scheduleOverview: string;
  planningTips?: string[];
  faqs?: FAQ[];
}

export interface VisitorType {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  href: string;
  cta: string;
}

export interface ItineraryPlan {
  title: string;
  steps: string[];
  note: string;
}
