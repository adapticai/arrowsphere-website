"use client";

import Link from "next/link";

interface PortfolioHolding {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
}

const holdings: PortfolioHolding[] = [
  {
    id: "adaptic",
    name: "Adaptic Holdings",
    category: "Asset Management",
    description: "AI-native hedge fund infrastructure",
    role: "Founder, CEO, Chairman",
  },
  {
    id: "future-thesis",
    name: "Future Thesis Lab",
    category: "Venture Capital",
    description: "Early-stage investments in AI-Born enterprises",
    role: "Co-Founder, General Partner",
  },
  {
    id: "ai-born",
    name: "AI-Born",
    category: "Thought Leadership",
    description: "The intellectual foundation for stewardship capital",
    role: "Author",
  },
  {
    id: "foundation",
    name: "Foundation for Collective Prosperity",
    category: "Philanthropy",
    description: "501(c)(3) funding education and community capacity",
    role: "Co-Founder",
  },
];

export default function PortfolioPreview() {
  return (
    <section
      id="portfolio"
      className="relative bg-foreground text-background section-padding"
    >
      {/* Inverted color scheme for dramatic contrast */}
      <div className="container-luxury">
        {/* Section Header */}
        <div className="mb-24 lg:mb-32">
          <span className="font-display-whisper text-background/40 block mb-6">
            Holdings & Ventures
          </span>
          <h2 className="font-display-section text-background max-w-4xl">
            Portfolio
          </h2>
        </div>

        {/* Holdings Grid - Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-background/10">
          {holdings.map((holding, index) => (
            <div
              key={holding.id}
              className="group bg-foreground p-8 lg:p-12 transition-colors duration-700 hover:bg-foreground/95"
            >
              <div className="h-full flex flex-col">
                {/* Category Badge */}
                <span className="font-display-whisper text-background/30 mb-8">
                  {holding.category}
                </span>

                {/* Name */}
                <h3 className="text-2xl lg:text-3xl font-light text-background mb-4 tracking-tight group-hover:text-background/80 transition-colors duration-500">
                  {holding.name}
                </h3>

                {/* Description */}
                <p className="font-body-refined text-background/50 mb-8 flex-grow">
                  {holding.description}
                </p>

                {/* Role */}
                <div className="pt-6 border-t border-background/10">
                  <span className="font-display-whisper text-background/30">
                    {holding.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 flex justify-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-4 font-nav text-background/60 hover:text-background transition-all duration-500"
          >
            <span className="relative">
              View Complete Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-px bg-background transition-all duration-500 group-hover:w-full" />
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
    </section>
  );
}
