import type { SketchIcon } from "@/lib/services/types";

/**
 * Hand-getekende "sketch"-iconen uit het Lovable-project, hergebruikt in de
 * MTB-huisstijl (ink-lijn + lime-accent). Pure SVG — server component.
 */
const INK = "var(--color-ink)";
const LIME = "var(--color-lime)";

export function ServiceSketch({
  name,
  className = "h-12 w-12",
}: {
  name: SketchIcon;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: INK,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "flat-roof":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path {...common} d="M8 44h48M10 44V28l22-12 22 12v16" />
          <path {...common} d="M10 28l22-12 22 12" />
          <rect x="26" y="32" width="12" height="12" {...common} />
          <path d="M10 28h44" stroke={LIME} strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "pitched-roof":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path {...common} d="M8 44h48M12 44V30L32 14l20 16v14" />
          <rect x="26" y="32" width="12" height="12" {...common} />
          <path d="M12 30L32 14l20 16" stroke={LIME} strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "prefab":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect x="8" y="20" width="20" height="24" {...common} />
          <rect x="32" y="20" width="24" height="24" {...common} />
          <path {...common} d="M8 32h20M32 32h24" />
          <path d="M28 20l4-8 4 8" stroke={LIME} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "mantelzorg":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path {...common} d="M6 44h26V28L19 18 6 28v16zM34 44h24V32L46 22 34 32v12" />
          <rect x="14" y="34" width="6" height="10" {...common} />
          <rect x="42" y="36" width="6" height="8" {...common} />
          <path d="M30 44v-6" stroke={LIME} strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "wood-frame":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect x="12" y="10" width="40" height="44" {...common} />
          <path {...common} d="M32 10v44M12 32h40" />
          <path d="M16 14c4 4 4 8 0 12M48 14c-4 4-4 8 0 12" stroke={LIME} strokeWidth="2" fill="none" />
        </svg>
      );
    case "plastic-frame":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect x="10" y="10" width="44" height="44" {...common} />
          <rect x="16" y="16" width="14" height="14" {...common} />
          <rect x="34" y="16" width="14" height="14" {...common} />
          <rect x="16" y="34" width="32" height="14" {...common} />
          <path d="M10 10h44" stroke={LIME} strokeWidth="3" fill="none" />
        </svg>
      );
    case "alu-frame":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" {...common} />
          <path {...common} d="M8 32h48M32 8v48" />
          <path d="M8 8l48 48" stroke={LIME} strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "sliding-door":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect x="6" y="12" width="52" height="40" {...common} />
          <path {...common} d="M32 12v40M14 32h36" />
          <path d="M20 56l24-48" stroke={LIME} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path {...common} d="M50 30l4 2-4 2" />
        </svg>
      );
    case "total-renovation":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path {...common} d="M8 44h48M12 44V26L32 12l20 14v18" />
          <path {...common} d="M22 44V32h8v12M38 32h10v12" />
          <path d="M44 14l4-4 6 6-4 4z" stroke={LIME} strokeWidth="2" fill="none" strokeLinejoin="round" />
        </svg>
      );
    case "bathroom":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path {...common} d="M8 36h48v8a6 6 0 01-6 6H14a6 6 0 01-6-6v-8z" />
          <path {...common} d="M14 36V20a6 6 0 016-6h4" />
          <circle cx="26" cy="20" r="4" {...common} />
          <path d="M16 50l-2 6M48 50l2 6" stroke={LIME} strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "kitchen":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <rect x="8" y="20" width="48" height="32" {...common} />
          <path {...common} d="M8 36h48M20 28h4M40 28h4" />
          <circle cx="20" cy="44" r="3" {...common} />
          <circle cx="32" cy="44" r="3" {...common} />
          <circle cx="44" cy="44" r="3" {...common} />
          <path d="M28 8c0 4 8 4 8 8" stroke={LIME} strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "sustainability":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <circle cx="32" cy="32" r="22" {...common} />
          <path {...common} d="M32 14c-6 8-6 16 0 24M32 14c6 8 6 16 0 24M14 32h36" />
          <path d="M22 44l4-6 4 4 6-8 4 6" stroke={LIME} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "team":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <circle cx="22" cy="22" r="6" {...common} />
          <circle cx="42" cy="22" r="6" {...common} />
          <path {...common} d="M10 50c0-8 6-12 12-12s12 4 12 12M30 50c0-8 6-12 12-12s12 4 12 12" />
          <path d="M28 32c2 2 6 2 8 0" stroke={LIME} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "price-tag":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path {...common} d="M8 32l24-22h22v22L32 54z" />
          <circle cx="44" cy="20" r="3" {...common} />
          <path d="M28 26c4 0 6 2 6 4s-2 4-6 4-6 2-6 4 2 4 6 4M28 24v18" stroke={LIME} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );
    case "house-life":
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          <path {...common} d="M10 36h44M14 36V22L32 10l18 12v14" />
          <rect x="26" y="26" width="12" height="10" {...common} />
          <path d="M6 50c4 0 6-6 10-6s6 6 10 6 6-6 10-6 6 6 10 6 6-6 10-6" stroke={LIME} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
