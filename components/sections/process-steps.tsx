import { processSteps } from "@/lib/data";

/**
 * Genummerde werkwijze-stappen — extractie van het homepage-blok.
 * Default: de vijf vaste stappen uit lib/data.ts.
 */
const gridCols = {
  5: "lg:grid-cols-5",
  7: "lg:grid-cols-7",
} as const;

export function ProcessSteps({
  steps = processSteps,
  eyebrow = "Werkwijze",
  title = "Zo werken wij",
  compact = false,
  columns = 5,
}: {
  steps?: readonly { step: string; title: string; text: string }[];
  eyebrow?: string;
  title?: string;
  compact?: boolean;
  /** Aantal kolommen op desktop — 7 voor een langere, horizontale tijdlijn. */
  columns?: 5 | 7;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-extrabold ${
          compact ? "text-3xl" : "text-4xl sm:text-5xl"
        }`}
      >
        {title}
      </h2>
      <ol
        className={`mt-12 grid sm:grid-cols-2 ${gridCols[columns]} ${
          compact ? "gap-8" : "gap-10"
        }`}
      >
        {steps.map((s) => (
          <li key={s.step} className="border-t border-mist pt-6">
            <span className="text-sm font-extrabold text-lime-dark">{s.step}</span>
            <h3 className="mt-2 text-lg font-extrabold">{s.title}</h3>
            <p className="mt-2 text-sm text-stone">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
