"use client";

import { ContactDrawerButton } from "@/components/contact-drawer";

/**
 * "Ontvang offerte"-knop die de offerte-drawer opent, in de stijl van
 * ui/button.tsx. Dun client-wrappertje zodat server-secties hem kunnen
 * renderen zonder zelf client component te worden.
 */
const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-dark px-6 py-3.5 text-sm";

const variants = {
  primary: "bg-lime text-ink hover:bg-lime-dark",
  "outline-light": "border border-white/80 text-white hover:bg-white/10",
} as const;

export function QuoteButton({
  children = "Ontvang offerte",
  variant = "primary",
  arrow = true,
}: {
  children?: React.ReactNode;
  variant?: keyof typeof variants;
  arrow?: boolean;
}) {
  return (
    <ContactDrawerButton className={`${base} ${variants[variant]}`}>
      {children}
      {arrow && (
        <svg
          className="h-4 w-4"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
        </svg>
      )}
    </ContactDrawerButton>
  );
}
