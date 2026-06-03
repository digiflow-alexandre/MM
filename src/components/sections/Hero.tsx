import Link from "next/link";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "./HeroBackdrop";
import { business, photos, navLinks } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh w-full overflow-hidden flex"
    >
      <HeroBackdrop src={photos.hero.src} alt={photos.hero.alt} />

      {/* Overlays cinéma pour assurer la lisibilité globale */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(31,24,21,0.45)_0%,rgba(31,24,21,0.25)_30%,rgba(31,24,21,0.4)_70%,rgba(31,24,21,0.7)_100%)] pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-[radial-gradient(110%_60%_at_50%_120%,rgba(203,125,101,0.15),transparent_60%)] mix-blend-soft-light pointer-events-none"
      />

      {/* Cadre carte semi-transparent (inspiration éditoriale Pokota) */}
      <div className="relative z-20 mt-20 sm:mt-[clamp(0.75rem,2.5vw,1.75rem)] mx-[clamp(0.75rem,2.5vw,1.75rem)] mb-[clamp(0.75rem,2.5vw,1.75rem)] flex-1 border border-light/35 bg-light/8 backdrop-blur-[2px] flex flex-col">
        <div className="flex flex-col grow p-[clamp(1.5rem,4vw,3.5rem)] gap-[clamp(2rem,4vw,3rem)]">

          {/* ─── TOP ROW : wordmark + nav inline ─── */}
          <header className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
            <Stagger className="flex flex-col gap-1.5">
              <StaggerItem>
                <Link
                  href="/"
                  className="text-light leading-[0.85] tracking-[-0.01em] inline-block"
                  style={{
                    fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                    fontWeight: 400,
                    fontSize: "clamp(4.5rem, 13vw, 12rem)",
                    textShadow: "0 2px 24px rgba(0,0,0,0.4)",
                  }}
                  aria-label={`${business.name} — Accueil`}
                >
                  {business.name}
                </Link>
              </StaggerItem>
              <StaggerItem>
                <p
                  className="font-sans font-semibold text-light text-[clamp(0.82rem,1vw,1rem)] tracking-[0.2em] uppercase ml-1 mt-3 flex flex-wrap items-center gap-2.5"
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
                >
                  <span>Traiteur</span>
                  <span className="text-accent">·</span>
                  <span>Italien &amp; niçois</span>
                  <span className="text-accent">·</span>
                  <span>Asnières-sur-Seine</span>
                </p>
              </StaggerItem>
            </Stagger>

            <Reveal delay={0.2}>
              <nav
                aria-label="Navigation principale (hero)"
                className="hidden lg:flex items-baseline flex-wrap gap-x-2 gap-y-1 text-light/95 text-[0.78rem] tracking-[0.22em] uppercase"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 40',
                  fontWeight: 600,
                  textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                }}
              >
                {navLinks.map((link, i) => (
                  <span key={link.href} className="inline-flex items-baseline">
                    <Link
                      href={link.href}
                      className="transition-colors duration-[280ms] hover:text-accent"
                    >
                      {link.label}
                    </Link>
                    {i < navLinks.length - 1 && (
                      <span className="text-light/60 mx-1">,</span>
                    )}
                  </span>
                ))}
              </nav>
            </Reveal>
          </header>

          {/* ─── MID : badge "Depuis 2022" en absolute right ─── */}
          <Reveal delay={0.4}>
            <div
              aria-hidden="true"
              className="hidden lg:flex absolute top-1/2 right-[clamp(1rem,3vw,2.5rem)] -translate-y-1/2 z-30 flex-col items-center gap-3"
            >
              <span
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-dark font-display italic font-extrabold text-[1.5rem] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
              >
                ’22
              </span>
              <span
                className="text-light/80 text-[0.65rem] tracking-[0.22em] uppercase max-w-[8ch] text-center leading-[1.4]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 50',
                  fontWeight: 600,
                  textShadow: "0 1px 6px rgba(0,0,0,0.5)",
                }}
              >
                Depuis Asnières
              </span>
            </div>
          </Reveal>

          {/* ─── SPACER : pousse le contenu bottom vers le bas ─── */}
          <div className="flex-1 min-h-[1rem]" aria-hidden="true" />

          {/* ─── BOTTOM ROW : accroche + CTA + scroll indicator ─── */}
          <Stagger className="flex flex-col gap-6 lg:gap-8 max-w-[42rem]">
            <StaggerItem>
              <p
                className="font-display italic text-light text-[clamp(1.4rem,2.5vw,2rem)] leading-[1.3] text-balance"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                  fontWeight: 500,
                  textShadow: "0 2px 16px rgba(0,0,0,0.45)",
                }}
              >
                {"« L’aperitivo, c’est un rituel. Une mamma, c’est une vie. »"}
              </p>
            </StaggerItem>

            <StaggerItem>
              <p
                className="font-sans font-medium text-light text-[clamp(0.98rem,1.15vw,1.15rem)] leading-[1.55] max-w-[36em]"
                style={{ textShadow: "0 2px 14px rgba(0,0,0,0.65)" }}
              >
                De Gênes à Saint-Tropez, une cuisine qui a le goût du Sud. Recettes de famille, fait maison à Asnières depuis 2022.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap items-center gap-4 mt-1">
                <Button href="/aperitivo">Composer un plateau</Button>
                <Link
                  href="/histoire"
                  className="group inline-flex items-center gap-2 text-sand text-[0.85rem] tracking-[0.18em] uppercase font-semibold border-b border-sand/40 pb-1 transition-[color,gap,border-color] duration-[280ms] hover:text-accent hover:border-accent hover:gap-3"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
                >
                  Découvrir l’histoire
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </StaggerItem>
          </Stagger>

          {/* ─── FOOTER ROW du cadre : meta horaires + scroll indicator ─── */}
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end pt-6 mt-4 border-t border-light/20">
            <Reveal delay={0.5}>
              <div
                className="flex flex-wrap items-center gap-3 text-sand/85 text-[0.78rem]"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{business.hero.todayHours}</span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-sand/40" />
                <span className="hidden sm:inline">
                  {business.address.street}, {business.address.zip}{" "}
                  {business.address.city}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div
                aria-hidden="true"
                className="hidden lg:flex items-center gap-3 text-sand/70 text-[0.7rem] uppercase tracking-[0.22em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 50',
                  fontWeight: 600,
                }}
              >
                <span>(Scroll)</span>
                <span className="block w-px h-8 bg-sand/40 animate-pulse" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
