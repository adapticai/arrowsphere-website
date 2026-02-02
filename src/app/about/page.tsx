import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About | Arrowsphere Holdings",
  description:
    "At the lineage break between industrial and AI-born economies, Arrowsphere Holdings practices stewardship capital—backing enterprises designed from inception to distribute value broadly.",
};

export default function AboutPage() {
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
                About Arrowsphere
              </span>

              <h1 className="font-display-hero text-foreground leading-[0.9] mb-12">
                <span className="block">We are at a</span>
                <span className="block text-foreground/30">lineage break.</span>
              </h1>

              <p className="font-quote text-foreground/60 max-w-2xl">
                The second major transformation in organizational history since
                the Industrial Revolution.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        {/* Opening Narrative */}
        <section className="section-padding bg-muted/20">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-10 lg:col-start-2">
                <div className="space-y-8 max-w-3xl">
                  <p className="text-xl lg:text-2xl font-light text-foreground/70">
                    AI doesn't just automate tasks. It automates{" "}
                    <span className="text-foreground">judgment itself.</span>
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    When three people can orchestrate what once required
                    thousands, the fundamental question shifts. No longer "what
                    can you produce?" but rather: What do you intend? What's
                    worth building? For whom?
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    This isn't incremental change. This is a lineage break—a
                    moment when the old rules no longer apply and new principles
                    must emerge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="section-padding-sm bg-foreground text-background">
          <div className="container-luxury">
            <blockquote className="max-w-4xl mx-auto text-center">
              <p className="font-display-section text-background/90">
                "Stewardship is not altruism.
              </p>
              <p className="font-display-section text-background/40 mt-4">
                It is competitive strategy."
              </p>
            </blockquote>
          </div>
        </section>

        {/* Stewardship Capital */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="font-display-whisper text-foreground/40 block mb-6">
                  Our Philosophy
                </span>
                <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight">
                  Stewardship Capital
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-8">
                  <p className="text-xl font-light text-foreground/70">
                    Arrowsphere Holdings practices stewardship capital: backing
                    AI-Born enterprises designed from inception to distribute
                    value broadly.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    Not as charity, but as competitive advantage. Distributed
                    governance builds resilience. Concentrated ownership creates
                    brittleness.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    In an era where machine intelligence amplifies human
                    intention, the question isn't whether to distribute
                    value—it's whether you're building something durable enough
                    to survive the AI-born transition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Lineage Break */}
        <section className="section-padding bg-muted/20">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="font-display-whisper text-foreground/40 block mb-6">
                  Key Concept
                </span>
                <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight">
                  The Lineage Break
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-8">
                  <p className="font-body-refined text-foreground/60">
                    For most of human history, organizations scaled through
                    hierarchical coordination of human labor. The Industrial
                    Revolution optimized this model—but didn't fundamentally
                    change it.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    AI changes the equation. It doesn't just execute tasks; it
                    automates cognition and judgment. This is the second lineage
                    break: a transformation as profound as industrialization
                    itself.
                  </p>

                  <blockquote className="font-quote text-xl text-foreground/70 border-l border-foreground/20 pl-8">
                    When machines can think, the value of human contribution
                    shifts from execution to intention, from production to
                    purpose.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Born Architecture */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="font-display-whisper text-foreground/40 block mb-6">
                  Architecture
                </span>
                <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight">
                  AI-Born Design
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-xl font-light text-foreground/70 mb-12">
                  We invest in enterprises architected around a simple
                  principle:
                </p>

                <div className="space-y-12 mb-12">
                  <div className="border-t border-border/50 pt-8">
                    <h3 className="text-2xl font-light text-foreground mb-4">
                      Machine Core
                    </h3>
                    <p className="font-body-refined text-foreground/60">
                      AI agents handle execution, analysis, and operational
                      intelligence. They scale without limit.
                    </p>
                  </div>

                  <div className="border-t border-border/50 pt-8">
                    <h3 className="text-2xl font-light text-foreground mb-4">
                      Human Cortex
                    </h3>
                    <p className="font-body-refined text-foreground/60">
                      Humans provide judgment, ethics, intention, and strategic
                      vision. They determine what's worth building.
                    </p>
                  </div>
                </div>

                <p className="font-body-refined text-foreground/60">
                  This architecture doesn't replace humans—it elevates them. It
                  frees people from operational drudgery to focus on the
                  questions only humans can answer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Widening of We */}
        <section className="section-padding-sm bg-foreground text-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-display-whisper text-background/40 block mb-8">
                Philosophy
              </span>

              <h2 className="text-3xl lg:text-4xl font-light text-background mb-12 tracking-tight">
                The Widening of We
              </h2>

              <p className="font-body-refined text-background/50 mb-8">
                Traditional capitalism assumed a zero-sum game: your gain is my
                loss. Concentrated ownership made sense when coordination was
                the constraint.
              </p>

              <p className="font-body-refined text-background/50 mb-12">
                But in an AI-born economy, coordination is cheap and resilience
                is expensive. Systems that distribute value, ownership, and
                governance are more adaptive, more durable, more capable of
                navigating uncertainty.
              </p>

              <blockquote className="font-quote text-2xl text-background/70">
                "Individual prosperity becomes inseparable from collective
                flourishing."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="mb-24">
              <span className="font-display-whisper text-foreground/40 block mb-6">
                Leadership
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight">
                Founders
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Mehran */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-3 tracking-tight">
                  Mehran Granfar
                </h3>
                <span className="font-display-whisper text-foreground/40 block mb-8">
                  Co-Founder & AI Thought Leader
                </span>

                <div className="space-y-6">
                  <p className="font-body-refined text-foreground/60">
                    Author of "AI-Born: The Machine Core, The Human Cortex, and
                    The Next Economy of Being", Mehran has spent years exploring
                    the philosophical and practical implications of artificial
                    intelligence on organizational design.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    As Founder and CEO of Adaptic Holdings and Co-Founder of
                    Future Thesis Lab, Mehran bridges theory and practice.
                  </p>
                </div>
              </div>

              {/* Bronwyn */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-3 tracking-tight">
                  Bronwyn Leong
                </h3>
                <span className="font-display-whisper text-foreground/40 block mb-8">
                  Co-Founder & Director
                </span>

                <div className="space-y-6">
                  <p className="font-body-refined text-foreground/60">
                    Bronwyn brings a systems-level perspective to the practice
                    of stewardship capital. As Co-Founder of the Foundation for
                    Collective Prosperity, she works at the intersection of
                    technology, governance, and economic design.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    Her focus on distributed value creation informs
                    Arrowsphere's investment thesis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted/20">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-light text-foreground mb-8 tracking-tight">
                Building the AI-Born Era
              </h2>

              <p className="font-body-refined text-foreground/60 mb-12">
                If you're building an AI-born enterprise with stewardship at its
                core, we'd like to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="btn-luxury text-foreground">
                  Start a Conversation
                </Link>

                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-4 font-nav text-foreground/50 hover:text-foreground transition-all duration-500"
                >
                  <span className="relative">
                    View Our Portfolio
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-500 group-hover:w-full" />
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
