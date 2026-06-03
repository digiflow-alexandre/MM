import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { InlineLink } from "@/components/ui/InlineLink";
import { WavyFrame } from "@/components/svg/WavyFrame";
import { QuoteButton } from "@/components/site/QuoteButton";
import { formulas, photos } from "@/lib/content";

export function Aperitivo() {
  return (
    <section
      id="aperitivo"
      className="section relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-sand)",
        backgroundImage: `repeating-linear-gradient(
          35deg,
          rgba(203, 125, 101, 0.55) 0px,
          rgba(203, 125, 101, 0.55) 38px,
          var(--color-sand) 38px,
          var(--color-sand) 76px
        )`,
      }}
    >
      {/* Voile crème pour atténuer les bandes et garantir la lisibilité */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-light/30 pointer-events-none"
      />

      <div className="shell relative">
        {/* ─── Header édito cohérent ─── */}
        <Reveal>
          <header className="mb-12 lg:mb-20 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/30">
            <div className="flex items-end gap-6 lg:gap-8">
              <span className="edito-no text-accent">Nº03</span>
              <Kicker color="olive">La signature de la maison</Kicker>
            </div>
            <span
              className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/75 font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 14, "SOFT" 30',
              }}
            >
              Plateaux · 4 → 40 personnes
            </span>
          </header>
        </Reveal>

        {/* ─── Title + intro asymétrique ─── */}
        <div className="grid items-end gap-x-12 gap-y-8 lg:grid-cols-12 lg:gap-x-20 mb-16 lg:mb-20">
          <Reveal className="lg:col-span-7">
            <h2
              className="text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[1.05] tracking-[-0.022em] text-balance text-dark"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60',
                fontWeight: 700,
              }}
            >
              L’aperitivo,
              <br className="hidden sm:block" />{" "}
              <em className="italic text-accent">ce rituel</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p
              className="italic text-ink text-[clamp(1.05rem,1.35vw,1.2rem)] leading-[1.55] max-w-[34em]"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              Recevoir sans rien faire… sauf profiter. Charcuterie corse &
              italienne, antipasti, mignardises maison, focaccia giggante —
              composez votre buffet d’apéritivo, de 4 à 100 convives.
            </p>
          </Reveal>
        </div>

        {/* ─── 3 formules en grid — z-10 pour passer au-dessus du bandeau ─── */}
        <Stagger className="grid gap-5 sm:gap-7 sm:grid-cols-3 max-sm:max-w-[380px] max-sm:mx-auto relative z-10">
          {formulas.map((formula) => (
            <StaggerItem key={formula.no}>
              <article className="h-full">
                <WavyFrame
                  className="h-full bg-light shadow-[0_18px_40px_-22px_rgba(31,24,21,0.35)] hover:shadow-[0_28px_48px_-22px_rgba(31,24,21,0.45)] hover:-translate-y-1.5 transition-[transform,box-shadow] duration-[600ms] ease-[var(--ease-premium)]"
                  innerClassName="p-8 sm:p-10 lg:p-11 text-center flex flex-col items-center gap-3.5 min-h-[300px]"
                >
                  <span
                    className="italic text-[0.7rem] uppercase tracking-[0.22em] text-accent font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 14, "SOFT" 60',
                    }}
                  >
                    {formula.no}
                  </span>
                  <h3
                    className="italic font-bold text-dark text-[clamp(1.5rem,2.4vw,1.95rem)] leading-[1.1]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60',
                    }}
                  >
                    {formula.name}
                  </h3>
                  <p className="font-sans text-[0.92rem] leading-[1.55] text-ink flex-1">
                    {formula.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-accent/20 w-full flex items-baseline justify-between gap-3">
                    <span
                      className="italic font-medium text-[0.82rem] text-olive"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 50',
                      }}
                    >
                      {formula.size}
                    </span>
                    <span
                      className="italic font-bold text-[0.95rem] text-accent-dark whitespace-nowrap"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 60',
                      }}
                    >
                      dès {formula.priceFrom}
                    </span>
                  </div>
                </WavyFrame>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* ─── Bandeau citation (hors shell, plus large que le shell mais marges latérales) ─── */}
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 max-w-[1700px] mx-auto">
        <Reveal>
          <figure className="relative w-full aspect-[21/9] overflow-hidden -mt-20 sm:-mt-28 lg:-mt-36 shadow-[0_24px_60px_-22px_rgba(31,24,21,0.5)]">
            <Image
              src={photos.aperitivoBanner.src}
              alt={photos.aperitivoBanner.alt}
              fill
              sizes="(min-width: 1700px) 1500px, 95vw"
              className="object-cover"
            />
          {/* Overlays cinéma pour lisibilité texte light */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(95deg,rgba(31,24,21,0.82)_0%,rgba(31,24,21,0.45)_50%,rgba(31,24,21,0.15)_100%)] pointer-events-none"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,24,21,0.2)_0%,transparent_35%,rgba(31,24,21,0.4)_100%)] pointer-events-none"
          />

          {/* Citation en overlay — décalée vers le bas pour laisser la zone cards en haut */}
          <figcaption className="absolute inset-0 flex items-end pb-10 sm:pb-14 lg:pb-20 px-8 sm:px-12 lg:px-20 xl:px-28">
            <blockquote className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 sm:gap-x-5 lg:gap-x-6 items-start max-w-[42em]">
              <span
                className="text-accent leading-[0.85] italic select-none -mt-2 sm:-mt-3 text-[clamp(4rem,7vw,7rem)] opacity-70"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                  fontWeight: 800,
                  textShadow: "0 4px 30px rgba(0,0,0,0.4)",
                }}
                aria-hidden="true"
              >
                «
              </span>
              <div>
                <p
                  className="italic text-light text-[clamp(1.5rem,2.8vw,2.6rem)] leading-[1.3] text-balance"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 70',
                    fontWeight: 500,
                    textShadow: "0 2px 20px rgba(0,0,0,0.55)",
                  }}
                >
                  L’aperitivo est un rituel, un moment de partage où on refait
                  le monde.&nbsp;»
                </p>
                <cite
                  className="not-italic block mt-4 lg:mt-5 text-[0.78rem] uppercase tracking-[0.22em] text-sand font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 14, "SOFT" 30',
                    textShadow: "0 1px 8px rgba(0,0,0,0.55)",
                  }}
                >
                  — Cristelle Doveri
                </cite>
              </div>
            </blockquote>
          </figcaption>
        </figure>
        </Reveal>
      </div>

      {/* ─── Footer édito (retour dans le shell) ─── */}
      <div className="shell relative mt-16 lg:mt-20">
        <Reveal delay={0.2}>
          <div className="pt-10 border-t border-ink/30 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <p
              className="italic text-ink text-[1.05rem] leading-[1.55] max-w-[36em]"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              Commande à passer 24h à l’avance. Livraison Asnières et alentour,
              ou retrait en boutique.
            </p>
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <Button href="/contact">Composer mon plateau</Button>
              <QuoteButton variant="link">Demander un devis</QuoteButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
