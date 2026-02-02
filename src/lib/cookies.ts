// Cookie consent types and utilities

export interface CookiePreferences {
  essential: boolean; // Always true, required for site functionality
  analytics: boolean; // Google Analytics, etc.
  marketing: boolean; // Advertising cookies
  functional: boolean; // Enhanced features like preferences
}

export interface CookieConsentState {
  hasConsented: boolean;
  preferences: CookiePreferences;
  consentDate: string | null;
  consentVersion: string;
}

// Current version of consent - increment when cookie policy changes
export const CONSENT_VERSION = "1.0.0";
export const CONSENT_STORAGE_KEY = "arrowsphere-cookie-consent";
export const CONSENT_EXPIRY_DAYS = 365;

export const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false,
};

export const allAcceptedPreferences: CookiePreferences = {
  essential: true,
  analytics: true,
  marketing: true,
  functional: true,
};

export function getStoredConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as CookieConsentState;

    // Check if consent version matches
    if (parsed.consentVersion !== CONSENT_VERSION) {
      return null;
    }

    // Check if consent has expired
    if (parsed.consentDate) {
      const consentDate = new Date(parsed.consentDate);
      const expiryDate = new Date(consentDate);
      expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);

      if (new Date() > expiryDate) {
        localStorage.removeItem(CONSENT_STORAGE_KEY);
        return null;
      }
    }

    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(preferences: CookiePreferences): void {
  if (typeof window === "undefined") return;

  const state: CookieConsentState = {
    hasConsented: true,
    preferences,
    consentDate: new Date().toISOString(),
    consentVersion: CONSENT_VERSION,
  };

  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));

  // Also set a cookie for server-side access if needed
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);

  document.cookie = `cookie-consent=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
}

export function clearConsent(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem(CONSENT_STORAGE_KEY);
  document.cookie =
    "cookie-consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export const cookieCategories = [
  {
    id: "essential" as const,
    name: "Essential",
    description:
      "Required for the website to function properly. These cannot be disabled.",
    required: true,
  },
  {
    id: "functional" as const,
    name: "Functional",
    description:
      "Enable enhanced functionality and personalization, such as remembering your preferences.",
    required: false,
  },
  {
    id: "analytics" as const,
    name: "Analytics",
    description:
      "Help us understand how visitors interact with our website to improve user experience.",
    required: false,
  },
  {
    id: "marketing" as const,
    name: "Marketing",
    description:
      "Used to deliver relevant advertisements and track campaign effectiveness.",
    required: false,
  },
];
