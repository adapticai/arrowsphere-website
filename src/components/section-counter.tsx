"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", name: "Origin" },
  { id: "lineage", name: "Lineage" },
  { id: "thesis", name: "Thesis" },
  { id: "divergence", name: "Divergence" },
  { id: "approach", name: "Approach" },
  { id: "leadership", name: "Leadership" },
  { id: "connect", name: "Horizon" },
];

/** Fixed editorial section counter, reads over any background via blend mode. */
export function SectionCounter() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = SECTIONS.findIndex(
              (s) => s.id === (e.target as HTMLElement).id,
            );
            if (idx >= 0) setI(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const total = String(SECTIONS.length).padStart(2, "0");

  return (
    <div
      data-counter
      aria-hidden
      className="hidden sm:flex"
      style={{
        position: "fixed",
        left: "var(--pad, 2rem)",
        bottom: "1.6rem",
        zIndex: 40,
        alignItems: "center",
        gap: "0.7rem",
        fontSize: "0.62rem",
        fontWeight: 500,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#ffffff",
        mixBlendMode: "difference",
      }}
    >
      <span>{String(i + 1).padStart(2, "0")}</span>
      <span style={{ opacity: 0.55 }}>/ {total}</span>
      <span
        style={{ width: "1.5rem", height: "1px", background: "currentColor", opacity: 0.5 }}
      />
      <span>{SECTIONS[i].name}</span>
    </div>
  );
}
