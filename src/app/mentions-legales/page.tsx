import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHero } from "@/components/site/PageHero";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales | Mamarazzi",
  description:
    "Mentions légales du site Mamarazzi. Informations sur l’éditeur, l’hébergeur et la politique de confidentialité.",
  robots: "noindex, nofollow",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        kicker="Informations légales"
        title={<>Mentions légales.</>}
        subtitle="Éditeur, hébergement, propriété intellectuelle et politique de confidentialité du site mamarazzi-traiteur.fr."
      />
      <Breadcrumb
        trail={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />

      <section className="section">
        <div className="shell">
          <div className="max-w-[44em] mx-auto space-y-14 lg:space-y-16">
            {/* 1. Éditeur */}
            <LegalBlock title="Éditeur du site web">
              <Row label="Raison sociale" value="MAMMARAZZI" />
              <Row label="Nom commercial" value="Mamarazzi" />
              <Row label="Forme juridique" value="SASU" />
              <Row label="Capital social" value="1 000 €" />
              <Row label="Siège social" value="4 Rue Maurice Bokanowski, 92600 Asnières-sur-Seine, France" />
              <Row label="RCS" value="912 460 896 R.C.S. Nanterre" />
              <Row label="SIRET" value="912 460 896 00034" />
              <Row label="TVA intracommunautaire" value="FR20912460896" />
              <Row label="Code APE/NAF" value="56.21Z (Services des traiteurs)" />
              <Row
                label="Téléphone"
                value={
                  <a
                    href={business.phoneHref}
                    className="text-accent hover:text-accent-dark transition-colors"
                  >
                    {business.phone}
                  </a>
                }
              />
              <Row
                label="Contact"
                value={
                  <Link
                    href="/contact"
                    className="text-accent hover:text-accent-dark transition-colors"
                  >
                    Formulaire de contact
                  </Link>
                }
              />
            </LegalBlock>

            {/* 2. Directeur de publication */}
            <LegalBlock title="Directeur de la publication">
              <Row label="Nom" value="Cristelle DOVERI" />
              <Row label="Qualité" value="Présidente de la SASU MAMMARAZZI" />
              <Row
                label="Contact"
                value={
                  <Link
                    href="/contact"
                    className="text-accent hover:text-accent-dark transition-colors"
                  >
                    Via le formulaire de contact
                  </Link>
                }
              />
            </LegalBlock>

            {/* 3. Réalisateur du site web — DIGIFLOW */}
            <LegalBlock title="Réalisateur du site web">
              <Row label="Société" value="DIGIFLOW AGENCY" />
              <Row label="SIRET" value="909 300 584 00010" />
              <Row label="Capital social" value="15 000 €" />
              <Row label="Adresse" value="Route de Gréasque, 13120 Gardanne, France" />
              <Row label="RCS" value="Aix-en-Provence" />
              <Row
                label="Site web"
                value={
                  <a
                    href="https://www.digiflow-agency.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark transition-colors"
                  >
                    www.digiflow-agency.fr
                  </a>
                }
              />
            </LegalBlock>

            {/* 4. Hébergeur */}
            <LegalBlock title="Hébergeur">
              <Row label="Nom de domaine" value="OVH" />
              <Row label="Hébergement site web" value="OVH CLOUD FRANCE" />
              <Row label="Siège" value="2 rue Kellermann, 59100 Roubaix, France" />
              <Row
                label="Site web"
                value={
                  <a
                    href="https://www.ovhcloud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark transition-colors"
                  >
                    www.ovhcloud.com
                  </a>
                }
              />
              <Row label="Serveur" value="Serveur privé" />
            </LegalBlock>

            {/* 5. Responsable technique */}
            <LegalBlock title="Responsable technique">
              <Row label="Nom" value="Jason SOTOCA" />
              <Row label="Qualité" value="Directeur Général de la SAS DIGIFLOW AGENCY" />
              <Row
                label="Email"
                value={
                  <a
                    href="mailto:jason@digiflow-agency.fr"
                    className="text-accent hover:text-accent-dark transition-colors"
                  >
                    jason@digiflow-agency.fr
                  </a>
                }
              />
            </LegalBlock>

            {/* 6. Propriété intellectuelle */}
            <LegalBlock title="Propriété intellectuelle">
              <Prose>
                <p>
                  L’ensemble du contenu présent sur ce site —{" "}
                  <em>textes, photographies, illustrations, logo, marques,
                  graphismes, vidéos, mises en page</em>{" "}
                  — est la propriété exclusive de la SASU MAMMARAZZI ou de
                  leurs auteurs respectifs, et est protégé par les lois en
                  vigueur sur la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification,
                  publication, adaptation totale ou partielle de tout élément
                  du site, quel que soit le moyen ou le procédé utilisé, est
                  interdite sans autorisation écrite préalable de la SASU
                  MAMMARAZZI.
                </p>
                <p>
                  Tout usage non autorisé du site ou de l’un quelconque de ses
                  éléments est constitutif d’une contrefaçon sanctionnée par
                  les articles L.335-2 et suivants du Code de la propriété
                  intellectuelle.
                </p>
              </Prose>
            </LegalBlock>

            {/* 7. Protection des données personnelles (RGPD) */}
            <LegalBlock title="Protection des données personnelles (RGPD)">
              <Prose>
                <p>
                  Conformément au Règlement Général sur la Protection des
                  Données (RGPD — UE 2016/679) et à la loi Informatique et
                  Libertés du 6 janvier 1978 modifiée, vous disposez d’un
                  droit d’accès, de rectification, d’effacement, de
                  portabilité et d’opposition au traitement de vos données
                  personnelles.
                </p>
                <p>
                  <strong>Responsable du traitement :</strong> Cristelle
                  DOVERI, Présidente de la SASU MAMMARAZZI.
                </p>
                <p>
                  <strong>Données collectées :</strong> via le formulaire de
                  contact et la demande de devis — nom, prénom, e-mail,
                  téléphone, date, nombre de personnes, type de prestation,
                  message. Ces données sont collectées dans le seul but de
                  répondre à votre demande.
                </p>
                <p>
                  <strong>Base légale :</strong> intérêt légitime (réponse à
                  votre sollicitation) et exécution de mesures précontractuelles.
                </p>
                <p>
                  <strong>Durée de conservation :</strong> 3 ans à compter de
                  notre dernier échange.
                </p>
                <p>
                  <strong>Destinataires :</strong> uniquement l’équipe de
                  Mamarazzi. Aucune cession ou transfert à des tiers à des
                  fins commerciales.
                </p>
                <p>
                  Pour exercer vos droits, contactez-nous via le{" "}
                  <Link
                    href="/contact"
                    className="text-accent hover:text-accent-dark transition-colors"
                  >
                    formulaire de contact
                  </Link>
                  . En cas de litige, vous pouvez saisir la CNIL —{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark transition-colors"
                  >
                    www.cnil.fr
                  </a>
                  .
                </p>
              </Prose>
            </LegalBlock>

            {/* 8. Cookies */}
            <LegalBlock title="Cookies">
              <Prose>
                <p>
                  Le site mamarazzi-traiteur.fr peut utiliser des cookies
                  techniques nécessaires à son fonctionnement (préférences de
                  navigation, sécurité). Aucun cookie de profilage ou de
                  publicité ciblée n’est déposé sans votre consentement
                  préalable.
                </p>
                <p>
                  Vous pouvez à tout moment paramétrer ou refuser les cookies
                  depuis votre navigateur internet.
                </p>
              </Prose>
            </LegalBlock>

            {/* 9. Crédits */}
            <LegalBlock title="Crédits">
              <Row label="Photos" value="© MAMMARAZZI — Droits réservés" />
              <Row label="Conception & réalisation" value="DIGIFLOW AGENCY" />
            </LegalBlock>

            {/* Retour accueil */}
            <div className="pt-10 border-t border-ink/15 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[0.85rem] uppercase tracking-[0.18em] text-olive font-semibold border-b border-current pb-1 hover:text-accent transition-colors"
              >
                ← Retour à l’accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        className="text-accent-dark text-[clamp(1.6rem,2.6vw,2rem)] leading-[1.1] mb-6 pb-3 border-b border-accent/30"
        style={{
          fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
          fontWeight: 400,
        }}
      >
        {title}
      </h2>
      <div className="space-y-2.5">{children}</div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid gap-1 sm:gap-3 sm:grid-cols-[14rem_1fr] sm:items-baseline">
      <dt
        className="text-[0.7rem] uppercase tracking-[0.2em] text-olive font-semibold"
        style={{
          fontFamily: "var(--font-display)",
          fontVariationSettings: '"opsz" 14, "SOFT" 40',
        }}
      >
        {label}
      </dt>
      <dd className="text-[0.95rem] text-dark leading-[1.5]">{value}</dd>
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[0.95rem] text-dark leading-[1.7] space-y-4">
      {children}
    </div>
  );
}
