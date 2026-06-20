import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Foundation | Arrowsphere Holdings",
  description:
    "The Foundation for Collective Prosperity is the philanthropic counterpart to Arrowsphere — a New York private foundation that funds education and community capacity so the prosperity of the AI-Born transition is broadly shared.",
  openGraph: {
    title: "Foundation for Collective Prosperity | Arrowsphere Holdings",
    description:
      "Arrowsphere's affiliated private foundation, funding education and community capacity for a broadly shared prosperity.",
    type: "website",
  },
};

interface FocusArea {
  number: string;
  title: string;
  description: string;
}

const focusAreas: FocusArea[] = [
  {
    number: "01",
    title: "Education & Formation",
    description:
      "Learning that develops judgment and character, not only skills — the human capabilities that matter most as machines absorb routine work.",
  },
  {
    number: "02",
    title: "Community Capacity",
    description:
      "Strengthening the capacity of communities to author their own development, so progress is built with people rather than delivered to them.",
  },
  {
    number: "03",
    title: "The Arts & Common Life",
    description:
      "Supporting the cultural and civic fabric — the arts, mutual aid, and the shared spaces on which other forms of progress depend.",
  },
];

export default function FoundationPage() {
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
                501(c)(3) Private Foundation — New York
              </span>

              <h1 className="font-display-hero text-foreground leading-[0.9] mb-12">
                <span className="block">Foundation for</span>
                <span className="block text-foreground/30">Collective</span>
                <span className="block text-foreground/30">Prosperity</span>
              </h1>

              <blockquote className="font-quote text-foreground/60 max-w-2xl border-l border-foreground/20 pl-8">
                Funding education and human capacity, so the prosperity of the
                AI-Born transition is broadly shared.
              </blockquote>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        {/* Mission Statement */}
        <section className="section-padding bg-muted/20">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="font-display-whisper text-foreground/40 block mb-6">
                  The Distribution Side
                </span>
                <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight">
                  Where the Gains Are Shared
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-8">
                  <p className="text-xl lg:text-2xl font-light text-foreground/70">
                    The Foundation for Collective Prosperity is the philanthropic
                    counterpart to Arrowsphere — an independent New York 501(c)(3),
                    governed on its own terms.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    Where Arrowsphere invests in how companies are built, the
                    Foundation works on how the gains are shared. It funds
                    education, the formation of judgment and character, and the
                    capacity of communities to take part in the prosperity that
                    intelligent machines create.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    Its work is funded, in significant part, by the value created
                    in the ventures Arrowsphere backs — a deliberate architecture
                    in which a share of what these systems produce is directed back
                    to the wider community, rather than concentrated in a few hands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connection to Stewardship */}
        <section className="section-padding-sm bg-foreground text-background">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-display-whisper text-background/40 block mb-8">
                Connection to Our Thesis
              </span>

              <h2 className="text-2xl lg:text-3xl font-light text-background mb-12 tracking-tight">
                Individual prosperity is inseparable from collective flourishing
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <span className="font-display-whisper text-background/30 block mb-4">
                    Human Formation
                  </span>
                  <p className="text-background/50 text-sm">
                    Investing in the capabilities the AI age rewards
                  </p>
                </div>
                <div>
                  <span className="font-display-whisper text-background/30 block mb-4">
                    Community Capacity
                  </span>
                  <p className="text-background/50 text-sm">
                    Building the ground on which agency stands
                  </p>
                </div>
                <div>
                  <span className="font-display-whisper text-background/30 block mb-4">
                    Shared Prosperity
                  </span>
                  <p className="text-background/50 text-sm">
                    Widening who takes part in the gains
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="mb-24">
              <span className="font-display-whisper text-foreground/40 block mb-6">
                What It Funds
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight">
                Focus Areas
              </h2>
            </div>

            <div className="space-y-0">
              {focusAreas.map((area) => (
                <div
                  key={area.number}
                  className="group border-t border-border/50 py-12 lg:py-16"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <span className="font-numbers text-5xl lg:text-6xl font-extralight text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500">
                        {area.number}
                      </span>
                    </div>

                    <div className="lg:col-span-3">
                      <h3 className="text-xl lg:text-2xl font-light text-foreground tracking-tight">
                        {area.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-6 lg:col-start-6">
                      <p className="font-body-refined text-foreground/60">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit the Foundation */}
        <section className="section-padding-sm bg-muted/20">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-display-whisper text-foreground/40 block mb-8">
                An Independent Foundation
              </span>

              <h2 className="text-2xl lg:text-3xl font-light text-foreground mb-8 tracking-tight">
                The Foundation keeps its own home
              </h2>

              <p className="font-body-refined text-foreground/60 mb-12">
                The Foundation for Collective Prosperity is governed independently
                and publishes its principles, commitments, and grantmaking at its
                own site.
              </p>

              <a
                href="https://collectiveprosperity.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 font-nav text-foreground hover:text-foreground/70 transition-all duration-500"
              >
                <span className="relative">
                  Visit collectiveprosperity.org
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-500 origin-left group-hover:scale-x-0" />
                </span>
                <svg
                  className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="section-padding-sm bg-background">
          <div className="container-luxury">
            <div className="text-center mb-16">
              <span className="font-display-whisper text-foreground/40 block mb-6">
                Board of Directors
              </span>
              <h2 className="text-2xl lg:text-3xl font-light text-foreground tracking-tight">
                Co-Founders
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 border border-border flex items-center justify-center">
                  <span className="font-display-hero text-4xl text-foreground/10">
                    MG
                  </span>
                </div>
                <h3 className="text-xl font-light text-foreground mb-2">
                  Mehran Granfar
                </h3>
                <span className="font-display-whisper text-foreground/40">
                  Co-Founder & Board Member
                </span>
              </div>

              <div className="w-16 h-px bg-border md:w-px md:h-16" />

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 border border-border flex items-center justify-center">
                  <span className="font-display-hero text-4xl text-foreground/10">
                    BL
                  </span>
                </div>
                <h3 className="text-xl font-light text-foreground mb-2">
                  Bronwyn Leong
                </h3>
                <span className="font-display-whisper text-foreground/40">
                  Co-Founder & Board Member
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="section-padding bg-muted/20">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-light text-foreground mb-8 tracking-tight">
                Building Capacity for the Future
              </h2>

              <p className="font-body-refined text-foreground/60 mb-12">
                The Foundation works to strengthen the fabric of community, develop
                human potential, and build the capacities people need to navigate
                profound change with clarity and shared purpose.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8">
                <span className="font-display-whisper text-foreground/30">
                  Education
                </span>
                <span className="w-8 h-px bg-border" />
                <span className="font-display-whisper text-foreground/30">
                  Community
                </span>
                <span className="w-8 h-px bg-border" />
                <span className="font-display-whisper text-foreground/30">
                  Arts
                </span>
                <span className="w-8 h-px bg-border" />
                <span className="font-display-whisper text-foreground/30">
                  Service
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
