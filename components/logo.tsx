/**
 * MTB Bouw beeldmerk — vectorversie van het officiële tricolor "T"-logo.
 *
 * Geometrie en kleuren zijn overgenomen uit het aangeleverde bronbestand
 * (LOGO oud, 6.svg) en pixelgewijs geverifieerd tegen dat origineel. De
 * clip-id is per plek uniek (uid) zodat header en footer elkaar niet in de
 * weg zitten.
 *
 * Het volledige logo mét woordmerk staat als raster in
 * /public/images/brand/logo-full.png (voor social/OG en extern gebruik).
 */
const LIME = "#ABE000";
const CYAN = "#00AEF7";
const NAVY = "#003384";

export function LogoMark({
  className,
  uid = "mtb",
}: {
  className?: string;
  uid?: string;
}) {
  const clipId = `mtb-t-${uid}`;
  return (
    <svg
      viewBox="0 0 100.49 100"
      className={className}
      role="img"
      aria-label="MTB Bouw"
    >
      <defs>
        <clipPath id={clipId}>
          {/* Balk loopt naar onderen breder uit; stam eindigt in een punt. */}
          <path d="M12.96 0 L86.32 0 L100.49 22 L62.5 22 L62.5 85 L49.84 100 L37.08 85 L37.08 22 L0 22 Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="100.49" height="100" fill={LIME} />
        {/* Twee diagonalen delen het merk in lime → cyaan → navy. */}
        <polygon points="0,56.6 100.49,-1.7 100.49,100 0,100" fill={CYAN} />
        <polygon points="0,31.7 100.49,80.7 100.49,100 0,100" fill={NAVY} />
      </g>
    </svg>
  );
}
