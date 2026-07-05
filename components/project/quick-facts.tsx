/**
 * "Project in het kort" — compacte, hoekige feitenkaarten. Rendert alleen de
 * velden die gevuld zijn, zodat de rij netjes blijft bij minder data.
 */
type Fact = { label: string; value?: string };

export function QuickFacts({ facts }: { facts: Fact[] }) {
  const visible = facts.filter((f) => f.value && f.value.trim().length > 0);
  if (visible.length === 0) return null;

  return (
    <section aria-label="Project in het kort" className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-2 border-l border-t border-mist sm:grid-cols-3 lg:grid-cols-5">
        {visible.map((fact) => (
          <div key={fact.label} className="border-b border-r border-mist p-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-stone">
              {fact.label}
            </p>
            <p className="mt-2 font-semibold text-ink">{fact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
