"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  status?: "completed" | "ongoing";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2024",
    title: "Foundation",
    description: "Arrowsphere Holdings Limited incorporated in DIFC",
    status: "completed",
  },
  {
    year: "2024",
    title: "Adaptic Holdings",
    description: "Continued leadership in AI-native asset management",
    status: "completed",
  },
  {
    year: "2024",
    title: "Future Thesis Lab",
    description: "Venture capital initiatives",
    status: "completed",
  },
  {
    year: "2024",
    title: "AI-Born Published",
    description: "Mehran's book on AI and the future economy",
    status: "completed",
  },
  {
    year: "Ongoing",
    title: "Foundation for Collective Prosperity",
    description: "Philanthropic endeavors",
    status: "ongoing",
  },
];

function Timeline() {
  return (
    <section className="relative w-full bg-stone-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
            Our Journey
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Building the future of AI-native finance
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Vertical Line - Hidden on mobile, visible on desktop */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-stone-300 md:block"
            aria-hidden="true"
          />

          {/* Mobile Vertical Line */}
          <div
            className="absolute left-8 top-0 h-full w-0.5 bg-stone-300 md:hidden"
            aria-hidden="true"
          />

          {/* Timeline Events */}
          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={`${event.year}-${event.title}`}
                className={cn(
                  "relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8",
                  // Alternate sides on desktop
                  index % 2 === 0 ? "md:text-right" : "md:text-left",
                )}
              >
                {/* Left Side (Desktop) / Content (Mobile) */}
                <div
                  className={cn(
                    "relative pl-20 md:pl-0",
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2",
                  )}
                >
                  {/* Year Badge - Mobile */}
                  <div className="absolute left-0 top-0 md:hidden">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-stone-50 bg-stone-900 shadow-lg">
                      <span className="text-xs font-bold text-white">
                        {event.year}
                      </span>
                    </div>
                  </div>

                  <Card className="h-full border-stone-200 bg-white shadow-md transition-all hover:shadow-lg">
                    <CardHeader className="space-y-3">
                      <div
                        className={cn(
                          "flex flex-wrap items-center gap-2",
                          index % 2 === 0
                            ? "md:flex-row-reverse md:justify-start"
                            : "md:flex-row md:justify-start",
                        )}
                      >
                        <CardTitle className="text-xl font-bold text-stone-900 sm:text-2xl">
                          {event.title}
                        </CardTitle>
                        {event.status === "ongoing" && (
                          <Badge
                            variant="default"
                            className="bg-stone-900 text-white hover:bg-stone-800"
                          >
                            Ongoing
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-stone-600 sm:text-lg">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Year Badge (Desktop Only) */}
                <div
                  className={cn(
                    "absolute left-1/2 top-0 hidden -translate-x-1/2 md:block",
                    index % 2 === 0 ? "md:col-start-2" : "md:col-start-1",
                  )}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-stone-50 bg-stone-900 shadow-lg">
                    <span className="text-sm font-bold text-white">
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Right Side (Desktop) - Empty spacer */}
                <div
                  className={cn(
                    "hidden md:block",
                    index % 2 === 0 ? "md:col-start-2" : "md:col-start-1",
                  )}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-24 rounded-full bg-stone-900" />
        </div>
      </div>
    </section>
  );
}

export default Timeline;
