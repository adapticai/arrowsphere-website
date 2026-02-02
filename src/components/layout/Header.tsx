"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavigationItem {
  name: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: "Thesis", href: "/thesis" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Leadership", href: "/leadership" },
  { name: "Foundation", href: "/foundation" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent",
        )}
      >
        <div className="container-luxury">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group relative">
              <span className="font-display-whisper tracking-[0.3em] text-foreground transition-opacity duration-500 group-hover:opacity-60">
                Arrowsphere
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-nav relative py-2 transition-all duration-500",
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-foreground/50 hover:text-foreground",
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px bg-foreground transition-all duration-500",
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              ))}

              {/* Theme Toggle - Desktop */}
              <ThemeToggle />
            </nav>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <span
                  className={cn(
                    "w-6 h-px bg-foreground transition-all duration-500",
                    isOpen && "rotate-45 translate-y-[4px]",
                  )}
                />
                <span
                  className={cn(
                    "w-6 h-px bg-foreground transition-all duration-500",
                    isOpen && "-rotate-45 -translate-y-[4px]",
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-700 lg:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={cn(
              "font-display-section text-4xl transition-all duration-500",
              pathname === "/"
                ? "text-foreground"
                : "text-foreground/40 hover:text-foreground",
            )}
          >
            Home
          </Link>
          {navigationItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "font-display-section text-4xl transition-all duration-500",
                isActive(item.href)
                  ? "text-foreground"
                  : "text-foreground/40 hover:text-foreground",
              )}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
