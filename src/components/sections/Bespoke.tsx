import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Arch } from "@/components/ui/Arch";
import { Button } from "@/components/ui/Button";
import { InlineLink } from "@/components/ui/InlineLink";
import { WavyFrame } from "@/components/svg/WavyFrame";
import { pillars } from "@/lib/content";

const num = (i: number) => String(i + 1).padStart(2, "0");

export function Bespoke() {
  return (
    <section id="sur-mesure" className="section">
      <div className="shell">
        {/* ─── Header édito cohérent ─── */}
        <Reveal>
          <header className="mb-12 lg:mb-20 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
            <div className="flex items-end gap-6 lg:gap-8">
              <span className="edito-no text-olive">Nº04</span>
              <Kicker color="olive">Vos grands moments</Kicker>
            </div>
            <span
              className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 14, "SOFT" 30',
              }}
            >
              BtoC · BtoB · 4 → 200 personnes
            </span>
          </header>
        </Reveal>

        {/* ─── Title + intro asymétrique 7/5 ─── */}
        <div className="grid items-end gap-x-12 gap-y-8 lg:grid-cols-12 lg:gap-x-20 mb-16 lg:mb-20">
          <Reveal className="lg:col-span-7">
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.022em] text-balance text-dark"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60',
                fontWeight: 700,
              }}
            >
              Du dimanche en famille
              <br className="hidden sm:block" />{" "}
              au <em className="italic text-accent">grand jour</em>.
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
              Un repas en famille, un apéro entre amis, un baptême, une
              communion, un anniversaire — chaque moment mérite sa cuisine. On
              compose, on adapte, on livre, on monte.
            </p>
          </Reveal>
        </div>

        {/* ─── 3 piliers avec photos officielles, numérotation édito & tag contexte ─── */}
        <Stagger className="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-sm:max-w-[420px] max-sm:mx-auto">
          {pillars.map((pillar, i) => (
            <StaggerItem key={pillar.label}>
              <article className="group flex flex-col gap-5 transition-transform duration-[600ms] ease-[var(--ease-premium)] hover:-translate-y-1.5">
                {/* Numérotation + tag contexte */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-ink/25">
                  <span
                    className="italic text-accent text-[1.3rem] leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 70',
                      fontWeight: 700,
                    }}
                  >
                    {num(i)}
                  </span>
                  <span
                    className="text-[0.65rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 14, "SOFT" 40',
                    }}
                  >
                    {pillar.tag}
                  </span>
                </div>

                {/* Photo arche avec label en overlay */}
                <Arch
                  src={pillar.image.src}
                  alt={pillar.image.alt}
                  shape="classic"
                  aspect="4 / 5"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-dark/65 pointer-events-none"
                  />
                  <h3
                    className="absolute bottom-5 left-5 right-5 italic font-bold text-light text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.05] z-10"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 70',
                      textShadow: "0 2px 16px rgba(0,0,0,0.4)",
                    }}
                  >
                    {pillar.label}
                  </h3>
                </Arch>

                <p
                  className="italic text-ink text-[0.98rem] leading-[1.55] max-w-[32em]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 70',
                    fontWeight: 400,
                  }}
                >
                  {pillar.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* ─── Bandeau process : 3 étapes du sur-mesure dans un cadre ondulé ─── */}
        <Reveal delay={0.2}>
          <div className="mt-16 lg:mt-20">
            <WavyFrame
              className="bg-sand/50"
              innerClassName="p-8 lg:p-12 grid gap-6 sm:grid-cols-3"
            >
              {[
                { kicker: "Étape 01", value: "Demande de devis", note: "Téléphone, mail ou en boutique" },
                { kicker: "Étape 02", value: "Réponse sous 48 h", note: "Devis sur-mesure de Cristelle" },
                { kicker: "Étape 03", value: "Composition avec le chef", note: "Option · 2 RV personnalisés — 100 €" },
              ].map((item) => (
                <div key={item.kicker} className="flex flex-col gap-1.5 text-center sm:text-left">
                  <span
                    className="text-[0.7rem] uppercase tracking-[0.22em] text-accent font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 14, "SOFT" 50',
                    }}
                  >
                    {item.kicker}
                  </span>
                  <span
                    className="italic font-bold text-dark text-[clamp(1.1rem,1.4vw,1.3rem)] leading-[1.2]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60',
                    }}
                  >
                    {item.value}
                  </span>
                  <span
                    className="text-[0.78rem] text-ink/75 leading-[1.4] mt-0.5 italic"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 14, "SOFT" 50',
                    }}
                  >
                    {item.note}
                  </span>
                </div>
              ))}
            </WavyFrame>
          </div>
        </Reveal>

        {/* ─── Footer édito : note + double CTA ─── */}
        <Reveal delay={0.3}>
          <div className="mt-12 lg:mt-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <p
              className="italic text-ink text-[1.05rem] leading-[1.55] max-w-[36em]"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              Brief par téléphone, mail ou en boutique. Cristelle revient vers
              vous sous 48&nbsp;h avec un devis sur-mesure.
            </p>
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <Button href="/contact">Demander un devis</Button>
              <InlineLink href="/contact">Nous appeler</InlineLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
