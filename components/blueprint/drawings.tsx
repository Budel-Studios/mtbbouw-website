import type { CSSProperties, ReactNode } from "react";

/**
 * Lijntekeningen in de stijl van de schetsen in de brochure (SAMEN.):
 * dunne inktlijnen, hemelsblauwe maat- en hulplijnen, mono-labels.
 * Zet ze in een <DrawOnView> om ze zichzelf te laten tekenen.
 */

const rect = (x: number, y: number, w: number, h: number) => `M${x} ${y}h${w}v${h}h${-w}Z`;
const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

const delay = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

/** Een lijn die zichzelf tekent. */
function Line({
  d,
  tone = "ink",
  width = 1.25,
  at = 0,
}: {
  d: string;
  tone?: "ink" | "sky" | "navy" | "soft";
  width?: number;
  at?: number;
}) {
  const stroke = {
    ink: "stroke-ink",
    sky: "stroke-sky",
    navy: "stroke-navy",
    soft: "stroke-ink/30",
  }[tone];
  return (
    <path
      d={d}
      pathLength={1}
      strokeWidth={width}
      strokeLinecap="square"
      className={`draw-line fill-none ${stroke}`}
      style={delay(at)}
    />
  );
}

/** Stippellijn of vlak dat infadet (stippels en tekenanimatie gaan niet samen). */
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
  tone = "sky",
  rotate,
}: {
  x: number;
  y: number;
  children: string;
  anchor?: "start" | "middle" | "end";
  tone?: "sky" | "ink" | "stone";
  rotate?: number;
}) {
  const fill = { sky: "fill-sky", ink: "fill-ink", stone: "fill-stone" }[tone];
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
      className={`${fill} font-mono`}
      fontSize="9.5"
      letterSpacing="0.8"
    >
      {children}
    </text>
  );
}

