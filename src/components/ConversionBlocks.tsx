import Link from "next/link";
import type { CruiseSnapshot } from "@/data/types";

export function CruiseSnapshotCard({ snapshot }: { snapshot: CruiseSnapshot }) {
  const confidenceColor =
    snapshot.returnConfidence === "High"
      ? "text-emerald-700"
      : snapshot.returnConfidence === "Medium"
        ? "text-amber-700"
        : "text-orange-700";

  return (
    <div className="card-accent mb-8">
      <h2 className="font-display text-xl font-bold text-gray-900">Cruise passenger snapshot</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div><p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">Duration</p><p className="mt-1 text-sm font-medium text-gray-900">{snapshot.duration}</p></div>
        <div><p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">Distance from port</p><p className="mt-1 text-sm font-medium text-gray-900">{snapshot.distanceFromPort}</p></div>
        <div><p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">Walking required</p><p className="mt-1 text-sm font-medium text-gray-900">{snapshot.walkingRequired}</p></div>
        <div><p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">Fitness level</p><p className="mt-1 text-sm font-medium text-gray-900">{snapshot.fitnessLevel}</p></div>
        <div><p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">Best for</p><p className="mt-1 text-sm font-medium text-gray-900">{snapshot.bestFor}</p></div>
        <div><p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">Return-to-ship confidence</p><p className={`mt-1 text-sm font-semibold ${confidenceColor}`}>{snapshot.returnConfidence}</p></div>
        <div className="sm:col-span-2 lg:col-span-3"><p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">Weather</p><p className="mt-1 text-sm font-medium text-gray-900">{snapshot.weather}</p></div>
      </div>
    </div>
  );
}

export function EnquiryCTA({ heading = "Need help choosing?" }: { heading?: string }) {
  return (
    <div className="card-accent mt-10 flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-maple-600">{heading}</p>
        <h2 className="mt-1 font-display text-xl font-bold text-gray-900">Tell us your ship and interests</h2>
        <p className="mt-1 text-sm text-gray-600">We match Katakolon shore excursions to your port window with honest return-to-ship advice — Ancient Olympia, village and Peloponnese food.</p>
      </div>
      <Link href="/enquire" className="btn-primary shrink-0">Enquire</Link>
    </div>
  );
}

export function ReturnToShipBlock({ text }: { text: string }) {
  return (
    <div className="mt-8 rounded-xl border border-coastal-200 bg-coastal-50/80 p-6">
      <h2 className="font-display text-lg font-bold text-gray-900">Return-to-ship confidence</h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-700">{text}</p>
    </div>
  );
}
