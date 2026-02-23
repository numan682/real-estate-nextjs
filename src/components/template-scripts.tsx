"use client";

import { useEffect, useMemo } from "react";
import { dedupeScripts } from "@/components/template-script-utils";

type TemplateScriptsProps = {
  scripts: string[];
};

const SCRIPT_LOAD_TIMEOUT_MS = 15000;
const scriptLoadPromises = new Map<string, Promise<void>>();

function isSafeLocalScriptSource(scriptSource: string) {
  return scriptSource.startsWith("/") && !scriptSource.startsWith("//");
}

function findExistingScript(scriptSource: string): HTMLScriptElement | null {
  const expectedUrl = new URL(scriptSource, window.location.origin).href;

  for (const scriptElement of document.querySelectorAll<HTMLScriptElement>("script[src]")) {
    const rawSource = scriptElement.getAttribute("src");
    if (rawSource === scriptSource || scriptElement.src === expectedUrl) {
      return scriptElement;
    }
  }

  return null;
}

function loadScript(scriptSource: string) {
  if (!isSafeLocalScriptSource(scriptSource)) {
    return Promise.reject(new Error(`Blocked non-local script source: ${scriptSource}`));
  }

  const inFlightPromise = scriptLoadPromises.get(scriptSource);
  if (inFlightPromise) {
    return inFlightPromise;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const existingScript = findExistingScript(scriptSource);
    if (existingScript) {
      if (existingScript.dataset.templateReady === "true") {
        existingScript.dataset.templateReady = "true";
        resolve();
        return;
      }

      const timeoutId = window.setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout while loading script: ${scriptSource}`));
      }, SCRIPT_LOAD_TIMEOUT_MS);

      const cleanup = () => {
        window.clearTimeout(timeoutId);
        existingScript.removeEventListener("load", handleLoad);
        existingScript.removeEventListener("error", handleError);
      };

      const handleLoad = () => {
        cleanup();
        existingScript.dataset.templateReady = "true";
        resolve();
      };

      const handleError = () => {
        cleanup();
        reject(new Error(`Failed to load script: ${scriptSource}`));
      };

      existingScript.addEventListener("load", handleLoad, { once: true });
      existingScript.addEventListener("error", handleError, { once: true });
      return;
    }

    const scriptElement = document.createElement("script");
    scriptElement.src = scriptSource;
    scriptElement.async = false;
    scriptElement.dataset.templateScript = "true";

    const timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error(`Timeout while loading script: ${scriptSource}`));
    }, SCRIPT_LOAD_TIMEOUT_MS);

    const cleanup = () => {
      window.clearTimeout(timeoutId);
      scriptElement.removeEventListener("load", handleLoad);
      scriptElement.removeEventListener("error", handleError);
    };

    const handleLoad = () => {
      cleanup();
      scriptElement.dataset.templateReady = "true";
      resolve();
    };

    const handleError = () => {
      cleanup();
      reject(new Error(`Failed to load script: ${scriptSource}`));
    };

    scriptElement.addEventListener("load", handleLoad, { once: true });
    scriptElement.addEventListener("error", handleError, { once: true });
    document.body.appendChild(scriptElement);
  }).catch((error) => {
    scriptLoadPromises.delete(scriptSource);
    throw error;
  });

  scriptLoadPromises.set(scriptSource, promise);
  return promise;
}

function isPreloaderVisible() {
  const preloader = document.getElementById("preloader");
  if (!preloader) {
    return false;
  }

  const styles = window.getComputedStyle(preloader);
  return styles.display !== "none" && styles.visibility !== "hidden" && styles.opacity !== "0";
}

function forceHidePreloader() {
  const preloader = document.getElementById("preloader");
  const ctnPreloader = document.getElementById("ctn-preloader");

  if (ctnPreloader) {
    ctnPreloader.style.opacity = "0";
    ctnPreloader.style.visibility = "hidden";
    ctnPreloader.style.display = "none";
    ctnPreloader.style.pointerEvents = "none";
  }

  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    preloader.style.display = "none";
    preloader.style.pointerEvents = "none";
  }

  document.body.style.overflow = "visible";
}

function hardenExternalLinks() {
  for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]')) {
    if (!anchor.rel.includes("noopener")) {
      anchor.rel = `${anchor.rel} noopener noreferrer`.trim();
    }
  }
}

function syncCurrentYearInCopyright() {
  const currentYear = String(new Date().getFullYear());
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

  let currentNode = walker.nextNode();
  while (currentNode) {
    const textNode = currentNode as Text;
    const text = textNode.nodeValue;

    if (text && /Copyright\s*@\s*\d{4}/i.test(text)) {
      textNode.nodeValue = text.replace(/Copyright\s*@\s*\d{4}/gi, `Copyright @${currentYear}`);
    }

    currentNode = walker.nextNode();
  }
}

export function TemplateScripts({ scripts }: TemplateScriptsProps) {
  const orderedScripts = useMemo(() => dedupeScripts(scripts), [scripts]);
  const scriptsKey = orderedScripts.join("|");

  useEffect(() => {
    let isCancelled = false;

    const hardFallbackTimer = window.setTimeout(() => {
      if (!isCancelled && isPreloaderVisible()) {
        forceHidePreloader();
      }
    }, 9000);

    (async () => {
      syncCurrentYearInCopyright();

      for (const scriptSource of orderedScripts) {
        if (isCancelled) {
          return;
        }

        await loadScript(scriptSource);
      }

      if (isCancelled) {
        return;
      }

      hardenExternalLinks();
      syncCurrentYearInCopyright();

      // theme.js registers critical logic on window load; re-dispatch for SPA timing.
      window.dispatchEvent(new Event("load"));

      window.setTimeout(() => {
        if (!isCancelled && isPreloaderVisible()) {
          forceHidePreloader();
        }
      }, 1500);
    })().catch(() => {
      if (!isCancelled) {
        syncCurrentYearInCopyright();
        forceHidePreloader();
      }
    });

    return () => {
      isCancelled = true;
      window.clearTimeout(hardFallbackTimer);
    };
  }, [orderedScripts, scriptsKey]);

  return null;
}
