"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { ArrowsphereLogo } from "@/components/ArrowsphereLogo";

const NAV = [
  { label: "Thesis", href: "/#thesis" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/#connect" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      style={{
        display: "flex",
        alignItems: "center",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 6,
        marginLeft: "0.4rem",
        color: "var(--foreground)",
      }}
    >
      <span
        aria-hidden
        style={{
          display: "block",
          width: 13,
          height: 13,
          borderRadius: "50%",
          border: "1px solid var(--foreground)",
          background: "linear-gradient(90deg, var(--foreground) 50%, transparent 50%)",
          transform: dark ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </button>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: `0.5px solid ${scrolled ? "var(--border)" : "transparent"}`,
          background: scrolled
            ? "color-mix(in oklab, var(--background) 82%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
          transition: "background .5s, border-color .5s, backdrop-filter .5s",
        }}
      >
        <div className="container-luxury">
          <div
            style={{
              display: "flex",
              height: 80,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <a
              href="/"
              aria-label="Arrowsphere — home"
              className="text-foreground transition-opacity duration-500 hover:opacity-60"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <ArrowsphereLogo style={{ height: 22, width: "auto", display: "block" }} />
            </a>

            <nav
              className="hidden min-[901px]:flex items-center"
              style={{ gap: "clamp(1.25rem,2.5vw,3rem)" }}
            >
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="font-nav text-foreground/50 hover:text-foreground transition-colors duration-500"
                >
                  {n.label}
                </a>
              ))}
              <ThemeToggle />
            </nav>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex flex-col min-[901px]:hidden text-foreground"
              style={{ gap: 5, padding: 6 }}
            >
              <span style={{ width: 22, height: 1, background: "currentColor", display: "block" }} />
              <span style={{ width: 22, height: 1, background: "currentColor", display: "block" }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          background: "var(--background)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity .5s",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="container-luxury"
          style={{ display: "flex", height: 80, alignItems: "center", justifyContent: "space-between" }}
        >
          <ArrowsphereLogo style={{ height: 22, width: "auto", color: "var(--foreground)" }} />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-foreground"
            style={{ padding: 6, fontSize: 26, lineHeight: 1 }}
          >
            ×
          </button>
        </div>

        <nav
          className="container-luxury"
          style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          {NAV.map((n, idx) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-display text-foreground"
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1.2rem",
                padding: "0.75rem 0",
                borderTop: "0.5px solid var(--border)",
                fontSize: "clamp(2rem,9vw,3.2rem)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              <span style={{ fontSize: "0.7rem", color: "var(--gold)", letterSpacing: "0.2em" }}>
                0{idx + 1}
              </span>
              {n.label}
            </a>
          ))}
        </nav>

        <div
          className="container-luxury"
          style={{
            paddingBottom: "2.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <a
            href="mailto:contact@arrowsphere.co"
            className="font-nav text-foreground/50 hover:text-foreground transition-colors"
          >
            contact@arrowsphere.co
          </a>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
