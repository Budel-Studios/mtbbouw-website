/**
 * Turnkey-procesvisualisatie — donkere sectie met een verticale (mobiel) /
 * horizontale (desktop) flow van fase-blokken, gescheiden door pijltjes.
 * Toont in één oogopslag welke onderdelen MTB Bouw allemaal verzorgt.
 */
function FlowArrow() {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center justify-center py-1 text-lime lg:px-1 lg:py-0"
    >
      {/* Basisvorm: pijl omlaag (mobiel, gestapeld). Op desktop -90° = pijl naar rechts. */}
      <svg
        className="h-6 w-6 lg:-rotate-90"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  );
}

export function TurnkeyFlow({
  eyebrow,
  title,
  intro,
  steps,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  steps: string[];
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-white/75">{intro}</p>}
        </div>

        <div className="mt-14 flex flex-col lg:flex-row lg:items-center">
          {steps.map((step, i) => (
            <div key={step} className="contents">
              <div className="flex flex-1 items-center justify-center border border-white/15 bg-white/5 px-4 py-6 text-center">
                <span className="text-sm font-bold sm:text-base">{step}</span>
              </div>
              {i < steps.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
