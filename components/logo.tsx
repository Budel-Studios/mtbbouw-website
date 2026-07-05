/**
 * MTB Bouw beeldmerk — SVG-recreatie van het officiële tricolor "T"-logo
 * (lime → cyaan → donkerblauw, hoekige balk met puntige stam). Inline SVG =
 * scherp op elk formaat. De clip-id is per plek uniek (uid) zodat header en
 * footer elkaar niet in de weg zitten.
 *
 * Kleuren zijn ingeschat op basis van het aangeleverde logo — pas ze hier
 * centraal aan als de exacte merkwaarden anders zijn:
 */
const LIME = "#8FBE1F";
const CYAN = "#29ABE2";
const NAVY = "#1B3F94";

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
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="MTB Bouw"
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M18 26 L82 26 L73 44 L56 44 L56 80 L50 90 L44 80 L44 44 L27 44 Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect x="0" y="0" width="100" height="100" fill={LIME} />
        <polygon points="0,72.75 100,11.25 100,100 0,100" fill={CYAN} />
        <polygon points="0,94.75 100,33.25 100,100 0,100" fill={NAVY} />
      </g>
    </svg>
  );
}
