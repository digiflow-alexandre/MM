import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { ElfsightWidget } from "@/components/ui/ElfsightWidget";
import { business } from "@/lib/content";

export function InstagramFeed() {
  return (
    <section id="instagram" className="section">
      <div className="shell">
        <Reveal>
          <header className="mb-12 lg:mb-16 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pb-6 border-b border-ink/25">
            <div className="flex items-end gap-6 lg:gap-8">
              <span className="edito-no text-accent">Nº06</span>
              <Kicker color="olive">Le carnet visuel</Kicker>
            </div>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.78rem] uppercase tracking-[0.22em] text-ink/75 font-semibold hover:text-accent transition-colors duration-[280ms]"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 14, "SOFT" 30',
              }}
            >
              @mamarazzi_traiteur ↗
            </a>
          </header>
        </Reveal>

        <div className="grid items-end gap-x-12 gap-y-8 lg:grid-cols-12 lg:gap-x-20 mb-12 lg:mb-16">
          <Reveal className="lg:col-span-7">
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.022em] text-balance text-dark"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60',
                fontWeight: 700,
              }}
            >
              Le quotidien de la{" "}
              <em className="italic text-accent">maison</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p
              className="italic text-ink text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.55] max-w-[34em]"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              Les plats du jour, les coulisses de la cuisine, les grandes
              tablées du week-end — suivez Mamarazzi sur Instagram.
            </p>
          </Reveal>
        </div>

        <Reveal>
          {/* Widget Elfsight Instagram Feed officiel @mamarazzi_traiteur */}
          <ElfsightWidget
            widgetId="45180685-ea2c-4252-a7b9-41c6c8fb5565"
            minHeight="500px"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 italic text-dark text-[clamp(1.5rem,2.4vw,2rem)] hover:text-accent transition-colors duration-[280ms]"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 70',
                fontWeight: 500,
              }}
            >
              Nous suivre sur{" "}
              <span
                className="not-italic text-accent"
                style={{
                  fontFamily: "var(--font-brand), 'Brush Script MT', cursive",
                  fontWeight: 400,
                }}
              >
                Instagram
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
