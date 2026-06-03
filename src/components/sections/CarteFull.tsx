import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { WavyFrame } from "@/components/svg/WavyFrame";
import { QuoteButton } from "@/components/site/QuoteButton";
import { carteCategories } from "@/lib/content";

export function CarteFull() {
  return (
    <section className="section">
      <div className="shell">
        {/* ─── Intro éditoriale ─── */}
        <Reveal>
          <div className="max-w-[50em] mx-auto text-center mb-16 lg:mb-24">
            <Kicker color="olive">Cuisinés maison · Produits frais</Kicker>
            <p
              className="italic text-ink text-[clamp(1.2rem,1.8vw,1.55rem)] leading-[1.45] mt-6 text-balance"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              Plongez dans l’univers ensoleillé de Mamarazzi à travers une
              carte gourmande mêlant cuisine italienne et niçoise. Chaque plat
              est préparé maison avec des produits frais et de saison — la
              sélection évolue au fil des envies et du marché.
            </p>
          </div>
        </Reveal>

        {/* ─── Liste des catégories — grand cadre ondulé "page de carte" ─── */}
        <WavyFrame
          className="bg-light"
          innerClassName="p-8 sm:p-12 lg:p-16 xl:p-20 grid gap-16 lg:gap-24"
        >
          {carteCategories.map((cat, idx) => (
            <article
              key={cat.title}
              className="grid items-start gap-x-12 gap-y-8 lg:grid-cols-12 lg:gap-x-20"
            >
                {/* Header catégorie : Nº + titre + prix range */}
                <header className="lg:col-span-4 lg:sticky lg:top-28">
                  <div className="flex items-baseline gap-4 pb-4 border-b border-ink/25 mb-4">
                    <span
                      className="italic text-accent text-[1.1rem] leading-none"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 70',
                        fontWeight: 700,
                      }}
                    >
                      Nº{String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[0.65rem] uppercase tracking-[0.22em] text-ink/55 font-medium"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 40',
                      }}
                    >
                      Catégorie
                    </span>
                  </div>
                  <h2
                    className="text-accent-dark text-[clamp(2.4rem,4.2vw,3.6rem)] leading-[1]"
                    style={{
                      fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                      fontWeight: 400,
                    }}
                  >
                    {cat.title}
                  </h2>
                  {cat.priceRange && (
                    <p
                      className="mt-3 text-[0.92rem] text-accent-dark font-medium italic"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontVariationSettings: '"opsz" 14, "SOFT" 50',
                      }}
                    >
                      {cat.priceRange}
                    </p>
                  )}
                </header>

                {/* Items : liste de plats avec dot leader */}
                <Stagger className="lg:col-span-8 divide-y divide-ink/15 border-y border-ink/15">
                  {cat.items.map((item) => (
                    <StaggerItem key={item.name}>
                      <div className="py-4 lg:py-5 grid grid-cols-[1fr_auto] gap-x-4 items-baseline">
                        <div>
                          <h3
                            className="text-dark text-[1.05rem] leading-[1.35] font-semibold flex flex-wrap items-baseline gap-x-2"
                            style={{
                              fontFamily: "var(--font-display)",
                              fontVariationSettings: '"opsz" 144, "SOFT" 50',
                            }}
                          >
                            {item.name}
                            {item.veggie && (
                              <span
                                className="text-[0.6rem] text-olive font-bold tracking-[0.15em]"
                                title="Végétarien"
                              >
                                (V)
                              </span>
                            )}
                            {item.note && (
                              <span
                                className="italic font-normal text-[0.78rem] text-accent-dark"
                                style={{
                                  fontVariationSettings: '"opsz" 14, "SOFT" 60',
                                }}
                              >
                                — {item.note}
                              </span>
                            )}
                          </h3>
                          {item.description && (
                            <p
                              className="italic text-ink text-[0.92rem] leading-[1.5] mt-1 max-w-[42em]"
                              style={{
                                fontFamily: "var(--font-display)",
                                fontVariationSettings: '"opsz" 14, "SOFT" 50',
                                fontWeight: 400,
                              }}
                            >
                              {item.description}
                            </p>
                          )}
                          {item.price && (
                            <p
                              className="text-[0.85rem] text-accent-dark italic mt-1.5"
                              style={{
                                fontFamily: "var(--font-display)",
                                fontVariationSettings: '"opsz" 14, "SOFT" 60',
                                fontWeight: 500,
                              }}
                            >
                              {item.price}
                            </p>
                          )}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
            </article>
          ))}
        </WavyFrame>

        {/* ─── Footer édito : légende + CTA ─── */}
        <Reveal delay={0.2}>
          <div className="mt-20 lg:mt-28 pt-10 border-t border-ink/25">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.78rem] text-ink/70 mb-8">
              <span className="flex items-center gap-2">
                <span className="text-olive font-bold tracking-[0.15em]">(V)</span>
                = Végétarien
              </span>
              <span className="w-1 h-1 rounded-full bg-ink/30" />
              <span>Carte mise à jour chaque saison — au fil des envies et du marché.</span>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <p
                className="italic text-ink text-[1.05rem] leading-[1.55] max-w-[38em]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 70',
                  fontWeight: 500,
                }}
              >
                Pour les grands repas, les buffets, les apéritivos ou
                l’événementiel sur-mesure — pensez aussi aux plateaux composés.
              </p>
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <Button href="/aperitivo">Composer un plateau</Button>
                <QuoteButton variant="link">Demander un devis</QuoteButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
