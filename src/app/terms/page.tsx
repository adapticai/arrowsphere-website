import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service | Arrowsphere Holdings Limited",
  description:
    "Terms of Service for Arrowsphere Holdings Limited, a DIFC-incorporated private family office holding company.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-stone-200 bg-stone-50 py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Terms of Service
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
                <p className="text-base leading-relaxed text-stone-600">
                  Welcome to Arrowsphere Holdings Limited. These Terms of
                  Service ("Terms") govern your access to and use of our
                  website, services, and related platforms. By accessing or
                  using our website, you agree to be bound by these Terms. If
                  you do not agree to these Terms, please do not use our
                  website.
                </p>
              </div>

              <Separator className="my-12" />

              {/* 1. Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  By accessing and using this website, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms of
                  Service and our Privacy Policy. These Terms constitute a
                  legally binding agreement between you and Arrowsphere Holdings
                  Limited.
                </p>
                <p className="text-base leading-relaxed text-stone-600">
                  We reserve the right to modify these Terms at any time. Your
                  continued use of the website following any changes constitutes
                  acceptance of those changes. We recommend reviewing these
                  Terms periodically to stay informed of any updates.
                </p>
              </div>

              <Separator className="my-12" />

              {/* 2. Use of Website */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  2. Use of Website
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  This website is intended for informational purposes only.
                  Information provided on this website does not constitute
                  financial advice, investment advice, trading advice, or any
                  other sort of advice, and you should not treat any of the
                  website's content as such.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  2.1 Permitted Use
                </h3>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  You may use this website only for lawful purposes and in
                  accordance with these Terms. You agree not to use the website:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-base text-stone-600">
                  <li>
                    In any way that violates any applicable federal, state,
                    local, or international law or regulation
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or
                    promotional material without our prior written consent
                  </li>
                  <li>
                    To impersonate or attempt to impersonate Arrowsphere
                    Holdings Limited, our employees, another user, or any other
                    person or entity
                  </li>
                  <li>
                    To engage in any conduct that restricts or inhibits anyone's
                    use or enjoyment of the website
                  </li>
                </ul>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-stone-900">
                  2.2 Account Security
                </h3>
                <p className="text-base leading-relaxed text-stone-600">
                  If you create an account on our website, you are responsible
                  for maintaining the confidentiality of your account
                  credentials and for all activities that occur under your
                  account. You agree to notify us immediately of any
                  unauthorized use of your account.
                </p>
              </div>

              <Separator className="my-12" />

              {/* 3. Intellectual Property */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  3. Intellectual Property
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  The website and its entire contents, features, and
                  functionality (including but not limited to all information,
                  software, text, displays, images, video, and audio, and the
                  design, selection, and arrangement thereof) are owned by
                  Arrowsphere Holdings Limited, its licensors, or other
                  providers of such material and are protected by copyright,
                  trademark, patent, trade secret, and other intellectual
                  property or proprietary rights laws.
                </p>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  You must not reproduce, distribute, modify, create derivative
                  works of, publicly display, publicly perform, republish,
                  download, store, or transmit any of the material on our
                  website, except as follows:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-base text-stone-600">
                  <li>
                    Your computer may temporarily store copies of such materials
                    in RAM incidental to your accessing and viewing those
                    materials
                  </li>
                  <li>
                    You may store files that are automatically cached by your
                    web browser for display enhancement purposes
                  </li>
                  <li>
                    You may print or download one copy of a reasonable number of
                    pages of the website for your own personal, non-commercial
                    use
                  </li>
                </ul>
                <p className="text-base leading-relaxed text-stone-600">
                  The trademarks, service marks, and logos used and displayed on
                  this website are registered and unregistered trademarks of
                  Arrowsphere Holdings Limited. Nothing on this website should
                  be construed as granting any license or right to use any
                  trademark without our prior written permission.
                </p>
              </div>

              <Separator className="my-12" />

              {/* 4. Disclaimer */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  4. Disclaimer
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  THE INFORMATION PROVIDED ON THIS WEBSITE IS PROVIDED "AS IS"
                  WITHOUT ANY REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED.
                  ARROWSPHERE HOLDINGS LIMITED MAKES NO REPRESENTATIONS OR
                  WARRANTIES IN RELATION TO THIS WEBSITE OR THE INFORMATION AND
                  MATERIALS PROVIDED ON THIS WEBSITE.
                </p>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  Without prejudice to the generality of the foregoing
                  paragraph, Arrowsphere Holdings Limited does not warrant that:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-base text-stone-600">
                  <li>
                    This website will be constantly available, or available at
                    all
                  </li>
                  <li>
                    The information on this website is complete, true, accurate,
                    or non-misleading
                  </li>
                  <li>
                    The website will be free from errors, bugs, or interruptions
                  </li>
                  <li>
                    The website or the server that makes it available are free
                    of viruses or other harmful components
                  </li>
                </ul>
                <p className="text-base leading-relaxed text-stone-600">
                  Nothing on this website constitutes, or is meant to
                  constitute, advice of any kind. If you require advice in
                  relation to any financial, legal, or other matter, you should
                  consult an appropriate professional advisor.
                </p>
              </div>

              <Separator className="my-12" />

              {/* 5. Limitation of Liability */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  5. Limitation of Liability
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ARROWSPHERE
                  HOLDINGS LIMITED SHALL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR
                  ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR
                  INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
                  INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-base text-stone-600">
                  <li>
                    Your access to or use of or inability to access or use the
                    website
                  </li>
                  <li>
                    Any conduct or content of any third party on the website
                  </li>
                  <li>Any content obtained from the website</li>
                  <li>
                    Unauthorized access, use, or alteration of your
                    transmissions or content
                  </li>
                </ul>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  IN NO EVENT SHALL THE AGGREGATE LIABILITY OF ARROWSPHERE
                  HOLDINGS LIMITED EXCEED THE AMOUNT YOU PAID TO US, IF ANY, IN
                  THE PAST SIX MONTHS FOR THE SERVICES GIVING RISE TO THE CLAIM.
                </p>
                <p className="text-base leading-relaxed text-stone-600">
                  Some jurisdictions do not allow the exclusion of certain
                  warranties or the limitation or exclusion of liability for
                  incidental or consequential damages. Accordingly, some of the
                  above limitations may not apply to you.
                </p>
              </div>

              <Separator className="my-12" />

              {/* 6. Governing Law */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  6. Governing Law
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  These Terms of Service and any dispute or claim arising out of
                  or in connection with them or their subject matter or
                  formation (including non-contractual disputes or claims) shall
                  be governed by and construed in accordance with the laws of
                  the Dubai International Financial Centre ("DIFC").
                </p>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  The parties irrevocably agree that the courts of the DIFC
                  shall have exclusive jurisdiction to settle any dispute or
                  claim that arises out of or in connection with these Terms or
                  their subject matter or formation (including non-contractual
                  disputes or claims).
                </p>
                <p className="text-base leading-relaxed text-stone-600">
                  Arrowsphere Holdings Limited is incorporated and registered in
                  the Dubai International Financial Centre, and our principal
                  place of business is located within the DIFC jurisdiction.
                </p>
              </div>

              <Separator className="my-12" />

              {/* 7. Changes to Terms */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  7. Changes to Terms
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  We reserve the right to modify or replace these Terms at any
                  time at our sole discretion. If a revision is material, we
                  will make reasonable efforts to provide at least 30 days'
                  notice prior to any new terms taking effect.
                </p>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  What constitutes a material change will be determined at our
                  sole discretion. By continuing to access or use our website
                  after those revisions become effective, you agree to be bound
                  by the revised terms.
                </p>
                <p className="text-base leading-relaxed text-stone-600">
                  We encourage you to review these Terms periodically for any
                  changes. Your continued use of the website following the
                  posting of revised Terms means that you accept and agree to
                  the changes.
                </p>
              </div>

              <Separator className="my-12" />

              {/* 8. Contact Information */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-stone-900">
                  8. Contact Information
                </h2>
                <p className="mb-4 text-base leading-relaxed text-stone-600">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
                  <p className="mb-2 font-semibold text-stone-900">
                    Arrowsphere Holdings Limited
                  </p>
                  <p className="mb-1 text-base text-stone-600">
                    Level 1, Innovation One, DIFC, Dubai, UAE
                  </p>
                  <p className="mt-4 text-base text-stone-600">
                    For inquiries, please use the contact information provided
                    on our website.
                  </p>
                </div>
              </div>

              {/* Final Notes */}
              <div className="mt-16 rounded-lg border border-stone-200 bg-stone-50 p-6">
                <p className="text-sm leading-relaxed text-stone-600">
                  These Terms of Service constitute the entire agreement between
                  you and Arrowsphere Holdings Limited regarding the use of our
                  website. If any provision of these Terms is found to be
                  invalid or unenforceable, the remaining provisions will remain
                  in full force and effect. Our failure to enforce any right or
                  provision of these Terms will not be considered a waiver of
                  those rights.
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
