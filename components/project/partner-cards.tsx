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
    <div className="grid gap-px border border-mist bg-mist sm:grid-cols-2">
      {partners.map((partner) => (
        <div key={partner.name} className="flex flex-col bg-white p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-bold text-ink">{partner.name}</h3>
            {partner.role && (
              <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-stone">
                {partner.role}
              </span>
            )}
          </div>
          {partner.description && (
            <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">
              {partner.description}
            </p>
          )}
          {partner.url && (
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 self-start border-b-2 border-lime pb-0.5 text-sm font-bold text-ink transition-colors hover:text-lime-dark"
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
        </div>
      ))}
    </div>
  );
}
