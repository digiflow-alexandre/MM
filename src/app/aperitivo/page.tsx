import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHero } from "@/components/site/PageHero";
import { AperitivoFull } from "@/components/sections/AperitivoFull";
import { photos } from "@/lib/content";

export const metadata: Metadata = {
  title: "L’aperitivo — Plateaux à composer 4 à 100 personnes",
  description:
    "Plateau de charcuterie, d’antipasti ou plateau mixte. Composez votre buffet d’apéritivo Mamarazzi — dès 40€, de 4 à 100 convives.",
};

export default function AperitivoPage() {
  return (
    <>
      <PageHero
        kicker="La signature de la maison"
        title={
          <>
            L’<em className="not-italic italic text-accent">aperitivo</em>.
          </>
        }
        subtitle="Recevoir sans rien faire… sauf profiter. Charcuterie corse & italienne, antipasti, mignardises maison — composez votre buffet de 4 à 100 convives."
        imageSrc={photos.aperitivoBanner.src}
        imageAlt={photos.aperitivoBanner.alt}
      />
      <Breadcrumb
        trail={[
          { label: "Accueil", href: "/" },
          { label: "L’aperitivo" },
        ]}
      />
      <AperitivoFull />
    </>
  );
}
