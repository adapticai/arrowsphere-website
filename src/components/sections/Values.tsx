import React from "react";
import { Lightbulb, Shield, Target, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Value {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering the future through technology and AI",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Operating with the highest ethical standards",
  },
  {
    icon: Target,
    title: "Impact",
    description: "Creating lasting value for generations",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building together for collective prosperity",
  },
];

export default function Values() {
  return (
    <section className="w-full bg-stone-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Our Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {values.map((value) => (
            <Card
              key={value.title}
              className="group border-stone-200 bg-white transition-all duration-300 hover:border-stone-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-stone-900 transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-stone-900">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-stone-600">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
