"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { business, navLinks } from "@/lib/content";
import { openBeBookWidget } from "@/components/ui/BeBookWidget";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    let ticking = false;
    function update() {
      // Mobile (< lg) : header toujours visible (la nav inline du hero est desktop-only).
      // Desktop : caché pendant le hero plein écran, visible après 50% du viewport.
      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      setScrolled(isMobile || window.scrollY > window.innerHeight * 0.5);
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        aria-hidden={!scrolled}
        className={`fixed top-0 inset-x-0 z-50 grid items-center gap-4 lg:gap-8 px-[var(--shell-x)] grid-cols-[auto_1fr_auto] transition-[background,padding,border-color,transform,opacity] duration-[500ms] ease-[var(--ease-premium)] ${
          scrolled
            ? "py-3 bg-light/92 backdrop-blur-xl border-b border-accent/20 translate-y-0 opacity-100 pointer-events-auto"
            : "py-5 border-b border-transparent -translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          aria-label={`${business.name} — Accueil`}
          className="text-dark text-[2rem] sm:text-[2.2rem] tracking-[-0.01em] leading-none"
          style={{ fontFamily: "var(--font-brand), 'Brush Script MT', cursive" }}
        >
          {business.name}
        </Link>

        {/* Nav desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex justify-center items-center gap-9 text-[0.9rem]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-dark py-1.5 transition-colors duration-[220ms] hover:text-accent
                         after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-accent
                         after:scale-x-0 after:origin-left after:transition-transform after:duration-[280ms] after:ease-[var(--ease-premium)]
                         hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right area : CTA desktop OR burger mobile */}
        <div className="flex items-center gap-3 justify-self-end">
          <button
            type="button"
            onClick={openBeBookWidget}
            className="hidden lg:inline-flex font-sans font-semibold text-[0.85rem] bg-accent text-dark px-5 py-2.5 rounded-full transition-[background,color,transform] duration-[280ms] hover:bg-accent-dark hover:text-light hover:-translate-y-px"
          >
            Commander
          </button>

          {/* Burger mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 rounded-full border border-dark/20 text-dark hover:bg-accent hover:text-light hover:border-accent transition-colors duration-[220ms]"
          >
            <span
              className={`block h-px w-5 bg-current transition-transform duration-[280ms] ${
                mobileOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-[280ms] ${
                mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay — design éditorial signature */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            className="fixed inset-0 z-[60] lg:hidden bg-light flex flex-col overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundImage: `repeating-linear-gradient(
                35deg,
                rgba(203, 125, 101, 0.08) 0px,
                rgba(203, 125, 101, 0.08) 38px,
                transparent 38px,
                transparent 76px
              )`,
            }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-[var(--shell-x)] py-4 border-b border-accent/20 bg-light/85 backdrop-blur-sm">
              <Link
                href="/"
                aria-label={`${business.name} — Accueil`}
                className="text-dark text-[2rem] tracking-[-0.01em] leading-none"
                style={{
                  fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {business.name}
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer le menu"
                className="w-11 h-11 rounded-full bg-light border border-dark/20 text-dark hover:bg-accent hover:text-light hover:border-accent transition-colors duration-[220ms] flex items-center justify-center text-[1.2rem] leading-none"
              >
                ×
              </button>
            </div>

            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.4 }}
              className="px-[var(--shell-x)] pt-8 pb-4 text-center"
            >
              <span
                className="text-[0.7rem] uppercase tracking-[0.24em] text-olive font-bold inline-flex items-center gap-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 40',
                }}
              >
                <span aria-hidden="true" className="block w-6 h-px bg-olive/50" />
                Le menu
                <span aria-hidden="true" className="block w-6 h-px bg-olive/50" />
              </span>
            </motion.div>

            {/* Liens nav en Sacramento, numérotés édito */}
            <nav
              aria-label="Navigation principale"
              className="flex-1 flex flex-col justify-center gap-0.5 px-[var(--shell-x)] py-4"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.07,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-baseline gap-4 sm:gap-5 py-3 border-b border-accent/15 hover:border-accent/40 transition-colors duration-[280ms]"
                  >
                    <span
                      className="italic text-olive text-[0.95rem] font-bold tracking-[0.05em] flex-shrink-0 w-9"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 60',
                      }}
                    >
                      Nº{String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-accent-dark text-[clamp(2.4rem,9vw,3.6rem)] leading-[1] transition-[color,transform] duration-[280ms] group-hover:text-accent group-hover:translate-x-1"
                      style={{
                        fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                        fontWeight: 400,
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer drawer : CTA + coords + horaires + instagram */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="px-[var(--shell-x)] pt-6 pb-8 border-t border-accent/20 bg-light/85 backdrop-blur-sm flex flex-col gap-5"
            >
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  // léger délai pour laisser le menu se fermer
                  setTimeout(() => openBeBookWidget(), 320);
                }}
                className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-[0.95rem] bg-accent text-dark px-6 py-3.5 rounded-full hover:bg-accent-dark hover:text-light transition-colors duration-[220ms]"
              >
                Commander en ligne
              </button>

              <div className="grid gap-3 text-[0.82rem] text-ink/85 leading-[1.45]">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 hover:text-accent transition-colors duration-[220ms]"
                >
                  <span className="text-accent font-bold">·</span>
                  <span className="font-medium">{business.phone}</span>
                </a>
                <a
                  href={business.emailHref}
                  className="flex items-center gap-3 hover:text-accent transition-colors duration-[220ms] break-all"
                >
                  <span className="text-accent font-bold">·</span>
                  <span className="font-medium">{business.email}</span>
                </a>
                <span className="flex items-start gap-3">
                  <span className="text-accent font-bold leading-[1.45]">·</span>
                  <span>
                    {business.address.street}
                    <br />
                    {business.address.zip} {business.address.city}
                  </span>
                </span>
                <span className="flex items-start gap-3">
                  <span className="text-accent font-bold leading-[1.45]">·</span>
                  <span>
                    Ouvert 7j/7 · 10h–20h
                    <br />
                    <span className="text-ink/60">Dim. 10h–14h · Ven. & sam. jusqu’à 20h30</span>
                  </span>
                </span>
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent transition-colors duration-[220ms]"
                >
                  <span className="text-accent font-bold">·</span>
                  <span className="font-medium">@mamarazzi_traiteur ↗</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
