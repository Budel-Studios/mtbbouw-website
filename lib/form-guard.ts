import "server-only";

/**
 * Beveiliging van de formulierroute (/api/contact), in lagen:
 *
 * 1. Honeypot: een verborgen veld "website" dat mensen niet zien. Ingevuld
 *    = bot (in de route afgehandeld).
 * 2. Herkomst: alleen POST-verzoeken vanaf onze eigen site.
 * 3. Vercel BotID: onzichtbare botcheck (in de route, via botid/server).
 * 4. Tempo: wie binnen een paar seconden een formulier verstuurt, is geen mens.
 * 5. Snelheidslimiet per IP-adres.
 * 6. Lengtegrenzen per veld, zodat niemand lappen tekst door onze mail duwt.
 *
 * Bots krijgen bij 1 en 4 gewoon "gelukt" terug, zodat ze niet leren wat er
 * misging. Bij de andere stappen volgt een foutcode.
 */

/** Minimale tijd tussen openen en versturen van een formulier (ms). */
export const MIN_FILL_MS = 2500;

/** Het verzoek komt van onze eigen site (zelfde host als waarop de API draait). */
export function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

/** Te snel ingevuld? Ontbreekt de tijd (oude pagina in de cache), dan laten we 'm door. */
export function filledTooFast(elapsed: unknown): boolean {
  return typeof elapsed === "number" && elapsed >= 0 && elapsed < MIN_FILL_MS;
}

/* ---------- Snelheidslimiet ------------------------------------------- */

// Per serverinstantie; geen waterdichte limiet, wel een rem op herhaald
// schieten vanaf één adres. BotID en de honeypot doen het zware werk.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function clientIp(request: Request): string {
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "onbekend"
  );
}

export function rateLimited(ip: string, now = Date.now()): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // geheugen begrenzen
  return recent.length > MAX_PER_WINDOW;
}

/* ---------- Lengtegrenzen --------------------------------------------- */

const LIMITS: Record<string, number> = {
  name: 120,
  email: 200,
  phone: 40,
  postcode: 80,
  houseNumber: 20,
  description: 4000,
  message: 4000,
  remarks: 2000,
  situation: 1000,
  dimensions: 500,
  fileLink: 500,
  cvLink: 500,
};
const DEFAULT_LIMIT = 300;
const MAX_LIST = 20;

/** Geeft de naam van het eerste veld dat te lang is, of null. */
export function tooLong(body: Record<string, unknown>): string | null {
  for (const [key, value] of Object.entries(body)) {
    if (typeof value === "string" && value.length > (LIMITS[key] ?? DEFAULT_LIMIT)) {
      return key;
    }
    if (Array.isArray(value)) {
      if (value.length > MAX_LIST) return key;
      if (value.some((v) => typeof v !== "string" || v.length > DEFAULT_LIMIT)) return key;
    }
  }
  return null;
}

/** Een telefoonnummer heeft minimaal 8 cijfers en verder alleen gangbare tekens. */
export function validPhone(phone: string): boolean {
  return /^[\d\s()+\-./]+$/.test(phone) && phone.replace(/\D/g, "").length >= 8;
}
