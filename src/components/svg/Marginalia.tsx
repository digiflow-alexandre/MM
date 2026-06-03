type Position = "tl" | "tr" | "bl" | "br";

const positionClass: Record<Position, string> = {
  tl: "-top-4 -left-2",
  tr: "-top-4 -right-2",
  bl: "-bottom-6 -left-2",
  br: "-bottom-6 -right-2",
};

function Wrap({
  position,
  children,
  className = "",
}: {
  position: Position;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute w-[38px] h-[38px] text-olive opacity-55 pointer-events-none ${positionClass[position]} ${className}`}
    >
      {children}
    </span>
  );
}

export function MarginaliaLemon({ position = "tr" }: { position?: Position }) {
  return (
    <Wrap position={position}>
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
        <ellipse cx="20" cy="22" rx="14" ry="10" />
        <path d="M6 22 Q20 16 34 22" />
        <line x1="20" y1="12" x2="20" y2="32" />
        <line x1="10" y1="18" x2="30" y2="18" />
        <line x1="10" y1="26" x2="30" y2="26" />
      </svg>
    </Wrap>
  );
}

export function MarginaliaOlive({ position = "tl" }: { position?: Position }) {
  return (
    <Wrap position={position}>
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
        <ellipse cx="20" cy="22" rx="9" ry="13" fill="rgba(196,74,44,0.08)" />
        <path d="M20 9 Q25 4 27 8" strokeLinecap="round" />
        <ellipse cx="26" cy="6" rx="4" ry="2" transform="rotate(20 26 6)" />
      </svg>
    </Wrap>
  );
}

export function MarginaliaBasil({ position = "br" }: { position?: Position }) {
  return (
    <Wrap position={position}>
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M20 36 Q18 22 14 14" strokeLinecap="round" />
        <ellipse cx="11" cy="10" rx="5" ry="3" transform="rotate(-40 11 10)" />
        <ellipse cx="20" cy="20" rx="5" ry="3" transform="rotate(20 20 20)" />
        <ellipse cx="14" cy="26" rx="5" ry="3" transform="rotate(-30 14 26)" />
      </svg>
    </Wrap>
  );
}

export function MarginaliaWave({ position = "bl" }: { position?: Position }) {
  return (
    <Wrap position={position}>
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M2 20 Q10 12 18 20 T34 20" />
        <path d="M2 28 Q10 20 18 28 T34 28" />
      </svg>
    </Wrap>
  );
}
