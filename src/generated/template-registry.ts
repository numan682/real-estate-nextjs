import type { Metadata } from "next";
import type { ComponentType } from "react";
import Page_0, { metadata as metadata_0 } from "@/generated/template-pages/404";
import Page_1, { metadata as metadata_1 } from "@/generated/template-pages/about_us_01";
import Page_2, { metadata as metadata_2 } from "@/generated/template-pages/about_us_02";
import Page_3, { metadata as metadata_3 } from "@/generated/template-pages/agency_details";
import Page_4, { metadata as metadata_4 } from "@/generated/template-pages/agency";
import Page_5, { metadata as metadata_5 } from "@/generated/template-pages/agent_details";
import Page_6, { metadata as metadata_6 } from "@/generated/template-pages/agent";
import Page_7, { metadata as metadata_7 } from "@/generated/template-pages/blog_01";
import Page_8, { metadata as metadata_8 } from "@/generated/template-pages/blog_02";
import Page_9, { metadata as metadata_9 } from "@/generated/template-pages/blog_03";
import Page_10, { metadata as metadata_10 } from "@/generated/template-pages/blog_details";
import Page_11, { metadata as metadata_11 } from "@/generated/template-pages/compare";
import Page_12, { metadata as metadata_12 } from "@/generated/template-pages/contact";
import Page_13, { metadata as metadata_13 } from "@/generated/template-pages/faq";
import Page_14, { metadata as metadata_14 } from "@/generated/template-pages/index_2";
import Page_15, { metadata as metadata_15 } from "@/generated/template-pages/index_3";
import Page_16, { metadata as metadata_16 } from "@/generated/template-pages/index_4";
import Page_17, { metadata as metadata_17 } from "@/generated/template-pages/index_5";
import Page_18, { metadata as metadata_18 } from "@/generated/template-pages/index_6";
import Page_19, { metadata as metadata_19 } from "@/generated/template-pages/index_7";
import Page_21, { metadata as metadata_21 } from "@/generated/template-pages/listing_01";
import Page_22, { metadata as metadata_22 } from "@/generated/template-pages/listing_02";
import Page_23, { metadata as metadata_23 } from "@/generated/template-pages/listing_03";
import Page_24, { metadata as metadata_24 } from "@/generated/template-pages/listing_04";
import Page_25, { metadata as metadata_25 } from "@/generated/template-pages/listing_05";
import Page_26, { metadata as metadata_26 } from "@/generated/template-pages/listing_06";
import Page_27, { metadata as metadata_27 } from "@/generated/template-pages/listing_07";
import Page_28, { metadata as metadata_28 } from "@/generated/template-pages/listing_08";
import Page_29, { metadata as metadata_29 } from "@/generated/template-pages/listing_09";
import Page_30, { metadata as metadata_30 } from "@/generated/template-pages/listing_10";
import Page_31, { metadata as metadata_31 } from "@/generated/template-pages/listing_11";
import Page_32, { metadata as metadata_32 } from "@/generated/template-pages/listing_12";
import Page_33, { metadata as metadata_33 } from "@/generated/template-pages/listing_13";
import Page_34, { metadata as metadata_34 } from "@/generated/template-pages/listing_14";
import Page_35, { metadata as metadata_35 } from "@/generated/template-pages/listing_15";
import Page_36, { metadata as metadata_36 } from "@/generated/template-pages/listing_16";
import Page_37, { metadata as metadata_37 } from "@/generated/template-pages/listing_17";
import Page_38, { metadata as metadata_38 } from "@/generated/template-pages/listing_details_01";
import Page_39, { metadata as metadata_39 } from "@/generated/template-pages/listing_details_02";
import Page_40, { metadata as metadata_40 } from "@/generated/template-pages/listing_details_03";
import Page_41, { metadata as metadata_41 } from "@/generated/template-pages/listing_details_04";
import Page_42, { metadata as metadata_42 } from "@/generated/template-pages/listing_details_05";
import Page_43, { metadata as metadata_43 } from "@/generated/template-pages/listing_details_06";
import Page_44, { metadata as metadata_44 } from "@/generated/template-pages/pricing_01";
import Page_45, { metadata as metadata_45 } from "@/generated/template-pages/pricing_02";
import Page_46, { metadata as metadata_46 } from "@/generated/template-pages/project_01";
import Page_47, { metadata as metadata_47 } from "@/generated/template-pages/project_02";
import Page_48, { metadata as metadata_48 } from "@/generated/template-pages/project_03";
import Page_49, { metadata as metadata_49 } from "@/generated/template-pages/project_04";
import Page_50, { metadata as metadata_50 } from "@/generated/template-pages/project_details_01";
import Page_51, { metadata as metadata_51 } from "@/generated/template-pages/service_01";
import Page_52, { metadata as metadata_52 } from "@/generated/template-pages/service_02";
import Page_53, { metadata as metadata_53 } from "@/generated/template-pages/service_details";
import Page_54, { metadata as metadata_54 } from "@/generated/template-pages/dashboard_account_settings";
import Page_55, { metadata as metadata_55 } from "@/generated/template-pages/dashboard_account_settings_pass_change_";
import Page_56, { metadata as metadata_56 } from "@/generated/template-pages/dashboard_add_property";
import Page_57, { metadata as metadata_57 } from "@/generated/template-pages/dashboard_dashboard_index";
import Page_58, { metadata as metadata_58 } from "@/generated/template-pages/dashboard_favourites";
import Page_59, { metadata as metadata_59 } from "@/generated/template-pages/dashboard_membership";
import Page_60, { metadata as metadata_60 } from "@/generated/template-pages/dashboard_message";
import Page_61, { metadata as metadata_61 } from "@/generated/template-pages/dashboard_profile";
import Page_62, { metadata as metadata_62 } from "@/generated/template-pages/dashboard_properties_list";
import Page_63, { metadata as metadata_63 } from "@/generated/template-pages/dashboard_review";
import Page_64, { metadata as metadata_64 } from "@/generated/template-pages/dashboard_saved_search";

