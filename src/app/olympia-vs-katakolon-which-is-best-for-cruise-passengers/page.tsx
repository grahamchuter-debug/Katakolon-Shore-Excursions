import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "olympia-vs-katakolon-which-is-best-for-cruise-passengers";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
