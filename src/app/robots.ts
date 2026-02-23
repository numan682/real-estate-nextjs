import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-config";

const baseUrl = getSiteUrl();

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
