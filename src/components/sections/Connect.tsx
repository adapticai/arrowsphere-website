import { Reveal } from "@/components/reveal";

const INK = "oklch(0.155 0.012 60)";
const INK_FG = "oklch(0.93 0.008 85)";

export default function Connect() {
  return (
    <section
      id="connect"
      data-name="Horizon"
      style={{ background: INK, color: INK_FG, padding: "clamp(6rem,16vh,12rem) 0" }}
    >
      <div className="container-luxury">
        <div style={{ textAlign: "center", maxWidth: "46rem", margin: "0 auto" }}>
          <Reveal>
            <span className="font-display-whisper" style={{ color: "var(--gold)", display: "block", marginBottom: "2rem" }}>
              Start a Conversation
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display-section">
              <span style={{ display: "block" }}>Build Something</span>
              <span style={{ display: "block", opacity: 0.4 }}>Worth Owning</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p
              className="font-body-refined"
              style={{ marginTop: "2rem", marginBottom: "clamp(2.5rem,5vh,3.5rem)", opacity: 0.6, maxWidth: "40rem", marginLeft: "auto", marginRight: "auto" }}
            >
              If you&apos;re building a company that creates real value — and you
              want the people who build it to share in it — we&apos;d like to hear
              from you.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.4rem", alignItems: "center", justifyContent: "center" }}>
              <a
                href="mailto:contact@arrowsphere.co"
                className="font-nav hover:opacity-90 transition-opacity duration-500"
                style={{ background: INK_FG, color: INK, padding: "1.1rem 2.5rem" }}
              >
                Get in Touch
              </a>
              <a
                href="#thesis"
                className="font-nav hover:opacity-100 transition-opacity duration-500"
                style={{ color: INK_FG, opacity: 0.55 }}
              >
                Read the Thesis
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
