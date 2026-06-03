import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Arch } from "@/components/ui/Arch";
import { Button } from "@/components/ui/Button";
import { InlineLink } from "@/components/ui/InlineLink";
import { WavyFrame } from "@/components/svg/WavyFrame";
import {
  pillars,
  enterpriseServices,
  sumesurePrestations,
  evenementsCoversByAudience,
} from "@/lib/content";

const num = (i: number) => String(i + 1).padStart(2, "0");

export function SurMesureFull() {
  return (
    <>
      {/* ─── Intro ─── */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="max-w-[52em] mx-auto text-center mb-12 lg:mb-16">
              <Kicker color="olive">Vos plus beaux moments</Kicker>
              <p
                className="italic text-ink text-[clamp(1.2rem,1.8vw,1.55rem)] leading-[1.45] mt-6 text-balance"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                  fontWeight: 500,
                }}
              >
                Pour vos grandes occasions de famille comme pour vos
                rendez-vous d’entreprise — nous cuisinons les moments qui
                comptent.
              </p>
            </div>
          </Reveal>

          {/* Bandeau évènements couverts — 2 audiences, style menu éditorial */}
          <Reveal>
            <div className="mb-16 lg:mb-20 grid gap-12 lg:gap-16 lg:grid-cols-2 max-w-[68em] mx-auto">
              {evenementsCoversByAudience.map((group) => (
                <article
                  key={group.label}
                  className="text-center flex flex-col items-center gap-5"
                >
                  <h3
                    className="text-accent-dark text-[clamp(2.4rem,4vw,3.4rem)] leading-[1]"
                    style={{
                      fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                      fontWeight: 400,
                    }}
                  >
                    {group.label}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="block w-12 h-px bg-accent/40"
                  />
                  <p
                    className="italic text-dark text-[clamp(1.1rem,1.5vw,1.4rem)] leading-[1.5] max-w-[28em] text-balance"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 70',
                      fontWeight: 500,
                    }}
                  >
                    {group.items.map((evt, i) => (
                      <span key={evt}>
                        {evt}
                        {i < group.items.length - 1 && (
                          <span className="text-accent mx-2">·</span>
                        )}
                      </span>
                    ))}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 3 piliers (BtoC) ─── */}
      <section className="section pt-0">
        <div className="shell">
          <Reveal>
            <header className="mb-12 lg:mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-accent">Nº01</span>
                <Kicker color="olive">Pour les particuliers</Kicker>
              </div>
              <span
                className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 30',
                }}
              >
                Du dimanche au grand jour
              </span>
            </header>
          </Reveal>

          <Stagger className="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-sm:max-w-[420px] max-sm:mx-auto">
            {pillars.map((pillar, i) => (
              <StaggerItem key={pillar.label}>
                <article className="group flex flex-col gap-5 transition-transform duration-[600ms] ease-[var(--ease-premium)] hover:-translate-y-1.5">
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-ink/25">
                    <span
                      className="italic text-accent text-[1.2rem] leading-none"
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
                    }}
                  >
                    {pillar.text}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── Section entreprises (BtoB) — extraite du site officiel ─── */}
      <section className="section bg-olive text-light">
        <div className="shell">
          <Reveal>
            <header className="mb-12 lg:mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-sand/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-accent">Nº02</span>
                <Kicker color="sand">Pour les entreprises</Kicker>
              </div>
              <span
                className="text-[0.78rem] uppercase tracking-[0.22em] text-sand/65 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 30',
                }}
              >
                BtoB · Livraison sur site
              </span>
            </header>
          </Reveal>

          <div className="grid items-end gap-x-12 gap-y-8 lg:grid-cols-12 lg:gap-x-20 mb-14 lg:mb-20">
            <Reveal className="lg:col-span-7">
              <h2
                className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.022em] text-balance text-light"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60',
                  fontWeight: 700,
                }}
              >
                Et si la pause déjeuner devenait{" "}
                <em className="italic text-accent">la Riviera</em>&nbsp;?
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p
                className="italic text-sand text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.55]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                  fontWeight: 500,
                }}
              >
                {enterpriseServices.intro}
              </p>
            </Reveal>
          </div>

          {/* 3 cards WavyFrame sand sur fond olive — vrai contraste éditorial */}
          <Stagger className="grid gap-7 sm:gap-8 sm:grid-cols-3">
            {enterpriseServices.moments.map((moment, i) => (
              <StaggerItem key={moment.title}>
                <article className="h-full">
                  <WavyFrame
                    className="h-full bg-olive"
                    innerClassName="p-7 lg:p-8 h-full flex flex-col gap-4 text-center items-center"
                    color="var(--color-sand)"
                  >
                    <span
                      className="text-accent text-[0.7rem] uppercase tracking-[0.24em] font-bold"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 60',
                      }}
                    >
                      Moment {num(i)}
                    </span>
                    <h3
                      className="text-sand text-[clamp(1.7rem,2.8vw,2.2rem)] leading-[1]"
                      style={{
                        fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                        fontWeight: 400,
                      }}
                    >
                      {moment.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="block w-10 h-px bg-accent/50"
                    />
                    <ul className="space-y-2 text-[0.92rem] text-sand/90 leading-[1.55]">
                      {moment.items.map((item) => (
                        <li key={item} className="flex items-baseline justify-center gap-2.5">
                          <span
                            aria-hidden="true"
                            className="text-accent flex-shrink-0 text-[1.1rem] leading-none font-bold"
                          >
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </WavyFrame>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Bandeau garanties pratiques entreprises */}
          <Reveal delay={0.2}>
            <div className="mt-14 lg:mt-16 pt-8 border-t border-sand/20 grid gap-6 sm:grid-cols-3 max-w-[68em] mx-auto">
              {[
                { kicker: "Livraison", value: "Asnières & alentour" },
                { kicker: "Réponse", value: "Devis sous 48 h" },
                { kicker: "Réservation", value: "Sans engagement" },
              ].map((item) => (
                <div
                  key={item.kicker}
                  className="flex flex-col gap-1.5 text-center sm:text-left"
                >
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
                    className="italic text-light text-[clamp(1rem,1.3vw,1.2rem)] leading-[1.25]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60',
                      fontWeight: 600,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 lg:mt-14 flex flex-wrap items-center gap-4 lg:gap-6">
              <Button href="/contact">Demander un devis entreprise</Button>
              <InlineLink href="/aperitivo" className="!text-sand hover:!text-accent">
                Voir les plateaux apéritivo
              </InlineLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Prestations clé en main ─── */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <header className="mb-12 lg:mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-olive">Nº03</span>
                <Kicker color="olive">Prestations clé en main</Kicker>
              </div>
              <span
                className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 30',
                }}
              >
                Inclus dans le devis
              </span>
            </header>
          </Reveal>

          <Reveal>
            <p
              className="italic text-ink text-[clamp(1.1rem,1.6vw,1.4rem)] leading-[1.45] max-w-[40em] mb-10"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              Pour une expérience clé en main inoubliable — nous gérons tout,
              de la livraison à l’animation.
            </p>
          </Reveal>

          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sumesurePrestations.map((prestation, i) => (
              <StaggerItem key={prestation}>
                <div className="flex items-baseline gap-4 py-4 border-b border-ink/20">
                  <span
                    className="italic text-accent text-[0.8rem] tracking-[0.22em] font-bold"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 14, "SOFT" 60',
                    }}
                  >
                    {num(i)}
                  </span>
                  <span className="text-[0.98rem] text-dark leading-[1.4]">
                    {prestation}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── Process 3 étapes ─── */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <header className="mb-12 lg:mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-accent">Nº04</span>
                <Kicker color="olive">Comment on travaille</Kicker>
              </div>
              <span
                className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 30',
                }}
              >
                Du brief au jour J
              </span>
            </header>
          </Reveal>

          <Reveal>
            <p
              className="italic text-ink text-[clamp(1.1rem,1.6vw,1.4rem)] leading-[1.45] max-w-[40em] mb-12 lg:mb-16 text-balance"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              Trois étapes — pas une de plus. Vous nous parlez de votre
              événement, on revient avec une proposition, on affine ensemble si
              vous le souhaitez.
            </p>
          </Reveal>

          {/* Timeline 3 étapes — WavyFrame + numéro édito + titre Sacramento */}
          <div className="relative">
            {/* Filet horizontal de connexion (desktop only) */}
            <span
              aria-hidden="true"
              className="hidden sm:block absolute top-[3.5rem] left-[8%] right-[8%] h-px bg-accent/30"
            />

            <Stagger className="grid gap-8 sm:gap-6 sm:grid-cols-3 relative">
              {[
                {
                  no: "01",
                  step: "Étape un",
                  title: "Le brief",
                  note: "Vous nous décrivez votre projet — par téléphone, mail ou en boutique. Date, format, budget, envies.",
                },
                {
                  no: "02",
                  step: "Étape deux",
                  title: "La proposition",
                  note: "Cristelle revient sous 48 h avec un devis sur-mesure, adapté à votre budget et à vos contraintes.",
                },
                {
                  no: "03",
                  step: "Étape trois",
                  title: "L’option chef",
                  note: "Pour affiner ensemble la composition — deux rendez-vous personnalisés avec le chef. Tarif&nbsp;: 100&nbsp;€.",
                },
              ].map((item) => (
                <StaggerItem key={item.no}>
                  <article className="relative h-full flex flex-col items-center text-center gap-4">
                    {/* Pastille numérotée centrée sur le filet timeline */}
                    <span
                      className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full bg-accent text-light flex items-center justify-center italic font-bold text-[1.8rem] shadow-[0_8px_24px_-8px_rgba(196,74,44,0.4)]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 70',
                      }}
                      aria-hidden="true"
                    >
                      {item.no}
                    </span>
                    <WavyFrame
                      className="w-full bg-light flex-1"
                      innerClassName="p-6 lg:p-7 flex flex-col gap-3 items-center text-center h-full"
                    >
                      <span
                        className="text-[0.7rem] uppercase tracking-[0.24em] text-accent font-bold"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontVariationSettings: '"opsz" 14, "SOFT" 50',
                        }}
                      >
                        {item.step}
                      </span>
                      <h3
                        className="text-accent-dark text-[clamp(1.8rem,3vw,2.4rem)] leading-[1]"
                        style={{
                          fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                          fontWeight: 400,
                        }}
                      >
                        {item.title}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="block w-10 h-px bg-accent/40"
                      />
                      <p
                        className="italic text-ink text-[0.95rem] leading-[1.55] max-w-[26em]"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontVariationSettings: '"opsz" 144, "SOFT" 70',
                          fontWeight: 400,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.note }}
                      />
                    </WavyFrame>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal>
            <div className="mt-14 lg:mt-20 pt-10 border-t border-ink/25 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <p
                className="italic text-ink text-[1.05rem] leading-[1.55] max-w-[36em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                  fontWeight: 500,
                }}
              >
                Prêt à composer votre événement ? On démarre par un brief — par
                téléphone, mail ou en boutique. Cristelle vous répond sous
                48&nbsp;h.
              </p>
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <Button href="/contact">Demander un devis</Button>
                <InlineLink href="/contact">Nous appeler</InlineLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
