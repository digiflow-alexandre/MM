import type { Metadata } from "next";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Mamarazzi.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        kicker="Informations légales"
        title={<>Mentions légales.</>}
      />
      <Breadcrumb
        trail={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />
      <section className="section">
        <div className="shell prose prose-stone max-w-[44em]">
          <p className="italic text-ink text-[1.05rem]">
            Page en cours de finalisation — sera générée par le skill
            DIGIFLOW <code>mentions-legales</code> avant la mise en production
            (raison sociale, SIRET, RCS Nanterre, TVA, hébergeur, directeur de
            publication, etc.).
          </p>
        </div>
      </section>
    </>
  );
}
