import type { Metadata } from "next";
import { TemplatePageShell } from "@/components/template-page-shell";
import { SiteHeader } from "@/features/shared/site-header";
import { SitePreloader } from "@/features/shared/preloader";
import { HeroBannerOneSection } from "@/features/home/sections/hero-banner-one";
import { FeedbackSectionOne } from "@/features/home/sections/feedback-section-one";
import { BlockFeatureOneSection } from "@/features/home/sections/block-feature-one";
import { BlockFeatureTwoSection } from "@/features/home/sections/block-feature-two";
import { BlockFeatureThreeSection } from "@/features/home/sections/block-feature-three";
import { PropertyListingOneSection } from "@/features/home/sections/property-listing-one";
import { AgentSectionOne } from "@/features/home/sections/agent-section-one";
import { BlockFeatureFourSection } from "@/features/home/sections/block-feature-four";
import { BlockFeatureFiveSection } from "@/features/home/sections/block-feature-five";
import { SiteFooter } from "@/features/shared/site-footer";
import { LoginModal } from "@/features/shared/login-modal";
import { ScrollTopButton } from "@/features/shared/scroll-top";
import { defaultDescription, siteName } from "@/lib/site-config";
import { withSeoDefaults } from "@/lib/seo";

export const homePageMetadata: Metadata = withSeoDefaults({
  title: `${siteName} | Buy, Rent & Sell Property`,
  description: defaultDescription,
  keywords: ["Real estate", "Property sale", "Property buy"]
}, "/");

export const homePageScripts = [
  "/vendor/jquery.min.js",
  "/vendor/bootstrap/js/bootstrap.bundle.min.js",
  "/vendor/wow/wow.min.js",
  "/vendor/slick/slick.min.js",
  "/vendor/fancybox/fancybox.umd.js",
  "/vendor/jquery.lazy.min.js",
  "/vendor/jquery.counterup.min.js",
  "/vendor/jquery.waypoints.min.js",
  "/vendor/nice-select/jquery.nice-select.min.js",
  "/vendor/validator.js",
  "/js/theme.js"
];

export function HomePageTemplate() {
  return (
    <TemplatePageShell scripts={homePageScripts}>
      <div className="main-page-wrapper">
        <SitePreloader />
        <SiteHeader />
        <HeroBannerOneSection />
        <FeedbackSectionOne />
        <BlockFeatureOneSection />
        <BlockFeatureTwoSection />
        <BlockFeatureThreeSection />
        <PropertyListingOneSection />
        <AgentSectionOne />
        <BlockFeatureFourSection />
        <BlockFeatureFiveSection />
        <SiteFooter />
        <LoginModal />
        <ScrollTopButton />
      </div>
    </TemplatePageShell>
  );
}
