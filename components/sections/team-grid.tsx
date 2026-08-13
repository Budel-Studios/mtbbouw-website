import Image from "next/image";
import { team } from "@/lib/data";
import { getSiteAssets } from "@/lib/assets";

/**
 * Teamportretten (grayscale, fallback-initiaal) — extractie van het
 * homepage-teamblok. Foto's komen uit site_assets (Supabase, key
 * `team-<naam>`) met het lokale bestand uit lib/data.ts als fallback.
 */
export async function TeamGrid({
  members = team,
  showBio = true,
  eyebrow = "Het team",
  title = "Ontdek de mensen die samen bouwen",
  intro,
}: {
  members?: typeof team;
  showBio?: boolean;
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  const assets = await getSiteAssets();
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 max-w-2xl text-stone">{intro}</p>}
      <div className="mt-12 grid divide-mist border-mist sm:grid-cols-2 sm:divide-x sm:border-x lg:grid-cols-5">
        {members.map((member) => {
          const photo =
            assets[`team-${member.name.toLowerCase()}`]?.url || member.image;
          return (
          <div key={member.name} className="px-5 py-2 first:pl-0 last:pr-0">
            <div className="relative aspect-[3/4] bg-paper">
              {photo ? (
                <Image
                  src={photo}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover grayscale"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-5xl font-extrabold text-mist">
                  {member.name.charAt(0)}
                </div>
              )}
            </div>
            <h3 className="mt-5 text-lg font-extrabold">{member.name}</h3>
            <p className="mt-1 text-sm font-semibold text-stone">{member.role}</p>
            {showBio && (
              <p className="mt-3 text-sm leading-relaxed text-stone">{member.text}</p>
            )}
          </div>
          );
        })}
      </div>
    </section>
  );
}
