"use client";

import { useEffect, useMemo, useState } from "react";

type Options = {
  headerPx?: number;
  topResetPx?: number;
};

export function useActiveSection(ids: string[], options: Options = {}) {
  const headerPx = options.headerPx ?? 96;
  const topResetPx = options.topResetPx ?? Math.max(10, Math.floor(headerPx / 2));

  const [activeId, setActiveId] = useState<string>("");

  const rootMargin = useMemo(() => `-${headerPx}px 0px -60% 0px`, [headerPx]);

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const pickActive = () => {
      let bestId = "";
      let bestDist = Number.POSITIVE_INFINITY;

      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - headerPx);
        if (rect.bottom > headerPx && dist < bestDist) {
          bestDist = dist;
          bestId = el.id;
        }
      }

      if (window.scrollY < topResetPx) setActiveId("");
      else if (bestId) setActiveId(bestId);
    };

    const io = new IntersectionObserver(() => pickActive(), {
      rootMargin,
      threshold: [0.1, 0.25, 0.5],
    });

    elements.forEach(el => io.observe(el));
    pickActive();

    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, [ids, headerPx, rootMargin, topResetPx]);

  return activeId;
}
