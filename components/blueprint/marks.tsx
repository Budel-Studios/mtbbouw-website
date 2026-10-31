/**
 * Kleine grafische elementen uit de brochure (SAMEN.): paskruisjes in de
 * hoeken, een bladnummer, een maatlijn en een genummerd navy blokje.
 * Puur decoratief, dus aria-hidden.
 */

function Cross({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
    >
      <path d="M8 0 V16 M0 8 H16" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Paskruisjes in de vier hoeken van een (relative) blok. */
export function Crosshairs({ className = "text-ink/40" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={className}>
      <Cross className="left-3 top-3 md:left-5 md:top-5" />
      <Cross className="right-3 top-3 md:right-5 md:top-5" />
      <Cross className="bottom-3 left-3 md:bottom-5 md:left-5" />
      <Cross className="bottom-3 right-3 md:bottom-5 md:right-5" />
    </span>
  );
}

/** "Blad 01 | 04" zoals onderaan elke brochurepagina. */
export function SheetTag({ n, of }: { n: number; of: number }) {
  const pad = (x: number) => String(x).padStart(2, "0");
  return (
    <span
      aria-hidden="true"
      className="label-mono inline-flex items-stretch border border-ink/30 bg-white/80 text-stone"
    >
      <span className="flex items-center px-2 py-1 text-[9px]">Blad</span>
      <span className="border-l border-ink/30 px-2 py-1 font-medium text-navy">{pad(n)}</span>
      <span className="border-l border-ink/30 px-2 py-1">{pad(of)}</span>
    </span>
  );
}

/** Genummerd navy blokje met mono-label erachter ("01 · Voor thuis"). */
export function NumberBox({ n, label }: { n: number; label: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="label-mono inline-flex size-7 items-center justify-center bg-navy font-medium text-white">
        {String(n).padStart(2, "0")}
      </span>
      <span className="label-mono text-navy">{label}</span>
    </span>
  );
}

function Tick() {
  return (
    <svg width="11" height="14" viewBox="0 0 11 14" aria-hidden="true" className="block flex-none">
      <path d="M5.5 0 V14 M1 11 L10 3" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

/** Horizontale maatlijn met tekst in het midden, zoals "210 mm" op de cover. */
export function DimensionLine({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center text-ink/50 ${className}`}>
      <Tick />
      <span className="block h-px flex-1 bg-current" />
      <span className="label-mono whitespace-nowrap px-2">{label}</span>
      <span className="block h-px flex-1 bg-current" />
      <Tick />
    </div>
  );
}
