import { DrawOnView } from "@/components/blueprint/draw-on-view";

/**
 * Genummerde projectstappen met een dunne bouwlijn die zichzelf tekent zodra
 * het blok in beeld komt. Alleen de lijn en de nummers bewegen; de tekst staat
 * altijd in beeld en in de HTML. Zonder JavaScript of met "reduced motion"
 * staat alles meteen stil.
 */
export function ProcessLine({
  steps,
}: {
  steps: readonly { title: string; text: string; besluit?: string }[];
}) {
  const cols = steps.length === 5 ? "md:grid-cols-5" : "md:grid-cols-4";
  return (
    <DrawOnView className="relative mt-14">
      {/* Bouwlijn: horizontaal op desktop, verticaal op mobiel. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-[21px] hidden h-0.5 w-full md:block"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
      >
        <line
          className="draw-line"
          pathLength={1}
          x1="0"
          y1="1"
          x2="100"
          y2="1"
          stroke="var(--color-navy)"
          strokeWidth="2"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-[21px] top-0 h-full w-0.5 md:hidden"
        viewBox="0 0 2 100"
        preserveAspectRatio="none"
      >
        <line
          className="draw-line"
          pathLength={1}
          x1="1"
          y1="0"
          x2="1"
          y2="100"
          stroke="var(--color-navy)"
          strokeWidth="2"
        />
      </svg>
      <ol className={`relative grid gap-10 md:gap-8 ${cols}`}>
        {steps.map((s, i) => (
          <li key={s.title} className="relative pl-16 md:pl-0">
            <span
              className="draw-fade absolute left-0 top-0 flex h-11 w-11 items-center justify-center border border-navy bg-paper font-display text-lg font-semibold text-navy md:static"
              style={{ ["--d" as string]: `${0.2 + i * 0.25}s` }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl font-semibold md:mt-6">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-stone">{s.text}</p>
            {s.besluit && (
              <p className="mt-4 border-l-2 border-lime pl-3 text-sm leading-relaxed text-ink">
                <span className="label-mono mb-1 block text-stone">Jij beslist</span>
                {s.besluit}
              </p>
            )}
          </li>
        ))}
      </ol>
    </DrawOnView>
  );
}
