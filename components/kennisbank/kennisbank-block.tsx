import { CardSlider } from "@/components/sections/card-slider";
import { articlesFor, toCard, type KennisbankMatch } from "@/lib/kennisbank";
import { articleToCard } from "@/lib/article-slide";

/**
 * "Uit de kennisbank" op dienst- en stadspagina's. Kiest automatisch de best
 * passende gepubliceerde artikelen (zie articlesFor), dus nieuwe artikelen
 * verschijnen hier vanzelf zodra ze live gaan. Zelfde slider en kaarten als
 * de projecten. Rendert niets zonder artikelen.
 */
export function KennisbankBlock({
  match,
  eyebrow = "Uit de bouwgids",
  title = "Lees je alvast in",
  intro,
  limit = 6,
  tone = "tint",
}: {
  match: KennisbankMatch;
  eyebrow?: string;
  title?: string;
  intro?: string;
  limit?: number;
  tone?: "tint" | "plain";
}) {
  const items = articlesFor(match, limit).map((a) => articleToCard(toCard(a)));

  return (
    <CardSlider
      items={items}
      label="Artikelen uit de bouwgids"
      eyebrow={eyebrow}
      title={title}
      intro={intro}
      link={{ href: "/kennisbank", label: "Alle artikelen" }}
      tone={tone}
    />
  );
}
