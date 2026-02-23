export function dedupeScripts(scripts: string[]): string[] {
  return scripts.filter((script, index) => scripts.indexOf(script) === index);
}
