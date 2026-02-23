import type { Metadata, Viewport } from "next";
import { TemplateAssets } from "@/components/template-assets";
import { defaultDescription, getSiteUrl, siteName } from "@/lib/site-config";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Buy, Rent & Sell Property`,
    template: "%s | Home Real Estate"
  },
  applicationName: siteName,
  description: defaultDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: `${siteName} | Buy, Rent & Sell Property`,
    description: defaultDescription
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Buy, Rent & Sell Property`,
    description: defaultDescription
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D1A1C"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <TemplateAssets />
      </head>
      <body>{children}</body>
    </html>
  );
}
