import type { ComponentType } from "react";

/**
 * USP-grid — het pijler-patroon van de homepage: lime lijn boven, optioneel
 * icoon, vette kop, korte tekst.
 */
export function FeatureGrid({
  items,
  columns = 3,
  eyebrow,
  title,
  headingLevel = "h2",
}: {
  items: {
    icon?: ComponentType<{ className?: string }>;
    title: string;
    text: string;
  }[];
  columns?: 2 | 3 | 4;
  eyebrow?: string;
  title?: string;
  /** h3 gebruiken wanneer de sectie onder een eigen H2 valt */
  headingLevel?: "h2" | "h3";
}) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[
    columns
  ];
  const ItemHeading = headingLevel === "h2" && !title ? "h2" : "h3";

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {(eyebrow || title) && (
        <div className="mb-12">
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
      <div className={`grid gap-10 ${cols}`}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="border-t-2 border-lime pt-8">
              {Icon && <Icon className="h-7 w-7" />}
              <ItemHeading className="mt-4 text-xl font-extrabold">
                {item.title}
              </ItemHeading>
              <p className="mt-2 text-stone">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
