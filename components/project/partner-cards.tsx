/**
 * "Partners & leveranciers" — hoekige kaarten met rol, omschrijving en een
 * backlink naar de partner. Externe links openen in een nieuw tabblad; bewust
 * geen nofollow, zodat de backlink telt (dat is precies de bedoeling hier).
 */
type Partner = {
  name: string;
  role?: string;
  description?: string;
  url?: string;
  anchor?: string;
};

export function PartnerCards({ partners }: { partners: Partner[] }) {
  if (partners.length === 0) return null;

  return (
    <ul className="grid border-l border-t border-mist sm:grid-cols-2 lg:grid-cols-3">
      {partners.map((partner) => (
        <li key={partner.name} className="flex min-h-40 flex-col border-b border-r border-mist p-6 transition-colors hover:bg-white md:p-8">
          {partner.role && <span className="label-mono text-stone">{partner.role}</span>}
          <h3 className="mt-6 text-xl font-medium tracking-[-0.02em] md:text-2xl">
            {partner.name}
          </h3>
          {partner.description && (
            <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
              {partner.description}
            </p>
          )}
          {partner.url && (
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 self-start label-mono inline-flex items-center gap-2 border border-navy px-4 py-2.5 text-navy transition-colors hover:bg-navy hover:text-white"
            >
              {partner.anchor || partner.name}
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
