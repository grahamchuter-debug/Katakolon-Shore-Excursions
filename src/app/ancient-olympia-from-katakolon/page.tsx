import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "ancient-olympia-from-katakolon";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
