"use client";

import Script from "next/script";

/**
 * Widget Elfsight (avis Google, feed Instagram, etc.).
 * Le widgetId est récupéré depuis le dashboard Elfsight de Cristelle.
 *
 * Usage :
 *   <ElfsightWidget widgetId="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
 *
 * Le script platform.js est chargé une seule fois (lazyOnload) — peu importe
 * combien de widgets sont sur la page.
 */
export function ElfsightWidget({
  widgetId,
  minHeight = "400px",
  className = "",
}: {
  widgetId: string;
  minHeight?: string;
  className?: string;
}) {
  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
      <div
        className={`elfsight-app-${widgetId} ${className}`}
        style={{ minHeight }}
        data-elfsight-app-lazy
      />
    </>
  );
}
