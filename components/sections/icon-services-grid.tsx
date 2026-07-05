import type { ComponentType } from "react";

/**
 * Compacte icoon+label-grid voor een groot aantal werkzaamheden (bv. 20+
 * items) — te veel voor de zware FeatureGrid-kaarten, dus kleinere,
 * hoekige tegels met alleen icoon en label.
 */
export function IconServicesGrid({
  items,
  eyebrow,
  title,
}: {
  items: { icon: ComponentType<{ className?: string }>; label: string }[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {(eyebrow || title) && (
          <div className="mb-12">
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 border-l border-t border-mist sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 border-b border-r border-mist bg-white p-5"
              >
                <Icon className="h-6 w-6 shrink-0 text-lime-dark" />
                <span className="text-sm font-semibold text-ink">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
