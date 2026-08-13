import "server-only";
import { cache } from "react";

/**
 * Site-assets uit Supabase (`site_assets`-tabel): foto's, logo's en andere
 * beelden die de redactie zonder code-wijziging moet kunnen wisselen.
 *
 * Hybride model: blogs/projecten blijven in git (Velite-MDX), maar deze
 * assets komen uit de database. Elke asset heeft een vaste `key` (bv.
 * "team-mathijs") en een `url` + `alt`. De site valt terug op het lokale
 * bestand als Supabase niet geconfigureerd of onbereikbaar is, zodat een
 * build nooit stukgaat op een externe dienst.
 *
 * Cache: 1 uur (ISR). Een gewisselde foto is dus binnen een uur zichtbaar
 * zonder redeploy; direct forceren kan met een nieuwe deploy.
 */

export type SiteAsset = { url: string; alt: string };

const REVALIDATE_SECONDS = 3600;

/** Haal alle site_assets in één query op; per request gededupliceerd. */
export const getSiteAssets = cache(
  async (): Promise<Record<string, SiteAsset>> => {
    const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!base || !anon) return {};

    try {
      const res = await fetch(`${base}/rest/v1/site_assets?select=key,url,alt`, {
        headers: { apikey: anon, Authorization: `Bearer ${anon}` },
        next: { revalidate: REVALIDATE_SECONDS, tags: ["site-assets"] },
      });
      if (!res.ok) return {};
      const rows: { key: string; url: string; alt: string | null }[] =
        await res.json();
      return Object.fromEntries(
        rows.map((r) => [r.key, { url: r.url, alt: r.alt ?? "" }])
      );
    } catch {
      // Netwerkfout mag nooit een pagina breken — val terug op lokaal.
      return {};
    }
  }
);

/**
 * Eén asset ophalen met lokale fallback:
 * `await getAsset("team-mathijs", "/images/team/mathijs.webp", "Mathijs")`.
 */
export async function getAsset(
  key: string,
  fallbackUrl: string,
  fallbackAlt = ""
): Promise<SiteAsset> {
  const assets = await getSiteAssets();
  return assets[key] ?? { url: fallbackUrl, alt: fallbackAlt };
}
