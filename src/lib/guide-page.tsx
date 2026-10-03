import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getGuideBySlug } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";
import { getGuideImage } from "@/lib/images";

export function guideMetadata(slug: string) {
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  const image = getGuideImage(guide.imageKey);
  return buildMetadata({
    title: guide.seoTitle,
    description: guide.metaDescription,
    path: guide.path,
    image: image.src,
    imageAlt: image.alt,
  });
}

export function GuidePageRoute({ slug }: { slug: string }) {
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} />;
}
