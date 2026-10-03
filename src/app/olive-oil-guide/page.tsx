import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "olive-oil-guide";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
