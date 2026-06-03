import Image from "next/image";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";

/**
 * Mini-hero pour les pages internes.
 * Supporte deux modes : avec photo de fond (cinéma) ou minimal (typo only).
 */
export function PageHero({
  kicker,
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: {
  kicker: string;
  title: React.ReactNode;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  const hasImage = !!imageSrc;

  return (
    <section
      className={`relative isolate ${
        hasImage
          ? "min-h-[55vh] lg:min-h-[60vh] overflow-hidden flex items-end"
          : ""
      } pt-32 sm:pt-40 ${hasImage ? "pb-14 lg:pb-20" : "pb-10 lg:pb-14"}`}
    >
      {hasImage && imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,24,21,0.55)_0%,rgba(31,24,21,0.3)_30%,rgba(31,24,21,0.55)_70%,rgba(31,24,21,0.82)_100%)] pointer-events-none"
          />
        </>
      )}

      <div className="shell relative w-full">
        <Stagger className="flex flex-col gap-5 lg:gap-7 max-w-[44rem]">
          <StaggerItem>
            <Kicker color={hasImage ? "sand" : "olive"}>{kicker}</Kicker>
          </StaggerItem>
          <StaggerItem>
            <h1
              className={`text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.98] tracking-[-0.025em] text-balance ${
                hasImage ? "text-light" : "text-dark"
              }`}
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 800,
                fontStyle: "italic",
                textShadow: hasImage ? "0 2px 20px rgba(0,0,0,0.4)" : undefined,
              }}
            >
              {title}
            </h1>
          </StaggerItem>
          {subtitle && (
            <StaggerItem>
              <p
                className={`font-sans font-medium text-[clamp(1rem,1.25vw,1.18rem)] leading-[1.55] max-w-[38em] ${
                  hasImage ? "text-sand/90" : "text-ink"
                }`}
                style={{
                  textShadow: hasImage ? "0 1px 10px rgba(0,0,0,0.45)" : undefined,
                }}
              >
                {subtitle}
              </p>
            </StaggerItem>
          )}
        </Stagger>
      </div>
    </section>
  );
}
