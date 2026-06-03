import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHero } from "@/components/site/PageHero";
import { HistoireFull } from "@/components/sections/HistoireFull";

export const metadata: Metadata = {
  title: "L’histoire de Cristelle Doveri",
  description:
    "Née à Saint-Tropez dans une famille italienne originaire de Toscane, Cristelle Doveri fonde Mamarazzi en avril 2022 à Asnières-sur-Seine.",
};

export default function HistoirePage() {
  return (
    <>
      <PageHero
        kicker="Chapitre premier"
        title={
          <>
            L’histoire de{" "}
            <em className="not-italic italic text-accent">Cristelle</em>.
          </>
        }
        subtitle="Née à Saint-Tropez dans une famille italienne de Toscane, ancienne journaliste, Cristelle Doveri revient à ses racines et fonde Mamarazzi en avril 2022."
        imageSrc="https://mamarazzi-traiteur.fr/wp-content/uploads/2026/02/mamarazzi_02-909x1024.webp"
        imageAlt="Tablée provençale Mamarazzi en extérieur — cyprès, vichy, conserves italiennes"
      />
      <Breadcrumb
        trail={[
          { label: "Accueil", href: "/" },
          { label: "L’histoire" },
        ]}
      />
      <HistoireFull />
    </>
  );
}
