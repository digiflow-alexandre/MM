"use client";

import { type ReactNode } from "react";
import { useQuoteModal } from "./QuoteModalProvider";
import { ArrowRight } from "@/components/svg/ArrowRight";

type Variant = "primary" | "ghost" | "link";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-[0.02em] text-[0.94rem] " +
  "transition-[background,color,transform,box-shadow,gap,border-color] duration-[280ms] ease-out " +
  "active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "px-8 py-[1.05rem] rounded-full bg-accent text-dark border border-transparent " +
    "hover:bg-accent-dark hover:text-light hover:-translate-y-0.5 " +
    "hover:shadow-[0_12px_28px_-8px_rgba(154,90,68,0.45)]",
  ghost:
    "px-8 py-[1.05rem] rounded-full bg-transparent text-olive border border-olive/20 " +
    "hover:bg-olive/[0.06] hover:border-olive",
  link:
    "group inline-flex items-center gap-[0.4rem] font-medium text-[0.95rem] " +
    "text-olive border-b border-current pb-0.5 " +
    "hover:text-accent hover:gap-[0.7rem]",
};

/**
 * Bouton "Demander un devis" qui ouvre la modal QuoteForm.
 * Utilise le QuoteModalProvider monté dans le root layout.
 */
export function QuoteButton({
  children = "Demander un devis",
  variant = "primary",
  className = "",
  invertOnDark = false,
}: {
  children?: ReactNode;
  variant?: Variant;
  className?: string;
  invertOnDark?: boolean;
}) {
  const { open } = useQuoteModal();

  // Pour le variant link, on a un styling spécifique qui n'a pas px/py
  const isLink = variant === "link";
  const linkColorOverride = invertOnDark ? "!text-sand hover:!text-accent" : "";

  return (
    <button
      type="button"
      onClick={open}
      className={`${base} ${variants[variant]} ${isLink ? linkColorOverride : ""} ${className}`.trim()}
    >
      {children}
      {isLink && <ArrowRight />}
    </button>
  );
}
