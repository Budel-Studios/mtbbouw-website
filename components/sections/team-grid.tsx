import Image from "next/image";
import type { ReactNode } from "react";
import { team } from "@/lib/data";
import { getSiteAssets } from "@/lib/assets";
import { Slider } from "@/components/slider";

/**
 * Het team als horizontale slider, in dezelfde opbouw als de expertises op
 * de homepage: staande foto met een lime lijn bij hover, rol in mono, naam
 * als displaykop en een korte tekst. Foto's komen uit site_assets (Supabase,
 * key `team-<naam>`) met het lokale bestand uit lib/data.ts als fallback;
 * `position` houdt het gezicht in beeld bij het bijsnijden.
 */
export async function TeamGrid({
  members = team,
  showBio = true,
  eyebrow = "Het team",
  title = "Ontdek de mensen die samen bouwen",
  intro,
  footer,
}: {
  members?: typeof team;
  showBio?: boolean;
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** Optionele regel onder de slider, bijv. links naar werken bij. */
  footer?: ReactNode;
}) {
  const assets = await getSiteAssets();
  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow text-stone">{eyebrow}</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">{title}</h2>
        </div>
        {intro && (
          <p className="leading-relaxed text-stone md:col-span-4 md:col-start-9">{intro}</p>
        )}
      </div>
      <div className="mt-12 md:mt-14">
        <Slider label={title}>
          {members.map((member, i) => {
            const photo = assets[`team-${member.name.toLowerCase()}`]?.url || member.image;
            return (
              <li
                key={member.name}
                className="group w-[78%] shrink-0 snap-start animate-fade-up sm:w-[45%] lg:w-[30%] xl:w-[23%]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={`${member.name}, ${member.role.toLowerCase()} bij MTB Bouw`}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 25vw"
                      style={{ objectPosition: member.position }}
                      className="img-zoom object-cover grayscale"
                    />
                  ) : (
                    <div className="blueprint-grid relative flex h-full items-center justify-center">
                      <span className="display text-8xl text-navy/25">{member.name.charAt(0)}</span>
                    </div>
                  )}
                  <span
                    className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-[width] duration-700 group-hover:w-full"
                    aria-hidden="true"
                  />
                </div>
                <p className="label-mono mt-5 text-stone">{member.role}</p>
                <h3 className="display mt-3 text-2xl md:text-3xl">{member.name}</h3>
                {showBio && (
                  <p className="mt-3 text-sm leading-relaxed text-stone">{member.text}</p>
                )}
              </li>
            );
          })}
        </Slider>
      </div>
      {footer && <div className="mt-10">{footer}</div>}
    </section>
  );
}
