import type { Metadata } from "next";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { FaqQuickNav } from "@/components/sections/faq-quick-nav";
import { CtaBanner } from "@/components/sections/cta-banner";
import { generalFaq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op de meest gestelde vragen over verbouwen, aanbouwen, uitbouwen, kozijnen, nieuwbouw, prefab, afbouw en bedrijfsbouw — per categorie gegroepeerd.",
  alternates: { canonical: "/veelgestelde-vragen" },
};

/** URL-vriendelijke ankers per categorie, bv. "Verbouw & renovatie" → "verbouw-en-renovatie". */
function slugify(label: string) {
  return label
    .toLowerCase()
    .replace(/&/g, "en")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function FaqPage() {
  const allItems = generalFaq.flatMap((group) => group.items);
  const categories = generalFaq.map((group) => ({
    slug: slugify(group.category),
    label: group.category,
  }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Veelgestelde vragen", url: "/veelgestelde-vragen" },
        ]}
      />
      <FaqJsonLd items={allItems} />

      <PageHero
        eyebrow="FAQ"
        title="Veelgestelde vragen"
        intro="Eerlijke antwoorden over prijzen, doorlooptijden, vergunningen en garanties. Kies hieronder direct het onderwerp waar jouw vraag over gaat."
      />

      <FaqQuickNav categories={categories} />

      {generalFaq.map((group, i) => (
        <FaqAccordion
          key={group.category}
          id={slugify(group.category)}
          items={group.items}
          eyebrow={`0${i + 1} — ${group.category}`}
          title={group.category}
        />
      ))}

      <CtaBanner
        eyebrow="Staat je vraag er niet tussen?"
        title="Stel hem gewoon — we antwoorden snel"
        text="Bel, app of mail ons. Of plan direct een vrijblijvende intake."
        cta={{ label: "Neem contact op", href: "/contact" }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
