import type { ComponentType } from "react";
import { HouseIcon, BuildingIcon, WindowIcon, LayersIcon } from "@/components/icons";

/**
 * De 4 expertises/labels onder MTB Bouw — centrale bron voor de homepage-
 * tegels, het "Wat we bouwen"-portaal (/diensten) en (handmatig gespiegeld,
 * want MegaContent heeft een eigen vorm) het hoofdmenu in lib/nav.ts.
 *
 * Structuur is bewust uitbreidbaar: een nieuw label (bv. Zebrano Studio,
 * Badenstudio) toevoegen is één extra object in deze array.
 */
export type ExpertiseSubItem = { label: string; href: string };

export type Expertise = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  href: string;
  image: string;
  imageAlt: string;
  subItems: ExpertiseSubItem[];
};

export const expertises: Expertise[] = [
  {
    id: "wonen",
    icon: HouseIcon,
    title: "Wonen & Verbouwen",
    subtitle: "Voor particulieren.",
    href: "/wonen-en-verbouwen",
    image: "/images/projects/renovatie-villa-zantinge-enschede/06.jpg",
    imageAlt: "Nieuwe keuken met kookeiland in een door MTB Bouw gerenoveerde villa in Enschede",
    subItems: [
      { label: "Renovatie & verbouw", href: "/verbouwing" },
      { label: "Aanbouw & uitbouw", href: "/aanbouw-uitbouw" },
      { label: "Nieuwbouw", href: "/nieuwbouw" },
    ],
  },
  {
    id: "afbouwstudio",
    icon: BuildingIcon,
    title: "Zakelijke Afbouw",
    subtitle: "Voor kantoren, winkels en bedrijfsruimtes.",
    href: "/afbouwstudio",
    image: "/images/projects/broodbode-zwolle-lunchroom/01-counter.jpg",
    imageAlt: "Verlichte counter met houten lamellen in lunchroom De Broodbode Zwolle, afgebouwd door Afbouwstudio",
    subItems: [
      { label: "Kantoren", href: "/afbouwstudio#specialismen" },
      { label: "Winkels & horeca", href: "/afbouwstudio#specialismen" },
      { label: "Casco → turn-key", href: "/afbouwstudio#werkwijze" },
    ],
  },
  {
    id: "kozijnen",
    icon: WindowIcon,
    title: "Kozijnen",
    subtitle: "Eigen specialist.",
    href: "/kozijnen",
    image: "/images/projects/uitbouw-houtskeletbouw-enschede/02.jpg",
    imageAlt: "Zwarte houten kozijnen met triple glas in een uitbouw in Enschede",
    subItems: [],
  },
  {
    id: "prefab",
    icon: LayersIcon,
    title: "Prefab Bouwen",
    subtitle: "Sneller, slimmer en duurzamer bouwen.",
    href: "/prefab",
    image: "/images/projects/bedrijfshal-borne.webp",
    imageAlt: "Prefab bouwproject van MTB Bouw",
    subItems: [
      { label: "HSB", href: "/prefab#hsb" },
      { label: "Prefab daken & wanden", href: "/prefab#elementen" },
      { label: "Overkappingen & buitengebouwen", href: "/prefab#overkappingen" },
    ],
  },
];
