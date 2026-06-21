"use client";

import Link from "next/link";

interface ThesisPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const thesisPillars: ThesisPillar[] = [
  {
    number: "01",
    title: "The Lineage Break",
    subtitle: "What is actually changing",
    description:
      "AI is starting to automate judgment, not just labour. As a handful of people can run what once took thousands, the scarce input stops being effort and becomes intent — what gets built, and for whom.",
  },
  {
    number: "02",
    title: "Where the Gains Land",
    subtitle: "Concentration is the default",
    description:
      "Left alone, AI's gains concentrate — the same equity and shareholder defaults we already have, now scaled by far fewer people. Spreading them doesn't happen on its own; it has to be designed in early, or not at all.",
  },
  {
    number: "03",
    title: "Stewardship as Strategy",
    subtitle: "An edge, not a tax",
    description:
      "Companies owned by the people who build and use them are harder to hollow out, hold talent longer, and keep their mission when capital changes hands. We treat that durability as the return, not a trade-off against it.",
  },
];

export default function ThesisPreview() {
  return (
    <section id="thesis" className="relative bg-background section-padding">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-luxury">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          <div className="lg:col-span-4">
            <span className="font-display-whisper text-foreground/40 block mb-6">
              Investment Philosophy
            </span>
            <h2 className="font-display-section text-foreground">
              The Stewardship Thesis
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-body-refined text-foreground/60 max-w-xl">
              We invest in for-profit companies designed, from the first cap
              table, to spread ownership and returns beyond a few shareholders —
              a wager that broadly held companies prove harder to capture, and
              outlast the narrowly held ones.
            </p>
          </div>
        </div>

        {/* Thesis Pillars */}
        <div className="space-y-0">
          {thesisPillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className="group border-t border-border/50 py-16 lg:py-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="font-numbers text-6xl lg:text-7xl font-extralight text-foreground/10 group-hover:text-foreground/20 transition-colors duration-700">
                    {pillar.number}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <span className="font-display-whisper text-foreground/40">
                    {pillar.subtitle}
                  </span>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 lg:col-start-7">
                  <p className="font-body-refined text-foreground/60 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Arrow indicator on hover */}
                <div className="lg:col-span-1 hidden lg:flex justify-end items-start pt-2">
                  <svg
                    className="w-5 h-5 text-foreground/0 group-hover:text-foreground/30 transition-all duration-500 transform group-hover:translate-x-1"
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-border/50 pt-16 flex justify-center">
          <Link href="/thesis" className="btn-luxury text-foreground">
            Read Full Thesis
          </Link>
        </div>
      </div>
    </section>
  );
}
