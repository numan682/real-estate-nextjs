import type { MetadataRoute } from "next";
import { getTemplateRoutes } from "@/generated/template-registry";
import { getSiteUrl } from "@/lib/site-config";

const baseUrl = getSiteUrl();

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routePaths = ["/", ...getTemplateRoutes()];
  const uniqueRoutePaths = routePaths.filter((routePath, index) => routePaths.indexOf(routePath) === index);

  return uniqueRoutePaths.map((routePath) => ({
    url: `${baseUrl}${routePath}`,
    changeFrequency: "weekly",
    priority: routePath === "/" ? 1 : 0.8
  }));
}
