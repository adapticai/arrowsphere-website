"use client";

import * as React from "react";

type Theme = "light" | "dark" | "system";

interface ThemeProviderContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeProviderContext = React.createContext<
  ThemeProviderContextProps | undefined
>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "arrowsphere-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(
    "light",
  );
  const [mounted, setMounted] = React.useState(false);

  // Get system preference
  const getSystemTheme = React.useCallback((): "light" | "dark" => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  // Initialize theme from localStorage
  React.useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(storageKey) as Theme | null;
    if (stored) {
      setThemeState(stored);
    }
  }, [storageKey]);

  // Update resolved theme and apply to document
  React.useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const resolved = theme === "system" ? getSystemTheme() : theme;

    setResolvedTheme(resolved);

    // Remove both classes first
    root.classList.remove("light", "dark");
    // Add the resolved theme class
    root.classList.add(resolved);
  }, [theme, mounted, getSystemTheme]);

  // Listen for system theme changes
  React.useEffect(() => {
    if (!mounted || theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setResolvedTheme(getSystemTheme());
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(getSystemTheme());
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted, getSystemTheme]);

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      localStorage.setItem(storageKey, newTheme);
    },
    [storageKey],
  );

  // Prevent flash by not rendering until mounted
  if (!mounted) {
    return (
      <ThemeProviderContext.Provider
        value={{
          theme: defaultTheme,
          setTheme: () => {},
          resolvedTheme: "light",
        }}
      >
        {children}
      </ThemeProviderContext.Provider>
    );
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
