// Schrijft lib/page-dates.json: per vaste pagina de datum van de laatste
// commit die de paginamap raakte. De sitemap gebruikt dit als lastModified,
// zodat Google ziet wanneer een pagina echt is gewijzigd (en niet het
// buildmoment). Draai `node scripts/page-dates.mjs` na inhoudelijke
// wijzigingen; de wekelijkse controle doet dit ook.
import { execSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const appDir = join(root, "app");
const skip = new Set(["api", "kennisbank", "projecten", "werkgenoeg", "mijn-blauwdruk", "test-speels"]);
const out = {};

function pageDirs(dir, prefix = "") {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory() || skip.has(name) || name.startsWith("[")) continue;
    const route = `${prefix}/${name}`;
    if (readdirSync(full).some((f) => /^page\.(tsx|ts|mdx?)$/.test(f))) out[route] = lastCommit(full);
    pageDirs(full, route);
  }
}
function lastCommit(path) {
  const iso = execSync(`git log -1 --format=%cI -- "${path}"`, { cwd: root }).toString().trim();
  return iso ? iso.slice(0, 10) : null;
}
out["/"] = lastCommit(join(appDir, "page.tsx"));
pageDirs(appDir);
const sorted = Object.fromEntries(Object.entries(out).filter(([, v]) => v).sort());
writeFileSync(join(root, "lib/page-dates.json"), JSON.stringify(sorted, null, 2) + "\n");
console.log(`${Object.keys(sorted).length} pagina's`);
