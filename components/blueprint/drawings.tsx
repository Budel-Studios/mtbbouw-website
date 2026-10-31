import type { CSSProperties, ReactNode } from "react";

/**
 * Lijntekeningen in de stijl van de schetsen in de brochure (SAMEN.).
 * Wat er al staat is een rustige inktschets; alleen wat nieuw is (de
 * uitbouw, de inrichting, het kozijn, de kozijnopening) krijgt kleur.
 * Zet ze in een <DrawOnView> om ze zichzelf te laten tekenen.
 */

const rect = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}Z`;
const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

const delay = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

type Tone = "ink" | "soft" | "new" | "new-soft";

const STROKE: Record<Tone, string> = {
  ink: "stroke-ink/80", // bestaand
  soft: "stroke-ink/30", // hulp- en maatlijnen
  new: "stroke-navy", // nieuw
  "new-soft": "stroke-sky", // details van het nieuwe
};

/** Een lijn die zichzelf tekent. */
function Line({
  d,
  tone = "ink",
  width = 1.25,
  at = 0,
}: {
  d: string;
  tone?: Tone;
  width?: number;
  at?: number;
}) {
  return (
    <path
      d={d}
      pathLength={1}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`draw-line fill-none ${STROKE[tone]}`}
      style={delay(at)}
    />
  );
}

/** Stippellijn, vlak of label dat infadet (stippels en tekenanimatie gaan niet samen). */
function Fade({ children, at = 1.1 }: { children: ReactNode; at?: number }) {
  return (
    <g className="draw-fade" style={delay(at)}>
      {children}
    </g>
  );
}

function Label({
  x,
  y,
  children,
  anchor = "middle",
  isNew = false,
  rotate,
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
  isNew?: boolean;
  rotate?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
      className={`${isNew ? "fill-navy" : "fill-stone"} font-mono`}
      fontSize="9.5"
      letterSpacing="0.8"
    >
      {children}
    </text>
  );
}

/** Maatlijn met schuine tikjes aan de uiteinden, in potlood-grijs. */
function Dim({
  x1,
  y1,
  x2,
  y2,
  label,
  at = 1,
  above = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  at?: number;
  above?: boolean;
}) {
  const vertical = x1 === x2;
  const d = vertical
    ? `M${x1} ${y1}V${y2}M${x1 - 6} ${y1}h12M${x1 - 6} ${y2}h12M${x1 - 5} ${y1 + 5}l10 -10M${x1 - 5} ${y2 + 5}l10 -10`
    : `M${x1} ${y1}H${x2}M${x1} ${y1 - 6}v12M${x2} ${y1 - 6}v12M${x1 - 5} ${y1 + 5}l10 -10M${x2 - 5} ${y1 + 5}l10 -10`;
  return (
    <>
      <Line d={d} tone="soft" width={1} at={at} />
      <Fade at={at + 0.6}>
        {vertical ? (
          <Label x={x1 + 16} y={(y1 + y2) / 2} rotate={-90}>
            {label}
          </Label>
        ) : (
          <Label x={(x1 + x2) / 2} y={above ? y1 - 7 : y1 + 18}>
            {label}
          </Label>
        )}
      </Fade>
    </>
  );
}

function Svg({
  viewBox,
  label,
  children,
  className = "",
}: {
  viewBox: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
      className={`block h-full w-full ${className}`}
    >
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ */

/** Bestaande woning (schets) met een nieuwe uitbouw (kleur). */
export function HouseDrawing({ className }: { className?: string }) {
  const hatch = Array.from({ length: 38 }, (_, i) => 50 + i * 14)
    .map((x) => `M${x} 262L${x + 10} 252`)
    .join("");
  return (
    <Svg viewBox="30 20 540 285" label="Schets van een woning met een nieuwe uitbouw" className={className}>
      {/* maaiveld */}
      <Line d="M46 250H560" width={1.4} at={0.1} />
      <Fade at={0.6}>
        <path d={hatch} className="fill-none stroke-ink/20" strokeWidth="1" />
      </Fade>

      {/* bestaande woning: schets */}
      <Line d="M80 250V136H320V250" at={0.2} />
      <Line d="M62 148L200 44L338 148" width={1.4} at={0.35} />
      <Line d="M262 91V58H284V107" at={0.5} />
      <Line d={`${rect(108, 168, 44, 40)}M130 168V208`} width={1} at={0.6} />
      <Line d={`${rect(248, 168, 44, 40)}M270 168V208`} width={1} at={0.65} />
      <Line d={`${rect(184, 96, 32, 28)}M200 96V124`} width={1} at={0.7} />
      <Line d="M182 250V184H218V250" width={1} at={0.75} />

      {/* nieuwe uitbouw: kleur */}
      <Fade at={0.9}>
        <path d="M320 174H484V250H320Z" className="fill-sky/15" />
      </Fade>
      <Line d={rect(320, 164, 170, 10)} tone="new" width={1.8} at={0.8} />
      <Line d="M484 174V250" tone="new" width={1.8} at={0.9} />
      <Line d={`${rect(350, 190, 100, 60)}M400 190V250`} tone="new" width={1.4} at={1} />
      <Line d="M362 238L384 200M412 238L434 200" tone="new-soft" width={1} at={1.2} />
      <Fade at={1.3}>
        <Label x={402} y={185} isNew>
          UITBOUW
        </Label>
      </Fade>

      <Dim x1={320} y1={278} x2={484} y2={278} label="4.000" at={1.1} />
    </Svg>
  );
}

/** Bestaande ruimte (schets) met een nieuwe inrichting (kleur): een lunchroom. */
export function LunchroomDrawing({ className }: { className?: string }) {
  const tables: [number, number][] = [
    [70, 74],
    [130, 74],
    [190, 74],
    [70, 144],
    [130, 144],
    [190, 144],
  ];
  return (
    <Svg viewBox="0 -6 560 226" label="Schets van een lunchroom in plattegrond" className={className}>
      {/* bestaande ruimte: schets */}
      <Line d="M20 30H520V200H130M90 200H20Z" width={1.6} at={0.1} />
      <Line d="M300 30V120M300 150V200" width={1.2} at={0.4} />
      <Fade at={0.9}>
        <path d="M90 200V160M90 200A40 40 0 0 0 130 160" className="fill-none stroke-ink/40" strokeWidth="1" strokeDasharray="3 2" />
      </Fade>

      {/* nieuwe inrichting: kleur */}
      <Fade at={0.9}>
        <path d={rect(340, 56, 150, 26)} className="fill-sky/15" />
      </Fade>
      <Line d={`${rect(340, 56, 150, 26)}M340 82V150H368V82`} tone="new" width={1.4} at={0.6} />
      {tables.map(([cx, cy], i) => (
        <g key={i}>
          <Line d={circle(cx, cy, 11)} tone="new-soft" width={1.1} at={0.7 + i * 0.08} />
          <Line d={rect(cx - 5, cy < 100 ? cy - 22 : cy + 15, 10, 7)} tone="new-soft" width={1} at={0.8 + i * 0.08} />
        </g>
      ))}
      <Line d={rect(240, 100, 40, 40)} tone="new-soft" width={1.1} at={1} />

      <Fade at={1.3}>
        <Label x={415} y={73} isNew>
          BAR + VITRINE
        </Label>
        <Label x={410} y={182}>
          KEUKEN
        </Label>
      </Fade>

      <Dim x1={20} y1={14} x2={520} y2={14} label="12.000" at={1.1} above />
    </Svg>
  );
}

/** Bestaande gevel (schets) met een nieuw kozijn (kleur). */
export function WindowDrawing({ className }: { className?: string }) {
  // Metselwerk links en rechts van het kozijn, als lichte lijnen.
  const bricks = Array.from({ length: 16 }, (_, i) => 40 + i * 14)
    .map((y) => `M96 ${y}H140M460 ${y}H504`)
    .join("");
  return (
    <Svg viewBox="80 20 440 285" label="Schets van een gevel met een nieuw kozijn met vast raam en draaikiepraam" className={className}>
      {/* bestaande gevel: schets */}
      <Fade at={0.2}>
        <path d={bricks} className="fill-none stroke-ink/20" strokeWidth="1" />
      </Fade>
      <Line d="M96 40H504" width={1} at={0.1} />
      <Line d="M140 44H460" width={1.2} at={0.2} />
      <Line d="M134 258H466" width={1.2} at={0.3} />

      {/* nieuw kozijn: kleur */}
      <Fade at={0.9}>
        <path d={`${rect(162, 62, 138, 176)}`} className="fill-sky/10" />
        <path d={`${rect(310, 72, 118, 156)}`} className="fill-sky/10" />
      </Fade>
      <Line d={rect(150, 50, 300, 200)} tone="new" width={2} at={0.4} />
      <Line d={rect(162, 62, 276, 176)} tone="new" width={1.2} at={0.55} />
      <Line d="M300 62V238" tone="new" width={1.6} at={0.65} />
      <Line d={rect(310, 72, 118, 156)} tone="new" width={1.2} at={0.75} />
      <Fade at={1.1}>
        {/* draaikiep-symbool: punten wijzen naar de scharnierzijde */}
        <path d="M428 72L310 150L428 228M310 72L369 228L428 72" className="fill-none stroke-sky" strokeWidth="1" strokeDasharray="4 3" />
      </Fade>

      <Dim x1={150} y1={280} x2={450} y2={280} label="1.800" at={1.1} />
    </Svg>
  );
}

/** Houtskeletbouwwand (schets) met een nieuwe kozijnopening (kleur). */
export function PrefabDrawing({ className }: { className?: string }) {
  const studs = [80, 140, 200, 260, 380, 440, 510];
  return (
    <Svg viewBox="40 20 520 270" label="Schets van een prefab houtskeletbouwwand met kozijnopening" className={className}>
      {/* wandelement: schets */}
      <Line d={rect(80, 52, 440, 14)} width={1.2} at={0.1} />
      <Line d={rect(80, 236, 440, 12)} width={1.2} at={0.15} />
      {studs.map((x, i) => (
        <Line key={x} d={rect(x, 66, 10, 170)} width={1} at={0.3 + i * 0.07} />
      ))}

      {/* kozijnopening met latei en borstwering: kleur */}
      <Fade at={1}>
        <path d="M274 116H376V172H274Z" className="fill-sky/15" />
      </Fade>
      <Line d={rect(270, 96, 110, 16)} tone="new" width={1.4} at={0.8} />
      <Line d={rect(270, 176, 110, 10)} tone="new" width={1.4} at={0.85} />
      <Line d={`${rect(300, 66, 8, 30)}${rect(342, 66, 8, 30)}`} tone="new" width={1} at={0.95} />
      <Line d={`${rect(300, 186, 8, 50)}${rect(342, 186, 8, 50)}`} tone="new" width={1} at={1} />
      <Fade at={1.2}>
        <Label x={325} y={148} isNew>
          KOZIJN
        </Label>
      </Fade>

      <Dim x1={145} y1={268} x2={205} y2={268} label="600 H.O.H." at={1.2} />
    </Svg>
  );
}
