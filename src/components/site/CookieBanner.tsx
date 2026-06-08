"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "mz-cookies-consent";
// Conformité CNIL : durée max 13 mois pour le consentement cookies
const CONSENT_TTL_MS = 13 * 30 * 24 * 60 * 60 * 1000;

type Consent = {
  status: "accepted" | "refused";
  ts: number;
};

function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    if (!parsed?.ts || Date.now() - parsed.ts > CONSENT_TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(status: Consent["status"]) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status, ts: Date.now() } satisfies Consent),
    );
  } catch {
    // localStorage indispo (mode privé) : on ignore, le banner re-apparaîtra
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Léger délai pour ne pas flasher au mount + laisser le contenu primaire s'afficher
    const t = window.setTimeout(() => {
      if (!readConsent()) setVisible(true);
    }, 600);
    return () => window.clearTimeout(t);
  }, []);

  function decide(status: Consent["status"]) {
    writeConsent(status);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Préférences cookies"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[420px] z-[55]"
        >
          <div
            className="bg-light border border-accent/25 shadow-[0_24px_60px_-22px_rgba(31,24,21,0.45)] rounded-2xl p-5 sm:p-6"
            style={{ borderTopLeftRadius: "1.25rem", borderTopRightRadius: "1.25rem" }}
          >
            <p
              className="text-[0.68rem] uppercase tracking-[0.24em] text-olive font-bold mb-2"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 14, "SOFT" 40',
              }}
            >
              Cookies & confidentialité
            </p>

            <p className="text-[0.88rem] leading-[1.55] text-ink/90 mb-4">
              Ce site utilise des cookies tiers pour le widget de commande,
              le fil Instagram, les avis Google et la carte interactive.{" "}
              <Link
                href="/mentions-legales#cookies"
                className="underline decoration-accent/60 underline-offset-2 text-accent-dark hover:text-accent transition-colors"
              >
                En savoir plus
              </Link>
              .
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="inline-flex items-center justify-center font-sans font-semibold text-[0.82rem] bg-accent text-dark px-4 py-2.5 rounded-full hover:bg-accent-dark hover:text-light transition-colors duration-[220ms]"
              >
                Accepter
              </button>
              <button
                type="button"
                onClick={() => decide("refused")}
                className="inline-flex items-center justify-center font-sans font-medium text-[0.82rem] text-ink/80 px-4 py-2.5 rounded-full border border-dark/15 hover:border-accent/40 hover:text-accent-dark transition-colors duration-[220ms]"
              >
                Refuser
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
