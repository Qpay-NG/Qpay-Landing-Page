import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");
const outputDir = path.join(publicDir, "optimized");

const jobs = [
  {
    input: "hero-qpay-users.png",
    name: "hero-qpay-users",
    sizes: [640, 960, 1280],
    webpQuality: 88,
    avifQuality: 58,
  },
  {
    input: "lean/ChatGPT Image Apr 24, 2026, 07_38_50 PM.png",
    name: "hero-bg",
    sizes: [1280, 1772],
    webpQuality: 86,
    avifQuality: 56,
  },
  {
    input: "screen2.jpg",
    name: "screen-enter-amount",
    sizes: [545],
    webpQuality: 88,
    avifQuality: 58,
  },
  {
    input: "screen33.jpg",
    name: "screen-merchant-qr",
    sizes: [530],
    webpQuality: 88,
    avifQuality: 58,
  },
  {
    input: "screen_1.jpg",
    name: "screen-payment-confirmed",
    sizes: [536],
    webpQuality: 88,
    avifQuality: 58,
  },
  {
    input: "lean/Hidden balance.png",
    name: "screen-hidden-balance",
    sizes: [393],
    webpQuality: 88,
    avifQuality: 58,
  },
  {
    input: "lean/Default1.png",
    name: "screen-merchant-dashboard",
    sizes: [393],
    webpQuality: 88,
    avifQuality: 58,
  },
  {
    input: "lean/photo_2026-05-02_02-06-16.jpg",
    name: "screen-qr",
    sizes: [393],
    webpQuality: 88,
    avifQuality: 58,
  },
];

async function formatSize(filePath) {
  const { size } = await fs.stat(filePath);
  return `${Math.round(size / 1024)}KB`;
}

await fs.mkdir(outputDir, { recursive: true });

for (const job of jobs) {
  const source = path.join(publicDir, job.input);
  const metadata = await sharp(source).metadata();
  const sourceWidth = metadata.width;

  for (const targetWidth of job.sizes) {
    const width = Math.min(targetWidth, sourceWidth);
    const suffix = job.sizes.length > 1 ? `-${width}` : "";
    const base = path.join(outputDir, `${job.name}${suffix}`);
    const pipeline = sharp(source).resize({
      width,
      withoutEnlargement: true,
    });

    await pipeline
      .clone()
      .webp({ quality: job.webpQuality, smartSubsample: true })
      .toFile(`${base}.webp`);

    await pipeline
      .clone()
      .avif({ quality: job.avifQuality, effort: 6 })
      .toFile(`${base}.avif`);

    console.log(
      `${job.name}${suffix}: webp ${await formatSize(`${base}.webp`)}, avif ${await formatSize(`${base}.avif`)}`
    );
  }
}

await sharp(path.join(publicDir, "hero-qpay-users.png"))
  .resize({ width: 48, withoutEnlargement: true })
  .blur(6)
  .webp({ quality: 42 })
  .toFile(path.join(outputDir, "hero-qpay-users-blur.webp"));

console.log(
  `hero-qpay-users-blur: webp ${await formatSize(
    path.join(outputDir, "hero-qpay-users-blur.webp")
  )}`
);
