"use client";

import { useEffect, useRef } from "react";

/** Slowly rotating point-sphere drawn on a canvas (the hero motif). */
export function Sphere() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let t = 0;

    // Fibonacci sphere of points
    const N = 520;
    const pts: Array<[number, number, number]> = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const th = golden * i;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
    };
    resize();

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const color = getComputedStyle(canvas).color || "#1a1a1a";
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.42;
      const ay = t * 0.12;
      const ax = 0.32;
      const cY = Math.cos(ay),
        sY = Math.sin(ay),
        cX = Math.cos(ax),
        sX = Math.sin(ax);
      for (const [x0, y0, z0] of pts) {
        let x = x0 * cY - z0 * sY;
        let z = x0 * sY + z0 * cY;
        const y = y0 * cX - z * sX;
        z = y0 * sX + z * cX;
        const depth = (z + 1) / 2; // 0 (back) .. 1 (front)
        const px = cx + x * R;
        const py = cy + y * R;
        const rad = (0.5 + depth * 1.35) * dpr;
        ctx.globalAlpha = 0.1 + depth * 0.55;
        ctx.beginPath();
        ctx.arc(px, py, rad, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      t += 0.06;
      draw();
      raf = requestAnimationFrame(loop);
    };

    if (reduce) {
      draw();
    } else {
      loop();
    }

    const onResize = () => {
      resize();
      draw();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        color: "var(--foreground)",
      }}
    />
  );
}
