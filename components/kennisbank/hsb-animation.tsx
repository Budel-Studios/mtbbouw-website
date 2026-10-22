"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/** Media query als React-state, zonder setState in een effect. */
function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

/**
 * Animatie "Zo wordt een HSB-wand gemaakt" — bovenaanzicht (horizontale
 * doorsnede) van een houtskeletbouwwand die stap voor stap wordt opgebouwd,
 * van kaal houten frame tot afgewerkte wand. Buiten = boven, binnen = onder.
 *
 * Speelt automatisch af zodra hij in beeld komt, met vorige/volgende,
 * pauze en klikbare stappen. Respecteert prefers-reduced-motion.
 */

type Layer = "frame" | "osb" | "isolatie" | "dampremmend" | "gips" | "dampopen" | "regels" | "gevel";

const STEPS: { title: string; text: string; show: Layer[] }[] = [
  {
    title: "Het houten skelet",
    text: "Het begint met een frame van houten stijlen en regels, meestal om de 60 cm. Dit skelet draagt de wand, het dak en de verdiepingsvloer. In de werkplaats wordt het op maat gezaagd en vlak op de grond in elkaar gezet.",
    show: ["frame"],
  },
  {
    title: "Beplating maakt het stijf",
    text: "Op één kant van het frame komt een plaat, bijvoorbeeld OSB. Die houdt het skelet haaks en stijf, zodat de wand niet kan schranken. Nu is het al een stevig wandelement.",
    show: ["frame", "osb"],
  },
  {
    title: "Isolatie tussen de stijlen",
    text: "De ruimtes tussen de stijlen worden helemaal gevuld met isolatie, zoals glaswol of houtvezel. Omdat de isolatie ín de constructie zit in plaats van ervoor, is een HSB-wand dun en toch heel goed geïsoleerd.",
    show: ["frame", "osb", "isolatie"],
  },
  {
    title: "Dampremmende folie aan de binnenkant",
    text: "Aan de warme binnenkant komt een dampremmende folie, naadloos afgeplakt. Die voorkomt dat vochtige binnenlucht in de wand trekt en daar condenseert. Dit is het detail waar een goede HSB-bouwer het verschil maakt.",
    show: ["frame", "osb", "isolatie", "dampremmend"],
  },
  {
    title: "Binnenbeplating",
    text: "Daarover komt de binnenbeplating, zoals gipsplaat. Na het afwerken (stucen of behangen) zie je binnen geen verschil met een stenen muur.",
    show: ["frame", "osb", "isolatie", "dampremmend", "gips"],
  },
  {
    title: "Dampopen folie aan de buitenkant",
    text: "Aan de buitenkant juist een dampopen, waterkerende folie: regen blijft buiten, maar vocht uit de wand kan wél naar buiten ontsnappen. Zo blijft de constructie droog en gezond.",
    show: ["frame", "osb", "isolatie", "dampremmend", "gips", "dampopen"],
  },
  {
    title: "Regelwerk en ventilatiespouw",
    text: "Op de folie komen latten. Zo ontstaat een geventileerde spouw achter de gevelbekleding, waardoor eventueel vocht snel kan opdrogen.",
    show: ["frame", "osb", "isolatie", "dampremmend", "gips", "dampopen", "regels"],
  },
  {
    title: "Gevelbekleding naar keuze",
    text: "Als laatste de gevel: hout, Finiplus of een andere kunststof bekleding, steenstrips of stuc. Daarna gaat het element naar de bouwplaats, waar het in korte tijd wordt geplaatst en aangesloten op het bestaande huis.",
    show: ["frame", "osb", "isolatie", "dampremmend", "gips", "dampopen", "regels", "gevel"],
  },
];

const LABELS: { layer: Layer; y: number; label: string; x?: number; ty?: number }[] = [
  { layer: "gevel", y: 43, ty: 34, label: "Gevelbekleding" },
  { layer: "regels", y: 74, ty: 64, label: "Regelwerk + ventilatiespouw" },
  { layer: "dampopen", y: 94, ty: 94, label: "Dampopen folie" },
  { layer: "osb", y: 105, ty: 124, label: "OSB-plaat" },
  { layer: "frame", y: 170, label: "Houten stijl", x: 657 },
  { layer: "isolatie", y: 230, label: "Isolatie" },
  { layer: "dampremmend", y: 303, ty: 296, label: "Dampremmende folie" },
  { layer: "gips", y: 318, ty: 328, label: "Gipsplaat (binnen)" },
];

const WALL_X0 = 30;
const WALL_X1 = 690;
const STUDS = [50, 250, 450, 640];
const STUD_W = 34;

