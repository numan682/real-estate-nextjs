import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  {
    ignores: ["public/**", ".next/**", "out/**", "node_modules/**"]
  },
  ...nextVitals,
  ...nextTypeScript,
  {
    rules: {
      "@next/next/no-css-tags": "off",
      "@next/next/no-before-interactive-script-outside-document": "off",
      "@next/next/no-sync-scripts": "off"
    }
  }
]);
