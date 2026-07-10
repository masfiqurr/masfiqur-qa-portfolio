const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const pngToIco = require("png-to-ico").default || require("png-to-ico");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "icons");

const svgFor = (size) => {
  const stroke = Math.max(2, Math.round(size * 0.045));
  const radius = Math.round(size * 0.22);
  const checkStroke = Math.max(2.5, Math.round(size * 0.055));
  const fontSize = Math.round(size * 0.28);
  const checkY = size * 0.28;
  const textY = size * 0.72;

  return Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none">
  <rect width="${size}" height="${size}" rx="${radius}" fill="#050505"/>
  <rect x="${stroke}" y="${stroke}" width="${size - stroke * 2}" height="${size - stroke * 2}" rx="${Math.max(radius - stroke, 4)}" stroke="#5B29DA" stroke-width="${stroke}"/>
  <path d="M${size * 0.34} ${checkY} l${size * 0.07} ${size * 0.07} L${size * 0.62} ${size * 0.16}" stroke="#75C32C" stroke-width="${checkStroke}" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="${size / 2}" y="${textY}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="700" fill="#FFFFFF" letter-spacing="${Math.max(1, size * 0.015)}">MR</text>
</svg>`);
};

async function writePng(size, filePath) {
  await sharp(svgFor(size)).png().toFile(filePath);
  console.log("wrote", filePath);
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const sizes = [16, 32, 48, 180, 192, 512];
  for (const size of sizes) {
    const name = size === 180 ? path.join(root, "public", "apple-touch-icon.png") : path.join(outDir, `icon-${size}.png`);
    await writePng(size, name);
  }

  const icoBuffer = await pngToIco([
    path.join(outDir, "icon-16.png"),
    path.join(outDir, "icon-32.png"),
    path.join(outDir, "icon-48.png"),
  ]);
  const icoPath = path.join(root, "public", "favicon.ico");
  fs.writeFileSync(icoPath, icoBuffer);
  console.log("wrote", icoPath);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
