"use client";

import * as React from "react";
import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";
import { CookiePreferences, cookieCategories } from "@/lib/cookies";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const {
    showBanner,
    showPreferences,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    closePreferences,
  } = useCookieConsent();

  const [localPreferences, setLocalPreferences] =
    React.useState<CookiePreferences>(preferences);

  // Sync local preferences when dialog opens
  React.useEffect(() => {
    if (showPreferences) {
      setLocalPreferences(preferences);
    }
  }, [showPreferences, preferences]);

  const handleAcceptAll = () => {
    acceptAll();
    toast.success("Cookie preferences saved", {
      description: "All cookies have been accepted.",
    });
  };

  const handleRejectAll = () => {
    rejectAll();
    toast.success("Cookie preferences saved", {
      description: "Only essential cookies will be used.",
    });
  };

  const handleSavePreferences = () => {
    savePreferences(localPreferences);
    toast.success("Cookie preferences saved", {
      description: "Your cookie preferences have been updated.",
    });
  };

  const handleToggleCategory = (
    category: keyof CookiePreferences,
    enabled: boolean,
  ) => {
    setLocalPreferences((prev) => ({
      ...prev,
      [category]: enabled,
    }));
  };

  return (
    <>
      {/* Cookie Banner */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 transition-all duration-700",
          showBanner
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none",
        )}
      >
        <div className="bg-card/95 backdrop-blur-xl border-t border-border">
          <div className="container-luxury py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Text Content */}
              <div className="flex-1 max-w-3xl">
                <h3 className="font-display-whisper text-foreground mb-2">
                  Cookie Preferences
                </h3>
                <p className="font-body-refined text-foreground/60 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze
                  site traffic, and personalize content. By clicking
                  &quot;Accept All&quot;, you consent to our use of cookies.
                  Read our{" "}
                  <Link
                    href="/privacy"
                    className="underline hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for more information.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  variant="ghost"
                  onClick={openPreferences}
                  className="font-nav text-foreground/60 hover:text-foreground"
                >
                  Manage Preferences
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="font-nav border-foreground/20 hover:border-foreground"
                >
                  Reject All
                </Button>
                <Button onClick={handleAcceptAll} className="font-nav">
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Dialog */}
      <Dialog open={showPreferences} onOpenChange={closePreferences}>
        <DialogContent className="sm:max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-display-whisper text-xl tracking-wider">
              Cookie Preferences
            </DialogTitle>
            <DialogDescription className="font-body-refined text-foreground/60">
              Manage your cookie preferences. Essential cookies are required for
              the website to function and cannot be disabled.
            </DialogDescription>
          </DialogHeader>

          <div className="py-6 space-y-6">
            {cookieCategories.map((category) => (
              <div
                key={category.id}
                className="flex items-start justify-between gap-4 pb-6 border-b border-border/50 last:border-0 last:pb-0"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-nav text-foreground">
                      {category.name}
                    </span>
                    {category.required && (
                      <span className="text-[10px] font-nav text-foreground/40 uppercase tracking-wider">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-foreground/50 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <Switch
                  checked={localPreferences[category.id]}
                  onCheckedChange={(checked) =>
                    handleToggleCategory(category.id, checked)
                  }
                  disabled={category.required}
                  aria-label={`Toggle ${category.name} cookies`}
                />
              </div>
            ))}
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={handleRejectAll}
              className="font-nav border-foreground/20 hover:border-foreground sm:flex-1"
            >
              Reject All
            </Button>
            <Button
              variant="outline"
              onClick={handleAcceptAll}
              className="font-nav border-foreground/20 hover:border-foreground sm:flex-1"
            >
              Accept All
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="font-nav sm:flex-1"
            >
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Small button to reopen cookie preferences (for footer)
export function CookiePreferencesButton() {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      onClick={openPreferences}
      className="font-nav text-foreground/50 hover:text-foreground transition-colors duration-300"
    >
      Cookie Preferences
    </button>
  );
}
