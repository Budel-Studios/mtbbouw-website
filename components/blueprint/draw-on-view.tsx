"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Laat de lijntekeningen binnenin zichzelf tekenen zodra ze in beeld komen.
 * Lijnen met `draw-line` (en pathLength={1}) worden getekend, labels met
 * `draw-fade` faden in; de timing per element komt uit de CSS-variabele --d.
 * Zonder JavaScript of met "reduced motion" staat alles meteen stil in beeld.
 */
export function DrawOnView({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.dataset.draw = "ready";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.dataset.draw = "in";
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
