import type { ReactNode } from "react";
import Link from "next/link";
import { Slider } from "@/components/slider";
import { ProjectCard, type ProjectCardData } from "@/components/project/project-cards";

function ArrowRight({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/**
 * De kaarten zelf: een horizontale swipe-slider met de projectkaart van de
 * homepage. Gebruikt voor projecten én kennisbank-artikelen, zodat beide er
 * overal identiek uitzien. `badge` zet optioneel iets boven een kaart.
 */
export function CardSlides({
  items,
  label,
  badge,
}: {
  items: ProjectCardData[];
  label: string;
  badge?: (index: number) => ReactNode;
}) {
  return (
    <Slider label={label}>
      {items.map((item, i) => (
        <li key={item.slug} className="relative w-[82%] shrink-0 snap-start sm:w-[55%] lg:w-[38%]">
          {badge?.(i)}
          <ProjectCard project={item} />
        </li>
      ))}
    </Slider>
  );
}

/** Knop rechtsboven een slider, zelfde als "Bekijk alle projecten" op de homepage. */
export function SliderLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="label-mono group inline-flex items-center gap-2 border border-navy px-5 py-3.5 text-navy transition-colors hover:bg-navy hover:text-white"
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  );
}

/**
 * Complete sectie met kop, knop en kaartenslider, in de stijl van "Recent
 * werk uit Twente" op de homepage. Rendert niets zonder kaarten.
 *
 * tone="tint" geeft het warmgrijze vlak van de homepage; "plain" laat de
 * paginakleur staan, voor als de sectie ervoor al grijs is.
 */
export function CardSlider({
  items,
  label,
  eyebrow,
  title,
  intro,
  link,
  tone = "tint",
  headingId,
}: {
  items: ProjectCardData[];
  label: string;
  eyebrow: string;
  title: string;
  intro?: string;
  link?: { href: string; label: string };
  tone?: "tint" | "plain";
  headingId?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby={headingId}
      className={tone === "tint" ? "bg-tint" : undefined}
    >
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-stone">{eyebrow}</p>
            <h2 id={headingId} className="display mt-4 text-4xl md:text-5xl">
              {title}
            </h2>
            {intro && <p className="mt-4 leading-relaxed text-stone">{intro}</p>}
          </div>
          {link && <SliderLink href={link.href}>{link.label}</SliderLink>}
        </div>
        <div className="mt-12 md:mt-14">
          <CardSlides items={items} label={label} />
        </div>
      </div>
    </section>
  );
}
