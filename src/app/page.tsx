import { HomePageTemplate, homePageMetadata } from "@/features/home/home-page";

export const dynamic = "force-static";
export const metadata = homePageMetadata;

export default function HomePage() {
  return <HomePageTemplate />;
}
