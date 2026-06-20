"use client";

import Link from "next/link";

export default function FoundationPreview() {
  return (
    <section className="relative bg-muted/30 section-padding-sm">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Decorative */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative aspect-square max-w-md">
              {/* Geometric pattern */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="border border-border/30 transition-colors duration-700 hover:border-foreground/20"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border border-foreground/20 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-foreground/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-6 lg:col-start-7">
            <span className="font-display-whisper text-foreground/40 block mb-6">
              Philanthropy
            </span>

            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6 tracking-tight">
              Foundation for Collective Prosperity
            </h2>

            <p className="font-display-whisper text-foreground/50 mb-8">
              501(c)(3) Private Foundation — New York
            </p>

            {/* Mission Quote */}
            <blockquote className="font-quote text-xl lg:text-2xl text-foreground/70 mb-12 border-l border-foreground/20 pl-6">
              Funding education and human capacity, so the prosperity of the
              AI-Born transition is broadly shared.
            </blockquote>

            {/* Focus Area */}
            <p className="font-body-refined text-foreground/50 mb-12">
              Where Arrowsphere invests in how companies are built, the Foundation
              works on how the gains are shared — funding education, formation, and
              community capacity.
            </p>

            {/* Founders */}
            <div className="mb-12">
              <span className="font-display-whisper text-foreground/30 block mb-4">
                Founded By
              </span>
              <div className="flex items-center gap-6">
                <span className="text-foreground/70">Mehran Granfar</span>
                <span className="w-8 h-px bg-border" />
                <span className="text-foreground/70">Bronwyn Leong</span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/foundation"
              className="group inline-flex items-center gap-4 font-nav text-foreground hover:text-foreground/70 transition-all duration-500"
            >
              <span className="relative">
                Learn More
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
          </div>
        </div>
      </div>
    </section>
  );
}
