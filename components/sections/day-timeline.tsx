/**
 * "Hoe ziet jouw werkdag eruit" — horizontale tijdlijn. Elk moment is een
 * segment met een lime bovenrand (samen vormen ze de doorlopende lijn) en
 * een marker-blokje; robuust in CSS zonder fragiele absolute positionering.
 */
type DayMoment = { time?: string; label: string };

export function DayTimeline({
  moments,
  eyebrow,
  title,
}: {
  moments: DayMoment[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {(eyebrow || title) && (
        <div className="mb-14 max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
          )}
        </div>
      )}

      <ol className="flex flex-col divide-y divide-mist border-t border-mist sm:flex-row sm:divide-x sm:divide-y-0 sm:border-t-0">
        {moments.map((moment) => (
          <li
            key={moment.label}
            className="flex-1 border-t-2 border-lime px-0 py-5 sm:px-6 sm:pt-6"
          >
            {moment.time && (
              <span className="block text-sm font-extrabold text-lime-dark">
                {moment.time}
              </span>
            )}
            <span className="mt-1 block text-sm font-semibold leading-snug text-ink">
              {moment.label}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
