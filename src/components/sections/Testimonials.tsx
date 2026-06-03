import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { ElfsightWidget } from "@/components/ui/ElfsightWidget";
import { QuoteButton } from "@/components/site/QuoteButton";
import { ArrowRight } from "@/components/svg/ArrowRight";

export function Testimonials() {
  return (
    <section id="avis" className="section bg-olive text-light">
      <div className="shell">
        <Reveal>
          <header
            className="grid items-start gap-x-12 gap-y-4 mb-10 sm:mb-14"
            style={{ gridTemplateColumns: "auto 1fr" }}
          >
            <span className="edito-no text-accent row-span-2 max-sm:row-auto">
              Nº05
            </span>
            <div className="self-end pt-2 max-sm:pt-0">
              <Kicker color="sand">Ils en parlent</Kicker>
            </div>
            <h2
              className="text-[clamp(2rem,5vw,3.6rem)] font-bold text-light leading-[1.05] tracking-[-0.02em] text-balance max-w-[18ch]"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
              }}
            >
              Ce qu’on raconte de la{" "}
              <em className="italic text-accent">maison</em>.
            </h2>
          </header>
        </Reveal>

        <Reveal>
          {/* Widget Elfsight Google Reviews officiel @mamarazzi_traiteur */}
          <div className="bg-light/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-[var(--arch-soft)]">
            <ElfsightWidget
              widgetId="5753e7af-bd02-450c-9b97-aeb43f88db5c"
              minHeight="500px"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <span className="inline-flex items-center gap-3 bg-light text-dark px-6 py-3 rounded-full text-[0.85rem] font-medium border border-accent/20">
              <span className="text-accent tracking-[0.1em]" aria-hidden="true">
                ★★★★★
              </span>
              <span>4,5 / 5</span>
              <span className="w-1 h-1 rounded-full bg-current opacity-40" />
              <span>40+ avis Google · Modérés par Google</span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 lg:mt-16 pt-10 border-t border-sand/20 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <p
              className="italic text-sand text-[1.05rem] leading-[1.55] max-w-[38em]"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              Envie de faire partie de ces histoires ? Un devis sur-mesure, une
              commande pour le week-end ou simplement passer en boutique.
            </p>
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <QuoteButton>Demander un devis</QuoteButton>
              <Link
                href="/aperitivo"
                className="group inline-flex items-center gap-2 text-sand text-[0.85rem] tracking-[0.18em] uppercase font-semibold border-b border-sand/40 pb-1 transition-[color,gap,border-color] duration-[280ms] hover:text-accent hover:border-accent hover:gap-3"
              >
                Composer un plateau
                <ArrowRight />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
