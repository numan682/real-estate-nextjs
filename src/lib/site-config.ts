const FALLBACK_SITE_URL = "https://home-real-estate.com";

function normalizeSiteUrl(rawUrl: string) {
  const trimmed = rawUrl.trim().replace(/\/+$/, "");
  if (!trimmed) {
    return FALLBACK_SITE_URL;
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    FALLBACK_SITE_URL;

  return normalizeSiteUrl(siteUrl);
}

export const siteName = "Home Real Estate";
export const defaultDescription = "Home Real Estate is a modern Next.js template designed for real estate agencies.";
