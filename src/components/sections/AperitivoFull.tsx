import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { InlineLink } from "@/components/ui/InlineLink";
import { WavyFrame } from "@/components/svg/WavyFrame";
import { QuoteButton } from "@/components/site/QuoteButton";
import {
  aperitivoPlateaux,
  aperitivoMignardises,
  aperitivoGiggante,
} from "@/lib/content";

export function AperitivoFull() {
  return (
    <>
      {/* ─── Intro ─── */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="max-w-[48em] mx-auto text-center mb-12 lg:mb-16">
              <Kicker color="olive">Recevoir sans rien faire…</Kicker>
              <p
                className="italic text-ink text-[clamp(1.2rem,1.8vw,1.55rem)] leading-[1.45] mt-6 text-balance"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                  fontWeight: 500,
                }}
              >
                « En famille ou entre amis — recevoir sans rien faire… sauf
                profiter ! » Composez votre buffet d’apéritivo entre nos trois
                plateaux signature, nos mignardises maison et nos Giggante à
                partager.
              </p>
              <p
                className="mt-6 text-[0.85rem] uppercase tracking-[0.22em] text-accent-dark font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 50',
                }}
              >
                Commande à passer 24 h à l’avance
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Section 1 : Les 3 plateaux signature ─── */}
      <section className="section pt-0">
        <div className="shell">
          <Reveal>
            <header className="mb-12 lg:mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-accent">Nº01</span>
                <Kicker color="olive">Les 3 plateaux signature</Kicker>
              </div>
              <span
                className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 30',
                }}
              >
                4 à 12 personnes
              </span>
            </header>
          </Reveal>

          <WavyFrame
            className="bg-light"
            innerClassName="p-8 sm:p-12 lg:p-14"
          >
          <Stagger className="grid gap-y-12 lg:gap-y-16">
            {aperitivoPlateaux.map((plateau, idx) => (
              <StaggerItem key={plateau.name}>
                <article className="grid items-start gap-x-12 gap-y-6 lg:grid-cols-12 lg:gap-x-20 pb-12 lg:pb-16 border-b border-ink/15 last:border-b-0 last:pb-0">
                  <div className="lg:col-span-5">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span
                        className="italic text-accent text-[0.8rem] uppercase tracking-[0.22em] font-bold"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontVariationSettings: '"opsz" 14, "SOFT" 60',
                        }}
                      >
                        {plateau.no}
                      </span>
                    </div>
                    <h3
                      className="text-accent-dark text-[clamp(2.4rem,4vw,3.4rem)] leading-[1] mb-4"
                      style={{
                        fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                        fontWeight: 400,
                      }}
                    >
                      {plateau.name}
                    </h3>
                    <p
                      className="italic text-ink text-[1.02rem] leading-[1.55]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 70',
                        fontWeight: 400,
                      }}
                    >
                      {plateau.description}
                    </p>
                    {plateau.extra && (
                      <p className="mt-3 text-[0.85rem] text-accent-dark italic">
                        {plateau.extra}
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-7 lg:pt-2">
                    <table className="w-full border-collapse">
                      <tbody>
                        {plateau.tiers.map((tier, i) => (
                          <tr
                            key={tier.size}
                            className={`${i === 0 ? "" : "border-t border-ink/15"}`}
                          >
                            <td
                              className="py-3 text-[0.95rem] text-dark"
                              style={{
                                fontFamily: "var(--font-display)",
                                fontVariationSettings: '"opsz" 14, "SOFT" 50',
                                fontWeight: 500,
                              }}
                            >
                              {tier.size}
                            </td>
                            <td
                              className="py-3 text-right italic text-accent-dark text-[1.05rem]"
                              style={{
                                fontFamily: "var(--font-display)",
                                fontVariationSettings: '"opsz" 14, "SOFT" 60',
                                fontWeight: 700,
                              }}
                            >
                              {tier.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Mute idx eslint warning */}
                  <span hidden>{idx}</span>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          </WavyFrame>

          <Reveal delay={0.2}>
            <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-between gap-4 lg:gap-6">
              <p
                className="italic text-ink text-[0.95rem] leading-[1.55] max-w-[32em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 60',
                  fontWeight: 500,
                }}
              >
                Plateau de votre choix, livré ou à emporter. Commande 24 h à
                l’avance.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact">Passer commande</Button>
                <QuoteButton variant="link">Demander un devis</QuoteButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Section 2 : Plateau de mignardises maison ─── */}
      <section className="section pt-0">
        <div className="shell">
          <Reveal>
            <header className="mb-12 lg:mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-olive">Nº02</span>
                <Kicker color="olive">Plateau de mignardises maison</Kicker>
              </div>
              <span
                className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 30',
                }}
              >
                De 15 à 100 pièces
              </span>
            </header>
          </Reveal>

          <div className="grid items-start gap-x-12 gap-y-10 lg:grid-cols-12 lg:gap-x-20">
            <Reveal className="lg:col-span-7">
              <p
                className="italic text-ink text-[1.05rem] leading-[1.55] mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                  fontWeight: 500,
                }}
              >
                {aperitivoMignardises.intro}
              </p>
              <ul className="space-y-3 text-[0.98rem] leading-[1.55] text-dark">
                {aperitivoMignardises.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="text-accent flex-shrink-0 text-[1.2rem] leading-none font-bold"
                    >
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.82rem] italic text-ink/65">
                {aperitivoMignardises.notes}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5">
              <WavyFrame
                className="bg-sand/60"
                innerClassName="p-6 lg:p-8"
              >
                <h3
                  className="text-accent-dark text-[2rem] leading-[1] mb-4 pb-3 border-b border-accent/30"
                  style={{
                    fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                    fontWeight: 400,
                  }}
                >
                  Tarifs
                </h3>
                <table className="w-full border-collapse">
                  <tbody>
                    {aperitivoMignardises.tiers.map((tier, i) => (
                      <tr
                        key={tier.size}
                        className={i === 0 ? "" : "border-t border-ink/15"}
                      >
                        <td className="py-3 text-[0.9rem] text-dark">
                          {tier.size}
                        </td>
                        <td
                          className="py-3 text-right italic text-accent-dark text-[1rem]"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontVariationSettings: '"opsz" 14, "SOFT" 60',
                            fontWeight: 700,
                          }}
                        >
                          {tier.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </WavyFrame>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-between gap-4 lg:gap-6 pt-8 border-t border-ink/15">
              <p
                className="italic text-ink text-[0.95rem] leading-[1.55] max-w-[34em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 60',
                  fontWeight: 500,
                }}
              >
                Pour 100 pièces ou plus, on adapte la composition à votre
                événement.
              </p>
              <QuoteButton>Demander un devis</QuoteButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Section 3 : Les Giggante à partager ─── */}
      <section className="section pt-0">
        <div className="shell">
          <Reveal>
            <header className="mb-12 lg:mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-accent">Nº03</span>
                <Kicker color="olive">Les Giggante à partager</Kicker>
              </div>
              <span
                className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 30',
                }}
              >
                Format XL
              </span>
            </header>
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aperitivoGiggante.map((item) => (
              <StaggerItem key={item.name}>
                <article className="h-full">
                  <WavyFrame
                    className="h-full bg-light"
                    innerClassName="p-6 lg:p-7 h-full flex flex-col gap-2.5"
                  >
                    <span
                      className="text-[0.65rem] uppercase tracking-[0.22em] text-accent font-semibold"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 50',
                      }}
                    >
                      {item.subtitle}
                    </span>
                    <h3
                      className="italic text-dark text-[1.25rem] leading-[1.1]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 70',
                        fontWeight: 700,
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="italic text-ink text-[0.92rem] leading-[1.45] flex-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 50',
                      }}
                    >
                      {item.description}
                    </p>
                    <span
                      className="italic font-bold text-accent-dark text-[1.1rem] pt-2 border-t border-accent/15"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 60',
                      }}
                    >
                      {item.price}
                    </span>
                  </WavyFrame>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-between gap-4 lg:gap-6">
              <p
                className="italic text-ink text-[0.95rem] leading-[1.55] max-w-[34em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 60',
                  fontWeight: 500,
                }}
              >
                Idéal en complément d’un plateau, pour rassasier les grandes
                tablées.
              </p>
              <Button href="/contact">Passer commande</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Footer édito ─── */}
      <section className="section pt-0">
        <div className="shell">
          <Reveal>
            <div className="pt-10 border-t border-ink/25 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <p
                className="italic text-ink text-[1.05rem] leading-[1.55] max-w-[38em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                  fontWeight: 500,
                }}
              >
                Commande à passer 24 h à l’avance. Livraison Asnières et
                alentour, retrait en boutique. Cristelle vous conseille pour
                composer votre buffet selon le nombre de convives.
              </p>
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <Button href="/contact">Passer commande</Button>
                <InlineLink href="/sur-mesure">Pour les grands événements</InlineLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
