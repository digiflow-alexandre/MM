"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QuoteForm } from "./QuoteForm";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const QuoteModalCtx = createContext<Ctx | null>(null);

export function useQuoteModal() {
  const ctx = useContext(QuoteModalCtx);
  if (!ctx) {
    throw new Error("useQuoteModal must be used inside <QuoteModalProvider>");
  }
  return ctx;
}

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll when modal is open + close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <QuoteModalCtx.Provider value={{ open, close, isOpen }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={close} />
    </QuoteModalCtx.Provider>
  );
}

function QuoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="quote-modal"
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center overflow-y-auto py-4 sm:py-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
          onClick={(e) => {
            // Click on backdrop closes modal (not on panel)
            if (!panelRef.current?.contains(e.target as Node)) onClose();
          }}
        >
          {/* Backdrop */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-dark/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="modal-panel relative w-full max-w-[680px] bg-light shadow-[0_24px_60px_-22px_rgba(31,24,21,0.5)] border border-accent/15"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-light border border-ink/15 text-dark hover:bg-accent hover:text-light hover:border-accent transition-colors duration-[220ms] flex items-center justify-center text-[1.1rem] leading-none shadow-sm"
            >
              ×
            </button>

            <div className="p-4 sm:p-8 lg:p-10">
              <header className="text-center mb-4 sm:mb-6">
                <span
                  className="text-[0.62rem] sm:text-[0.7rem] uppercase tracking-[0.22em] text-olive font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 14, "SOFT" 40',
                  }}
                >
                  Réponse sous 48 h
                </span>
                <h2
                  id="quote-modal-title"
                  className="mt-2 sm:mt-3 text-accent-dark text-[clamp(1.8rem,4vw,2.8rem)] leading-[1]"
                  style={{
                    fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                    fontWeight: 400,
                  }}
                >
                  Demande de devis
                </h2>
                <span
                  aria-hidden="true"
                  className="block w-10 sm:w-12 h-px bg-accent/40 mx-auto mt-3 sm:mt-4"
                />
              </header>

              <QuoteForm onSuccess={() => {
                setTimeout(onClose, 2500);
              }} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
