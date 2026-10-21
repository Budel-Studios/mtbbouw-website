/**
 * MTB Bouw beeldmerk — de T uit het officiële logo, in de minimalistische
 * huisstijl hertekend met een vloeiend verloop lime → hemelsblauw → navy
 * (dezelfde drie merkkleuren als het origineel, zonder harde vlakken).
 *
 * De gradient-id is per plek uniek (uid) zodat header, footer en andere
 * instanties elkaar niet in de weg zitten.
 *
 * Het volledige logo mét woordmerk staat ook als raster in
 * /public/images/brand/logo-full.png (voor schema.org, e-mail en social).
 */
const LIME = "#ABE000";
const SKY = "#00AEF7";
const NAVY = "#003384";

export function LogoMark({
  className,
  uid = "mtb",
}: {
  className?: string;
  uid?: string;
}) {
  const gradientId = `mtb-g-${uid}`;
  return (
    <svg
      viewBox="0 0 100.49 100"
      className={className}
      role="img"
      aria-label="MTB Bouw"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor={LIME} />
          <stop offset="0.45" stopColor={SKY} />
          <stop offset="0.85" stopColor={NAVY} />
        </linearGradient>
      </defs>
      <path
        d="M12.96 0 L86.32 0 L100.49 22 L62.5 22 L62.5 85 L49.84 100 L37.08 85 L37.08 22 L0 22 Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}

/**
 * Beeldmerk + woordmerk "MTB BOUW" in Montserrat. `tone="light"` voor
 * gebruik op navy of donkere vlakken.
 */
export function Logo({
  uid = "logo",
  tone = "dark",
  className = "",
}: {
  uid?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`.trim()}>
      <LogoMark uid={uid} className="h-7 w-7 shrink-0" />
      <span
        className={`font-display text-lg font-extrabold leading-none tracking-[-0.02em] ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        MTB BOUW
      </span>
    </span>
  );
}
