#!/usr/bin/env node
/**
 * Download Izmir / Ephesus imagery from verified Wikimedia Commons URLs.
 * Run: node scripts/download-images.mjs
 */
import { writeFileSync, mkdirSync, readdirSync, unlinkSync } from "fs";
import { join } from "path";

const OUT = "public/images";
mkdirSync(OUT, { recursive: true });
const UA = "izmir-shore-excursions/1.0 (image fetch; contact webmaster)";

const IZMIR_IMAGES = {
  "library-celsus.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Ephesus_Celsus_Library_Fa%C3%A7ade.jpg",
  "ephesus.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ephesus_Library_of_Celsus.jpg",
  "virgin-mary.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/House_of_the_Virgin_Mary.jpg",
  "artemis.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_ruins_of_the_Mausoleum_at_Halicarnassus.jpg/1920px-The_ruins_of_the_Mausoleum_at_Halicarnassus.jpg",
  "sirince.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Vineyard_Road_in_Bozcaada.jpg/1920px-Vineyard_Road_in_Bozcaada.jpg",
  "kemeralti.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Starter_dish_in_Turkey.jpg/1920px-Starter_dish_in_Turkey.jpg",
  "izmir-city.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/c/c4/Izmir_Clock_Tower.jpg",
  "food.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Starter_dish_in_Turkey.jpg/1920px-Starter_dish_in_Turkey.jpg",
  "terrace-houses.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ephesus_Terrace_Houses.jpg",
  "coast.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Poyraz_Koyu%2C_Karaada_-_panoramio.jpg/1920px-Poyraz_Koyu%2C_Karaada_-_panoramio.jpg",
  "private-tour.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ephesus_Theater.jpg",
  "cruise-port.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/c/c4/Izmir_Clock_Tower.jpg",
  "hero-home.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Ephesus_Celsus_Library_Fa%C3%A7ade.jpg",
  "og-default.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ephesus_Library_of_Celsus.jpg",
};

const ALLOWED = new Set([...Object.keys(IZMIR_IMAGES), "logo-mark.svg", "favicon.ico"]);

async function download(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 10000) throw new Error("file too small");
  return buf;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function downloadWithRetry(url, attempts = 5) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await download(url);
    } catch (e) {
      if (i === attempts - 1) throw e;
      await sleep(2000 + i * 1500);
    }
  }
  throw new Error("unreachable");
}

async function main() {
  for (const name of readdirSync(OUT)) {
    if (!ALLOWED.has(name)) {
      unlinkSync(join(OUT, name));
      console.log(`removed orphan ${name}`);
    }
  }

  let failed = 0;
  for (const [file, url] of Object.entries(IZMIR_IMAGES)) {
    try {
      const buf = await downloadWithRetry(url);
      writeFileSync(join(OUT, file), buf);
      console.log(`ok ${file}`);
      await sleep(1200);
    } catch (e) {
      console.error(`FAIL ${file}: ${e.message}`);
      failed++;
    }
  }

  if (failed) process.exit(1);
  console.log(`\nAll ${Object.keys(IZMIR_IMAGES).length} Izmir images ready.`);
}

main();
