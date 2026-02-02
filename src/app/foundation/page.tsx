import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Foundation | Arrowsphere Holdings",
  description:
    "A New York-based 501(c)(3) private foundation fostering the collective identity and prosperity of humanity through education, arts, and community development.",
  openGraph: {
    title: "Foundation for Collective Prosperity | Arrowsphere Holdings",
    description:
      "Fostering the collective identity and prosperity of humanity through strategic philanthropy and community capacity building.",
    type: "website",
  },
};

interface GuidingPrinciple {
  title: string;
  description: string;
}

interface FocusArea {
  number: string;
  title: string;
  description: string;
}

const guidingPrinciples: GuidingPrinciple[] = [
  {
    title: "The Inherent Oneness of Humankind",
    description:
      "Humanity constitutes one interconnected family, united by our shared aspirations and common destiny.",
  },
  {
    title: "The Twofold Nature of Human Reality",
    description:
      "Human beings possess both material and spiritual dimensions, requiring holistic approaches to development.",
  },
  {
    title: "The Central Role of Education",
    description:
      "Education serves as the primary vehicle for transformation—cultivating capacities to investigate reality and collaborate in service.",
  },
  {
    title: "The Power of Arts to Unite",
    description:
      "The arts speak a universal language that transcends barriers, celebrating our shared humanity.",
  },
  {
    title: "Pursuing Sustainable Development",
    description:
      "True progress serves both present and future generations, ensuring lasting benefits for those who follow.",
  },
  {
    title: "Maintaining Impartiality",
    description:
      "We operate free from political affiliation, guided solely by our commitment to collective well-being.",
  },
];

const focusAreas: FocusArea[] = [
  {
    number: "01",
    title: "Training Institutes",
    description:
      "Building capacity for community service and grassroots action through educational institutions.",
  },
  {
    number: "02",
    title: "Educational Facilities",
    description:
      "Establishing schools that unite intellectual excellence with moral and spiritual development.",
  },
  {
    number: "03",
    title: "Education Fund",
    description:
      "Expanding access to quality education for underserved communities worldwide.",
  },
  {
    number: "04",
    title: "Unifying Arts Fund",
    description:
      "Supporting artists and cultural initiatives that celebrate human unity.",
  },
  {
    number: "05",
    title: "Social Action Fund",
    description:
      "Empowering grassroots initiatives that strengthen community bonds.",
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
                "Fostering the collective identity and prosperity of humanity"
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
                  Our Mission
                </span>
                <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight">
                  Investing in Human Formation
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-8">
                  <p className="text-xl lg:text-2xl font-light text-foreground/70">
                    The Foundation represents the philanthropic dimension of the
                    Arrowsphere mission.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    As humanity navigates the AI-Born transition, we invest in
                    human formation and community capacity building. Our work
                    centers on education—not merely as instruction, but as the
                    cultivation of capacities to investigate reality, think
                    systematically about social change, and collaborate in
                    service to the common good.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    We support communities in building the infrastructure of
                    learning and service that enables people to shape their own
                    development and navigate times of profound transformation
                    with agency and purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="mb-24">
              <span className="font-display-whisper text-foreground/40 block mb-6">
                What Guides Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight max-w-2xl">
                Guiding Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
              {guidingPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="bg-background p-10 group hover:bg-muted/30 transition-colors duration-500"
                >
                  <span className="font-numbers text-4xl font-extralight text-foreground/10 block mb-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-light text-foreground mb-4 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="font-body-refined text-foreground/50 text-sm">
                    {principle.description}
                  </p>
                </div>
              ))}
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
                    Investing in capacities for the AI age
                  </p>
                </div>
                <div>
                  <span className="font-display-whisper text-background/30 block mb-4">
                    Community Capacity
                  </span>
                  <p className="text-background/50 text-sm">
                    Building infrastructure for agency
                  </p>
                </div>
                <div>
                  <span className="font-display-whisper text-background/30 block mb-4">
                    Collective Well-Being
                  </span>
                  <p className="text-background/50 text-sm">
                    Navigating displacement together
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
                Strategic Initiatives
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

        {/* Founders */}
        <section className="section-padding-sm bg-muted/20">
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
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-light text-foreground mb-8 tracking-tight">
                Building Capacity for the Future
              </h2>

              <p className="font-body-refined text-foreground/60 mb-12">
                The Foundation works to strengthen the bonds of community,
                cultivate human potential, and build the capacities needed to
                navigate profound change with wisdom, unity, and shared purpose.
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
