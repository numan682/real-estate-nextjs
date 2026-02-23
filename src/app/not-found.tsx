import { getNotFoundTemplate } from "@/generated/template-registry";

export default function NotFound() {
  const page = getNotFoundTemplate();

  if (!page) {
    return (
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>404</h1>
        <p>Page not found.</p>
      </main>
    );
  }

  const Component = page.Component;
  return <Component />;
}
