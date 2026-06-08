"use client";

import { type ReactNode } from "react";
import { openBeBookWidget } from "@/components/ui/BeBookWidget";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-[0.02em] text-[0.94rem] " +
  "transition-[background,color,transform,box-shadow,border-color] duration-[280ms] ease-out " +
  "active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "px-8 py-[1.05rem] rounded-full bg-accent text-dark border border-transparent " +
    "hover:bg-accent-dark hover:text-light hover:-translate-y-0.5 " +
    "hover:shadow-[0_12px_28px_-8px_rgba(154,90,68,0.45)]",
  ghost:
    "px-8 py-[1.05rem] rounded-full bg-transparent text-olive border border-olive/20 " +
    "hover:bg-olive/[0.06] hover:border-olive",
};

/**
 * Bouton qui ouvre directement le widget Be-Book (commande / réservation).
 * À utiliser sur les CTAs "Commander en ligne", "Passer commande", etc.
 */
export function OrderButton({
  children = "Commander en ligne",
  variant = "primary",
  className = "",
}: {
  children?: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={openBeBookWidget}
      className={`${base} ${variants[variant]} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
