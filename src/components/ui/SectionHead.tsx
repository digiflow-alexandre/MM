import { type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Kicker } from "./Kicker";

export function SectionHead({
  no,
  noColor = "accent",
  kicker,
  kickerColor = "olive",
  title,
  inverted = false,
}: {
  no: string;
  noColor?: "accent" | "olive";
  kicker: string;
  kickerColor?: "olive" | "sand" | "accent";
  title: ReactNode;
  inverted?: boolean;
}) {
  const noColorClass = noColor === "olive" ? "text-olive" : "text-accent";

  return (
    <Reveal>
      <header
        className="grid items-start gap-x-12 gap-y-6 mb-10 sm:mb-14 lg:mb-16"
        style={{ gridTemplateColumns: "auto 1fr" }}
      >
        <span className={`edito-no ${noColorClass} row-span-2 max-sm:row-auto`}>{no}</span>
        <div className="self-end pt-2 max-sm:pt-0">
          <Kicker color={kickerColor}>{kicker}</Kicker>
        </div>
        <h2
          className={`text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.02em] text-balance max-w-[18ch] ${
            inverted ? "text-light" : "text-dark"
          }`}
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
        >
          {title}
        </h2>
      </header>
    </Reveal>
  );
}
