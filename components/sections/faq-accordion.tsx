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
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <div className="mt-10 max-w-3xl divide-y divide-mist border-y border-mist">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold [&::-webkit-details-marker]:hidden">
              {item.question}
              <svg
                className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p className="pb-6 leading-relaxed text-stone">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
