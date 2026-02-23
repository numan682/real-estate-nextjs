import { notFound } from "next/navigation";
import { getTemplatePageBySlug, getTemplateStaticParams } from "@/generated/template-registry";
import { withSeoDefaults } from "@/lib/seo";

type CatchAllRouteParams = {
  slug: string[];
};

type CatchAllPageProps = {
  params: Promise<CatchAllRouteParams>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getTemplateStaticParams();
}

export async function generateMetadata({ params }: CatchAllPageProps) {
  const resolvedParams = await params;
  const page = getTemplatePageBySlug(resolvedParams.slug);
  if (!page) {
    return {};
  }

  return withSeoDefaults(page.metadata, page.routePath);
}

export default async function TemplatePage({ params }: CatchAllPageProps) {
  const resolvedParams = await params;
  const page = getTemplatePageBySlug(resolvedParams.slug);

  if (!page) {
    notFound();
  }

  const Component = page.Component;
  return <Component />;
}
