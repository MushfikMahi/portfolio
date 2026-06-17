import { profile } from "@/lib/data";

interface SealProps {
  className?: string;
}

export default function Seal({ className = "h-12 w-12" }: SealProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i / 36) * Math.PI * 2;
        // Fixed precision avoids SSR/client hydration mismatches caused by
        // tiny floating-point differences in Math.cos/Math.sin across engines.
        const x1 = (50 + Math.cos(angle) * 44).toFixed(3);
        const y1 = (50 + Math.sin(angle) * 44).toFixed(3);
        const x2 = (50 + Math.cos(angle) * 47).toFixed(3);
        const y2 = (50 + Math.sin(angle) * 47).toFixed(3);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.4"
          />
        );
      })}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display)"
        fontSize="26"
        fontWeight="500"
        fill="currentColor"
        letterSpacing="2"
      >
        {profile.initials}
      </text>
    </svg>
  );
}
