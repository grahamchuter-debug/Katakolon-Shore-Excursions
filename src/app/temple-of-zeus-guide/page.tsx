import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "temple-of-zeus-guide";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