/** Maatlijn met schuine tikjes aan de uiteinden. */
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
  /** Label boven de lijn in plaats van eronder. */
  above?: boolean;
}) {
  const vertical = x1 === x2;
  const d = vertical
    ? `M${x1} ${y1}V${y2}M${x1 - 6} ${y1}h12M${x1 - 6} ${y2}h12M${x1 - 5} ${y1 + 5}l10 -10M${x1 - 5} ${y2 + 5}l10 -10`
    : `M${x1} ${y1}H${x2}M${x1} ${y1 - 6}v12M${x2} ${y1 - 6}v12M${x1 - 5} ${y1 + 5}l10 -10M${x2 - 5} ${y1 + 5}l10 -10`;
  return (
    <>
      <Line d={d} tone="sky" width={1} at={at} />
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

function NorthArrow({ x, y, at = 1.4 }: { x: number; y: number; at?: number }) {
  return (
    <Fade at={at}>
      <g transform={`translate(${x} ${y})`}>
        <path d="M8 0 L15 18 L8 13 L1 18 Z" className="fill-none stroke-sky" strokeWidth="1" />
        <path d="M8 0 L8 13 L1 18 Z" className="fill-sky" />
        <Label x={8} y={32}>
          N
        </Label>
      </g>
    </Fade>
  );
}

/** Callout-blokje uit de brochure: kader met lime kern en een aanwijslijn. */
function Callout({
  x,
  y,
  to,
  label,
  at = 1.6,
  left = false,
}: {
  x: number;
  y: number;
  to: [number, number];
  label: string;
  at?: number;
  /** Label links van het blokje. */
  left?: boolean;
}) {
  return (
    <Fade at={at}>
      <path d={`M${to[0]} ${to[1]}L${x} ${y}`} className="fill-none stroke-ink" strokeWidth="1" />
      <path d={rect(x - 8, y - 8, 16, 16)} className="fill-white stroke-ink" strokeWidth="1.2" />
      <path d={rect(x - 3.5, y - 3.5, 7, 7)} className="fill-lime" />
      <Label x={left ? x - 14 : x + 14} y={y + 3.5} anchor={left ? "end" : "start"} tone="ink">
        {label}
      </Label>
    </Fade>
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
      className={`block h-auto w-full ${className}`}
    >
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ */

/** Woning met een nieuwe uitbouw, in aanzicht. Voor Wonen & Verbouwen. */
export function HouseDrawing({ className }: { className?: string }) {
  const hatch = Array.from({ length: 40 }, (_, i) => 24 + i * 14)
    .map((x) => `M${x} 262L${x + 10} 252`)
    .join("");
  return (
    <Svg viewBox="0 0 600 300" label="Schets van een woning met een nieuwe uitbouw" className={className}>
      <Fade at={0}>
        <Label x={20} y={22} anchor="start">
          SCHETS · WONING + UITBOUW · 1:100
        </Label>
      </Fade>
      <NorthArrow x={562} y={8} />

      {/* maaiveld */}
      <Line d="M20 250H580" width={1.6} at={0.1} />
      <Fade at={0.6}>
        <path d={hatch} className="fill-none stroke-ink/25" strokeWidth="1" />
      </Fade>

      {/* bestaande woning */}
      <Line d="M80 250V136H320V250" at={0.2} />
      <Line d="M62 148L200 44L338 148" width={1.6} at={0.35} />
      <Line d="M262 91V58H284V107" at={0.5} />
      <Line d={`${rect(108, 168, 44, 40)}M130 168V208`} at={0.6} />
      <Line d={`${rect(248, 168, 44, 40)}M270 168V208`} at={0.65} />
      <Line d={`${rect(184, 96, 32, 28)}M200 96V124`} at={0.7} />
      <Line d="M182 250V184H218V250" at={0.75} />
      <Fade at={1.3}>
        <Label x={108} y={236} anchor="start" tone="stone">
          BESTAAND
        </Label>
      </Fade>

      {/* nieuwe uitbouw */}
      <Fade at={0.9}>
        <path d="M320 174H484V250H320Z" className="fill-sky/10" />
      </Fade>
      <Line d={rect(320, 164, 170, 10)} tone="navy" width={1.6} at={0.8} />
      <Line d="M484 174V250" tone="navy" width={1.6} at={0.9} />
      <Line d={`${rect(350, 190, 100, 60)}M400 190V250`} tone="navy" at={1} />
      <Line d="M362 238L384 200M412 238L434 200" tone="sky" width={1} at={1.2} />
      <Fade at={1.3}>
        <Label x={402} y={185}>
          UITBOUW
        </Label>
      </Fade>

      <Dim x1={320} y1={278} x2={484} y2={278} label="4.000" at={1.1} />
      <Dim x1={524} y1={164} x2={524} y2={250} label="2.800" at={1.2} />
      <Callout x={540} y={118} to={[486, 166]} label="NIEUW" />
    </Svg>
  );
}

/** Plattegrond van een lunchroom, naar de schets in de brochure. Voor Zakelijke afbouw. */
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
    <Svg viewBox="0 -14 650 262" label="Schets van een lunchroom in plattegrond" className={className}>
      <Fade at={0}>
        <Label x={20} y={-2} anchor="start">
          SCHETS · LUNCHROOM · 1:100
        </Label>
      </Fade>
      <NorthArrow x={592} y={40} />

      {/* wanden */}
      <Line d="M20 30H520V200H130M90 200H20Z" width={1.8} at={0.1} />
      <Line d="M24 34H516V196H130M90 196H24Z" tone="soft" at={0.25} />
      <Line d="M300 30V120M300 150V200" width={1.4} at={0.4} />
      <Fade at={0.9}>
        <path d="M90 200V160M90 200A40 40 0 0 0 130 160" className="fill-none stroke-ink/60" strokeWidth="1" strokeDasharray="3 2" />
      </Fade>

      {/* bar en keuken */}
      <Line d={`${rect(340, 56, 150, 26)}M340 82V150H368V82`} tone="navy" at={0.6} />
      <Fade at={0.9}>
        <path d={rect(340, 56, 150, 26)} className="fill-sky/10" />
      </Fade>

      {/* tafels en stoelen */}
      {tables.map(([cx, cy], i) => (
        <g key={i}>
          <Line d={circle(cx, cy, 11)} tone="sky" width={1.1} at={0.7 + i * 0.08} />
          <Line d={rect(cx - 5, cy < 100 ? cy - 22 : cy + 15, 10, 7)} tone="sky" width={1} at={0.8 + i * 0.08} />
        </g>
      ))}
      <Line d={rect(240, 100, 40, 40)} tone="sky" width={1.1} at={1} />

      <Fade at={1.3}>
        <Label x={415} y={73}>
          BAR + VITRINE
        </Label>
        <Label x={410} y={182}>
          KEUKEN
        </Label>
        <Label x={130} y={113} tone="stone">
          ZITGEDEELTE
        </Label>
      </Fade>

      <Dim x1={20} y1={14} x2={520} y2={14} label="12.000" at={1.1} above />
      <Dim x1={548} y1={30} x2={548} y2={200} label="6.500" at={1.2} />
    </Svg>
  );
}

/** Kozijn in aanzicht met een vast raam en een draaikiepraam. Voor Kozijnen. */
export function WindowDrawing({ className }: { className?: string }) {
  return (
    <Svg viewBox="0 0 540 300" label="Schets van een kozijn met vast raam en draaikiepraam" className={className}>
      <Fade at={0}>
        <Label x={20} y={22} anchor="start">
          SCHETS · KOZIJN · AANZICHT · 1:20
        </Label>
      </Fade>
      <Line d={rect(150, 50, 300, 200)} width={2} at={0.1} />
      <Line d={rect(162, 62, 276, 176)} at={0.3} />
      <Line d="M300 62V238" width={1.6} at={0.45} />
      <Line d={rect(310, 72, 118, 156)} tone="navy" at={0.55} />
      <Line d="M140 250H460L466 258H134Z" width={1.4} at={0.6} />
      <Line d="M182 218L222 158M200 222L248 150" tone="sky" width={1} at={0.9} />
      <Line d="M330 212L362 164" tone="sky" width={1} at={1} />
      <Fade at={1.1}>
        {/* draaikiep-symbool: punten wijzen naar de scharnierzijde */}
        <path d="M428 72L310 150L428 228M310 72L369 228L428 72" className="fill-none stroke-sky" strokeWidth="1" strokeDasharray="4 3" />
        <Label x={231} y={154} tone="stone">
          VAST
        </Label>
        <Label x={369} y={246} tone="stone">
          DRAAIKIEP
        </Label>
      </Fade>
      <Dim x1={150} y1={280} x2={450} y2={280} label="1.800" at={1.1} />
      <Dim x1={488} y1={50} x2={488} y2={250} label="1.400" at={1.2} />
      <Callout x={100} y={110} to={[170, 124]} label="TRIPLE GLAS" at={1.5} left />
    </Svg>
  );
}

/** Houtskeletbouwwand met kozijnopening, zoals we die in de werkplaats maken. Voor Prefab. */
export function PrefabDrawing({ className }: { className?: string }) {
  const studs = [80, 140, 200, 260, 380, 440, 510];
  return (
    <Svg viewBox="10 0 530 300" label="Schets van een prefab houtskeletbouwwand met kozijnopening" className={className}>
      <Fade at={0}>
        <Label x={20} y={22} anchor="start">
          SCHETS · HSB-WANDELEMENT · 1:50
        </Label>
      </Fade>
      <Line d={rect(80, 52, 440, 14)} width={1.4} at={0.1} />
      <Line d={rect(80, 236, 440, 12)} width={1.4} at={0.15} />
      {studs.map((x, i) => (
        <Line key={x} d={rect(x, 66, 10, 170)} at={0.3 + i * 0.07} />
      ))}
      {/* kozijnopening met latei en borstwering */}
      <Line d={rect(270, 96, 110, 16)} tone="navy" width={1.4} at={0.8} />
      <Line d={rect(270, 176, 110, 10)} tone="navy" width={1.4} at={0.85} />
      <Line d={`${rect(300, 66, 8, 30)}${rect(342, 66, 8, 30)}`} at={0.95} />
      <Line d={`${rect(300, 186, 8, 50)}${rect(342, 186, 8, 50)}`} at={1} />
      <Fade at={1}>
        <path d="M274 116H376V172H274Z" className="fill-sky/10" />
        <Label x={325} y={148} tone="stone">
          KOZIJN
        </Label>
      </Fade>
      <Dim x1={80} y1={36} x2={520} y2={36} label="4.400" at={1.1} above />
      <Dim x1={145} y1={268} x2={205} y2={268} label="600 H.O.H." at={1.2} />
    </Svg>
  );
}
