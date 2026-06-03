"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business, navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Sur les pages internes : header visible dès le départ.
  // Sur la home : caché pendant le hero plein écran (qui a sa propre nav),
  // apparaît après 50% du viewport au scroll.
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    let ticking = false;
    function update() {
      setScrolled(window.scrollY > window.innerHeight * 0.5);
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      aria-hidden={!scrolled}
      className={`fixed top-0 inset-x-0 z-50 grid items-center gap-8 px-[var(--shell-x)] grid-cols-[auto_1fr_auto] transition-[background,padding,border-color,transform,opacity] duration-[500ms] ease-[var(--ease-premium)] ${
        scrolled
          ? "py-3 bg-light/92 backdrop-blur-xl border-b border-accent/20 translate-y-0 opacity-100 pointer-events-auto"
          : "py-5 border-b border-transparent -translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <Link
        href="/"
        aria-label={`${business.name} — Accueil`}
        className="text-dark text-[2.2rem] tracking-[-0.01em] leading-none"
        style={{ fontFamily: "var(--font-brand), 'Brush Script MT', cursive" }}
      >
        {business.name}
      </Link>

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

      <Link
        href="/aperitivo"
        className="font-sans font-semibold text-[0.85rem] bg-accent text-dark px-5 py-2.5 rounded-full transition-[background,color,transform] duration-[280ms] hover:bg-accent-dark hover:text-light hover:-translate-y-px"
      >
        Commander
      </Link>
    </header>
  );
}
