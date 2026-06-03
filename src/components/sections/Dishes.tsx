import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Arch } from "@/components/ui/Arch";
import { Button } from "@/components/ui/Button";
import { InlineLink } from "@/components/ui/InlineLink";
import {
  MarginaliaLemon,
  MarginaliaOlive,
} from "@/components/svg/Marginalia";
import { dishes } from "@/lib/content";

const num = (i: number) => String(i + 1).padStart(2, "0");

export function Dishes() {
  return (
    <section id="cuisine" className="section">
      <div className="shell">
        {/* ─── Header édito ─── */}
        <Reveal>
          <header className="mb-12 lg:mb-20 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
            <div className="flex items-end gap-6 lg:gap-8">
              <span className="edito-no text-olive">Nº02</span>
              <Kicker color="olive">Au comptoir, sept jours sur sept</Kicker>
            </div>
            <span
              className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 14, "SOFT" 30',
              }}
            >
              7j/7 · 10h–20h
            </span>
          </header>
        </Reveal>

        {/* ─── Title + intro asymétrique 7/5 ─── */}
        <div className="grid items-end gap-x-12 gap-y-8 lg:grid-cols-12 lg:gap-x-20 mb-16 lg:mb-24">
          <Reveal className="lg:col-span-7">
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.022em] text-balance text-dark"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60',
                fontWeight: 700,
              }}
            >
              Ce qu’on cuisine{" "}
              <em className="italic text-accent">aujourd’hui</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p
              className="italic text-ink text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.55] max-w-[34em]"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              Cinq signatures sortent de sa cuisine chaque matin. Elles changent
              peu — elles ne changent jamais.
            </p>
          </Reveal>
        </div>

        {/* ─── Grille 4 plats numérotée avec signature highlight ─── */}
        <Stagger className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {dishes.map((dish, i) => (
            <StaggerItem key={dish.name}>
              <article className="group relative flex flex-col gap-4">
                {/* Numérotation édito + tag signature */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-ink/25">
                  <span
                    className="italic text-[1.3rem] leading-none text-olive"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 70',
                      fontWeight: 700,
                    }}
                  >
                    {num(i)}
                  </span>
                  <span
                    className="text-[0.65rem] uppercase tracking-[0.22em] text-ink/55 font-medium"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 14, "SOFT" 40',
                    }}
                  >
                    {dish.category}
                  </span>
                </div>

                <div className="relative">
                  {dish.marginalia === "lemon" && <MarginaliaLemon position="tr" />}
                  {dish.marginalia === "olive" && <MarginaliaOlive position="tl" />}

                  <Arch
                    src={dish.image.src}
                    alt={dish.image.alt}
                    shape="narrow"
                    aspect="3 / 4.2"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  />
                </div>

                <div className="space-y-2.5">
                  <h3
                    className="italic font-bold text-dark text-[clamp(1.3rem,1.9vw,1.6rem)] leading-[1.1] tracking-[-0.012em]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60',
                    }}
                  >
                    {dish.name}
                  </h3>
                  <p
                    className="italic text-[0.95rem] leading-[1.5] text-ink"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 14, "SOFT" 50',
                      fontWeight: 400,
                    }}
                  >
                    {dish.description}
                  </p>
                  <div className="flex items-center gap-2 pt-2 text-[0.78rem] text-ink/70">
                    <span className="inline-block w-1 h-1 rounded-full bg-accent" />
                    <span
                      className="uppercase tracking-[0.18em] font-medium"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 40',
                      }}
                    >
                      {dish.price}
                    </span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* ─── Footer édito : note + double CTA ─── */}
        <Reveal delay={0.2}>
          <div className="mt-16 lg:mt-24 pt-10 border-t border-ink/25 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <p
              className="italic text-ink text-[1.05rem] leading-[1.55] max-w-[36em]"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              La carte change avec les saisons et les envies de la mamma —
              passez en boutique ou commandez en quelques clics.
            </p>
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <Button href="/aperitivo">Composer un plateau</Button>
              <InlineLink href="/contact">Nous contacter</InlineLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
