"use client";

import { useEffect, useState } from "react";

/**
 * Snelle navigatie bovenaan de FAQ-pagina — tabjes per categorie waarmee
 * bezoekers direct naar hun onderwerp springen (ankerlinks, dus werkt ook
 * zonder JS). Sticky onder de header; de actieve categorie wordt gemarkeerd
 * op basis van scrollpositie via IntersectionObserver.
 */
export function FaqQuickNav({
  categories,
}: {
  categories: readonly { slug: string; label: string }[];
}) {
  const [active, setActive] = useState(categories[0]?.slug);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.slug))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <nav
      aria-label="Snel naar categorie"
      className="sticky top-20 z-20 border-y border-mist bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 py-3">
        {categories.map((cat) => {
          const isActive = cat.slug === active;
          return (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className={`shrink-0 whitespace-nowrap border px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                isActive
                  ? "border-lime bg-lime text-ink"
                  : "border-mist text-stone hover:border-ink/30 hover:text-ink"
              }`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
