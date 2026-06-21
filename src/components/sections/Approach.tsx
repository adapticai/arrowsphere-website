import { Reveal } from "@/components/reveal";

const practices = [
  {
    num: "01",
    title: "Patient Capital",
    desc: "We hold for decades, not exit windows. Good companies compound — we'd rather not interrupt them to manufacture a return.",
  },
  {
    num: "02",
    title: "Ownership by Design",
    desc: "Broad ownership works when it's built in at incorporation, not bolted on at exit. We help set it up right the first time.",
  },
  {
    num: "03",
    title: "Governance as Infrastructure",
    desc: "We help wire decision rights into how a company runs — so resilience is structural, not left to good intentions.",
  },
  {
    num: "04",
    title: "Conviction over Consensus",
    desc: "We're comfortable being early and alone, as long as the reasoning holds and the people are serious.",
  },
];

export default function Approach() {
  return (
    <section id="approach" data-name="Approach" style={{ padding: "clamp(6rem,15vh,11rem) 0" }}>
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16" style={{ marginBottom: "clamp(3.5rem,7vh,5rem)" }}>
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-display-whisper" style={{ color: "var(--gold)", display: "block", marginBottom: "1.5rem" }}>
                How We Partner
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display-mid">The Practice of Stewardship</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={150}>
              <p className="font-body-refined" style={{ color: "color-mix(in oklab, var(--foreground) 62%, transparent)", fontSize: "1.05rem" }}>
                Money is the easy part. The harder work is structural — how
                ownership gets split, how decisions get made, and how the upside
                compounds for everyone who builds it. That&apos;s where we spend
                our time.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderTop: "0.5px solid var(--border)" }}>
          {practices.map((p, i) => (
            <Reveal key={p.num} delay={i * 80}>
              <div style={{ height: "100%", padding: "clamp(2rem,3vw,2.5rem) clamp(1.4rem,2vw,2rem) clamp(2rem,3vw,2.5rem) 0" }}>
                <span style={{ fontFamily: "var(--font-geist-sans)", fontWeight: 200, fontSize: "1.6rem", color: "var(--gold)", display: "block", marginBottom: "1.4rem" }}>
                  {p.num}
                </span>
                <h3 className="font-display-whisper" style={{ fontSize: "0.82rem", letterSpacing: "0.16em", marginBottom: "1rem", color: "var(--foreground)" }}>
                  {p.title}
                </h3>
                <p className="font-body-refined" style={{ fontSize: "0.92rem", color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}>
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
