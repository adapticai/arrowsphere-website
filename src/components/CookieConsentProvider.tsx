"use client";

import * as React from "react";
import {
  CookiePreferences,
  defaultPreferences,
  allAcceptedPreferences,
  getStoredConsent,
  saveConsent,
} from "@/lib/cookies";

interface CookieConsentContextValue {
  hasConsented: boolean;
  preferences: CookiePreferences;
  showBanner: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  closeBanner: () => void;
}

const CookieConsentContext = React.createContext<
  CookieConsentContextValue | undefined
>(undefined);

interface CookieConsentProviderProps {
  children: React.ReactNode;
}

export function CookieConsentProvider({
  children,
}: CookieConsentProviderProps) {
  const [mounted, setMounted] = React.useState(false);
  const [hasConsented, setHasConsented] = React.useState(false);
  const [preferences, setPreferences] =
    React.useState<CookiePreferences>(defaultPreferences);
  const [showBanner, setShowBanner] = React.useState(false);
  const [showPreferences, setShowPreferences] = React.useState(false);

  // Initialize from stored consent on mount
  React.useEffect(() => {
    setMounted(true);
    const stored = getStoredConsent();

    if (stored && stored.hasConsented) {
      setHasConsented(true);
      setPreferences(stored.preferences);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = React.useCallback(() => {
    setPreferences(allAcceptedPreferences);
    setHasConsented(true);
    setShowBanner(false);
    saveConsent(allAcceptedPreferences);
  }, []);

  const rejectAll = React.useCallback(() => {
    // Essential cookies are always required
    const minimalPreferences: CookiePreferences = {
      ...defaultPreferences,
      essential: true,
    };
    setPreferences(minimalPreferences);
    setHasConsented(true);
    setShowBanner(false);
    saveConsent(minimalPreferences);
  }, []);

  const savePreferencesHandler = React.useCallback(
    (prefs: CookiePreferences) => {
      // Ensure essential is always true
      const finalPrefs = { ...prefs, essential: true };
      setPreferences(finalPrefs);
      setHasConsented(true);
      setShowBanner(false);
      setShowPreferences(false);
      saveConsent(finalPrefs);
    },
    [],
  );

  const openPreferences = React.useCallback(() => {
    setShowPreferences(true);
  }, []);

  const closePreferences = React.useCallback(() => {
    setShowPreferences(false);
  }, []);

  const closeBanner = React.useCallback(() => {
    setShowBanner(false);
  }, []);

  const value = React.useMemo(
    () => ({
      hasConsented,
      preferences,
      showBanner: mounted && showBanner,
      showPreferences,
      acceptAll,
      rejectAll,
      savePreferences: savePreferencesHandler,
      openPreferences,
      closePreferences,
      closeBanner,
    }),
    [
      hasConsented,
      preferences,
      mounted,
      showBanner,
      showPreferences,
      acceptAll,
      rejectAll,
      savePreferencesHandler,
      openPreferences,
      closePreferences,
      closeBanner,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = React.useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider",
    );
  }
  return context;
}
