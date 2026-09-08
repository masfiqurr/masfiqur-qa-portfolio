import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outputPath = path.join(root, "public/cv/MD-Masfiqur-Rahman-CV.pdf");
const baseUrl = process.env.CV_PDF_URL ?? "http://localhost:3000/cv";

async function main() {
  await mkdir(path.dirname(outputPath), { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForSelector(".cv-page");
  await page.emulateMedia({ media: "print" });

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log(`Wrote ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
