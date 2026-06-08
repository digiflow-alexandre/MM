"use client";

import Script from "next/script";

declare global {
  interface Window {
    openBeBookWidget?: () => void;
  }
}

/**
 * Ouvre le widget Be-Book programmatiquement.
 * Le widget utilise un Shadow DOM — on cible le bouton toggle à l'intérieur.
 */
export function openBeBookWidget() {
  if (typeof window === "undefined") return;

  const widget = document.querySelector("restaurant-widget");
  if (!widget?.shadowRoot) return;

  const toggle = widget.shadowRoot.querySelector(
    "#widget-toggle",
  ) as HTMLElement | null;
  if (toggle) {
    toggle.click();
    return;
  }

  // Fallback : n'importe quel bouton dans le Shadow DOM
  const btn = widget.shadowRoot.querySelector("button") as HTMLElement | null;
  if (btn) btn.click();
}

/**
 * Widget Be-Book — commande en ligne, click & collect, livraison.
 * À placer UNE SEULE FOIS dans le layout root (juste avant la fermeture body).
 *
 * Couleur primary = terracotta Mamarazzi #cb7d65 (cf. DESIGN.md).
 */
export default function BeBookWidget() {
  return (
    <>
      <Script
        src="https://be-booker.com/widget/dist/widget.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.openBeBookWidget = openBeBookWidget;
        }}
      />
      {/* @ts-expect-error - Web Component personnalisé Be-Book */}
      <restaurant-widget
        data-api-key={process.env.NEXT_PUBLIC_BEBOOK_API_KEY}
        data-theme="light"
        data-primary-color="#cb7d65"
        data-lang="fr"
        data-show-delivery="true"
        data-show-pickup="true"
        data-show-reservation="true"
        data-position="bottom-right"
      />
    </>
  );
}
