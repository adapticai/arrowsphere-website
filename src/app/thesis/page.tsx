import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Investment Thesis | Arrowsphere Holdings",
  description:
    "Our investment philosophy: backing founders who build competitive, for-profit ventures designed to distribute gains broadly in the age of AI-driven transformation.",
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
    subtitle: "A Fundamental Discontinuity",
    content: [
      "The Industrial Revolution converted artisans into wage laborers—a profound transformation of human work and identity. Now we face an even more fundamental shift.",
      "We automate intelligence itself—not tasks, but judgment.",
      "When three people orchestrate what once required 30,000, the entire scaffolding of work-based identity collapses. The systems we've built—career ladders, professional development, retirement planning—all assume that human labor remains the primary input to productive capacity.",
    ],
    pullQuote:
      "McKinsey estimates 15-30 million US workers may face displacement by 2035. But displacement is only half the story.",
  },
  {
    number: "02",
    title: "The Fork in the Road",
    subtitle: "Concentration vs. Distribution",
    content: [
      "Two futures diverge before us.",
      "Path A: Concentrated Power. A tiny elite possesses productive capacity while masses subsist on redistribution. This isn't dystopian fiction—it's the default trajectory of current ownership structures.",
      "Path B: Distributed Prosperity. Competitive ventures designed from inception to allocate value broadly—not through afterthought philanthropy, but through fundamental architecture.",
      "Current ownership defaults—concentrated equity, shareholder primacy, extractive value capture—will simply scale into AI-Born architectures unless we deliberately build alternatives.",
    ],
    pullQuote:
      "But alternatives exist. Mondragón cooperatives. Steward-ownership models. Worker ownership structures. Elinor Ostrom's principles for governing the commons.",
  },
  {
    number: "03",
    title: "Stewardship Capital",
    subtitle: "Architecture, Not Charity",
    content: [
      "We back founders who understand this fork.",
      "Not charities masquerading as businesses. Not extractive models with corporate social responsibility veneers. Competitive, for-profit ventures designed from day one to distribute gains broadly.",
      "This isn't about charity—it's about architecture. Embedding distribution into reward functions. Encoding stakeholder value into governance structures. Building ownership models that include employees, users, and communities from inception.",
      "Stewardship isn't a constraint on returns—it's a framework for building more resilient, defensible, valuable companies in an age of increasing scrutiny on how technology platforms distribute power.",
    ],
  },
  {
    number: "04",
    title: "What We Look For",
    subtitle: "The Investment Criteria",
    content: [
      "AI-Born Architecture: Machine Core + Human Cortex. AI handles pattern recognition, optimization, and execution at scale. Humans provide judgment, ethics, creativity, and strategic direction.",
      "Founders Who Ask 'For Whom?': Not just 'how much?' but 'for whom?' Founders who understand that the question of value distribution is as important as value creation.",
      "Ownership Structures Beyond Shareholders: Employee ownership. User ownership. Community ownership. Governance structures that include stakeholders beyond capital providers.",
      "Decade-Scale Time Horizons: Building enduring institutions, not exit vehicles. Patient capital that measures success in decades, not quarters.",
    ],
  },
  {
    number: "05",
    title: "Individual & Collective Prosperity",
    subtitle: "The Integration",
    content: [
      "Individual prosperity is inseparable from collective flourishing.",
      "While our investment portfolio focuses on competitive ventures with embedded stakeholder value, our foundation addresses the broader infrastructure required for prosperity: education, formation, community capacity, and the social fabric that enables individual agency.",
      "You cannot build stewardship-oriented companies without stewardship-capable communities. You cannot encode participatory governance into software without citizens who understand participation. The work is integrated—commercial architecture and social infrastructure, mutually reinforcing.",
    ],
    pullQuote:
      "The question before us is not whether AI will transform society, but whether that transformation will concentrate or distribute prosperity.",
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
                When three people can orchestrate what once required 30,000, the
                scaffolding of work-based identity collapses. The question isn't
                whether to adopt AI but what values to encode.
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
                Build With Us
              </span>

              <h2 className="font-display-section text-background mb-8">
                Building the Future Together
              </h2>

              <p className="font-body-refined text-background/50 mb-16 max-w-2xl mx-auto">
                If you're building a venture that aligns with this
                thesis—AI-born architecture with embedded stakeholder value—we
                want to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 font-nav text-foreground bg-background hover:bg-background/90 transition-all duration-500"
                >
                  Get in Touch
                </Link>

                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-4 font-nav text-background/50 hover:text-background transition-all duration-500"
                >
                  <span className="relative">
                    View Portfolio
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-background transition-all duration-500 group-hover:w-full" />
                  </span>
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
