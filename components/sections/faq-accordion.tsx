/**
 * FAQ-accordeon met native <details>/<summary> — geen client-JS, geen
 * hydration; de antwoorden staan als crawlbare tekst in de HTML.
 */
type FaqItem = { question: string; answer: string };

export function FaqAccordion({
  items,
  eyebrow = "FAQ",
  title = "Veelgestelde vragen",
  id,
}: {
  items: readonly FaqItem[];
  eyebrow?: string;
  title?: string;
  /** Anker-id voor snelle-navigatie (bv. categorie-tabjes op /veelgestelde-vragen). */
  id?: string;
}) {
  return (
    <section id={id} className="container-page scroll-mt-24 py-20 md:py-28">
      <p className="label-mono text-navy">
        {eyebrow}
      </p>
      <h2 className="display mt-4 text-4xl md:text-6xl">{title}</h2>
      <div className="mt-12 max-w-4xl divide-y divide-mist border-y border-ink">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-lg font-medium tracking-[-0.02em] transition-colors hover:text-navy md:text-xl [&::-webkit-details-marker]:hidden">
              {item.question}
              <svg
                className="h-5 w-5 shrink-0 text-navy transition-transform group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p className="max-w-3xl pb-6 leading-relaxed text-stone">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
