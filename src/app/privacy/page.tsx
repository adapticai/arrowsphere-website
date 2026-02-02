import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy | Arrowsphere Holdings Limited",
  description:
    "Privacy Policy for Arrowsphere Holdings Limited. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-stone-200 bg-stone-50 py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-stone-600">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-stone max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Introduction
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  Arrowsphere Holdings Limited ("we," "our," or "us") is
                  committed to protecting your privacy and ensuring the security
                  of your personal information. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when
                  you visit our website or engage with our services.
                </p>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  As a DIFC-incorporated private family office holding company,
                  we adhere to the highest standards of data protection and
                  privacy in accordance with applicable laws and regulations,
                  including the DIFC Data Protection Law No. 5 of 2020 and
                  international best practices.
                </p>
                <p className="text-base leading-relaxed text-stone-600">
                  Please read this Privacy Policy carefully. By accessing or
                  using our website and services, you acknowledge that you have
                  read, understood, and agree to be bound by the terms of this
                  Privacy Policy.
                </p>
              </div>

              <Separator className="my-12" />

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Information We Collect
                </h2>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Personal Information
                </h3>
                <p className="mb-3 text-base leading-relaxed text-stone-600">
                  We may collect personal information that you voluntarily
                  provide to us when you:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-base text-stone-600">
                  <li>Contact us through our website or email</li>
                  <li>Request information about our services</li>
                  <li>Subscribe to our newsletters or communications</li>
                  <li>Participate in surveys or provide feedback</li>
                  <li>Apply for employment or partnership opportunities</li>
                </ul>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  This information may include your name, email address, phone
                  number, professional title, company name, and any other
                  information you choose to provide.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Automatically Collected Information
                </h3>
                <p className="mb-3 text-base leading-relaxed text-stone-600">
                  When you visit our website, we may automatically collect
                  certain information about your device and browsing activity,
                  including:
                </p>
                <ul className="mb-6 ml-6 list-disc space-y-2 text-base text-stone-600">
                  <li>IP address and geographic location</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Date and time of visits</li>
                </ul>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Business and Financial Information
                </h3>
                <p className="text-base leading-relaxed text-stone-600">
                  For prospective or current business partners, investors, or
                  service providers, we may collect additional information
                  necessary for due diligence, compliance, and business
                  operations, including financial information, investment
                  history, and professional credentials.
                </p>
              </div>

              <Separator className="my-12" />

              {/* How We Use Your Information */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  How We Use Your Information
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-base text-stone-600">
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Communication:
                    </strong>{" "}
                    To respond to your inquiries, requests, and communications
                  </li>
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Service Delivery:
                    </strong>{" "}
                    To provide, maintain, and improve our services and website
                    functionality
                  </li>
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Business Operations:
                    </strong>{" "}
                    To conduct due diligence, manage investments, and fulfill
                    contractual obligations
                  </li>
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Legal Compliance:
                    </strong>{" "}
                    To comply with applicable laws, regulations, and legal
                    processes
                  </li>
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Security:
                    </strong>{" "}
                    To protect against fraud, unauthorized access, and other
                    security threats
                  </li>
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Analytics:
                    </strong>{" "}
                    To analyze website usage and improve user experience
                  </li>
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Marketing:
                    </strong>{" "}
                    To send you relevant information about our services, subject
                    to your consent where required
                  </li>
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Record Keeping:
                    </strong>{" "}
                    To maintain accurate business records and documentation
                  </li>
                </ul>
              </div>

              <Separator className="my-12" />

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Information Sharing and Disclosure
                </h2>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  We respect your privacy and do not sell, rent, or trade your
                  personal information to third parties. We may share your
                  information in the following limited circumstances:
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Service Providers
                </h3>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  We may share information with trusted third-party service
                  providers who assist us in operating our website, conducting
                  our business, or providing services to you, provided they
                  agree to keep this information confidential and use it only
                  for the purposes for which we disclose it to them.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Legal Requirements
                </h3>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  We may disclose your information when required to do so by
                  law, in response to valid legal processes, to protect our
                  rights or property, or to protect the safety of our users or
                  the public.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Business Transfers
                </h3>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  In the event of a merger, acquisition, reorganization, or sale
                  of assets, your information may be transferred as part of that
                  transaction, subject to the same privacy protections.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Professional Advisors
                </h3>
                <p className="text-base leading-relaxed text-stone-600">
                  We may share information with our legal counsel, accountants,
                  auditors, and other professional advisors who are bound by
                  confidentiality obligations.
                </p>
              </div>

              <Separator className="my-12" />

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Data Security
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  These measures include:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-base text-stone-600">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Secure data storage and backup systems</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="text-base leading-relaxed text-stone-600">
                  However, please note that no method of transmission over the
                  internet or electronic storage is completely secure. While we
                  strive to use commercially acceptable means to protect your
                  personal information, we cannot guarantee its absolute
                  security.
                </p>
              </div>

              <Separator className="my-12" />

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Your Rights and Choices
                </h2>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  Depending on your location and applicable laws, you may have
                  certain rights regarding your personal information:
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Access and Portability
                </h3>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  You have the right to request access to the personal
                  information we hold about you and, in certain circumstances,
                  to receive a copy of that information in a portable format.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Correction and Update
                </h3>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  You have the right to request correction of inaccurate or
                  incomplete personal information we hold about you.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Deletion
                </h3>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  You have the right to request deletion of your personal
                  information, subject to certain legal exceptions and retention
                  requirements.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Objection and Restriction
                </h3>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  You have the right to object to certain processing of your
                  personal information and to request restriction of processing
                  in certain circumstances.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Withdrawal of Consent
                </h3>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  Where we rely on your consent to process your personal
                  information, you have the right to withdraw that consent at
                  any time.
                </p>

                <p className="text-base leading-relaxed text-stone-600">
                  To exercise any of these rights, please contact us using the
                  information provided in the "Contact Us" section below. We
                  will respond to your request within a reasonable timeframe and
                  in accordance with applicable law.
                </p>
              </div>

              <Separator className="my-12" />

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Cookies and Tracking Technologies
                </h2>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  Our website uses cookies and similar tracking technologies to
                  enhance your browsing experience, analyze website traffic, and
                  understand user preferences.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  What Are Cookies?
                </h3>
                <p className="mb-6 text-base leading-relaxed text-stone-600">
                  Cookies are small text files that are placed on your device
                  when you visit a website. They help websites remember your
                  preferences and improve functionality.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Types of Cookies We Use
                </h3>
                <ul className="mb-6 ml-6 list-disc space-y-2 text-base text-stone-600">
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Essential Cookies:
                    </strong>{" "}
                    Required for the website to function properly
                  </li>
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Performance Cookies:
                    </strong>{" "}
                    Help us understand how visitors interact with our website
                  </li>
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Functional Cookies:
                    </strong>{" "}
                    Remember your preferences and settings
                  </li>
                  <li>
                    <strong className="font-semibold text-stone-900">
                      Analytics Cookies:
                    </strong>{" "}
                    Provide insights into website usage and performance
                  </li>
                </ul>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  Managing Cookies
                </h3>
                <p className="text-base leading-relaxed text-stone-600">
                  You can control and manage cookies through your browser
                  settings. Most browsers allow you to refuse or delete cookies.
                  Please note that disabling certain cookies may affect the
                  functionality of our website.
                </p>
              </div>

              <Separator className="my-12" />

              {/* International Transfers */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  International Data Transfers
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  As a DIFC-incorporated entity, we operate internationally and
                  may transfer your personal information to countries outside
                  the DIFC for processing and storage. When we do so, we ensure
                  that appropriate safeguards are in place to protect your
                  information in accordance with this Privacy Policy and
                  applicable data protection laws.
                </p>
                <p className="text-base leading-relaxed text-stone-600">
                  These safeguards may include standard contractual clauses,
                  adequacy decisions, or other legally approved transfer
                  mechanisms.
                </p>
              </div>

              <Separator className="my-12" />

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Data Retention
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  We retain personal information for as long as necessary to
                  fulfill the purposes outlined in this Privacy Policy, unless a
                  longer retention period is required or permitted by law. The
                  retention period depends on various factors, including:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-base text-stone-600">
                  <li>The nature of the information collected</li>
                  <li>The purpose for which it was collected</li>
                  <li>Legal and regulatory requirements</li>
                  <li>Contractual obligations</li>
                  <li>Our legitimate business needs</li>
                </ul>
                <p className="text-base leading-relaxed text-stone-600">
                  When personal information is no longer needed, we will
                  securely delete or anonymize it in accordance with our data
                  retention policies and applicable laws.
                </p>
              </div>

              <Separator className="my-12" />

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Children's Privacy
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  Our website and services are not directed to individuals under
                  the age of 18. We do not knowingly collect personal
                  information from children. If we become aware that we have
                  inadvertently collected personal information from a child, we
                  will take steps to delete that information as soon as
                  possible.
                </p>
                <p className="text-base leading-relaxed text-stone-600">
                  If you believe we have collected information from a child,
                  please contact us immediately using the information provided
                  below.
                </p>
              </div>

              <Separator className="my-12" />

              {/* Third-Party Links */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Third-Party Websites and Services
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  Our website may contain links to third-party websites and
                  services that are not operated or controlled by us. This
                  Privacy Policy does not apply to those third-party websites or
                  services.
                </p>
                <p className="text-base leading-relaxed text-stone-600">
                  We are not responsible for the privacy practices of third
                  parties. We encourage you to review the privacy policies of
                  any third-party websites or services before providing any
                  personal information or using their services.
                </p>
              </div>

              <Separator className="my-12" />

              {/* Changes to This Policy */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Changes to This Privacy Policy
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technologies, legal requirements, or
                  other factors. When we make changes, we will update the "Last
                  updated" date at the top of this Privacy Policy.
                </p>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  We encourage you to review this Privacy Policy periodically to
                  stay informed about how we collect, use, and protect your
                  information. If we make material changes to this Privacy
                  Policy, we will provide notice through our website or by other
                  means as appropriate.
                </p>
                <p className="text-base leading-relaxed text-stone-600">
                  Your continued use of our website and services after any
                  changes to this Privacy Policy constitutes your acceptance of
                  those changes.
                </p>
              </div>

              <Separator className="my-12" />

              {/* Contact Us */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Contact Us
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                  <p className="mb-2 font-semibold text-stone-900">
                    Arrowsphere Holdings Limited
                  </p>
                  <p className="mb-1 text-base text-stone-600">
                    Dubai International Financial Centre (DIFC)
                  </p>
                  <p className="mb-1 text-base text-stone-600">
                    Dubai, United Arab Emirates
                  </p>
                  <p className="mt-4 text-base text-stone-600">
                    Email:{" "}
                    <a
                      href="mailto:privacy@arrowsphere.com"
                      className="text-stone-900 underline hover:text-stone-700"
                    >
                      privacy@arrowsphere.com
                    </a>
                  </p>
                </div>
                <p className="mt-6 text-base leading-relaxed text-stone-600">
                  We will make every effort to resolve your concerns and respond
                  to your requests in a timely manner, in accordance with
                  applicable data protection laws.
                </p>
              </div>

              <Separator className="my-12" />

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  Governing Law and Jurisdiction
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  This Privacy Policy is governed by and construed in accordance
                  with the laws of the Dubai International Financial Centre
                  (DIFC) and applicable international data protection standards.
                </p>
                <p className="text-base leading-relaxed text-stone-600">
                  Any disputes arising from or relating to this Privacy Policy
                  shall be subject to the exclusive jurisdiction of the DIFC
                  Courts.
                </p>
              </div>

              {/* Acknowledgment */}
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                <p className="text-sm leading-relaxed text-stone-600">
                  By using our website and services, you acknowledge that you
                  have read and understood this Privacy Policy and agree to the
                  collection, use, and disclosure of your information as
                  described herein. If you do not agree with this Privacy
                  Policy, please do not use our website or services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
