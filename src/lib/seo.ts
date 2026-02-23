import type { Metadata } from "next";
import { defaultDescription, siteName } from "@/lib/site-config";

function normalizeTitle(title: Metadata["title"]) {
  if (typeof title === "string") {
    return title;
  }

  if (title && typeof title === "object" && "absolute" in title && typeof title.absolute === "string") {
    return title.absolute;
  }

  return siteName;
}

export function withSeoDefaults(metadata: Metadata, routePath: string): Metadata {
  const title = normalizeTitle(metadata.title);
  const description = metadata.description ?? defaultDescription;

  return {
    ...metadata,
    description,
    alternates: {
      ...metadata.alternates,
      canonical: routePath
    },
    openGraph: {
      type: "website",
      ...metadata.openGraph,
      title,
      description,
      url: routePath,
      siteName
    },
    twitter: {
      card: "summary_large_image",
      ...metadata.twitter,
      title,
      description
    }
  };
}
