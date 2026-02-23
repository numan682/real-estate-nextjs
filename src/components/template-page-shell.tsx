import { TemplateScripts } from "@/components/template-scripts";

type TemplatePageShellProps = {
  scripts: string[];
  children: React.ReactNode;
};

export function TemplatePageShell({ scripts, children }: TemplatePageShellProps) {
  return (
    <>
      {children}
      <TemplateScripts scripts={scripts} />
    </>
  );
}
