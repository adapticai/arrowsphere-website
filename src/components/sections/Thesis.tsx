import { Reveal } from "@/components/reveal";

const pillars = [
  {
    num: "01",
    title: "The Leverage Shift",
    sub: "What AI Actually Changes",
    desc: "AI doesn't just automate tasks; it automates judgment. A handful of people can now do what once took thousands. When leverage gets that cheap, the constraint stops being capacity — and starts being intent.",
  },
  {
    num: "02",
    title: "The Fork in the Road",
    sub: "Concentrated vs. Distributed",
    desc: "That leverage can pool wealth in very few hands, or spread it across many. The technology doesn't decide which — the ownership we design into companies does. Left on default, it concentrates.",
  },
  {
    num: "03",
    title: "Stewardship as Strategy",
    sub: "Why Distribution Is Sturdier",
    desc: "Shared ownership isn't only fairer, it's harder to break. Companies whose value is widely held resist capture, keep their people, and tend to outlast the founders who started them.",
  },
];

export default function Thesis() {
  return (
    <section id="thesis" data-name="Thesis" style={{ padding: "clamp(6rem,15vh,11rem) 0" }}>
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky" style={{ top: "8rem" }}>
              <Reveal>
                <span className="font-display-whisper" style={{ color: "var(--gold)", display: "block", marginBottom: "1.5rem" }}>
                  Investment Philosophy
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display-mid">The Stewardship Thesis</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="font-body-refined" style={{ marginTop: "1.6rem", maxWidth: "26rem", color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}>
                  We back for-profit companies built, from day one, to share
                  ownership widely. Not out of charity — because it&apos;s the
                  more durable way to build.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {pillars.map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <div
                  data-pillar
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "clamp(1.5rem,4vw,3.5rem)",
                    alignItems: "start",
                    borderTop: "0.5px solid var(--border)",
                    padding: "clamp(2.5rem,5vh,3.5rem) 0",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-geist-sans)", fontWeight: 200, fontSize: "clamp(2.2rem,4vw,3.2rem)", lineHeight: 1, color: "color-mix(in oklab, var(--foreground) 18%, transparent)" }}>
                    {p.num}
                  </span>
                  <div>
                    <h3 style={{ fontSize: "clamp(1.5rem,2.6vw,2.1rem)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "0.45rem" }}>
                      {p.title}
                    </h3>
                    <span className="font-display-whisper" style={{ color: "color-mix(in oklab, var(--foreground) 42%, transparent)", display: "block", marginBottom: "1.1rem" }}>
                      {p.sub}
                    </span>
                    <p className="font-body-refined" style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)", maxWidth: "34rem" }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
