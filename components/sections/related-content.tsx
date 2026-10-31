import { CardSlider } from "@/components/sections/card-slider";
import { toProjectCard, type PortfolioProject } from "@/lib/projects";

/**
 * Projecten bij een dienst- of stadspagina, als horizontale slider met
 * dezelfde kaarten als de homepage. Rendert niets zonder projecten.
 */
export function RelatedContent({
  projects = [],
  eyebrow = "Ons werk",
  title = "Bekijk ons werk",
  intro,
  tone = "tint",
}: {
  projects?: PortfolioProject[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  tone?: "tint" | "plain";
}) {
  const items = projects.map(toProjectCard).filter((p) => p.images.length > 0);

  return (
    <CardSlider
      items={items}
      label={title}
      eyebrow={eyebrow}
      title={title}
      intro={intro}
      link={{ href: "/projecten", label: "Alle projecten" }}
      tone={tone}
    />
  );
}
