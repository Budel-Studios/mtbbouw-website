// Resize photos in a folder to web size (max 1800px long edge, jpg q80),
// overwriting in place. Run: node scripts/resize-images.mjs <dir>
import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2];
if (!dir) { console.error("Usage: node scripts/resize-images.mjs <dir>"); process.exit(1); }

for (const file of readdirSync(dir).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const full = join(dir, file);
  const tmp = full + ".tmp";
  const before = Math.round(statSync(full).size / 1024);
  await sharp(full)
    .rotate() // apply EXIF orientation
    .resize(1800, 1800, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(tmp);
  renameSync(tmp, full);
  console.log(file, before + "KB ->", Math.round(statSync(full).size / 1024) + "KB");
}
