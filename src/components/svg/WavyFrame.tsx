import { type ReactNode } from "react";

/**
 * Cadre ondulé double trait — signature graphique reprise des PDFs Mamarazzi
 * (Carte février 2026, Menu Aperitivo). 4 côtés ondulés qui font le tour du
 * contenu, en accent terracotta.
 *
 * Implémentation : 4 SVG (un par côté) utilisant <pattern> pour tiler les
 * ondulations à taille fixe — le nombre de vagues s'adapte automatiquement
 * à la largeur/hauteur du container sans déformation.
 */

type WavyFrameProps = {
  children: ReactNode;
  className?: string;
  /** Padding intérieur entre le contenu et le cadre (Tailwind classes). */
  innerClassName?: string;
  /** Couleur du trait (par défaut : accent terracotta). */
  color?: string;
};

const STROKE = "1.4";

export function WavyFrame({
  children,
  className = "",
  innerClassName = "p-8 lg:p-12",
  color = "var(--color-accent)",
}: WavyFrameProps) {
  return (
    <div className={`relative ${className}`} style={{ color }}>
      {/* TOP wave */}
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-5 pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wf-top"
            width="40"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 6 Q 10 0 20 6 T 40 6"
              fill="none"
              stroke="currentColor"
              strokeWidth={STROKE}
              strokeLinecap="round"
            />
            <path
              d="M 0 14 Q 10 8 20 14 T 40 14"
              fill="none"
              stroke="currentColor"
              strokeWidth={STROKE}
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="20" fill="url(#wf-top)" />
      </svg>

      {/* BOTTOM wave (flipped) */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-5 pointer-events-none rotate-180"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wf-bot"
            width="40"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 6 Q 10 0 20 6 T 40 6"
              fill="none"
              stroke="currentColor"
              strokeWidth={STROKE}
              strokeLinecap="round"
            />
            <path
              d="M 0 14 Q 10 8 20 14 T 40 14"
              fill="none"
              stroke="currentColor"
              strokeWidth={STROKE}
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="20" fill="url(#wf-bot)" />
      </svg>

      {/* LEFT wave */}
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 h-full w-5 pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wf-left"
            width="20"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 6 0 Q 0 10 6 20 T 6 40"
              fill="none"
              stroke="currentColor"
              strokeWidth={STROKE}
              strokeLinecap="round"
            />
            <path
              d="M 14 0 Q 8 10 14 20 T 14 40"
              fill="none"
              stroke="currentColor"
              strokeWidth={STROKE}
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="20" height="100%" fill="url(#wf-left)" />
      </svg>

      {/* RIGHT wave (flipped) */}
      <svg
        aria-hidden="true"
        className="absolute top-0 right-0 h-full w-5 pointer-events-none -scale-x-100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wf-right"
            width="20"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 6 0 Q 0 10 6 20 T 6 40"
              fill="none"
              stroke="currentColor"
              strokeWidth={STROKE}
              strokeLinecap="round"
            />
            <path
              d="M 14 0 Q 8 10 14 20 T 14 40"
              fill="none"
              stroke="currentColor"
              strokeWidth={STROKE}
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="20" height="100%" fill="url(#wf-right)" />
      </svg>

      {/* Contenu — padding pour ne pas chevaucher le cadre */}
      <div className={`relative ${innerClassName}`}>{children}</div>
    </div>
  );
}
