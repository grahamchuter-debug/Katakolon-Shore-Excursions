import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "best-time-to-visit-katakolon";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
