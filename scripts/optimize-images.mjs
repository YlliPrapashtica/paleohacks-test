#!/usr/bin/env node
/**
 * Batch-converts /public/images/raw/*.{jpg,jpeg,png} -> /public/images/*.webp
 *
 * Usage:
 *   1. Drop your source JPGs in public/images/raw/
 *   2. Run: npm run images
 *   3. Commit the resulting .webp files (raw/ is gitignored)
 *
 * Quality 78 hits a sweet spot for VSL-style photography: ~85% smaller than
 * source JPG with no visible artifacts at the rendered sizes.
 */
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RAW_DIR = path.resolve(__dirname, "../public/images/raw");
const OUT_DIR = path.resolve(__dirname, "../public/images");
const QUALITY = 78;
const MAX_WIDTH = 1600;

const SUPPORTED = new Set([".jpg", ".jpeg", ".png"]);

async function main() {
  if (!existsSync(RAW_DIR)) {
    console.error(`Raw image dir not found: ${RAW_DIR}`);
    console.error("Create public/images/raw/ and drop your JPGs there.");
    process.exit(1);
  }
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(RAW_DIR)).filter((f) =>
    SUPPORTED.has(path.extname(f).toLowerCase()),
  );

  if (files.length === 0) {
    console.warn("No source images found in public/images/raw/");
    return;
  }

  for (const file of files) {
    const inPath = path.join(RAW_DIR, file);
    const outName = path.parse(file).name + ".webp";
    const outPath = path.join(OUT_DIR, outName);

    const { size: srcSize } = await stat(inPath);

    await sharp(inPath)
      .rotate()
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outPath);

    const { size: outSize } = await stat(outPath);
    const saved = (1 - outSize / srcSize) * 100;
    console.log(
      `${file.padEnd(40)} ${(srcSize / 1024).toFixed(0)} KB -> ${(outSize / 1024).toFixed(0)} KB  (-${saved.toFixed(0)}%)`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
