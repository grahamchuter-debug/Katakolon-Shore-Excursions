import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold">Katakolon Shore Excursions</div>
            <p className="mt-3 text-sm text-coastal-100/70 leading-relaxed">Gateway to Ancient Olympia. The leading independent Katakolon cruise planning resource — Olympic Stadium, Temple of Zeus, museum, Greek food and Peloponnese wine for cruise passengers.</p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your port day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/katakolon-cruise-planner" className="hover:text-white">Cruise Planner</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/one-day-in-katakolon-from-a-cruise-ship" className="hover:text-white">One Day in Katakolon</Link></li>
              <li><Link href="/katakolon-cruise-ship-schedule" className="hover:text-white">Ship Schedule</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Olympia &amp; Peloponnese</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/ancient-olympia-from-katakolon" className="hover:text-white">Ancient Olympia Guide</Link></li>
              <li><Link href="/olympic-stadium-guide" className="hover:text-white">Olympic Stadium</Link></li>
              <li><Link href="/temple-of-zeus-guide" className="hover:text-white">Temple of Zeus</Link></li>
              <li><Link href="/archaeological-museum-guide" className="hover:text-white">Archaeological Museum</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Essential planning</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/katakolon-cruise-port-guide" className="hover:text-white">Cruise Port Guide</Link></li>
              <li><Link href="/best-katakolon-shore-excursions" className="hover:text-white">Best Shore Excursions</Link></li>
              <li><Link href="/greek-food-guide" className="hover:text-white">Greek Food Guide</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Enquire</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/image-credits" className="hover:text-white">Photo credits</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent Katakolon cruise planning resource — not affiliated with any cruise line or the Port of Katakolon.
      </div>
    </footer>
  );
}
