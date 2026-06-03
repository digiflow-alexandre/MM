import { type ReactNode } from "react";

export function Kicker({
  children,
  className = "",
  color = "olive",
}: {
  children: ReactNode;
  className?: string;
  color?: "olive" | "sand" | "accent";
}) {
  const colorClass =
    color === "sand" ? "text-sand" : color === "accent" ? "text-accent" : "text-olive";

  return <span className={`kicker ${colorClass} ${className}`}>{children}</span>;
}
