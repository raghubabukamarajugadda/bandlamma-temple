"use client";

import { useEffect } from "react";

/**
 * Perimeter "pradakshina" light — injects an .edge-light layer into every
 * element marked data-sparkle; CSS animates a golden comet around the border
 * on hover. Also watches for elements added later (wizard steps, filters).
 */
export default function SparkleLayer() {
  useEffect(() => {
    const attach = (el: Element) => {
      if (!(el instanceof HTMLElement)) return;
      if (el.querySelector(":scope > .edge-light")) return;
      const s = document.createElement("span");
      s.className = "edge-light";
      s.setAttribute("aria-hidden", "true");
      el.appendChild(s);
    };

    const scan = (root: ParentNode) =>
      root.querySelectorAll("[data-sparkle]").forEach(attach);

    scan(document);

    const mo = new MutationObserver((muts) => {
      muts.forEach((m) =>
        m.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.matches?.("[data-sparkle]")) attach(n);
          scan(n);
        })
      );
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  return null;
}
