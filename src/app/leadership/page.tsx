import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Leadership | Arrowsphere Holdings",
  description:
    "Meet the leadership behind Arrowsphere Holdings — bridging technology, capital, and collective prosperity to shape an AI-born economy.",
};

interface LeaderProfile {
  name: string;
  title: string;
  initials: string;
  quote: string;
  bio: string[];
  roles: Array<{
    title: string;
    organization: string;
  }>;
}

const leaders: LeaderProfile[] = [
  {
    name: "Mehran Granfar",
    title: "General Partner",
    initials: "MG",
    quote:
      "The technology question is mostly answered. The open one is who ends up owning the result — and that gets decided early, or by default.",
    bio: [
      "Mehran is the general partner. He wrote AI-Born — the book the firm's thesis grew out of — and spends most of his time on the companies trying to put it into practice.",
      "He founded and runs Adaptic, an asset manager built to operate on AI rather than around it, and co-founded Future Thesis Lab, where new venture and ownership structures get tested before they become companies.",
      "He's less interested in whether AI works — that part is settled — than in who ends up owning what it builds.",
    ],
    roles: [
      { title: "Founder, CEO & Chairman", organization: "Adaptic Holdings" },
      {
        title: "Co-Founder & General Partner",
        organization: "Future Thesis Lab",
      },
      {
        title: "Board Member",
        organization: "Foundation for Collective Prosperity",
      },
      { title: "Author", organization: "AI-Born" },
    ],
  },
  {
    name: "Bronwyn Leong",
    title: "Managing Partner",
    initials: "BL",
    quote:
      "You can't talk a company into sharing what it makes. You have to build it into the ownership, before there's anything to fight over.",
    bio: [
      "Bronwyn is the managing partner. She runs the firm's operations and governance — the unglamorous, decisive part of turning a thesis about ownership into structures that actually hold up.",
      "She co-founded the Foundation for Collective Prosperity and helps run it, which keeps her working on both sides of the firm's wager: the companies, and the communities they depend on.",
      "Her standing view is that good intentions are cheap, and structure is what survives them.",
    ],
    roles: [
      { title: "Managing Partner", organization: "Arrowsphere Holdings" },
      {
        title: "Co-Founder",
        organization: "Foundation for Collective Prosperity",
      },
    ],
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-end pb-24 pt-40">
          <div className="absolute inset-0 noise-overlay opacity-30" />

          <div className="container-luxury relative z-10">
            <div className="max-w-4xl">
              <span className="font-display-whisper text-foreground/40 block mb-8">
                The Partnership
              </span>

              <h1 className="font-display-hero text-foreground leading-[0.9]">
                Leadership
              </h1>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        {/* Leaders */}
        {leaders.map((leader, index) => (
          <section
            key={leader.name}
            className={`section-padding ${
              index % 2 === 0 ? "bg-background" : "bg-muted/20"
            }`}
          >
            <div className="container-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Left: Portrait placeholder */}
                <div className="lg:col-span-4">
                  <div className="relative aspect-[3/4] max-w-sm">
                    {/* Frame */}
                    <div className="absolute inset-0 border border-border" />
                    <div className="absolute inset-6 bg-muted/30 flex items-center justify-center">
                      <span className="font-display-hero text-6xl lg:text-7xl text-foreground/10">
                        {leader.initials}
                      </span>
                    </div>
                    {/* Corner accents */}
                    <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-foreground/30" />
                    <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-foreground/30" />
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-foreground/30" />
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-foreground/30" />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-7 lg:col-start-6">
                  <h2 className="text-4xl lg:text-5xl font-light text-foreground mb-3 tracking-tight">
                    {leader.name}
                  </h2>
                  <span className="font-display-whisper text-foreground/40 block mb-12">
                    {leader.title}
                  </span>

                  {/* Quote */}
                  <blockquote className="font-quote text-xl lg:text-2xl text-foreground/70 border-l border-foreground/20 pl-8 mb-12">
                    "{leader.quote}"
                  </blockquote>

                  {/* Bio */}
                  <div className="space-y-6 mb-12">
                    {leader.bio.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="font-body-refined text-foreground/60"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Roles */}
                  <div>
                    <span className="font-display-whisper text-foreground/30 block mb-6">
                      Current Roles
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {leader.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="border border-border/50 p-5 hover:border-foreground/30 transition-colors duration-500"
                        >
                          <span className="font-display-whisper text-foreground/40 block mb-2">
                            {role.title}
                          </span>
                          <span className="text-foreground/70">
                            {role.organization}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider between leaders */}
            {index < leaders.length - 1 && (
              <div className="container-luxury mt-24">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            )}
          </section>
        ))}

        {/* Closing Statement */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-light text-background mb-8 tracking-tight">
                A Small Firm, by Design
              </h2>

              <p className="font-body-refined text-background/50 mb-12">
                Arrowsphere is deliberately small — two partners, our own
                capital, a handful of companies we know well. It's the only way
                we've found to stay close to the things that actually decide
                whether a company is worth backing: how it's run, and who it's
                run for.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8">
                <span className="font-display-whisper text-background/30">
                  Technology
                </span>
                <span className="w-8 h-px bg-background/20" />
                <span className="font-display-whisper text-background/30">
                  Capital
                </span>
                <span className="w-8 h-px bg-background/20" />
                <span className="font-display-whisper text-background/30">
                  Governance
                </span>
                <span className="w-8 h-px bg-background/20" />
                <span className="font-display-whisper text-background/30">
                  Stewardship
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
