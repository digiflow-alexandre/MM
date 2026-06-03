import Link from "next/link";

export function Breadcrumb({
  trail,
}: {
  trail: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav
      aria-label="Fil d’ariane"
      className="shell py-5 lg:py-6 border-b border-ink/15"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.78rem] uppercase tracking-[0.18em] text-ink/65 font-medium"
        style={{
          fontFamily: "var(--font-display)",
          fontVariationSettings: '"opsz" 14, "SOFT" 40',
        }}
      >
        {trail.map((step, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={`${step.label}-${i}`} className="inline-flex items-center gap-2">
              {step.href && !isLast ? (
                <Link
                  href={step.href}
                  className="hover:text-accent transition-colors duration-[220ms]"
                >
                  {step.label}
                </Link>
              ) : (
                <span className={isLast ? "text-accent" : ""} aria-current={isLast ? "page" : undefined}>
                  {step.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className="text-ink/30">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
