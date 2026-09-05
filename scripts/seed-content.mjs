// One-time seed: upload scraped originals to Storage and register them in
// site_assets, plus seed site_settings with company data.
// Run with: node scripts/seed-content.mjs <dir-with-originals>
import { readFileSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim()])
);

const base = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
const dir = process.argv[2];
if (!dir) { console.error("Usage: node scripts/seed-content.mjs <dir>"); process.exit(1); }

const mime = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif" };

// filename (without ext) -> { bucket, alt, label }
const assets = {
  "logomark":            { bucket: "brand", label: "Beeldmerk MTB Bouw", alt: "MTB Bouw beeldmerk" },
  "logo-full":           { bucket: "brand", label: "Logo MTB Bouw (met woordmerk)", alt: "MTB Bouw logo" },
  "preloader":           { bucket: "brand", label: "Preloader-animatie", alt: "MTB Bouw laadanimatie" },
  "team-mathijs":        { bucket: "team", label: "Teamfoto Mathijs", alt: "Mathijs, projectleider bij MTB Bouw" },
  "team-rick":           { bucket: "team", label: "Teamfoto Rick", alt: "Rick, afbouwspecialist (RN Afbouw) bij MTB Bouw" },
  "team-robbert":        { bucket: "team", label: "Teamfoto Robbert", alt: "Robbert, werkvoorbereiding bij MTB Bouw" },
  "team-whatsapp-portret": { bucket: "team", label: "Teamfoto (portret)", alt: "Teamlid van MTB Bouw" },
  "project-img7585":     { bucket: "projects", label: "Projectfoto leerbedrijf", alt: "Vakman aan het werk bij een bouwproject van MTB Bouw in Enschede" },
  "project-959":         { bucket: "projects", label: "Projectfoto verbouwing", alt: "Verbouwing door bouwbedrijf MTB Bouw in Twente" },
  "project-img0252":     { bucket: "projects", label: "Projectfoto bouwplaats", alt: "Bouwplaats van MTB Bouw, aannemer in Enschede en Twente" },
  "project-image1":      { bucket: "projects", label: "Projectfoto", alt: "Bouwproject van MTB Bouw" },
  "project-img0342":     { bucket: "projects", label: "Projectfoto", alt: "Afgerond bouwproject van MTB Bouw in Twente" },
  "project-img0188":     { bucket: "projects", label: "Projectfoto kennisbank", alt: "Bouwwerkzaamheden door MTB Bouw" },
  "project-img0362":     { bucket: "projects", label: "Projectfoto paardenstal", alt: "Paardenstal met overkapping in Enschede, gebouwd door MTB Bouw" },
  "project-img15589h":   { bucket: "projects", label: "Projectfoto renovatie", alt: "Renovatieproject van MTB Bouw" },
  "project-img1902":     { bucket: "projects", label: "Teamoverleg op de bouw", alt: "Het team van MTB Bouw in overleg op de bouwplaats" },
  "project-img7537":     { bucket: "projects", label: "Projectfoto aanbouw", alt: "Aanbouw aan een woning door MTB Bouw in Enschede" },
  "project-8bb76ce3":    { bucket: "projects", label: "Projectillustratie", alt: "Illustratie van een bouwproject van MTB Bouw" },
  "project-ontwerp7":    { bucket: "projects", label: "Projectontwerp", alt: "Ontwerp van een bouwproject van MTB Bouw" },
};

const settings = {
  company_name: "MTB Bouw B.V.",
  phone: "053 206 50 71",
  phone_link: "+31532065071",
  email: "info@mtbbouw.com",
  address: "Heersenkampweg 5, Enschede",
  whatsapp: "31642997018",
  instagram: "https://www.instagram.com/mtbbouw/",
  sbb_id: "100812726",
  tagline: "Bouwen doen we samen.",
};

const headers = { Authorization: `Bearer ${key}`, apikey: key };

for (const file of readdirSync(dir)) {
  const name = file.replace(extname(file), "");
  const meta = assets[name];
  if (!meta) { console.log("skip", file); continue; }
  const body = readFileSync(join(dir, file));
  const path = `${meta.bucket}/${file}`;
  const up = await fetch(`${base}/storage/v1/object/${path}`, {
    method: "POST",
    headers: { ...headers, "Content-Type": mime[extname(file)] ?? "application/octet-stream", "x-upsert": "true" },
    body,
  });
  const publicUrl = `${base}/storage/v1/object/public/${path}`;
  const row = await fetch(`${base}/rest/v1/site_assets`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json", Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify({ key: name, label: meta.label, url: publicUrl, alt: meta.alt }),
  });
  console.log(file, "upload:", up.status, "row:", row.status);
}

const settingsRows = Object.entries(settings).map(([k, v]) => ({ key: k, value: v }));
const res = await fetch(`${base}/rest/v1/site_settings`, {
  method: "POST",
  headers: { ...headers, "Content-Type": "application/json", Prefer: "resolution=merge-duplicates" },
  body: JSON.stringify(settingsRows),
});
console.log("site_settings:", res.status, await res.text());
