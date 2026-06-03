import Image from "next/image";
import { type ReactNode } from "react";

type ArchShape = "classic" | "tall" | "narrow" | "soft";

const archStyle: Record<ArchShape, string> = {
  classic: "50% 50% 0 0 / 30% 30% 0 0",
  tall: "50% 50% 0 0 / 50% 50% 0 0",
  narrow: "50% 50% 0 0 / 25% 25% 0 0",
  soft: "60% 60% 8% 8% / 30% 30% 4% 4%",
};

export function Arch({
  src,
  alt,
  shape = "classic",
  aspect = "3 / 4",
  priority = false,
  className = "",
  children,
  sizes = "(min-width: 1080px) 33vw, (min-width: 640px) 50vw, 100vw",
  hoverScale = true,
}: {
  src: string;
  alt: string;
  shape?: ArchShape;
  aspect?: string;
  priority?: boolean;
  className?: string;
  children?: ReactNode;
  sizes?: string;
  hoverScale?: boolean;
}) {
  return (
    <figure
      className={`relative overflow-hidden bg-sand shadow-[0_18px_40px_-22px_rgba(31,24,21,0.28)] group ${className}`}
      style={{
        borderRadius: archStyle[shape],
        aspectRatio: aspect,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover transition-transform duration-[900ms] ease-[var(--ease-premium)] ${
          hoverScale ? "group-hover:scale-[1.05]" : ""
        }`}
      />
      {children}
    </figure>
  );
}
