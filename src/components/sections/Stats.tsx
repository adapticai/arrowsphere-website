import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Stat {
  label: string;
  value: string;
  description?: string;
}

const stats: Stat[] = [
  {
    label: "Founded",
    value: "2024",
    description: "Building for the future",
  },
  {
    label: "Portfolio Companies",
    value: "3+",
    description: "Strategic investments",
  },
  {
    label: "Principals",
    value: "2",
    description: "Experienced leadership",
  },
  {
    label: "Reach",
    value: "Global",
    description: "Worldwide presence",
  },
];

export default function Stats() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="group relative overflow-hidden border-stone-200 bg-stone-50 transition-all duration-300 hover:border-stone-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Value - Large Number */}
                  <div className="mb-2 text-5xl font-bold tracking-tight text-stone-900 transition-transform duration-300 group-hover:scale-110 sm:text-6xl">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-stone-600">
                    {stat.label}
                  </div>

                  {/* Description */}
                  {stat.description && (
                    <div className="text-xs text-stone-500 transition-colors duration-300 group-hover:text-stone-700">
                      {stat.description}
                    </div>
                  )}
                </div>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-stone-600 to-stone-900 transition-all duration-300 group-hover:w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
