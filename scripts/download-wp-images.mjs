// One-time: download the original images that are actually in use on the old
// WordPress site (mtbbouw.com). Run with: node scripts/download-wp-images.mjs <dest-dir>
import { mkdirSync, writeFileSync } from "node:fs";
import { join, extname } from "node:path";

const files = {
  "logo":                  "https://mtbbouw.com/wp-content/uploads/2025/12/v1.0_2000x2000_color_logo_MTB_Bouw-1.png",
  "preloader":             "https://mtbbouw.com/wp-content/uploads/2025/12/GIF-Format.gif",
  "team-mathijs":          "https://mtbbouw.com/wp-content/uploads/2025/12/Mathijs-scaled.webp",
  "team-rick":             "https://mtbbouw.com/wp-content/uploads/2025/12/Rick-scaled.jpg",
  "team-robbert":          "https://mtbbouw.com/wp-content/uploads/2025/12/Robbert-scaled.jpg",
  "team-whatsapp-portret": "https://mtbbouw.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-16.14.10.jpeg",
  "project-img7585":       "https://mtbbouw.com/wp-content/uploads/2025/10/IMG_7585-scaled-1.jpg",
  "project-959":           "https://mtbbouw.com/wp-content/uploads/2025/07/959.jpg",
  "project-img0252":       "https://mtbbouw.com/wp-content/uploads/2025/10/IMG_0252-scaled-1.jpg",
  "project-image1":        "https://mtbbouw.com/wp-content/uploads/2026/01/image-1.png",
  "project-img0342":       "https://mtbbouw.com/wp-content/uploads/2026/01/IMG_0342-scaled-1.webp",
  "project-img0188":       "https://mtbbouw.com/wp-content/uploads/2025/12/IMG_0188-scaled.jpg",
  "project-img0362":       "https://mtbbouw.com/wp-content/uploads/2025/10/IMG_0362-1-scaled-1.jpg",
  "project-img15589h":     "https://mtbbouw.com/wp-content/uploads/2025/07/IMG_15589h-scaled-1.jpg",
  "project-img1902":       "https://mtbbouw.com/wp-content/uploads/2025/07/IMG_1902.jpg",
  "project-img7537":       "https://mtbbouw.com/wp-content/uploads/2025/12/IMG_7537.jpg",
  "project-8bb76ce3":      "https://mtbbouw.com/wp-content/uploads/2025/12/8bb76ce3-bc45-46dd-883d-6e8ed55ce2a8.png",
  "project-ontwerp7":      "https://mtbbouw.com/wp-content/uploads/2025/12/Ontwerp-zonder-titel-7.png",
};

const dest = process.argv[2];
if (!dest) { console.error("Usage: node scripts/download-wp-images.mjs <dest-dir>"); process.exit(1); }
mkdirSync(dest, { recursive: true });

for (const [key, url] of Object.entries(files)) {
  const res = await fetch(url);
  if (!res.ok) { console.log("FAIL", key, res.status); continue; }
  const buf = Buffer.from(await res.arrayBuffer());
  const file = key + extname(new URL(url).pathname);
  writeFileSync(join(dest, file), buf);
  console.log("OK", file, Math.round(buf.length / 1024) + " KB");
}