export type TemplatePageEntry = {
  Component: ComponentType;
  metadata: Metadata;
  routePath: string;
  slug: string[];
};

const templatePages: Record<string, TemplatePageEntry> = {
  "404": { Component: Page_0, metadata: metadata_0, routePath: "/404", slug: ["404"] },
  "about_us_01": { Component: Page_1, metadata: metadata_1, routePath: "/about_us_01", slug: ["about_us_01"] },
  "about_us_02": { Component: Page_2, metadata: metadata_2, routePath: "/about_us_02", slug: ["about_us_02"] },
  "agency_details": { Component: Page_3, metadata: metadata_3, routePath: "/agency_details", slug: ["agency_details"] },
  "agency": { Component: Page_4, metadata: metadata_4, routePath: "/agency", slug: ["agency"] },
  "agent_details": { Component: Page_5, metadata: metadata_5, routePath: "/agent_details", slug: ["agent_details"] },
  "agent": { Component: Page_6, metadata: metadata_6, routePath: "/agent", slug: ["agent"] },
  "blog_01": { Component: Page_7, metadata: metadata_7, routePath: "/blog_01", slug: ["blog_01"] },
  "blog_02": { Component: Page_8, metadata: metadata_8, routePath: "/blog_02", slug: ["blog_02"] },
  "blog_03": { Component: Page_9, metadata: metadata_9, routePath: "/blog_03", slug: ["blog_03"] },
  "blog_details": { Component: Page_10, metadata: metadata_10, routePath: "/blog_details", slug: ["blog_details"] },
  "compare": { Component: Page_11, metadata: metadata_11, routePath: "/compare", slug: ["compare"] },
  "contact": { Component: Page_12, metadata: metadata_12, routePath: "/contact", slug: ["contact"] },
  "faq": { Component: Page_13, metadata: metadata_13, routePath: "/faq", slug: ["faq"] },
  "index-2": { Component: Page_14, metadata: metadata_14, routePath: "/index-2", slug: ["index-2"] },
  "index-3": { Component: Page_15, metadata: metadata_15, routePath: "/index-3", slug: ["index-3"] },
  "index-4": { Component: Page_16, metadata: metadata_16, routePath: "/index-4", slug: ["index-4"] },
  "index-5": { Component: Page_17, metadata: metadata_17, routePath: "/index-5", slug: ["index-5"] },
  "index-6": { Component: Page_18, metadata: metadata_18, routePath: "/index-6", slug: ["index-6"] },
  "index-7": { Component: Page_19, metadata: metadata_19, routePath: "/index-7", slug: ["index-7"] },
  "listing_01": { Component: Page_21, metadata: metadata_21, routePath: "/listing_01", slug: ["listing_01"] },
  "listing_02": { Component: Page_22, metadata: metadata_22, routePath: "/listing_02", slug: ["listing_02"] },
  "listing_03": { Component: Page_23, metadata: metadata_23, routePath: "/listing_03", slug: ["listing_03"] },
  "listing_04": { Component: Page_24, metadata: metadata_24, routePath: "/listing_04", slug: ["listing_04"] },
  "listing_05": { Component: Page_25, metadata: metadata_25, routePath: "/listing_05", slug: ["listing_05"] },
  "listing_06": { Component: Page_26, metadata: metadata_26, routePath: "/listing_06", slug: ["listing_06"] },
  "listing_07": { Component: Page_27, metadata: metadata_27, routePath: "/listing_07", slug: ["listing_07"] },
  "listing_08": { Component: Page_28, metadata: metadata_28, routePath: "/listing_08", slug: ["listing_08"] },
  "listing_09": { Component: Page_29, metadata: metadata_29, routePath: "/listing_09", slug: ["listing_09"] },
  "listing_10": { Component: Page_30, metadata: metadata_30, routePath: "/listing_10", slug: ["listing_10"] },
  "listing_11": { Component: Page_31, metadata: metadata_31, routePath: "/listing_11", slug: ["listing_11"] },
  "listing_12": { Component: Page_32, metadata: metadata_32, routePath: "/listing_12", slug: ["listing_12"] },
  "listing_13": { Component: Page_33, metadata: metadata_33, routePath: "/listing_13", slug: ["listing_13"] },
  "listing_14": { Component: Page_34, metadata: metadata_34, routePath: "/listing_14", slug: ["listing_14"] },
  "listing_15": { Component: Page_35, metadata: metadata_35, routePath: "/listing_15", slug: ["listing_15"] },
  "listing_16": { Component: Page_36, metadata: metadata_36, routePath: "/listing_16", slug: ["listing_16"] },
  "listing_17": { Component: Page_37, metadata: metadata_37, routePath: "/listing_17", slug: ["listing_17"] },
  "listing_details_01": { Component: Page_38, metadata: metadata_38, routePath: "/listing_details_01", slug: ["listing_details_01"] },
  "listing_details_02": { Component: Page_39, metadata: metadata_39, routePath: "/listing_details_02", slug: ["listing_details_02"] },
  "listing_details_03": { Component: Page_40, metadata: metadata_40, routePath: "/listing_details_03", slug: ["listing_details_03"] },
  "listing_details_04": { Component: Page_41, metadata: metadata_41, routePath: "/listing_details_04", slug: ["listing_details_04"] },
  "listing_details_05": { Component: Page_42, metadata: metadata_42, routePath: "/listing_details_05", slug: ["listing_details_05"] },
  "listing_details_06": { Component: Page_43, metadata: metadata_43, routePath: "/listing_details_06", slug: ["listing_details_06"] },
  "pricing_01": { Component: Page_44, metadata: metadata_44, routePath: "/pricing_01", slug: ["pricing_01"] },
  "pricing_02": { Component: Page_45, metadata: metadata_45, routePath: "/pricing_02", slug: ["pricing_02"] },
  "project_01": { Component: Page_46, metadata: metadata_46, routePath: "/project_01", slug: ["project_01"] },
  "project_02": { Component: Page_47, metadata: metadata_47, routePath: "/project_02", slug: ["project_02"] },
  "project_03": { Component: Page_48, metadata: metadata_48, routePath: "/project_03", slug: ["project_03"] },
  "project_04": { Component: Page_49, metadata: metadata_49, routePath: "/project_04", slug: ["project_04"] },
  "project_details_01": { Component: Page_50, metadata: metadata_50, routePath: "/project_details_01", slug: ["project_details_01"] },
  "service_01": { Component: Page_51, metadata: metadata_51, routePath: "/service_01", slug: ["service_01"] },
  "service_02": { Component: Page_52, metadata: metadata_52, routePath: "/service_02", slug: ["service_02"] },
  "service_details": { Component: Page_53, metadata: metadata_53, routePath: "/service_details", slug: ["service_details"] },
  "dashboard/account-settings": { Component: Page_54, metadata: metadata_54, routePath: "/dashboard/account-settings", slug: ["dashboard","account-settings"] },
  "dashboard/account-settings(pass-change)": { Component: Page_55, metadata: metadata_55, routePath: "/dashboard/account-settings(pass-change)", slug: ["dashboard","account-settings(pass-change)"] },
  "dashboard/add-property": { Component: Page_56, metadata: metadata_56, routePath: "/dashboard/add-property", slug: ["dashboard","add-property"] },
  "dashboard/dashboard-index": { Component: Page_57, metadata: metadata_57, routePath: "/dashboard/dashboard-index", slug: ["dashboard","dashboard-index"] },
  "dashboard/favourites": { Component: Page_58, metadata: metadata_58, routePath: "/dashboard/favourites", slug: ["dashboard","favourites"] },
  "dashboard/membership": { Component: Page_59, metadata: metadata_59, routePath: "/dashboard/membership", slug: ["dashboard","membership"] },
  "dashboard/message": { Component: Page_60, metadata: metadata_60, routePath: "/dashboard/message", slug: ["dashboard","message"] },
  "dashboard/profile": { Component: Page_61, metadata: metadata_61, routePath: "/dashboard/profile", slug: ["dashboard","profile"] },
  "dashboard/properties-list": { Component: Page_62, metadata: metadata_62, routePath: "/dashboard/properties-list", slug: ["dashboard","properties-list"] },
  "dashboard/review": { Component: Page_63, metadata: metadata_63, routePath: "/dashboard/review", slug: ["dashboard","review"] },
  "dashboard/saved-search": { Component: Page_64, metadata: metadata_64, routePath: "/dashboard/saved-search", slug: ["dashboard","saved-search"] }
};

export function getTemplatePageBySlug(slug: string[] = []): TemplatePageEntry | null {
  return templatePages[slug.join("/")] ?? null;
}

export function getTemplateStaticParams(): Array<{ slug: string[] }> {
  return Object.values(templatePages)
    .filter((page) => page.slug.length > 0)
    .map((page) => ({ slug: page.slug }));
}

export function getTemplateRoutes(): string[] {
  return Object.values(templatePages).map((page) => page.routePath);
}

export function getNotFoundTemplate(): TemplatePageEntry | null {
  return templatePages["404"] ?? null;
}
