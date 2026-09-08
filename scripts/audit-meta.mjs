// Meet de lengte van title en description per pagina.
// Google kapt titels rond 60 tekens af en omschrijvingen rond 160.
// Run: node scripts/audit-meta.mjs
import { readdirSync, readFileSync } from "node:fs";
import { join, sep } from "node:path";

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? walk(join(dir, e.name))
      : e.name === "page.tsx"
        ? [join(dir, e.name)]
        : []
  );

const titles = [];
const descriptions = [];

for (const file of walk("app")) {
  const src = readFileSync(file, "utf8");
  const route =
    "/" +
    file.split(sep).slice(1, -1).join("/").replace(/\[|\]/g, ":");

  const title =
    src.match(/title:\s*\{\s*absolute:\s*["'`]([^"'`]+)/)?.[1] ??
    src.match(/title:\s*["'`]([^"'`]+)/)?.[1];
  const description = src.match(/description:\s*\n?\s*["'`]([^"'`]+)/)?.[1];

  // Zonder `absolute` plakt de template " | MTB Bouw" (11 tekens) erachter.
  if (title) {
    const full = src.includes("absolute:") ? title : `${title} | MTB Bouw`;
    if (full.length > 60) titles.push([route, full.length, full]);
  }
  if (description && description.length > 160) {
    descriptions.push([route, description.length]);
  }
}

titles.sort((a, b) => b[1] - a[1]);
descriptions.sort((a, b) => b[1] - a[1]);

console.log(`Titels boven 60 tekens: ${titles.length}`);
for (const [route, len, text] of titles) console.log(`  ${len}  ${route}\n      ${text}`);
console.log(`\nOmschrijvingen boven 160 tekens: ${descriptions.length}`);
for (const [route, len] of descriptions) console.log(`  ${len}  ${route}`);
