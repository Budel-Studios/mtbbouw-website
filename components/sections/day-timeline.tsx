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
    <section className="container-page py-20 md:py-28">
      {(eyebrow || title) && (
        <div className="mb-14 max-w-2xl">
          {eyebrow && (
            <p className="eyebrow text-stone">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="display mt-4 text-4xl md:text-5xl">{title}</h2>
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
              <span className="block text-sm font-semibold text-navy">
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
