import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { testimonials } from "@/lib/content";

const rotations = ["-rotate-[0.6deg]", "rotate-[0.4deg]", "-rotate-[0.3deg]"];

export function Testimonials() {
  return (
    <section id="avis" className="section bg-olive text-light">
      <div className="shell">
        <Reveal>
          <header className="grid items-start gap-x-12 gap-y-4 mb-10 sm:mb-14" style={{ gridTemplateColumns: "auto 1fr" }}>
            <span className="edito-no text-accent row-span-2 max-sm:row-auto">Nº05</span>
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
              Ce qu’on raconte de la <em className="italic text-accent">maison.</em>
            </h2>
          </header>
        </Reveal>

        <Stagger className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-sm:max-w-[480px] max-sm:mx-auto">
          {testimonials.map((t, i) => (
            <StaggerItem key={t.author}>
              <article
                className={`bg-light text-dark p-8 sm:p-10 flex flex-col gap-6 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.4)] min-h-[280px] transition-[transform,box-shadow] duration-[600ms] ease-[var(--ease-premium)] ${rotations[i]} hover:rotate-0 hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-22px_rgba(0,0,0,0.5)]`}
                style={{ borderRadius: "var(--arch-classic)" }}
              >
                <span
                  aria-label={`5 étoiles sur 5`}
                  className="text-accent tracking-[0.15em] text-[0.9rem]"
                >
                  ★★★★★
                </span>
                <blockquote
                  className="italic font-medium text-[1.1rem] leading-[1.5] text-dark flex-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 60',
                  }}
                >
                  «&nbsp;{t.text}&nbsp;»
                </blockquote>
                <cite className="not-italic font-sans text-[0.82rem] font-medium uppercase tracking-[0.05em] text-ink pt-4 border-t border-accent/20">
                  {t.author} · {t.source}
                </cite>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-12 sm:mt-16 flex justify-center">
            <span className="inline-flex items-center gap-3 bg-light text-dark px-6 py-3 rounded-full text-[0.85rem] font-medium border border-accent/20">
              <span className="text-accent tracking-[0.1em]" aria-hidden="true">★★★★★</span>
              <span>4,5 / 5</span>
              <span className="w-1 h-1 rounded-full bg-current opacity-40" />
              <span>40+ avis Google</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
