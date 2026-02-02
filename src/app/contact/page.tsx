import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Arrowsphere Holdings",
  description:
    "Connect with Arrowsphere Holdings - for founders building AI-Born enterprises, investors aligned with our stewardship approach, or anyone interested in distributed ownership models.",
  openGraph: {
    title: "Contact | Arrowsphere Holdings",
    description:
      "Connect with Arrowsphere Holdings - for founders building AI-Born enterprises, investors aligned with our stewardship approach.",
    type: "website",
  },
};

const contactCategories = [
  {
    number: "01",
    title: "Founders & Entrepreneurs",
    description:
      "Building AI-Born enterprises with distributed ownership models",
  },
  {
    number: "02",
    title: "Investment Inquiries",
    description: "Interested in stewardship capital opportunities",
  },
  {
    number: "03",
    title: "General Inquiries",
    description: "Press, partnerships, and other matters",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-end pb-24 pt-40">
          <div className="absolute inset-0 noise-overlay opacity-30" />

          <div className="container-luxury relative z-10">
            <div className="max-w-3xl">
              <span className="font-display-whisper text-foreground/40 block mb-8">
                Connect With Us
              </span>

              <h1 className="font-display-hero text-foreground leading-[0.9]">
                <span className="block">Get in</span>
                <span className="block text-foreground/30">Touch</span>
              </h1>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              {/* Left: Categories & Info */}
              <div className="lg:col-span-5">
                <div className="mb-16">
                  <h2 className="text-2xl lg:text-3xl font-light text-foreground mb-6 tracking-tight">
                    Who We Work With
                  </h2>
                  <p className="font-body-refined text-foreground/50">
                    We welcome conversations with the following groups
                  </p>
                </div>

                <div className="space-y-12">
                  {contactCategories.map((category) => (
                    <div key={category.number} className="group">
                      <div className="flex items-start gap-6">
                        <span className="font-numbers text-3xl font-extralight text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500">
                          {category.number}
                        </span>
                        <div>
                          <h3 className="text-lg font-light text-foreground mb-2">
                            {category.title}
                          </h3>
                          <p className="font-body-refined text-foreground/50 text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office Info */}
                <div className="mt-20 pt-12 border-t border-border/50">
                  <span className="font-display-whisper text-foreground/30 block mb-6">
                    Location
                  </span>
                  <div className="space-y-4">
                    <p className="text-foreground/70">
                      Dubai International Financial Centre
                    </p>
                    <p className="text-foreground/50 text-sm">
                      Dubai, United Arab Emirates
                    </p>
                  </div>

                  <div className="mt-8">
                    <span className="font-display-whisper text-foreground/30 block mb-4">
                      Response Time
                    </span>
                    <p className="font-body-refined text-foreground/50 text-sm">
                      We carefully review all inquiries and aim to respond to
                      relevant opportunities within 5-7 business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="lg:col-span-6 lg:col-start-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
