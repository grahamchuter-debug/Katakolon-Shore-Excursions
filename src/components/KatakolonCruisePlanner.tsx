"use client";

import { useState } from "react";
import Link from "next/link";
import { jsPDF } from "jspdf";
import {
  generateKatakolonPlan,
  INTEREST_OPTIONS,
  type PlannerInput,
  type PlannerResult,
  type VisitorTypeId,
} from "@/data/planner";

const VISITOR_OPTIONS: { id: VisitorTypeId; label: string }[] = [
  { id: "port-day", label: "Visiting for the day on a cruise" },
  { id: "embarking", label: "Starting my cruise in Katakolon" },
  { id: "disembarking", label: "Finishing my cruise in Katakolon" },
  { id: "staying", label: "Staying before or after my cruise" },
];

const TIMEFRAME_OPTIONS: Record<VisitorTypeId, { value: string; label: string }[]> = {
  "port-day": [
    { value: "short", label: "Short call (under 5 hours ashore)" },
    { value: "standard", label: "Standard call (5–9 hours ashore)" },
    { value: "long", label: "Long call (9+ hours / overnight)" },
  ],
  embarking: [
    { value: "day-before", label: "Arriving the day before" },
    { value: "same-day", label: "Arriving on embarkation day" },
  ],
  disembarking: [
    { value: "early", label: "Flight before noon" },
    { value: "midday", label: "Flight midday–3pm" },
    { value: "late", label: "Flight after 3pm" },
    { value: "none", label: "No flight today / staying on" },
  ],
  staying: [
    { value: "1", label: "1 extra night" },
    { value: "2", label: "2 extra nights" },
    { value: "3", label: "3+ extra nights" },
  ],
};

function Section({ title, links }: { title: string; links: PlannerResult["excursions"] }) {
  if (!links.length) return null;
  return (
    <section>
      <h3 className="section-title text-xl mb-4">{title}</h3>
      <div className="grid gap-3">
        {links.map((l) => (
          <Link key={l.href + l.label} href={l.href} className="card-editorial group block p-5">
            <p className="font-display text-base font-bold text-gray-900 group-hover:text-coastal-800">{l.label}</p>
            <p className="mt-1 text-sm text-gray-600">{l.why}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function KatakolonCruisePlanner() {
  const [visitorType, setVisitorType] = useState<VisitorTypeId>("port-day");
  const [timeframe, setTimeframe] = useState("standard");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [interests, setInterests] = useState<string[]>(["olympia", "history"]);
  const [mobility, setMobility] = useState<PlannerInput["mobility"]>("full");
  const [budget, setBudget] = useState<PlannerInput["budget"]>("mid");
  const [style, setStyle] = useState<PlannerInput["style"]>("mix");
  const [plan, setPlan] = useState<PlannerResult | null>(null);

  function onVisitorChange(v: VisitorTypeId) {
    setVisitorType(v);
    setTimeframe(TIMEFRAME_OPTIONS[v][0].value);
  }

  function toggleInterest(id: string) {
    setInterests((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }

  function generate() {
    setPlan(
      generateKatakolonPlan({
        visitorType,
        timeframe,
        adults: Number(adults) || 1,
        children: Number(children) || 0,
        interests,
        mobility,
        budget,
        style,
      }),
    );
  }

  function downloadPdf() {
    if (!plan) return;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(plan.headline, 20, 20);
    doc.setFontSize(10);
    let y = 30;
    const write = (text: string, indent = 20) => {
      const lines = doc.splitTextToSize(text, 200 - indent);
      doc.text(lines, indent, y);
      y += lines.length * 5 + 2;
      if (y > 275) {
        doc.addPage();
        y = 20;
      }
    };
    write(plan.summary);
    y += 2;
    const block = (title: string, items: { label: string; why: string }[]) => {
      if (!items.length) return;
      doc.setFont("helvetica", "bold");
      write(title);
      doc.setFont("helvetica", "normal");
      items.forEach((i) => write(`- ${i.label}: ${i.why}`, 24));
      y += 2;
    };
    block("Shore excursions", plan.excursions);
    block("Port & planning", plan.transfers);
    block("Season & timing", plan.stay);
    block("Logistics", plan.logistics);
    doc.setFont("helvetica", "bold");
    write("Your day plan");
    doc.setFont("helvetica", "normal");
    plan.dayPlan.forEach((s) => write(`${s.time}: ${s.text}`, 24));
    doc.save("katakolon-cruise-plan.pdf");
  }

  return (
    <div className="card-feature">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Which best describes you?</label>
          <select value={visitorType} onChange={(e) => onVisitorChange(e.target.value as VisitorTypeId)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
            {VISITOR_OPTIONS.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {visitorType === "port-day" && "Time in port"}
            {visitorType === "embarking" && "When are you arriving?"}
            {visitorType === "disembarking" && "Flight timing"}
            {visitorType === "staying" && "How long are you staying?"}
          </label>
          <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
            {TIMEFRAME_OPTIONS[visitorType].map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
          <input type="number" min={1} max={20} value={adults} onChange={(e) => setAdults(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
          <input type="number" min={0} max={20} value={children} onChange={(e) => setChildren(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
          <div className="flex flex-wrap gap-2">
            {INTEREST_OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => toggleInterest(o.id)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${interests.includes(o.id) ? "bg-coastal-800 text-white" : "bg-white text-coastal-800 border border-coastal-200 hover:bg-coastal-50"}`}
                aria-pressed={interests.includes(o.id)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobility</label>
          <select value={mobility} onChange={(e) => setMobility(e.target.value as PlannerInput["mobility"])} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
            <option value="full">Happy to walk a lot</option>
            <option value="some">Some walking is fine</option>
            <option value="limited">Limited mobility</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
          <select value={budget} onChange={(e) => setBudget(e.target.value as PlannerInput["budget"])} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
            <option value="budget">Budget</option>
            <option value="mid">Mid-range</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Do you prefer guided tours or DIY?</label>
          <select value={style} onChange={(e) => setStyle(e.target.value as PlannerInput["style"])} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm">
            <option value="guided">Prefer guided</option>
            <option value="mix">A mix</option>
            <option value="diy">Prefer DIY / independent</option>
          </select>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={generate} className="btn-primary">Build my plan</button>
        {plan && <button type="button" onClick={downloadPdf} className="btn-secondary">Download PDF</button>}
      </div>

      {plan && (
        <div className="mt-8 space-y-8">
          <div className="rounded-xl border border-coastal-200 bg-coastal-50 p-6">
            <h3 className="font-display text-xl font-bold text-gray-900">{plan.headline}</h3>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">{plan.summary}</p>
          </div>
          <Section title="Recommended shore excursions" links={plan.excursions} />
          <Section title="Port & planning" links={plan.transfers} />
          <Section title="Season & timing" links={plan.stay} />
          <Section title="Logistics" links={plan.logistics} />
          <section>
            <h3 className="section-title text-xl mb-4">Your day plan</h3>
            <ol className="relative space-y-4 border-l border-coastal-200 pl-6">
              {plan.dayPlan.map((s, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-coastal-600" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-wide text-coastal-700">{s.time}</p>
                  <p className="mt-1 text-sm text-gray-700">{s.text}</p>
                </li>
              ))}
            </ol>
          </section>
          <p className="text-xs text-gray-500">Guidance is indicative — always confirm your ship&apos;s all-aboard time before booking Olympia excursions or independent transfers.</p>
        </div>
      )}
    </div>
  );
}
