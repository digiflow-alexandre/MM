import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-[0.02em] text-[0.94rem] " +
  "px-8 py-[1.05rem] rounded-full transition-[background,transform,box-shadow] duration-[280ms] ease-out " +
  "border border-transparent active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-dark hover:bg-accent-dark hover:text-light hover:-translate-y-0.5 " +
    "hover:shadow-[0_12px_28px_-8px_rgba(154,90,68,0.45)]",
  ghost:
    "bg-transparent text-olive border-olive/20 hover:bg-olive/[0.06] hover:border-olive",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href: string;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
