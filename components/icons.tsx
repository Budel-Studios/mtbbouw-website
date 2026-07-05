/**
 * Lijn-iconen (SVG, inline) in de stijl van de live site.
 * Server Components — geen client-JS.
 */

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function CheckIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="m4 12.5 5.5 5.5L20 6.5" />
    </svg>
  );
}

export function ChatIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M12 4c4.7 0 8.5 3.1 8.5 7s-3.8 7-8.5 7c-.9 0-1.8-.1-2.6-.3L5 20l1.2-3.2C4.6 15.5 3.5 13.6 3.5 11c0-3.9 3.8-7 8.5-7Z" />
    </svg>
  );
}

export function HammerIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M14.5 3.5 20 9m-5.5-5.5-2 2c-.8.8-.8 2 0 2.8l.7.7c.8.8 2 .8 2.8 0l2-2m-5.5-5.5 1.4-1.4c.4-.4 1-.4 1.4 0l4.1 4.1c.4.4.4 1 0 1.4L18 10.5M11 9.5 3.5 17c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0L13.5 12" />
    </svg>
  );
}

export function HouseIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M4 11.5 12 4l8 7.5M6 10v9h12v-9" />
    </svg>
  );
}

export function LayersIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

export function WindowIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" />
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
}

export function ShedIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M3 10 12 4l9 6M5 9v11h14V9M9 20v-6h6v6" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M12 3 5 5.5v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10v-5L12 3Z" />
      <path d="m9 11.5 2.2 2.2L15.5 9" />
    </svg>
  );
}

export function ClockIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function EuroIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M17.5 6.5A6.5 6.5 0 0 0 6.8 9M17.5 17.5A6.5 6.5 0 0 1 6.8 15M4 10.5h9M4 13.5h8" />
    </svg>
  );
}

export function RulerIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="m4 16.5 12.5-12.5 3.5 3.5L7.5 20 4 20z" />
      <path d="m9 12 1.5 1.5M12 9l1.5 1.5M15 6l1.5 1.5" />
    </svg>
  );
}

export function UsersIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5a3.5 3.5 0 0 1 0 7M21 20c0-2.8-1.9-5.1-4.5-5.8" />
    </svg>
  );
}

/* --------------------------- extra iconen: zakelijke afbouw ------------------------- */

export function BuildingIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="5" y="3.5" width="14" height="17" />
      <path d="M8.5 7.5h1.5M14 7.5h1.5M8.5 11.5h1.5M14 11.5h1.5M8.5 15.5h1.5M14 15.5h1.5M10.5 20.5v-3h3v3" />
    </svg>
  );
}

export function WallIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M6 3.5v17M12 3.5v17M18 3.5v17M3.5 8h17M3.5 16h17" />
    </svg>
  );
}

export function PaintIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <rect x="4" y="4" width="9" height="6" rx="1" />
      <path d="M8.5 10v3.5a2 2 0 0 0 2 2h0a2 2 0 0 1 2 2V20" />
      <path d="M12.5 17.5h1a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 1 3 0v3" />
    </svg>
  );
}

export function BoltIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M13 3 5 13.5h6L11 21l8-10.5h-6L13 3Z" />
    </svg>
  );
}

export function BulbIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M9 17.5h6M9.5 20.5h5M8 14.5a4.5 4.5 0 1 1 8 0c0 1.6-.9 2.4-1.6 3.1-.4.4-.7.8-.7 1.4H10.3c0-.6-.3-1-.7-1.4-.7-.7-1.6-1.5-1.6-3.1Z" />
      <path d="M12 3.5v1.2M5 7l.9.8M19 7l-.9.8" />
    </svg>
  );
}

export function CupIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M5 6h11v6.5a5.5 5.5 0 0 1-5.5 5.5h0A5.5 5.5 0 0 1 5 12.5V6Z" />
      <path d="M16 8h1.5a2.3 2.3 0 0 1 0 4.6H16M4 20.5h13" />
    </svg>
  );
}

export function WrenchIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L4 16.2l2.8 2.8 5.3-5.3a4 4 0 0 0 4.6-5.4l-2.6 2.6-2.1-.7-.7-2.1 2.6-2.6Z" />
    </svg>
  );
}

/* ----------------------------- extra iconen: werken bij ----------------------------- */

export function VanIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M3 15V8.5a1 1 0 0 1 1-1h9l4.5 4v3.5" />
      <path d="M3 15h1.5M17.5 15H21v-3.5h-4.5" />
      <circle cx="7.5" cy="16.5" r="1.8" />
      <circle cx="16" cy="16.5" r="1.8" />
      <path d="M9.3 16.5h5.4" />
    </svg>
  );
}

export function GraduationIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="m2.5 9 9.5-4 9.5 4-9.5 4-9.5-4Z" />
      <path d="M6.5 11v4c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4M20.5 9v6" />
    </svg>
  );
}

export function TrendingUpIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M3 16.5 9.5 10l4 4L21 6.5" />
      <path d="M15 6.5h6v6" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

/* ------------------------- extra iconen: veilig & verantwoord bouwen ---------------- */

export function TruckIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M2.5 7h10.5v9h-11V7Z" />
      <path d="M13 10.5h4l3.5 3v2.5H13v-5.5Z" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="16.5" cy="18" r="1.8" />
    </svg>
  );
}

export function CompassIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-1.7 5-5 1.7 1.7-5 5-1.7Z" />
    </svg>
  );
}

export function BroomIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="M20 4 9.5 14.5" />
      <path d="M9.5 14.5 4 20M9.5 14.5c-1-1-2.6-1-3.8.2C4.3 16.1 3.5 18 3 19.5c1.5-.5 3.4-1.3 4.8-2.7 1.2-1.2 1.2-2.8.2-3.8" />
      <path d="m17.5 6.5 1 1" />
    </svg>
  );
}

export function RecycleIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true">
      <path d="m9 3.5-3.5 5 2 1.2M5.5 8.5l-2 4.5h5" />
      <path d="m15 3.5 3.5 5-2 1.2M18.5 8.5l2 4.5h-5" />
      <path d="M12 20.5 8.5 15h7L12 20.5Z" />
    </svg>
  );
}
