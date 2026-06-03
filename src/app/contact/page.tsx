import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { business, photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Mamarazzi à Asnières-sur-Seine",
  description:
    "Téléphone, adresse, horaires. Contactez Mamarazzi pour vos commandes, devis sur-mesure ou simplement passer en boutique.",
};

export default function ContactPage() {
  const fullAddress = encodeURIComponent(
    `${business.address.street}, ${business.address.zip} ${business.address.city}`,
  );

  return (
    <>
      <PageHero
        kicker="Parlons de votre projet gourmand"
        title={
          <>
            <em className="not-italic italic text-accent">Contact</em>.
          </>
        }
        subtitle="Téléphone, mail, ou simplement passer en boutique — Cristelle revient sous 48 heures pour les demandes de devis."
        imageSrc={photos.shopFront.src}
        imageAlt={photos.shopFront.alt}
      />
      <Breadcrumb
        trail={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section">
        <div className="shell grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
          <Reveal>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <Kicker color="olive">Téléphone</Kicker>
                <a
                  href={business.phoneHref}
                  className="italic text-dark text-[clamp(2rem,4vw,3rem)] leading-[1] tracking-[-0.01em] hover:text-accent transition-colors duration-[280ms]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 70',
                    fontWeight: 700,
                  }}
                >
                  {business.phone}
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <Kicker color="olive">Adresse</Kicker>
                <p className="text-dark text-[1.1rem] leading-[1.55]">
                  {business.address.street}
                  <br />
                  {business.address.zip} {business.address.city}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Kicker color="olive">Horaires</Kicker>
                <ul className="text-dark text-[1.05rem] leading-[1.65] space-y-1">
                  {business.hours.map((h) => (
                    <li key={h.label}>
                      <span className="text-ink/70">{h.label} ·</span> {h.value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <Kicker color="olive">Instagram</Kicker>
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-accent text-[1.4rem] hover:text-accent-dark transition-colors duration-[280ms]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 70',
                    fontWeight: 600,
                  }}
                >
                  @mamarazzi_traiteur
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button href={business.phoneHref}>Appeler la boutique</Button>
                <Button href="/sur-mesure" variant="ghost">
                  Demander un devis
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="relative w-full aspect-[4/5] overflow-hidden shadow-[0_24px_50px_-22px_rgba(31,24,21,0.3)]"
              style={{ borderRadius: "var(--arch-classic)" }}
            >
              <iframe
                src={`https://maps.google.com/maps?q=${fullAddress}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Plan d’accès Mamarazzi"
                className="absolute inset-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
