import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHero } from "@/components/site/PageHero";
import { CarteFull } from "@/components/sections/CarteFull";

export const metadata: Metadata = {
  title: "La carte — Spécialités italiennes & niçoises",
  description:
    "Lasagnes, cannelloni, parmigiana, pissaladière, farcis niçois… Découvrez la carte du comptoir Mamarazzi, mise à jour chaque saison.",
};

export default function CartePage() {
  return (
    <>
      <PageHero
        kicker="Au comptoir, sept jours sur sept"
        title={
          <>
            La <em className="not-italic italic text-accent">carte</em>.
          </>
        }
        subtitle="Lasagnes, cannelloni, parmigiana, farcis niçois, pissaladière — et bien d’autres spécialités classiques de la Riviera, cuisinées chaque matin et vendues au poids."
        imageSrc="https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–1-scaled.jpg"
        imageAlt="Sélection du jour Mamarazzi — barquettes de plats faits maison"
      />
      <Breadcrumb
        trail={[
          { label: "Accueil", href: "/" },
          { label: "La carte" },
        ]}
      />
      <CarteFull />
    </>
  );
}
