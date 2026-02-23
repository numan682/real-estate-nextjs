declare module "@/generated/template-pages/*" {
  import type { Metadata } from "next";
  import type { ComponentType } from "react";

  const Component: ComponentType;
  export const metadata: Metadata;
  export default Component;
}
