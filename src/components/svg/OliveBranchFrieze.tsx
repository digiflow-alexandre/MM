export function OliveBranchFrieze({
  className = "",
  width = 240,
  height = 28,
}: {
  className?: string;
  width?: number | string;
  height?: number;
}) {
  return (
    <div aria-hidden="true" className={`flex justify-center my-6 ${className}`}>
      <svg
        viewBox="0 0 240 28"
        width={width}
        height={height}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-ink/60 w-[clamp(120px,22vw,220px)] h-7"
      >
        <line x1="0" y1="14" x2="60" y2="14" />
        <line x1="180" y1="14" x2="240" y2="14" />
        <path d="M65 14 Q90 4 115 14 T175 14" strokeLinecap="round" />
        <ellipse cx="78" cy="10" rx="3" ry="5" transform="rotate(-30 78 10)" fill="currentColor" />
        <ellipse cx="100" cy="14" rx="3" ry="5" transform="rotate(15 100 14)" fill="currentColor" />
        <ellipse cx="122" cy="10" rx="3" ry="5" transform="rotate(-15 122 10)" fill="currentColor" />
        <ellipse cx="144" cy="14" rx="3" ry="5" transform="rotate(30 144 14)" fill="currentColor" />
        <ellipse cx="166" cy="10" rx="3" ry="5" transform="rotate(-25 166 10)" fill="currentColor" />
        <circle cx="90" cy="18" r="1.5" fill="currentColor" />
        <circle cx="135" cy="20" r="1.5" fill="currentColor" />
        <circle cx="155" cy="18" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

export function OliveBranchFriezeFooter({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex justify-center ${className}`}>
      <svg
        viewBox="0 0 280 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-sand/35 w-[clamp(180px,30vw,280px)] h-9"
      >
        <line x1="0" y1="18" x2="60" y2="18" />
        <line x1="220" y1="18" x2="280" y2="18" />
        <path
          d="M65 18 Q80 8 95 18 T125 18 T155 18 T185 18 Q200 28 215 18"
          strokeLinecap="round"
        />
        <circle cx="80" cy="14" r="1.4" fill="currentColor" />
        <circle cx="110" cy="22" r="1.4" fill="currentColor" />
        <circle cx="140" cy="14" r="1.4" fill="currentColor" />
        <circle cx="170" cy="22" r="1.4" fill="currentColor" />
        <circle cx="200" cy="14" r="1.4" fill="currentColor" />
      </svg>
    </div>
  );
}
