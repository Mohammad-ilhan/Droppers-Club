type Props = { className?: string; size?: number };

export function Monogram({ className = "", size = 44 }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-label="Dropper's Club"
    >
      <defs>
        <linearGradient id="mg-navy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.28 0.06 260)" />
          <stop offset="100%" stopColor="oklch(0.40 0.10 270)" />
        </linearGradient>
        <linearGradient id="mg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.82 0.13 80)" />
          <stop offset="100%" stopColor="oklch(0.65 0.13 65)" />
        </linearGradient>
      </defs>
      {/* Crest shield */}
      <path
        d="M32 2 L60 12 V32 C60 48 48 58 32 62 C16 58 4 48 4 32 V12 Z"
        fill="url(#mg-navy)"
      />
      {/* Gold inner border */}
      <path
        d="M32 7 L55 15 V32 C55 45 45 54 32 57 C19 54 9 45 9 32 V15 Z"
        fill="none"
        stroke="url(#mg-gold)"
        strokeWidth="0.8"
        opacity="0.7"
      />
      {/* D */}
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="Fraunces, serif"
        fontWeight="700"
        fontSize="28"
        fill="url(#mg-gold)"
        letterSpacing="-1"
      >
        DC
      </text>
    </svg>
  );
}
