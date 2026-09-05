// One-time: turn the supplied logo SVGs (which embed a raster on a solid
// white background) into clean, trimmed, transparent PNGs.
//
// The brand colours all have a zero-valued channel (#ABE000, #00AEF7,
// #003384, black), so coverage can be recovered exactly from the darkest
// channel: a = (255 - min(p)) / 255, and the unpremultiplied colour is
// c = 255 * (p - min(p)) / (255 - min(p)).
//
// Usage: node scripts/prepare-logos.mjs <dir-with-5.svg-and-6.svg>
import sharp from "sharp";
import { statSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2];
if (!dir) {
  console.error("Usage: node scripts/prepare-logos.mjs <dir>");
  process.exit(1);
}

const outputs = [
  { file: "6.svg", out: "public/images/brand/logomark.png", label: "beeldmerk" },
  { file: "5.svg", out: "public/images/brand/logo-full.png", label: "volledig logo" },
];

for (const { file, out, label } of outputs) {
  const { data, info } = await sharp(join(dir, file), { density: 300 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: c } = info;

  // The embedded rasters carry a faint haze across the whole canvas; anything
  // below NOISE is background, not artwork (real edges ramp well past it).
  const NOISE = 12;

  const rgba = Buffer.alloc(w * h * 4);
  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let i = 0, p = 0; i < w * h; i++, p += c) {
    const r = data[p], g = data[p + 1], b = data[p + 2], a0 = data[p + 3];
    const lo = Math.min(r, g, b);
    // A pixel is artwork only where it is both inside the SVG shape (a0) and
    // not white (255 - lo); at the clip edge a0 alone would count white as ink.
    const cover = Math.round((a0 * (255 - lo)) / 255);
    const o = i * 4;
    if (cover <= NOISE) { rgba[o] = rgba[o + 1] = rgba[o + 2] = rgba[o + 3] = 0; continue; }
    const denom = 255 - lo;
    rgba[o] = denom > 0 ? Math.round((255 * (r - lo)) / denom) : 0;
    rgba[o + 1] = denom > 0 ? Math.round((255 * (g - lo)) / denom) : 0;
    rgba[o + 2] = denom > 0 ? Math.round((255 * (b - lo)) / denom) : 0;
    rgba[o + 3] = cover;
    const x = i % w, y = (i / w) | 0;
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
  }

  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 })
    .png({ compressionLevel: 9 })
    .toFile(out);

  const meta = await sharp(out).metadata();
  console.log(`${label}: ${meta.width}x${meta.height}, ${Math.round(statSync(out).size / 1024)}KB -> ${out}`);
}
