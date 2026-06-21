import { ArrowsphereLogoFull } from "@/components/ArrowsphereLogoFull";

// The footer is the page's dark anchor — fixed colors so it reads the same in
// both light and dark themes.
const INK = "oklch(0.155 0.012 60)";
const INK_FG = "oklch(0.93 0.008 85)";

const navLinks: Array<[string, string]> = [
  ["Thesis", "/#thesis"],
  ["Leadership", "/#leadership"],
  ["Approach", "/#approach"],
  ["Contact", "/#connect"],
];

export default function Footer() {
  return (
    <footer style={{ background: INK, color: INK_FG }}>
      <div
        className="container-luxury"
        style={{ paddingTop: "clamp(4rem,8vh,6rem)", paddingBottom: "2.5rem" }}
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <ArrowsphereLogoFull style={{ height: 42, width: "auto", color: INK_FG }} />
            <p
              className="font-quote opacity-55"
              style={{ marginTop: "1.7rem", maxWidth: "27rem", fontSize: "1.05rem", lineHeight: 1.55 }}
            >
              A private family office backing the technology companies of the AI
              era — and the people who build them.
            </p>
            <div style={{ display: "flex", gap: "1.7rem", marginTop: "2rem" }}>
              <a
                href="https://linkedin.com/company/arrowsphere"
                target="_blank"
                rel="noopener noreferrer"
                className="font-nav opacity-55 hover:opacity-100 transition-opacity duration-500"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/arrowsphere"
                target="_blank"
                rel="noopener noreferrer"
                className="font-nav opacity-55 hover:opacity-100 transition-opacity duration-500"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3 md:col-start-7">
            <span
              className="font-display-whisper opacity-45"
              style={{ display: "block", marginBottom: "1.5rem" }}
            >
              Navigate
            </span>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {navLinks.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="opacity-60 hover:opacity-100 transition-opacity duration-500"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: "0.5rem" }}>
                <a
                  href="https://collectiveprosperity.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-45 hover:opacity-100 transition-opacity duration-500"
                  style={{ fontSize: "0.9rem" }}
                >
                  Foundation for Collective Prosperity ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <span
              className="font-display-whisper opacity-45"
              style={{ display: "block", marginBottom: "1.5rem" }}
            >
              Contact
            </span>
            <a
              href="mailto:contact@arrowsphere.co"
              className="opacity-80 hover:opacity-100 transition-opacity duration-500"
              style={{ display: "block", marginBottom: "1rem", fontSize: "0.95rem" }}
            >
              contact@arrowsphere.co
            </a>
            <p className="opacity-55" style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
              Level 1, Innovation One
              <br />
              DIFC, Dubai, UAE
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "clamp(3rem,6vh,4.5rem)",
            paddingTop: "1.8rem",
            borderTop: `0.5px solid color-mix(in oklab, ${INK_FG} 16%, transparent)`,
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="opacity-50" style={{ fontSize: "0.72rem", letterSpacing: "0.04em" }}>
            © {new Date().getFullYear()} Arrowsphere Holdings Limited
          </span>
          <div style={{ display: "flex", gap: "1.7rem", alignItems: "center" }}>
            <a href="/privacy" className="font-nav opacity-50 hover:opacity-100 transition-opacity duration-500">
              Privacy
            </a>
            <a href="/terms" className="font-nav opacity-50 hover:opacity-100 transition-opacity duration-500">
              Terms
            </a>
            <span className="font-nav opacity-50">DIFC Incorporated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
