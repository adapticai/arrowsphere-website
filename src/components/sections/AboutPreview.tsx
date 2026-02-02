import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface StatCardProps {
  label: string;
  value: string;
  description?: string;
}

function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-4xl font-bold text-stone-900 dark:text-stone-100">
        {value}
      </div>
      <div className="text-sm font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
        {label}
      </div>
      {description && (
        <div className="text-sm text-stone-500 dark:text-stone-500">
          {description}
        </div>
      )}
    </div>
  );
}

export default function AboutPreview() {
  return (
    <section className="w-full bg-stone-50 py-16 dark:bg-stone-950 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl md:text-5xl">
            About Arrowsphere
          </h2>
          <p className="max-w-3xl text-lg text-stone-600 dark:text-stone-400">
            Building enduring value through innovation and strategic vision.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Content Card */}
          <Card className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-2xl">Our Foundation</CardTitle>
              <CardDescription>
                A private family office incorporated in the Dubai International
                Financial Centre
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <div>
                <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                  Leadership
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Founded by Mehran Granfar and Bronwyn Leong, Arrowsphere
                  Holdings Limited represents a commitment to building lasting
                  value through strategic investments and purposeful innovation.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                  Focus Areas
                </h3>
                <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-stone-900 dark:bg-stone-100"></span>
                    <span>
                      <strong>Technology Ventures:</strong> Investing in
                      transformative technology companies that shape the future
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-stone-900 dark:bg-stone-100"></span>
                    <span>
                      <strong>AI and Fintech:</strong> Supporting innovation at
                      the intersection of artificial intelligence and financial
                      technology
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-stone-900 dark:bg-stone-100"></span>
                    <span>
                      <strong>Philanthropy:</strong> Creating positive impact
                      through strategic charitable initiatives and partnerships
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-stone-900 dark:text-stone-100">
                  Our Philosophy
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  We believe in building enduring value through innovation,
                  combining long-term vision with operational excellence to
                  create sustainable growth and meaningful impact across our
                  portfolio.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="default"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Stats Card */}
          <div className="flex flex-col gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">At a Glance</CardTitle>
                <CardDescription>
                  Key milestones and achievements
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-8 sm:grid-cols-2">
                <StatCard
                  label="Established"
                  value="2024"
                  description="Founded in DIFC, Dubai"
                />
                <StatCard
                  label="Portfolio"
                  value="8+"
                  description="Active companies"
                />
                <StatCard
                  label="Sectors"
                  value="3"
                  description="Core investment areas"
                />
                <StatCard
                  label="Reach"
                  value="Global"
                  description="International presence"
                />
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border-stone-900 bg-stone-900 text-stone-50 dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900">
              <CardHeader>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed opacity-90">
                  To be a catalyst for innovation and sustainable growth,
                  creating lasting value for our portfolio companies, partners,
                  and the communities we serve through strategic investments and
                  purposeful leadership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