export function HsbAnimation() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  // Op een telefoon is de doorsnede met labels ernaast te klein: dan tonen we
  // alleen de wand (ingezoomd) en zetten we de lagen als legenda eronder.
  const small = useMediaQuery("(max-width: 767px)");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (!mq.matches) setPlaying(true);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => {
      setStep((s) => (s + 1) % STEPS.length);
    }, step === STEPS.length - 1 ? 5200 : 3600);
    return () => window.clearTimeout(t);
  }, [playing, step]);

  const visible = new Set(STEPS[step].show);
  const fresh = new Set(STEPS[step].show.filter((l) => !(step > 0 && STEPS[step - 1].show.includes(l))));
  const layerStyle = (l: Layer, dy = -14): React.CSSProperties => ({
    opacity: visible.has(l) ? 1 : 0,
    transform: visible.has(l) ? "translateY(0)" : `translateY(${dy}px)`,
    transition: reduced ? "none" : "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
  });

  const go = (i: number) => {
    setPlaying(false);
    setStep((i + STEPS.length) % STEPS.length);
  };

  return (
    <figure ref={ref} className="not-prose my-12 border border-mist bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mist px-5 py-4 md:px-7">
        <p className="eyebrow text-stone">Animatie — zo wordt een HSB-wand gemaakt</p>
        <p className="label-mono text-navy">
          Stap {step + 1} / {STEPS.length}
        </p>
      </div>

      <div className="px-3 pt-5 md:px-6">
        <svg viewBox={small ? "22 4 676 354" : "0 0 1060 360"} className="h-auto w-full" role="img" aria-label={`Doorsnede van een HSB-wand, stap ${step + 1}: ${STEPS[step].title}`}>
          <defs>
            <pattern id="hsb-wool" width="22" height="16" patternUnits="userSpaceOnUse">
              <rect width="22" height="16" fill="#f3e6a6" />
              <path d="M0 8 Q 5.5 2 11 8 T 22 8" fill="none" stroke="#d9c26a" strokeWidth="1.4" />
            </pattern>
            <pattern id="hsb-osb" width="18" height="10" patternUnits="userSpaceOnUse">
              <rect width="18" height="10" fill="#d4ad73" />
              <rect x="2" y="2" width="6" height="2" fill="#b98f55" />
              <rect x="10" y="6" width="5" height="2" fill="#c49a5f" />
            </pattern>
            <pattern id="hsb-wood" width="40" height="8" patternUnits="userSpaceOnUse">
              <rect width="40" height="8" fill="#e2bf8c" />
              <path d="M0 4 H40" stroke="#cfa66b" strokeWidth="0.8" />
            </pattern>
          </defs>

          {/* buiten / binnen */}
          <text x={WALL_X0} y="20" className="fill-stone" style={{ font: "500 13px var(--font-mono, monospace)", letterSpacing: "0.12em" }}>
            BUITEN
          </text>
          <text x={WALL_X0} y="352" className="fill-stone" style={{ font: "500 13px var(--font-mono, monospace)", letterSpacing: "0.12em" }}>
            BINNEN
          </text>

          {/* Gevelbekleding (verticale delen, in doorsnede als band met voegen) */}
          <g style={layerStyle("gevel")}>
            <rect x={WALL_X0} y="30" width={WALL_X1 - WALL_X0} height="26" fill="#b27c4a" />
            {Array.from({ length: 16 }).map((_, i) => (
              <rect key={i} x={WALL_X0 + 18 + i * 42} y="30" width="3" height="26" fill="#1a1a18" opacity="0.75" />
            ))}
          </g>

          {/* Regelwerk + spouw */}
          <g style={layerStyle("regels")}>
            <rect x={WALL_X0} y="56" width={WALL_X1 - WALL_X0} height="36" fill="#f6f6f4" />
            {STUDS.map((x) => (
              <rect key={x} x={x + 2} y="58" width="30" height="34" fill="url(#hsb-wood)" stroke="#a87c48" strokeWidth="1" />
            ))}
            <path d={`M${WALL_X0 + 120} 74 h40 m-8 -6 l8 6 l-8 6`} stroke="#00aef7" strokeWidth="2" fill="none" />
          </g>

          {/* Dampopen folie */}
          <g style={layerStyle("dampopen")}>
            <rect x={WALL_X0} y="92" width={WALL_X1 - WALL_X0} height="5" fill="#00aef7" />
          </g>

          {/* OSB buiten */}
          <g style={layerStyle("osb")}>
            <rect x={WALL_X0} y="97" width={WALL_X1 - WALL_X0} height="16" fill="url(#hsb-osb)" stroke="#a87c48" strokeWidth="1" />
          </g>

          {/* Isolatie tussen de stijlen */}
          <g style={layerStyle("isolatie", 0)}>
            <rect x={WALL_X0} y="113" width={WALL_X1 - WALL_X0} height="188" fill="url(#hsb-wool)" />
          </g>

          {/* Houten stijlen */}
          <g style={layerStyle("frame", 0)}>
            {STUDS.map((x) => (
              <g key={x}>
                <rect x={x} y="113" width={STUD_W} height="188" fill="url(#hsb-wood)" stroke="#8a6234" strokeWidth="1.5" />
                <path d={`M${x + 8} 125 v164 M${x + 17} 125 v164 M${x + 26} 125 v164`} stroke="#c99e62" strokeWidth="0.8" />
              </g>
            ))}
          </g>

          {/* Dampremmende folie */}
          <g style={layerStyle("dampremmend", 14)}>
            <rect x={WALL_X0} y="301" width={WALL_X1 - WALL_X0} height="5" fill="#003384" />
          </g>

          {/* Gipsplaat binnen */}
          <g style={layerStyle("gips", 14)}>
            <rect x={WALL_X0} y="306" width={WALL_X1 - WALL_X0} height="18" fill="#ecebe7" stroke="#b9b7b0" strokeWidth="1" />
          </g>

          {/* Labels met aanwijslijnen (alleen vanaf tablet; mobiel: legenda) */}
          {!small && LABELS.map(({ layer, y, label, x = WALL_X1 - 6, ty = y }) => {
            const on = visible.has(layer);
            const isNew = fresh.has(layer);
            return (
              <g key={layer} style={{ opacity: on ? 1 : 0, transition: reduced ? "none" : "opacity 600ms ease 250ms" }}>
                <polyline points={`${x},${y} 740,${y} 760,${ty}`} fill="none" stroke={isNew ? "#abe000" : "#6b6b6b"} strokeWidth={isNew ? 2.5 : 1} />
                <circle cx={x} cy={y} r="3.5" fill={isNew ? "#abe000" : "#6b6b6b"} />
                <text
                  x="770"
                  y={ty + 5}
                  style={{ font: `${isNew ? 600 : 500} 17px var(--font-display, Arial, sans-serif)` }}
                  className={isNew ? "fill-ink" : "fill-stone"}
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {small && (
        <ul className="flex flex-wrap gap-1.5 px-3 pb-1 pt-3" aria-label="Lagen in beeld">
          {[...LABELS].sort((a, b) => a.y - b.y).filter((l) => visible.has(l.layer)).map((l) => (
            <li
              key={l.layer}
              className={`border px-2 py-1 text-xs ${fresh.has(l.layer) ? "border-lime bg-lime/30 font-semibold text-ink" : "border-mist text-stone"}`}
            >
              {l.label}
            </li>
          ))}
        </ul>
      )}

      <figcaption className="grid gap-6 border-t border-mist px-5 py-6 md:grid-cols-12 md:px-7">
        <div className="md:col-span-8" aria-live="polite">
          <p className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
            {step + 1}. {STEPS[step].title}
          </p>
          <p className="mt-2 text-[0.975rem] leading-relaxed text-stone">{STEPS[step].text}</p>
        </div>
        <div className="flex items-start gap-2 md:col-span-4 md:justify-end">
          <button type="button" onClick={() => go(step - 1)} aria-label="Vorige stap" className="grid size-11 cursor-pointer place-items-center border border-navy/25 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pauzeer animatie" : "Speel animatie af"}
            className="grid size-11 cursor-pointer place-items-center border border-navy bg-navy text-white transition-colors hover:border-navy-dark hover:bg-navy-dark"
          >
            {playing ? (
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
            ) : (
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            )}
          </button>
          <button type="button" onClick={() => go(step + 1)} aria-label="Volgende stap" className="grid size-11 cursor-pointer place-items-center border border-navy/25 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
        <ol className="flex gap-1.5 md:col-span-12" aria-label="Stappen">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex-1">
              <button
                type="button"
                onClick={() => go(i)}
                aria-label={`Stap ${i + 1}: ${s.title}`}
                aria-current={i === step ? "step" : undefined}
                className="block h-1.5 w-full cursor-pointer bg-mist transition-colors hover:bg-navy/40"
              >
                <span className={`block h-full ${i <= step ? "bg-lime" : ""}`} />
              </button>
            </li>
          ))}
        </ol>
      </figcaption>
    </figure>
  );
}
