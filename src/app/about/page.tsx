import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About | Arrowsphere Holdings",
  description:
    "Arrowsphere is a private family office backing AI-Born companies built to share ownership widely. Who we are, how we invest, and why ownership is the thing we care about most.",
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
                <span className="block">A family office,</span>
                <span className="block text-foreground/30">not a fund.</span>
              </h1>

              <p className="font-quote text-foreground/60 max-w-2xl">
                We invest our own capital, on a long horizon, in a small number
                of AI-Born companies — and we care more about how they're owned
                than almost anything else.
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
                    AI doesn't only automate tasks. It automates{" "}
                    <span className="text-foreground">judgment.</span>
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    When a small team can do what once took a large company,
                    value moves from the people doing the work to the systems
                    that replace them. The pressing question shifts from how much
                    a company produces to who owns what it produces.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    We think that's the most consequential question of this
                    transition — and the one most likely to be answered badly if
                    no one is paying attention. It's the question we built a
                    family office around.
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
                "We're not doing this to be virtuous.
              </p>
              <p className="font-display-section text-background/40 mt-4">
                We think it's how you build something that lasts."
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
                    We call what we do stewardship capital. In practice, it means
                    backing competitive, for-profit companies built — at the
                    cap-table level — to share ownership and returns more widely
                    than usual.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    We do it because we think it works, not because it's nice.
                    Companies that are broadly owned tend to be harder to
                    capture, hold their people longer, and keep their purpose
                    when the money changes hands.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    The full argument is on the thesis page. The short version:
                    get the ownership right at the start, because you rarely get
                    to fix it later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Operate */}
        <section className="section-padding bg-muted/20">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="font-display-whisper text-foreground/40 block mb-6">
                  How We Operate
                </span>
                <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight">
                  A Family Office, Not a Fund
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-8">
                  <p className="font-body-refined text-foreground/60">
                    We invest our own capital. That means we answer to our own
                    conviction, not to limited partners and their fund timelines.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    It lets us do things a fund structurally can't: hold for a
                    decade or more, take positions that look slow, and stay
                    involved in how a company is governed long after the cheque
                    has cleared.
                  </p>

                  <blockquote className="font-quote text-xl text-foreground/70 border-l border-foreground/20 pl-8">
                    We'd rather own a small number of companies we understand
                    completely than a large portfolio we understand partially.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Born, Not AI-Enabled */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="font-display-whisper text-foreground/40 block mb-6">
                  What &ldquo;AI-Born&rdquo; Means
                </span>
                <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight">
                  AI-Born, Not AI-Enabled
                </h2>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-xl font-light text-foreground/70 mb-12">
                  It's a real distinction, and we're strict about it.
                </p>

                <div className="space-y-12 mb-12">
                  <div className="border-t border-border/50 pt-8">
                    <h3 className="text-2xl font-light text-foreground mb-4">
                      Machine Core
                    </h3>
                    <p className="font-body-refined text-foreground/60">
                      The core work — analysis, execution, operations — runs on
                      AI, and scales without adding headcount.
                    </p>
                  </div>

                  <div className="border-t border-border/50 pt-8">
                    <h3 className="text-2xl font-light text-foreground mb-4">
                      Human Cortex
                    </h3>
                    <p className="font-body-refined text-foreground/60">
                      A small group of people set direction, exercise judgment,
                      and own the consequences. They decide what's worth doing.
                    </p>
                  </div>
                </div>

                <p className="font-body-refined text-foreground/60">
                  Most companies bolt AI onto an existing structure. AI-Born
                  companies are built around it from the start — which is also
                  the one moment their ownership can still be shaped.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Argument */}
        <section className="section-padding-sm bg-foreground text-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-display-whisper text-background/40 block mb-8">
                The Argument
              </span>

              <h2 className="text-3xl lg:text-4xl font-light text-background mb-12 tracking-tight">
                Why Ownership Concentrated
              </h2>

              <p className="font-body-refined text-background/50 mb-8">
                Concentrated ownership wasn't only greed. For most of industrial
                history, coordinating large numbers of people was genuinely hard,
                and concentrated control was the efficient way to do it.
              </p>

              <p className="font-body-refined text-background/50 mb-12">
                AI changes that input. When coordination gets cheap and the
                binding constraint becomes resilience — staying aligned, trusted,
                and hard to capture over time — the old case for concentrating
                ownership gets weaker.
              </p>

              <blockquote className="font-quote text-2xl text-background/70">
                "The durable companies of the next generation will be more
                widely held than the last. We invest as if that's already true."
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
                  General Partner
                </span>

                <div className="space-y-6">
                  <p className="font-body-refined text-foreground/60">
                    Mehran wrote AI-Born, the book this thesis grew out of, and
                    is the firm's general partner.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    He also founded Adaptic, an AI-run asset manager, and
                    co-founded Future Thesis Lab — so the ideas here are ones
                    he's testing in companies of his own.
                  </p>
                </div>
              </div>

              {/* Bronwyn */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-3 tracking-tight">
                  Bronwyn Leong
                </h3>
                <span className="font-display-whisper text-foreground/40 block mb-8">
                  Managing Partner
                </span>

                <div className="space-y-6">
                  <p className="font-body-refined text-foreground/60">
                    Bronwyn is the managing partner; she runs operations and
                    governance, and co-founded the Foundation for Collective
                    Prosperity.
                  </p>

                  <p className="font-body-refined text-foreground/60">
                    She's the one who makes sure the ownership structures we
                    talk about actually get built — and hold.
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
                If this is your kind of company
              </h2>

              <p className="font-body-refined text-foreground/60 mb-12">
                We back a few founders a year who are building this way. If
                that's you, get in touch — early is fine.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="btn-luxury text-foreground">
                  Start a Conversation
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
