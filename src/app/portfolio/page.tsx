import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Arrowsphere Holdings",
  description:
    "Stewardship Capital in practice: holdings that exemplify building competitive enterprises distributing value broadly across stakeholders.",
  openGraph: {
    title: "Portfolio | Arrowsphere Holdings",
    description:
      "Each holding exemplifies the thesis of building competitive enterprises that distribute value broadly.",
    type: "website",
  },
};

interface Holding {
  id: string;
  name: string;
  category: string;
  description: string;
  thesisAlignment: string;
  role: string;
  url?: string;
}

const holdings: Holding[] = [
  {
    id: "adaptic",
    name: "Adaptic Holdings",
    category: "AI-Native Asset Management",
    description:
      "The operating system for AI-native asset management. Adaptic demonstrates that AI-Born architecture can operate in regulated financial services while maintaining stakeholder orientation.",
    thesisAlignment:
      "Proves that AI-Born enterprises can compete in highly regulated industries without sacrificing distributed value creation.",
    role: "Founder, CEO, Chairman",
    url: "https://adaptic.ai",
  },
  {
    id: "future-thesis",
    name: "Future Thesis Lab",
    category: "Venture Capital",
    description:
      "A venture capital firm investing in founders building AI-Born enterprises that embrace distributed ownership and stakeholder-oriented governance.",
    thesisAlignment:
      "Operationalizes stewardship capital at the venture stage, actively seeking founders who recognize the lineage break.",
    role: "Co-Founder, General Partner",
  },
  {
    id: "ai-born",
    name: "AI-Born",
    category: "Intellectual Foundation",
    description:
      "The book that articulates the core intellectual framework: the lineage break created by AI, the emergence of AI-Born architecture, and the fundamental choice between concentration and distribution.",
    thesisAlignment:
      "The theoretical foundation that transforms stewardship capital from aspiration to architecture.",
    role: "Author",
  },
  {
    id: "foundation",
    name: "Foundation for Collective Prosperity",
    category: "Philanthropy · 501(c)(3)",
    description:
      "A New York-based private foundation dedicated to education, formation, and community capacity building for the transition to an AI-Born economy.",
    thesisAlignment:
      "Addresses the cultural and social infrastructure necessary for stewardship capital to flourish at scale.",
    role: "Co-Founder",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-end pb-24 pt-40">
          <div className="absolute inset-0 noise-overlay opacity-30" />

          <div className="container-luxury relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6">
                <span className="font-display-whisper text-foreground/40 block mb-8">
                  Holdings & Ventures
                </span>

                <h1 className="font-display-hero text-foreground leading-[0.9]">
                  Portfolio
                </h1>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 flex items-end">
                <p className="font-body-refined text-foreground/60">
                  Each holding exemplifies the thesis of building competitive
                  enterprises that distribute value broadly. This is stewardship
                  capital: not charity, but architecture.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        {/* Introduction */}
        <section className="section-padding-sm bg-muted/20">
          <div className="container-luxury">
            <div className="max-w-3xl">
              <p className="font-body-refined text-foreground/60 mb-8">
                We are at a lineage break. The emergence of AI-Born
                enterprises—companies where AI occupies the machine core and
                humans occupy the strategic cortex—represents a fundamental
                discontinuity in how value is created and distributed.
              </p>
              <p className="font-body-refined text-foreground/60">
                Our holdings demonstrate that the choice to build for
                distribution is not a sacrifice of competitive advantage but an
                embrace of it.
              </p>
            </div>
          </div>
        </section>

        {/* Holdings Grid */}
        <section className="bg-background">
          {holdings.map((holding, index) => (
            <div
              key={holding.id}
              id={holding.id}
              className="border-b border-border/50"
            >
              <div className="container-luxury section-padding-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                  {/* Left: Number & Category */}
                  <div className="lg:col-span-3">
                    <span className="font-numbers text-6xl lg:text-7xl font-extralight text-foreground/10 block mb-6">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display-whisper text-foreground/40">
                      {holding.category}
                    </span>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-8 lg:col-start-5">
                    <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6 tracking-tight">
                      {holding.name}
                    </h2>

                    <p className="font-body-refined text-foreground/60 mb-8 max-w-2xl">
                      {holding.description}
                    </p>

                    {/* Thesis Alignment */}
                    <div className="border-l border-foreground/20 pl-8 mb-10">
                      <span className="font-display-whisper text-foreground/30 block mb-3">
                        Thesis Alignment
                      </span>
                      <p className="font-quote text-lg text-foreground/70">
                        {holding.thesisAlignment}
                      </p>
                    </div>

                    {/* Role & Link */}
                    <div className="flex flex-wrap items-center gap-8">
                      <div>
                        <span className="font-display-whisper text-foreground/30 block mb-2">
                          Role
                        </span>
                        <span className="text-foreground/70">
                          {holding.role}
                        </span>
                      </div>

                      {holding.url && (
                        <a
                          href={holding.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-3 font-nav text-foreground/50 hover:text-foreground transition-all duration-500"
                        >
                          <span className="relative">
                            Visit Website
                            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-500 group-hover:w-full" />
                          </span>
                          <svg
                            className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M7 17L17 7M17 7H7M17 7V17"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Closing Statement */}
        <section className="section-padding bg-muted/30">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-light text-foreground mb-8 tracking-tight">
                The Architecture of Distribution
              </h2>

              <p className="font-body-refined text-foreground/60 mb-6">
                These holdings are not isolated bets. They form a coherent
                ecosystem: a theoretical foundation, operating companies proving
                the thesis in practice, a vehicle for extending the approach to
                other founders, and an investment in the human capacity
                necessary for the transition.
              </p>

              <p className="font-body-refined text-foreground/60">
                Together, they demonstrate that stewardship capital is not an
                abstraction but an architecture—one that can be built, scaled,
                and sustained across sectors, stages, and stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-foreground text-background section-padding">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display-section text-background mb-8">
                Explore Our Approach
              </h2>

              <p className="font-body-refined text-background/50 mb-16">
                Learn more about the stewardship capital thesis, our investment
                philosophy, and how we work with founders building for
                distribution.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/thesis"
                  className="group relative px-10 py-5 font-nav text-foreground bg-background hover:bg-background/90 transition-all duration-500"
                >
                  Read the Thesis
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 font-nav text-background/50 hover:text-background transition-all duration-500"
                >
                  <span className="relative">
                    Get in Touch
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
