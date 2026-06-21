import { Reveal } from "@/components/reveal";

const leaders = [
  {
    initials: "MG",
    name: "Mehran Granfar",
    title: "General Partner",
    quote: "The real question isn't whether to adopt AI. It's which values you encode while you do.",
  },
  {
    initials: "BL",
    name: "Bronwyn Leong",
    title: "Managing Partner",
    quote: "If a company creates extraordinary value, the people who built it should own a real piece of it.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      data-name="Leadership"
      style={{ padding: "clamp(6rem,15vh,11rem) 0", background: "color-mix(in oklab, var(--muted) 45%, var(--background))" }}
    >
      <div className="container-luxury">
        <div style={{ textAlign: "center", marginBottom: "clamp(3.5rem,7vh,5rem)" }}>
          <Reveal>
            <span className="font-display-whisper" style={{ color: "var(--gold)", display: "block", marginBottom: "1.4rem" }}>
              Stewards of Capital & Purpose
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display-section">Leadership</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(2.5rem,5vw,5rem)", maxWidth: "62rem", margin: "0 auto" }}>
          {leaders.map((l, i) => (
            <Reveal key={l.initials} delay={i * 120}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "clamp(7rem,12vw,9rem)",
                    height: "clamp(7rem,12vw,9rem)",
                    margin: "0 auto 1.8rem",
                    border: "0.5px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--card)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, fontSize: "1.75rem", letterSpacing: "0.04em", color: "color-mix(in oklab, var(--foreground) 22%, transparent)" }}>
                    {l.initials}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 300, marginBottom: "0.35rem" }}>{l.name}</h3>
                <span className="font-display-whisper" style={{ color: "color-mix(in oklab, var(--foreground) 45%, transparent)", display: "block", marginBottom: "1.4rem" }}>
                  {l.title}
                </span>
                <p className="font-quote" style={{ color: "color-mix(in oklab, var(--foreground) 65%, transparent)", maxWidth: "24rem", margin: "0 auto", fontSize: "1.15rem" }}>
                  &ldquo;{l.quote}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
