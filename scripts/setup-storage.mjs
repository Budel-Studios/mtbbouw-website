// One-time setup: create the public storage buckets for site content.
// Run with: node scripts/setup-storage.mjs (reads .env.local)
import { readFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim()])
);

const base = env.NEXT_PUBLIC_SUPABASE_URL;
const key = env.SUPABASE_SERVICE_ROLE_KEY;
const buckets = ["brand", "projects", "kennisbank", "team"];

for (const name of buckets) {
  const res = await fetch(`${base}/storage/v1/bucket`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      apikey: key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: name, name, public: true }),
  });
  console.log(name, res.status, await res.text());
}
