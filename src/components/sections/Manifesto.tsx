"use client";

import { useEffect, useRef, useState } from "react";

const TEXT =
  "When a handful of people can build what once took thousands, the question stops being what you can make — and becomes who it's for.";
const WORDS = TEXT.split(" ");
const GOLD_FROM = WORDS.length - 4; // "becomes who it's for." cluster

export function Manifesto() {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
        setProgress(total > 0 ? scrolled / total : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Reveal across the middle 80% of the scroll-through.
  const eased = Math.min(Math.max((progress - 0.08) / 0.78, 0), 1);
  const revealed = Math.round(eased * WORDS.length);

  return (
    <section id="lineage" data-name="Lineage" ref={ref} style={{ position: "relative", minHeight: "250vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="container-luxury">
          <span
            className="font-display-whisper"
            style={{ color: "var(--gold)", display: "block", marginBottom: "clamp(2rem,5vh,3.5rem)" }}
          >
            The Leverage Shift — 01
          </span>
          <p
            style={{
              fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(1.85rem,5.2vw,4.4rem)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
              maxWidth: "20ch",
            }}
          >
            {WORDS.map((w, i) => {
              const on = i < revealed;
              const gold = i >= GOLD_FROM;
              return (
                <span
                  key={i}
                  style={{
                    color: on
                      ? gold
                        ? "var(--gold)"
                        : "var(--foreground)"
                      : "color-mix(in oklab, var(--foreground) 14%, transparent)",
                    transition: "color 0.35s ease",
                  }}
                >
                  {w}
                  {i < WORDS.length - 1 ? " " : ""}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
