import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowRight } from "@/components/svg/ArrowRight";

export function InlineLink({
  href,
  children,
  withArrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
}) {
  const classes =
    "group inline-flex items-center gap-[0.4rem] font-sans font-medium text-[0.95rem] " +
    "text-olive border-b border-current pb-0.5 " +
    "transition-[color,gap] duration-[280ms] ease-out hover:text-accent hover:gap-[0.7rem] " +
    className;

  const isExternal = href.startsWith("http");

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight />}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
