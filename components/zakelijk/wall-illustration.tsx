import { DrawOnView } from "@/components/blueprint/draw-on-view";

/**
 * Illustratie (geen technische tekening) van de opbouw van een metal
 * stud-wand in doorsnede: rails, stijlen, isolatie en beplating. De lijnen
 * tekenen zichzelf bij in beeld komen; met "reduced motion" staat alles stil.
 */
export function WallIllustration() {
  const label = "fill-ink text-[9px] font-semibold";
  const sub = "fill-stone text-[8px]";
  return (
    <figure className="border border-mist bg-white p-5 md:p-7">
      <DrawOnView>
        <svg
          viewBox="0 0 320 220"
          className="h-auto w-full"
          role="img"
          aria-labelledby="wall-ill-title wall-ill-desc"
        >
          <title id="wall-ill-title">Opbouw van een metal stud-wand</title>
          <desc id="wall-ill-desc">
            Doorsnede van boven gezien: stalen stijlen in een rail, minerale wol
            ertussen en aan beide kanten gipsplaat, enkel of dubbel.
          </desc>
          {/* Beplating links en rechts (dubbel) */}
          {[48, 56, 196, 204].map((x, i) => (
            <rect
              key={x}
              x={x}
              y="40"
              width="8"
              height="140"
              fill="var(--color-paper)"
              stroke="var(--color-ink)"
              strokeWidth="1.2"
              className="draw-fade"
              style={{ ["--d" as string]: `${0.2 + i * 0.12}s` }}
            />
          ))}
          {/* Isolatie */}
          <path
            d="M110 46 q14 8 0 16 q-14 8 0 16 q14 8 0 16 q-14 8 0 16 q14 8 0 16 q-14 8 0 16 q14 8 0 16 q-14 8 0 16 M172 46 q14 8 0 16 q-14 8 0 16 q14 8 0 16 q-14 8 0 16 q14 8 0 16 q-14 8 0 16 q14 8 0 16 q-14 8 0 16"
            fill="none"
            stroke="var(--color-lime-dark)"
            strokeWidth="1.2"
            pathLength={1}
            className="draw-line"
            style={{ ["--d" as string]: "0.7s" }}
          />
          {/* Stijlen (C-profielen) */}
          {[84, 148].map((x, i) => (
            <path
              key={x}
              d={`M${x} 40 h-12 v140 h12`}
              fill="none"
              stroke="var(--color-navy)"
              strokeWidth="2.2"
              pathLength={1}
              className="draw-line"
              style={{ ["--d" as string]: `${0.1 + i * 0.2}s` }}
            />
          ))}
          {/* Rail onder- en bovenaan */}
          <path
            d="M64 36 h132 M64 184 h132"
            stroke="var(--color-navy)"
            strokeWidth="2.2"
            pathLength={1}
            className="draw-line"
          />
          {/* Labels */}
          <g className="draw-fade" style={{ ["--d" as string]: "1.2s" }}>
            <line x1="52" y1="60" x2="20" y2="24" stroke="var(--color-stone)" strokeWidth="0.8" />
            <text x="8" y="18" className={label}>Gipsplaat</text>
            <text x="8" y="28" className={sub} dy="0">enkel of dubbel</text>
          </g>
          <g className="draw-fade" style={{ ["--d" as string]: "1.35s" }}>
            <line x1="104" y1="110" x2="104" y2="206" stroke="var(--color-stone)" strokeWidth="0.8" />
            <text x="96" y="216" className={label}>Minerale wol</text>
          </g>
          <g className="draw-fade" style={{ ["--d" as string]: "1.5s" }}>
            <line x1="148" y1="70" x2="250" y2="24" stroke="var(--color-stone)" strokeWidth="0.8" />
            <text x="238" y="18" className={label}>Stalen stijl</text>
            <text x="238" y="28" className={sub}>in een rail</text>
          </g>
          <g className="draw-fade" style={{ ["--d" as string]: "1.65s" }}>
            <line x1="212" y1="150" x2="250" y2="190" stroke="var(--color-stone)" strokeWidth="0.8" />
            <text x="238" y="202" className={label}>Afwerking</text>
            <text x="238" y="212" className={sub}>sauswerk of behang</text>
          </g>
        </svg>
      </DrawOnView>
      <figcaption className="mt-4 text-sm leading-relaxed text-stone">
        Illustratie, niet op schaal. Welke plaat, hoeveel lagen en welke
        isolatie nodig zijn, hangt af van de eisen aan geluid, brandveiligheid
        en vocht in jouw ruimte.
      </figcaption>
    </figure>
  );
}
