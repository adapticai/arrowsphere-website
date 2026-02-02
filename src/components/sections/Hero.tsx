"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 noise-overlay opacity-50" />

      {/* Architectural lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Vertical line - left */}
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent animate-line-draw" />

        {/* Vertical line - right */}
        <div
          className="absolute right-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent animate-line-draw"
          style={{ animationDelay: "0.3s" }}
        />

        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container-luxury relative z-10 pt-32 pb-20">
        {/* Eyebrow */}
        <div className="animate-reveal mb-16">
          <span className="font-display-whisper text-foreground/50">
            Private Family Office — DIFC
          </span>
        </div>

        {/* Main Headline - Monumental Scale */}
        <div className="max-w-[90vw] lg:max-w-none">
          <h1 className="font-display-hero text-foreground leading-[0.85] animate-reveal-delayed">
            <span className="block">Stewardship</span>
            <span className="block text-foreground/30">Capital</span>
          </h1>
        </div>

        {/* Subline with Editorial Serif */}
        <div className="mt-16 max-w-2xl animate-reveal-delayed-2">
          <p className="font-quote text-foreground/70">
            Backing founders who are redesigning ownership for collective
            prosperity in the AI-Born era.
          </p>
        </div>

        {/* CTA Row */}
        <div className="mt-20 flex flex-col sm:flex-row items-start gap-8 animate-reveal-delayed-3">
          <Link
            href="/thesis"
            className="group inline-flex items-center gap-4 font-nav text-foreground hover:text-foreground/70 transition-all duration-500"
          >
            <span className="relative">
              Explore Our Thesis
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
          </Link>

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-4 font-nav text-foreground/50 hover:text-foreground transition-all duration-500"
          >
            <span className="relative">
              View Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-500 group-hover:w-full" />
            </span>
          </Link>
        </div>

        {/* Bottom Info Row */}
        <div className="absolute bottom-12 left-0 right-0 container-luxury">
          <div className="flex items-end justify-between border-t border-border/30 pt-8">
            {/* Scroll Indicator */}
            <div className="flex items-center gap-4 text-foreground/30">
              <div className="w-px h-12 bg-foreground/30 animate-pulse" />
              <span className="font-display-whisper">Scroll</span>
            </div>

            {/* Location */}
            <div className="hidden sm:block text-right">
              <span className="font-display-whisper text-foreground/30">
                Dubai International Financial Centre
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
