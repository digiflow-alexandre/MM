import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Arch } from "@/components/ui/Arch";
import { Pullquote } from "@/components/ui/Pullquote";
import { OliveBranchFrieze } from "@/components/svg/OliveBranchFrieze";
import { InlineLink } from "@/components/ui/InlineLink";
import { Button } from "@/components/ui/Button";
import { photos } from "@/lib/content";

const timeline = [
  { year: "Saint-Tropez", label: "Naissance", text: "Dans une famille italienne originaire de Toscane." },
  { year: "Riviera", label: "Enfance", text: "Cuisine généreuse, lumière du Sud, art de vivre instinctivement chaleureux." },
  { year: "Presse", label: "Première vie", text: "Journaliste — Cristelle Doveri travaille pour la presse française." },
  { year: "2022", label: "Mamarazzi", text: "Avril : ouverture du comptoir-traiteur à Asnières-sur-Seine." },
];

const facts = [
  { label: "Création", value: "Avril 2022" },
  { label: "Lieu", value: "Asnières · 92" },
  { label: "Origine", value: "Riviera & Toscane" },
  { label: "Équipe", value: "9 personnes" },
];

export function HistoireFull() {
  return (
    <>
      {/* ─── Chapitre I : Récit principal ─── */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <header className="mb-12 lg:mb-20 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-accent">Nº01</span>
                <Kicker color="olive">Chapitre premier</Kicker>
              </div>
              <span
                className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 30',
                }}
              >
                Cristelle, fondatrice
              </span>
            </header>
          </Reveal>

          <div className="grid items-start gap-x-10 gap-y-12 lg:grid-cols-12 lg:gap-x-16 xl:gap-x-20">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
              <figure className="space-y-4">
                <Arch
                  src={photos.portrait.src}
                  alt={photos.portrait.alt}
                  shape="tall"
                  aspect="4 / 5"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
                <figcaption
                  className="italic text-ink text-[0.92rem] leading-[1.45] max-w-[28em]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 14, "SOFT" 50',
                    fontWeight: 500,
                  }}
                >
                  Cristelle, dans son comptoir d’Asnières — entre la cuisine
                  ouverte et la vitrine, là où tout se passe.
                </figcaption>
              </figure>
            </Reveal>

            <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-12">
              <Reveal>
                <div className="space-y-3">
                  <h2
                    className="text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] tracking-[-0.022em] text-balance text-dark"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60',
                      fontWeight: 700,
                    }}
                  >
                    Une <em className="italic text-accent">épicurienne</em> au
                    regard solaire.
                  </h2>
                  <p
                    className="text-accent-dark text-[clamp(1.8rem,3vw,2.4rem)] leading-[1] mt-2"
                    style={{ fontFamily: "var(--font-brand), 'Brush Script MT', cursive" }}
                  >
                    Cristelle Doveri.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="text-[1.08rem] leading-[1.75] text-dark max-w-[40em] space-y-6">
                  <p className="dropcap">
                    Née à Saint-Tropez dans une famille italienne originaire de
                    Toscane, Cristelle Doveri a grandi sur la Riviera française
                    — entre cuisine généreuse, lumière du Sud et art de vivre
                    instinctivement chaleureux. Chez elle, tout passe par la
                    table : cette manière si naturelle de faire de chaque repas
                    un moment qui compte a façonné son goût du partage et des
                    beaux produits.
                  </p>
                  <p>
                    Après une première carrière dans la presse, elle choisit de
                    revenir à ses racines et fonde Mamarazzi en avril 2022 — un
                    comptoir-traiteur à Asnières-sur-Seine.
                  </p>
                  <p>
                    Né de cet héritage intime, Mamarazzi célèbre la Dolce Vita
                    avec l’esprit d’une mamma nouvelle génération&nbsp;:
                    moderne, exigeante et créative. À travers une boutique
                    incarnée à la décoration raffinée, elle transmet ce
                    patrimoine avec sincérité — des plats authentiques, des
                    produits d’exception et un décor inspiré du Sud.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Première pullquote */}
          <Pullquote attribution="Cristelle Doveri">
            Je suis une Italienne de la Côte d’Azur, ma cuisine est transalpine et azuréenne.
          </Pullquote>
        </div>
      </section>

      <OliveBranchFrieze />

      {/* ─── Chapitre II : Timeline ─── */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <header className="mb-12 lg:mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-olive">Nº02</span>
                <Kicker color="olive">Un fil de Saint-Tropez à Asnières</Kicker>
              </div>
            </header>
          </Reveal>

          <Stagger className="grid gap-y-10 lg:gap-y-0 lg:grid-cols-4 lg:gap-x-6">
            {timeline.map((step, i) => (
              <StaggerItem key={step.year}>
                <article className="relative pl-6 lg:pl-0 lg:pt-8 border-l-2 lg:border-l-0 lg:border-t-2 border-accent/30">
                  <span
                    className="absolute -left-[7px] top-0 lg:left-0 lg:-top-[7px] w-3 h-3 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <div className="lg:pr-6">
                    <span
                      className="block text-[0.7rem] uppercase tracking-[0.22em] text-accent font-bold"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 60',
                      }}
                    >
                      {step.label}
                    </span>
                    <h3
                      className="italic text-dark text-[clamp(1.5rem,2.2vw,1.85rem)] leading-[1.1] mt-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 70',
                        fontWeight: 700,
                      }}
                    >
                      {step.year}
                    </h3>
                    <p className="text-[0.95rem] text-ink leading-[1.55] mt-3 max-w-[24em]">
                      {step.text}
                    </p>
                  </div>
                  {/* Mute idx eslint */}
                  <span hidden>{i}</span>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ─── Chapitre III : Le décor de Cristelle ─── */}
      <section className="section bg-sand/40">
        <div className="shell">
          <Reveal>
            <header className="mb-12 lg:mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/30">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-accent">Nº03</span>
                <Kicker color="olive">Le décor de la boutique</Kicker>
              </div>
            </header>
          </Reveal>

          <div className="grid items-center gap-x-12 gap-y-10 lg:grid-cols-2 lg:gap-x-20">
            <Reveal>
              <Arch
                src="https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–10.jpg"
                alt="Intérieur de la boutique Mamarazzi — étagères en arches, comptoir terracotta"
                shape="classic"
                aspect="5 / 4"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <h2
                  className="text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.018em] text-balance text-dark"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 60',
                    fontWeight: 700,
                  }}
                >
                  Un{" "}
                  <em className="italic text-accent">joli écrin</em> qui
                  remplace le soleil.
                </h2>
                <p className="italic text-ink text-[1.05rem] leading-[1.65] max-w-[36em]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 70',
                    fontWeight: 500,
                  }}
                >
                  Étagères en arches, comptoir terracotta, bouteilles d’huile
                  et vins italiens en vitrine — chaque détail de la boutique
                  raconte la Riviera. Une atmosphère qui prolonge l’histoire
                  personnelle de Cristelle et devient aujourd’hui une véritable
                  signature.
                </p>
                <p className="text-[0.95rem] text-ink leading-[1.55] max-w-[36em]">
                  De 10 h à 20 h, sept jours sur sept (sauf le dimanche
                  après-midi), la cuisine sort ses plats du jour. Sur place ou
                  à emporter, en plateau composé ou en buffet sur-mesure —
                  pour les particuliers comme pour les entreprises.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Chapitre IV : Fiche identité ─── */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <header className="mb-10 pb-6 border-b border-ink/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-olive">Nº04</span>
                <Kicker color="olive">Fiche identité</Kicker>
              </div>
            </header>
          </Reveal>

          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {facts.map((f) => (
              <StaggerItem key={f.label}>
                <div className="flex flex-col gap-2">
                  <dt className="kicker text-olive !text-[0.7rem]">{f.label}</dt>
                  <dd
                    className="text-dark text-[clamp(1.3rem,2vw,1.7rem)] leading-[1.15] tracking-[-0.01em] italic"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60',
                      fontWeight: 600,
                    }}
                  >
                    {f.value}
                  </dd>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <div className="mt-16 lg:mt-20 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center pt-10 border-t border-ink/25">
              <p
                className="italic text-ink text-[1.05rem] leading-[1.55] max-w-[38em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                  fontWeight: 500,
                }}
              >
                Découvrez la carte de Cristelle ou composez votre propre
                plateau pour votre prochaine table partagée.
              </p>
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <Button href="/carte">Découvrir la carte</Button>
                <InlineLink href="/aperitivo">Composer un plateau</InlineLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
