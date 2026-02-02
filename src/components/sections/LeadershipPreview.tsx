"use client";

import Link from "next/link";

interface LeaderProfile {
  id: string;
  name: string;
  title: string;
  quote: string;
}

const leaders: LeaderProfile[] = [
  {
    id: "mehran-granfar",
    name: "Mehran Granfar",
    title: "Founder & Chairman",
    quote: "The question isn't whether to adopt AI but what values to encode.",
  },
  {
    id: "bronwyn-leong",
    name: "Bronwyn Leong",
    title: "Director",
    quote: "Individual prosperity is inseparable from collective flourishing.",
  },
];

export default function LeadershipPreview() {
  return (
    <section className="relative bg-background section-padding">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-luxury">
        {/* Section Header */}
        <div className="mb-24 lg:mb-32 text-center">
          <span className="font-display-whisper text-foreground/40 block mb-6">
            Stewards of Capital & Purpose
          </span>
          <h2 className="font-display-section text-foreground">Leadership</h2>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
          {leaders.map((leader) => (
            <div key={leader.id} className="group text-center">
              {/* Placeholder for portrait - architectural frame */}
              <div className="relative mx-auto mb-12 w-48 h-48 lg:w-64 lg:h-64">
                <div className="absolute inset-0 border border-border/50 group-hover:border-foreground/30 transition-colors duration-700" />
                <div className="absolute inset-4 bg-muted/30 flex items-center justify-center">
                  <span className="font-display-hero text-5xl lg:text-6xl text-foreground/10">
                    {leader.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-foreground/20" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-foreground/20" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-foreground/20" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-foreground/20" />
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-2 tracking-tight">
                {leader.name}
              </h3>
              <span className="font-display-whisper text-foreground/40 block mb-8">
                {leader.title}
              </span>

              {/* Quote */}
              <blockquote className="font-quote text-lg lg:text-xl text-foreground/60 max-w-md mx-auto">
                "{leader.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 lg:mt-32 flex justify-center">
          <Link href="/leadership" className="btn-luxury text-foreground">
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
