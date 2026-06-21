import { Reveal } from "@/components/reveal";

const futures = [
  {
    num: "01",
    path: "The Default Path",
    title: "Concentration",
    desc: "The gains collect with the few who happen to hold the equity.",
    points: ["Brittleness under shock", "Captured, narrowing value", "Institutions that fracture"],
    gold: false,
  },
  {
    num: "02",
    path: "The Stewardship Path",
    title: "Distribution",
    desc: "The gains are shared with the many who do the building.",
    points: ["Resilience under shock", "Shared, compounding value", "Institutions that endure"],
    gold: true,
  },
];

export default function Divergence() {
  return (
    <section
      id="divergence"
      data-name="Divergence"
      style={{ padding: "clamp(6rem,15vh,11rem) 0", background: "color-mix(in oklab, var(--muted) 45%, var(--background))" }}
    >
      <div className="container-luxury">
        <div style={{ textAlign: "center", maxWidth: "44rem", margin: "0 auto clamp(3.5rem,7vh,5rem)" }}>
          <Reveal>
            <span className="font-display-whisper" style={{ color: "var(--gold)", display: "block", marginBottom: "1.4rem" }}>
              Concentrate or Distribute
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display-section">Two Futures</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body-refined" style={{ marginTop: "1.5rem", color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}>
              One technology, two destinations. The ownership we choose now
              decides which one compounds.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(1.5rem,3vw,2.5rem)" }}>
          {futures.map((f, i) => (
            <Reveal key={f.num} delay={i * 100}>
              <div
                style={{
                  height: "100%",
                  background: "var(--card)",
                  border: "0.5px solid var(--border)",
                  borderTop: f.gold ? "2px solid var(--gold)" : "0.5px solid var(--border)",
                  padding: "clamp(2rem,4vw,3rem)",
                }}
              >
                <span className="font-display-whisper" style={{ color: "color-mix(in oklab, var(--foreground) 42%, transparent)" }}>
                  {f.num} / {f.path}
                </span>
                <h3 className="font-display-mid" style={{ marginTop: "1.2rem", marginBottom: "1rem" }}>
                  {f.title}
                </h3>
                <p className="font-body-refined" style={{ color: "color-mix(in oklab, var(--foreground) 62%, transparent)", marginBottom: "2rem" }}>
                  {f.desc}
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.9rem", borderTop: "0.5px solid var(--border)", paddingTop: "1.6rem" }}>
                  {f.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.95rem", color: "color-mix(in oklab, var(--foreground) 70%, transparent)" }}>
                      <span aria-hidden style={{ color: f.gold ? "var(--gold)" : "color-mix(in oklab, var(--foreground) 28%, transparent)" }}>
                        {f.gold ? "↗" : "↘"}
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
