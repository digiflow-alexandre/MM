import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { InlineLink } from "@/components/ui/InlineLink";

export function FinalCTA() {
  return (
    <section
      id="commander"
      className="text-center flex flex-col items-center gap-10 sm:gap-12 px-[var(--shell-x)] py-24 sm:py-32 lg:py-44"
    >
      <Reveal>
        <Kicker>Une faim, une envie, une fête&nbsp;?</Kicker>
      </Reveal>

      <Reveal delay={0.1}>
        <h2
          className="italic font-extrabold text-dark text-[clamp(4rem,12vw,9rem)] leading-[0.95] tracking-[-0.035em] text-balance"
          style={{
            fontFamily: "var(--font-display)",
            fontVariationSettings: '"opsz" 144, "SOFT" 70',
          }}
        >
          Faim de <em className="italic text-accent">Riviera&nbsp;?</em>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="font-sans text-[1.05rem] text-ink max-w-[36ch] leading-[1.55]">
          Commande en ligne, retrait en boutique, livraison sur Asnières et alentour. Demandez votre devis
          pour les événements.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="flex gap-6 flex-wrap justify-center items-center">
          <Button href="/aperitivo">Composer un plateau</Button>
          <InlineLink href="/contact">Demander un devis</InlineLink>
        </div>
      </Reveal>
    </section>
  );
}
