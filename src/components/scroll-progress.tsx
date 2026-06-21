"use client";

import { useEffect, useState } from "react";

/** Thin fixed top bar tracking scroll progress. */
export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "1.5px",
        width: `${pct}%`,
        background: "var(--foreground)",
        zIndex: 70,
        transition: "width 0.12s linear",
      }}
    />
  );
}
