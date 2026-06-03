import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHero } from "@/components/site/PageHero";
import { SurMesureFull } from "@/components/sections/SurMesureFull";

export const metadata: Metadata = {
  title: "Le sur-mesure — Événementiel & entreprises",
  description:
    "Mariages, baptêmes, communions, anniversaires, séminaires, afterworks… Mamarazzi compose votre événement de A à Z. Devis sur-mesure sous 48h.",
};

export default function SurMesurePage() {
  return (
    <>
      <PageHero
        kicker="Vos grands moments"
        title={
          <>
            Du dimanche en famille
            <br className="hidden sm:block" /> au{" "}
            <em className="not-italic italic text-accent">grand jour</em>.
          </>
        }
        subtitle="Repas en famille, apéros entre amis, baptêmes, mariages, séminaires. Cristelle compose, adapte, livre et monte — partout en Île-de-France."
        imageSrc="https://mamarazzi-traiteur.fr/wp-content/uploads/2026/02/mamarazzi_02-909x1024.webp"
        imageAlt="Tablée habillée Mamarazzi pour événement — vichy rouge, conserves italiennes, cyprès"
      />
      <Breadcrumb
        trail={[
          { label: "Accueil", href: "/" },
          { label: "Le sur-mesure" },
        ]}
      />
      <SurMesureFull />
    </>
  );
}
