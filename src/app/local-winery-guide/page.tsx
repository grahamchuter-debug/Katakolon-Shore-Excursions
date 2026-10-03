import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "local-winery-guide";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
