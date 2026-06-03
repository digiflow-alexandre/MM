import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Arch } from "@/components/ui/Arch";
import { ArrowRight } from "@/components/svg/ArrowRight";

const cards = [
  {
    no: "Nº01",
    label: "L’histoire",
    title: "Cristelle, ex-presse et italienne de Saint-Tropez.",
    href: "/histoire",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/10/traiteur-italien-nicois-a-asnieres-sur-seine–mammarazzi_02.jpg",
      alt: "Trinquage à l’apéritivo Mamarazzi",
    },
  },
  {
    no: "Nº02",
    label: "La carte",
    title: "Lasagnes, cannelloni, parmigiana, pissaladière.",
    href: "/carte",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–1-scaled.jpg",
      alt: "Sélection du jour Mamarazzi — barquettes de plats faits maison",
    },
  },
  {
    no: "Nº03",
    label: "L’aperitivo",
    title: "Trois plateaux à composer, dès 40 €.",
    href: "/aperitivo",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2026/02/mamarazzi_04-838x1024.webp",
      alt: "Board aperitivo Mamarazzi — burrata, charcuterie, antipasti",
    },
  },
  {
    no: "Nº04",
    label: "Le sur-mesure",
    title: "Du dimanche en famille au grand jour.",
    href: "/sur-mesure",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/11/IMG_0348-scaled.jpeg",
      alt: "Devanture Mamarazzi de face — vitrine traiteur italien & niçois",
    },
  },
];

export function Explore() {
  return (
    <section id="explorer" className="section">
      <div className="shell">
        <Reveal>
          <header className="mb-12 lg:mb-20 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
            <div className="flex items-end gap-6 lg:gap-8">
              <Kicker color="olive">Explorer la maison</Kicker>
            </div>
            <span
              className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/65 font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 14, "SOFT" 30',
              }}
            >
              Quatre chapitres
            </span>
          </header>
        </Reveal>

        <div className="grid items-end gap-x-12 gap-y-8 lg:grid-cols-12 lg:gap-x-20 mb-12 lg:mb-16">
          <Reveal className="lg:col-span-7">
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.022em] text-balance text-dark"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60',
                fontWeight: 700,
              }}
            >
              Tout commence{" "}
              <em className="italic text-accent">ici</em>.
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
              Quatre portes d’entrée — l’histoire, la carte, l’aperitivo et le
              sur-mesure. Choisissez la vôtre.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {cards.map((card) => (
            <StaggerItem key={card.no}>
              <Link
                href={card.href}
                className="group flex flex-col gap-4 relative"
              >
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-ink/25">
                  <span
                    className="italic text-olive text-[1.3rem] leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 70',
                      fontWeight: 700,
                    }}
                  >
                    {card.no}
                  </span>
                  <span
                    className="text-[0.65rem] uppercase tracking-[0.22em] text-accent font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariationSettings: '"opsz" 14, "SOFT" 50',
                    }}
                  >
                    {card.label}
                  </span>
                </div>

                <Arch
                  src={card.image.src}
                  alt={card.image.alt}
                  shape="classic"
                  aspect="3 / 4"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                />

                <h3
                  className="italic text-dark text-[clamp(1.15rem,1.5vw,1.4rem)] leading-[1.25] tracking-[-0.012em] max-w-[18em]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 60',
                    fontWeight: 600,
                  }}
                >
                  {card.title}
                </h3>

                <span className="inline-flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.2em] text-olive font-semibold mt-auto pt-2 group-hover:text-accent group-hover:gap-3 transition-[color,gap] duration-[280ms]">
                  Lire
                  <ArrowRight />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
