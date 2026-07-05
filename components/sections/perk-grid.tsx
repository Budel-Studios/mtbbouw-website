import type { ComponentType } from "react";
import { CheckIcon } from "@/components/icons";

/**
 * "Waarom MTB Bouw"-kaarten — groter en visueler dan IconServicesGrid,
 * passend bij een recruitmentpagina: icoon boven, vinkje-badge, korte tekst.
 */
export function PerkGrid({
  items,
  eyebrow,
  title,
}: {
  items: { icon: ComponentType<{ className?: string }>; text: string }[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {(eyebrow || title) && (
        <div className="mb-12 max-w-2xl">
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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.text}
              className="relative border border-mist bg-white p-6 transition-colors hover:border-lime"
            >
              <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center bg-lime text-ink">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <Icon className="h-8 w-8 text-lime-dark" />
              <p className="mt-5 text-base font-bold leading-snug text-ink">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
