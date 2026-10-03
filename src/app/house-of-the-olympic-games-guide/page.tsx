import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "house-of-the-olympic-games-guide";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
