import { Reveal } from "./Reveal";

export function Pullquote({
  children,
  attribution,
}: {
  children: string;
  attribution?: string;
}) {
  return (
    <Reveal>
      <figure className="relative mt-12 sm:mt-16 py-10 sm:py-14 lg:py-16 border-y border-ink/35 text-center">
        <span className="absolute left-1/2 -top-1.5 w-2 h-2 -translate-x-1/2 rounded-full bg-accent" />
        <span className="absolute left-1/2 -bottom-1.5 w-2 h-2 -translate-x-1/2 rounded-full bg-accent" />
        <blockquote className="quote text-[clamp(1.6rem,3.4vw,2.8rem)] max-w-[22ch] mx-auto">
          «&nbsp;{children}&nbsp;»
        </blockquote>
        {attribution && (
          <figcaption
            className="mt-6 text-[0.78rem] uppercase tracking-[0.18em] text-ink/75 font-semibold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {attribution}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
