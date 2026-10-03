import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "independent-vs-cruise-line-excursions";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
