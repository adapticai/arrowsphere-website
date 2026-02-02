import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CookieConsentProvider } from "@/components/CookieConsentProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Primary sans-serif - clean, modern, luxury
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-geist-sans",
  display: "swap",
});

// Serif for editorial quotes and elegant accents
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arrowsphere Holdings",
  description:
    "Stewardship Capital for the AI-Born Era. A DIFC-incorporated private family office holding company focused on technology ventures, investments, and philanthropy.",
  keywords: [
    "family office",
    "private investments",
    "venture building",
    "technology",
    "fintech",
    "DIFC",
    "stewardship capital",
    "AI-native",
  ],
  authors: [{ name: "Arrowsphere Holdings Limited" }],
  openGraph: {
    title: "Arrowsphere Holdings",
    description: "Stewardship Capital for the AI-Born Era.",
    type: "website",
    locale: "en_US",
    siteName: "Arrowsphere Holdings",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrowsphere Holdings",
    description: "Stewardship Capital for the AI-Born Era.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('arrowsphere-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="arrowsphere-theme">
          <CookieConsentProvider>
            {children}
            <CookieConsent />
            <Toaster
              position="bottom-right"
              toastOptions={{
                classNames: {
                  toast: "font-body-refined bg-card border-border",
                  title: "font-nav text-foreground",
                  description: "text-foreground/60",
                },
              }}
            />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
