"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-foreground text-background section-padding overflow-hidden">
      {/* Architectural background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal line */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-background/5 via-background/10 to-background/5 transform -rotate-12 origin-top" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-background/5 via-background/10 to-background/5 transform rotate-12 origin-top" />

        {/* Corner accents */}
        <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-background/10" />
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-background/10" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="font-display-whisper text-background/40 block mb-12">
            Talk to Us
          </span>

          {/* Main Headline */}
          <h2 className="font-display-section text-background mb-8 leading-tight">
            Building this way?
            <br />
            <span className="text-background/40">Come talk.</span>
          </h2>

          {/* Subtext */}
          <p className="font-body-refined text-background/50 max-w-2xl mx-auto mb-16">
            We back a small number of founders building broad ownership into
            AI-Born companies from the start. If that's what you're building,
            we'd like to hear from you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group relative px-10 py-5 font-nav text-foreground bg-background hover:bg-background/90 transition-all duration-500"
            >
              Get in Touch
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Link>

            <Link
              href="/thesis"
              className="group inline-flex items-center gap-4 font-nav text-background/50 hover:text-background transition-all duration-500"
            >
              <span className="relative">
                Read the Thesis
                <span className="absolute bottom-0 left-0 w-0 h-px bg-background transition-all duration-500 group-hover:w-full" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent" />
    </section>
  );
}
