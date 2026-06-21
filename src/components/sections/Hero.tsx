import { Reveal } from "@/components/reveal";
import { Sphere } from "@/components/sphere";

const line = "color-mix(in oklab, var(--border) 70%, transparent)";

export default function Hero() {
  return (
    <section
      id="hero"
      data-name="Origin"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Sphere motif, upper-right */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "5%",
          right: "3%",
          width: "min(48vw, 640px)",
          height: "min(48vw, 640px)",
          zIndex: 0,
        }}
      >
        <Sphere />
      </div>

      {/* Architectural lines */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <div style={{ position: "absolute", left: "15%", top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, transparent, ${line}, transparent)` }} />
        <div style={{ position: "absolute", right: "15%", top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, transparent, ${line}, transparent)` }} />
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, color-mix(in oklab, var(--border) 45%, transparent), transparent)" }} />
      </div>

      {/* Content */}
      <div className="container-luxury" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", paddingBottom: "2rem" }}>
        <Reveal>
          <span
            className="font-display-whisper"
            style={{ color: "color-mix(in oklab, var(--foreground) 48%, transparent)", letterSpacing: "0.28em" }}
          >
            Private Family Office
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display-hero" style={{ marginTop: "clamp(2rem,5vh,3.5rem)" }}>
            <span style={{ display: "block" }}>Stewardship</span>
            <span style={{ display: "block", color: "color-mix(in oklab, var(--foreground) 32%, transparent)" }}>
              Capital
            </span>
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p
            className="font-quote"
            style={{ marginTop: "clamp(1.6rem,3.5vh,2.5rem)", maxWidth: "34rem", color: "color-mix(in oklab, var(--foreground) 72%, transparent)" }}
          >
            A private family office backing technology founders — and helping them
            build companies the people who create the value actually own.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <a
            href="#thesis"
            className="font-nav text-foreground hover:opacity-60 transition-opacity duration-500"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", marginTop: "clamp(2rem,5vh,3rem)" }}
          >
            Explore Our Thesis <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>

      {/* Bottom row */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2 }}>
        <div className="container-luxury">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              borderTop: "0.5px solid color-mix(in oklab, var(--border) 60%, transparent)",
              padding: "2rem 0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "color-mix(in oklab, var(--foreground) 35%, transparent)" }}>
              <span className="animate-pulse" style={{ width: 1, height: 44, background: "currentColor", display: "block" }} />
              <span className="font-display-whisper">Scroll</span>
            </div>
            <div className="hidden sm:block" style={{ color: "color-mix(in oklab, var(--foreground) 40%, transparent)" }}>
              <span className="font-display-whisper">Level 1, Innovation One · Dubai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
