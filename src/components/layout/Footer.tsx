import Link from "next/link";
import { CookiePreferencesButton } from "@/components/CookieConsent";

interface NavigationLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  { name: "Thesis", href: "/thesis" },
  { name: "Leadership", href: "/leadership" },
  { name: "Foundation", href: "/foundation" },
  { name: "Contact", href: "/contact" },
];

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/arrowsphere-holdings",
  },
  { name: "Twitter", href: "https://twitter.com/arrowsphere" },
];

const legalLinks: NavigationLink[] = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container-luxury section-padding-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8">
              <span className="font-display-whisper tracking-[0.3em] text-foreground">
                Arrowsphere
              </span>
            </Link>

            <p className="font-body-refined text-foreground/50 max-w-sm mb-8">
              Stewardship Capital for the AI-Born Era. A DIFC-incorporated
              private family office.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-nav text-foreground/40 hover:text-foreground transition-colors duration-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-7">
            <span className="font-display-whisper text-foreground/30 block mb-8">
              Navigate
            </span>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body-refined text-foreground/50 hover:text-foreground transition-colors duration-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 lg:col-start-10">
            <span className="font-display-whisper text-foreground/30 block mb-8">
              Contact
            </span>
            <a
              href="mailto:contact@arrowsphere.co"
              className="font-body-refined text-foreground/50 hover:text-foreground transition-colors duration-500 block mb-4"
            >
              contact@arrowsphere.co
            </a>
            <span className="font-body-refined text-foreground/30 block">
              Level 1, Innovation One
              <br />
              DIFC, Dubai, UAE
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container-luxury py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <span className="font-display-whisper text-foreground/30">
              © {new Date().getFullYear()} Arrowsphere Holdings Limited
            </span>

            {/* Legal Links */}
            <div className="flex items-center gap-8">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-display-whisper text-foreground/30 hover:text-foreground/60 transition-colors duration-500"
                >
                  {link.name}
                </Link>
              ))}
              <CookiePreferencesButton />
              <span className="font-display-whisper text-foreground/30">
                DIFC Incorporated
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
