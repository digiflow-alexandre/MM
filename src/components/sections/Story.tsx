import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Arch } from "@/components/ui/Arch";
import { Pullquote } from "@/components/ui/Pullquote";
import { OliveBranchFrieze } from "@/components/svg/OliveBranchFrieze";
import { InlineLink } from "@/components/ui/InlineLink";
import { photos } from "@/lib/content";

const facts = [
  { label: "Création", value: "Avril 2022" },
  { label: "Ancrage", value: "Asnières · 92" },
  { label: "Origine", value: "Riviera" },
];

export function Story() {
  return (
    <>
      <section id="histoire" className="section">
        <div className="shell">
          {/* ─── Header édito : Nº + kicker + meta année ─── */}
          <Reveal>
            <header className="mb-12 lg:mb-20 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
              <div className="flex items-end gap-6 lg:gap-8">
                <span className="edito-no text-accent">Nº01</span>
                <Kicker color="olive">Chapitre premier · L’histoire</Kicker>
              </div>
              <span
                className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 14, "SOFT" 30',
                }}
              >
                2022 — Aujourd’hui
              </span>
            </header>
          </Reveal>

          {/* ─── Spread asymétrique : portrait 5/12 · texte 7/12 ─── */}
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
                  Une cuisine ouverte sur la boutique. Tout sort de cette pièce :
                  les lasagnes du midi, les plateaux du samedi soir, les buffets
                  de mariage.
                </figcaption>
              </figure>
            </Reveal>

            <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-12">
              <Reveal>
                <div className="space-y-3">
                  <h2
                    className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.022em] text-balance text-dark"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60',
                      fontWeight: 700,
                    }}
                  >
                    Une <em className="italic text-accent">italienne</em> de la
                    Côte d’Azur,
                    <br className="hidden sm:block" /> posée à{" "}
                    <em className="italic text-accent">Asnières</em>.
                  </h2>
                  <p
                    className="text-accent-dark text-[clamp(2rem,3.5vw,2.8rem)] leading-[1] mt-2"
                    style={{
                      fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                    }}
                  >
                    Cristelle Doveri.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="text-[1.08rem] leading-[1.75] text-dark max-w-[40em] space-y-6">
                  <p className="dropcap">
                    Née à Saint-Tropez dans une famille italienne originaire de
                    Toscane, Cristelle Doveri grandit sur la Riviera française —
                    entre cuisine généreuse, lumière du Sud et art de vivre.
                    Après une première carrière dans la presse, elle revient à
                    ses racines et fonde Mamarazzi en avril 2022 — un
                    comptoir-traiteur où la cuisine transalpine et azuréenne se
                    transmet comme on transmet un récit&nbsp;: généreusement,
                    sans raccourci.
                  </p>
                  <p>
                    Lasagnes au veau, cannelloni aux cèpes, parmigiana mijotée,
                    pissaladière niçoise, farcis du Sud — chaque plat sort de sa
                    cuisine, ouverte sur la boutique. Sept jours sur sept, sauf
                    le dimanche après-midi.
                  </p>
                  <p>
                    Et puis il y a les autres jours — ceux des grandes tablées,
                    des apéros qui durent, des baptêmes, des mariages. Quand on
                    commande chez Mamarazzi, on commande un morceau de Sud à
                    partager.
                  </p>
                </div>
              </Reveal>

              {/* ─── Mini facts grid : signature presse "fiche identité" ─── */}
              <Reveal delay={0.2}>
                <dl className="grid grid-cols-3 gap-x-6 gap-y-2 pt-8 border-t border-ink/25">
                  {facts.map((f) => (
                    <div key={f.label} className="flex flex-col gap-2">
                      <dt className="kicker text-olive !text-[0.7rem]">
                        {f.label}
                      </dt>
                      <dd
                        className="text-dark text-[clamp(1.2rem,1.8vw,1.5rem)] leading-[1.15] tracking-[-0.01em]"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontVariationSettings: '"opsz" 144, "SOFT" 60',
                          fontWeight: 600,
                          fontStyle: "italic",
                        }}
                      >
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex items-center gap-6">
                  <InlineLink href="/carte">Découvrir la carte</InlineLink>
                  <span className="text-ink/40" aria-hidden="true">·</span>
                  <InlineLink href="/sur-mesure">Demander un devis</InlineLink>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ─── Pullquote pleine largeur (la pépite Cristelle) ─── */}
          <Pullquote attribution="Cristelle Doveri, fondatrice">
            Je remplace le soleil par un joli écrin.
          </Pullquote>
        </div>
      </section>

      <OliveBranchFrieze />
    </>
  );
}
