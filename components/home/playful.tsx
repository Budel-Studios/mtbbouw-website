import { LogoMark } from "@/components/logo";

/**
 * Speelse accenten — handgeschreven notities, stickers, een draaiende
 * badge en een plaatsnamen-band. Alleen in gebruik op de testpagina
 * (/test-speels) zodat ze eerst beoordeeld kunnen worden.
 *
 * `hand` is de className van het handschriftfont (Caveat), die de
 * testpagina via next/font aanlevert.
 */

/** Handgeschreven notitie met optionele krullende pijl. */
export function HandNote({
  children,
  hand,
  arrow,
  className = "",
}: {
  children: React.ReactNode;
  hand: string;
  arrow?: "down-left" | "down-right" | "right";
  className?: string;
}) {
  const paths = {
    "down-left": "M50 4 C 44 22, 28 30, 8 34 M8 34 l9 -7 M8 34 l10 4",
    "down-right": "M6 4 C 12 22, 28 30, 48 34 M48 34 l-9 -7 M48 34 l-10 4",
    right: "M4 20 C 18 6, 34 6, 52 18 M52 18 l-10 -2 M52 18 l-4 -9",
  } as const;
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none inline-flex select-none items-end gap-1 text-navy ${className}`}
    >
      {arrow === "down-left" && (
        <svg viewBox="0 0 56 40" className="h-8 w-12 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d={paths[arrow]} pathLength={1} className="animate-draw" />
        </svg>
      )}
      <span className={`${hand} text-2xl leading-none md:text-[1.75rem]`}>{children}</span>
      {(arrow === "down-right" || arrow === "right") && (
        <svg viewBox="0 0 56 40" className="h-8 w-12 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d={paths[arrow]} pathLength={1} className="animate-draw" />
        </svg>
      )}
    </span>
  );
}

/** Handgetekende lime onderstreping (tekent zichzelf bij het laden). */
export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -bottom-2 left-0 h-[0.28em] w-full text-lime ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
    >
      <path
        d="M4 16 C 40 4, 70 22, 110 12 S 180 4, 220 14 S 280 18, 296 8"
        pathLength={1}
        className="animate-draw"
      />
    </svg>
  );
}

/** Schuin geplakte sticker. */
export function Sticker({
  children,
  tone = "lime",
  rotate = "-rotate-6",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "lime" | "navy" | "sky" | "white";
  rotate?: string;
  className?: string;
}) {
  const tones = {
    lime: "bg-lime text-ink",
    navy: "bg-navy text-white",
    sky: "bg-sky text-ink",
    white: "bg-white text-navy border border-navy",
  };
  return (
    <span
      className={`label-mono pointer-events-none inline-block px-2.5 py-1.5 shadow-card ${tones[tone]} ${rotate} ${className}`}
    >
      {children}
    </span>
  );
}

/** Ronde badge met draaiende tekst rond het T-beeldmerk. */
export function SpinBadge({ className = "" }: { className?: string }) {
  const text = "BOUW · SAMEN · ENSCHEDE · TWENTE · ";
  return (
    <div aria-hidden="true" className={className}>
      <div className="relative grid size-28 place-items-center rounded-full bg-paper text-navy shadow-pop md:size-36">
      <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 size-full">
        <defs>
          <path id="badge-circle" d="M50 50 m-38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0" />
        </defs>
        <text className="fill-current" style={{ fontFamily: "var(--font-mono)", fontSize: 8.6, letterSpacing: 1.6 }}>
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <LogoMark uid="badge" className="size-9 md:size-11" />
      </div>
    </div>
  );
}

/** Navy band met doorlopende plaatsnamen uit ons werkgebied. */
export function PlacesMarquee() {
  const places = [
    "Enschede",
    "Hengelo",
    "Almelo",
    "Oldenzaal",
    "Borne",
    "Haaksbergen",
    "Losser",
    "Twente",
  ];
  const row = (
    <div className="flex shrink-0 items-center">
      {places.map((p) => (
        <span key={p} className="flex items-center">
          <span className="display px-6 text-3xl md:px-10 md:text-5xl">{p}</span>
          <svg viewBox="0 0 24 24" className="size-5 text-lime md:size-7" fill="currentColor" aria-hidden="true">
            <path d="M12 0 L14.6 9.4 L24 12 L14.6 14.6 L12 24 L9.4 14.6 L0 12 L9.4 9.4 Z" />
          </svg>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden bg-navy py-6 text-white md:py-8" aria-label="Werkgebied: Enschede, Hengelo, Almelo, Oldenzaal, Borne, Haaksbergen, Losser en heel Twente">
      <div className="animate-marquee flex w-max" aria-hidden="true">
        {row}
        {row}
      </div>
    </div>
  );
}

/** Klein handgetekend sterretje/doodle. */
export function Doodle({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className={`pointer-events-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M20 4 L22 17 L35 14 L24 22 L31 34 L20 26 L9 34 L16 22 L5 14 L18 17 Z" pathLength={1} className="animate-draw" />
    </svg>
  );
}
