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
      <div className="container-page py-20 md:py-28">
        {(eyebrow || title) && (
          <div className="mb-12">
            {eyebrow && (
              <p className="eyebrow text-stone">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="display mt-4 text-4xl md:text-5xl">
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
                <Icon className="h-6 w-6 shrink-0 text-navy" />
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
