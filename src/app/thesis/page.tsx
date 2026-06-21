import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Investment Thesis | Arrowsphere Holdings",
  description:
    "Why we invest in AI-Born companies built to share ownership widely — the argument, the mechanisms, and the honest caveats.",
  openGraph: {
    title: "Investment Thesis | Arrowsphere Holdings",
    description:
      "Stewardship capital for the AI age—competitive ventures that allocate value broadly.",
    type: "article",
  },
};

interface ThesisSection {
  number: string;
  title: string;
  subtitle: string;
  content: string[];
  pullQuote?: string;
}

const thesisSections: ThesisSection[] = [
  {
    number: "01",
    title: "The Lineage Break",
    subtitle: "What is actually changing",
    content: [
      "For two centuries, scale meant people. More output needed more hands, more managers, more coordination. The Industrial Revolution refined that arrangement; it didn't replace it.",
      "AI breaks the link. When software can do the analysis, the execution, and increasingly the judgment, a handful of people can run what used to take thousands.",
      "That sounds like an efficiency story. It's really an ownership story. When a company's value comes less from its workforce and more from its systems, who owns those systems — and who shares in what they produce — decides how the gains get split.",
    ],
    pullQuote:
      "McKinsey puts potential US displacement at 15–30 million workers by 2035. The figure is contested. The direction isn't.",
  },
  {
    number: "02",
    title: "The Default Is Concentration",
    subtitle: "Unless it's designed otherwise",
    content: [
      "Nothing about AI requires that its gains concentrate. But the structures we'd build them into — standard equity, shareholder primacy, venture economics tuned for a fast, large exit — were built to concentrate, and they'll do it faster now, with fewer people in the room.",
      "Broad ownership doesn't arrive later, once a company is big and feeling generous. By then the cap table is set and the incentives are fixed. It has to be built in at the start, while it's still cheap and still possible.",
      "That's the whole bet: the companies worth backing are the ones that make this choice early — not as a statement of values, but because it changes who stays, who's aligned, and how easily the thing can be hollowed out.",
    ],
    pullQuote:
      "None of this is new. Mondragón has run it at industrial scale for decades, and Elinor Ostrom won a Nobel for showing how shared resources get governed well. AI only raises the stakes.",
  },
  {
    number: "03",
    title: "Stewardship Capital",
    subtitle: "Why we think it pays",
    content: [
      "Stewardship capital is a plain idea: back competitive, for-profit companies built to share what they create — with the people who build them, the people who use them, and sometimes the communities around them.",
      "The interesting claim is financial, not moral. Ownership that's broadly held and hard to unwind tends to make a company more resilient — harder to strip for parts, stickier for good people, more likely to hold its purpose when the money turns over. We're betting that, across a decade, that resilience compounds into returns.",
      "We could be wrong about the timeline. We don't think we're wrong about the direction.",
    ],
    pullQuote:
      "It already works at scale. Patagonia, Bosch, and Carl Zeiss are all steward-owned — large, competitive companies structured so their ownership can't simply be sold to the highest bidder.",
  },
  {
    number: "04",
    title: "What We Look For",
    subtitle: "Four things, roughly",
    content: [
      "AI-Born by design. The core work — analysis, execution, operations — runs on AI and scales without adding headcount, with a small group of people accountable for judgment, taste, and direction. Not AI bolted onto an old org chart.",
      "Founders who ask 'for whom?' People who treat how their value gets distributed as a first-order design question, not something to sort out at the IPO or hand to a foundation later.",
      "Ownership built in early. Concrete structures, set at founding — purpose trusts, golden shares, asset locks, redeemable non-voting shares — that bring employees, users, or communities into ownership and keep control from quietly migrating to whoever writes the largest cheque.",
      "A decade, not a quarter. Patient capital, for people building institutions meant to outlast them rather than vehicles built to be flipped.",
    ],
  },
  {
    number: "05",
    title: "Companies Aren't Enough",
    subtitle: "Why we fund the other side",
    content: [
      "There's a limit to what investment alone can do. You can't build companies that share ownership widely without people ready to hold it — to weigh decisions, govern well, and think past the next quarter.",
      "That capacity doesn't come from a cap table. It comes from education, from communities with some agency of their own, from a culture willing to take the long view. Markets don't reliably produce it.",
      "So the same people behind Arrowsphere also fund the Foundation for Collective Prosperity, which works on exactly that — the human side of the same problem. The investing and the giving are two halves of one wager.",
    ],
    pullQuote:
      "We'd rather under-promise here. This is early. Most companies won't be built this way, and we expect to learn as much from what fails as from what works.",
  },
];

export default function ThesisPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-end pb-24 pt-40">
          <div className="absolute inset-0 noise-overlay opacity-30" />

          <div className="container-luxury relative z-10">
            <div className="max-w-4xl">
              <span className="font-display-whisper text-foreground/40 block mb-8">
                Investment Philosophy
              </span>

              <h1 className="font-display-hero text-foreground mb-12 leading-[0.9]">
                <span className="block">The Stewardship</span>
                <span className="block text-foreground/30">Capital Thesis</span>
              </h1>

              <p className="font-quote text-foreground/60 max-w-2xl">
                As AI takes over more of the work — including the judgment — the
                question of who owns what a company builds gets sharper. We
                invest where that question is answered well: early, and on
                purpose.
              </p>
            </div>
          </div>

          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        {/* Thesis Sections */}
        {thesisSections.map((section, index) => (
          <section
            key={section.number}
            className={`relative section-padding-sm ${
              index % 2 === 0 ? "bg-background" : "bg-muted/20"
            }`}
          >
            <div className="container-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Number & Title */}
                <div className="lg:col-span-4">
                  <span className="font-numbers text-7xl lg:text-8xl font-extralight text-foreground/10 block mb-6">
                    {section.number}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-3 tracking-tight">
                    {section.title}
                  </h2>
                  <span className="font-display-whisper text-foreground/40">
                    {section.subtitle}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 lg:col-start-6">
                  <div className="space-y-8">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={`font-body-refined text-foreground/60 ${
                          pIndex === 1 && section.number === "01"
                            ? "text-xl lg:text-2xl font-light text-foreground/80"
                            : ""
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.pullQuote && (
                      <blockquote className="font-quote text-xl lg:text-2xl text-foreground/70 border-l border-foreground/20 pl-8 py-4 my-12">
                        {section.pullQuote}
                      </blockquote>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Section divider */}
            {index < thesisSections.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            )}
          </section>
        ))}

        {/* CTA Section */}
        <section className="relative bg-foreground text-background section-padding">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-display-whisper text-background/40 block mb-8">
                Talk to Us
              </span>

              <h2 className="font-display-section text-background mb-8">
                If this sounds like what you're building
              </h2>

              <p className="font-body-refined text-background/50 mb-16 max-w-2xl mx-auto">
                We back a small number of founders a year. If you're designing
                broad ownership into an AI-Born company from the start, send a
                note — even if it's early.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 font-nav text-foreground bg-background hover:bg-background/90 transition-all duration-500"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
