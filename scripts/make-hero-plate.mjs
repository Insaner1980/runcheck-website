// Tuottaa hero-puhelimen "levykuvan": sama kuva ilman ruudulle poltettua
// runcheck-merkkia, jotta merkki voidaan asettaa paalle elavana SVG:na ja
// animoida. Hehku, sanamerkki ja rungon yksityiskohdat sailyvat ennallaan.
//
// Aja kerran, kun lahdekuva tai logo muuttuu:
//   node scripts/make-hero-plate.mjs
//
// Skripti tulostaa lopuksi CSS-sijoitusarvot, jotka .hero-logo kayttaa
// global.css:ssa. Ala kirjoita niita kasin - ne ovat sovituksen tulos.

import { readFile } from "node:fs/promises";
import sharp from "sharp";

const SOURCE = "public/assets/runcheck-phone-condition-hero.webp";
const PLATE = "public/assets/runcheck-phone-condition-hero-plate.webp";
const LOGO = "src/assets/runcheck-logo.svg";

// Merkin alue lahdekuvassa. Sanamerkki "runcheck" jaa kuvaan, joten
// maskattava alue paattyy merkin ja sanamerkin valiseen rakoon (y 656-690).
const REGION = { x0: 120, x1: 430, y0: 360, y1: 675 };

// Hehkussa vihrea kanava on korkeintaan ~68, merkissa vahintaan ~155.
// Punakanava ei erottele: sininen varsi on (5,155,252), hehku (4,68,119).
const MARK_G_MIN = 95;
const DILATE_PX = 7;
const DIFFUSION_PASSES = 1200;

const src = sharp(SOURCE);
const { width: W, height: H } = await src.metadata();
const { data } = await src.raw().toBuffer({ resolveWithObject: true });
const CH = 4;

/** Merkin pikselit vihrean kanavan kynnyksella. */
function buildMarkMask() {
  const mask = new Uint8Array(W * H);
  let count = 0;
  for (let y = REGION.y0; y <= REGION.y1; y++) {
    for (let x = REGION.x0; x <= REGION.x1; x++) {
      if (data[(y * W + x) * CH + 1] > MARK_G_MIN) {
        mask[y * W + x] = 1;
        count++;
      }
    }
  }
  return { mask, count };
}

/** Laajentaa maskia nelinaapurustossa, jotta antialias-reunat jaavat sisaan. */
function dilate(mask, radius) {
  const pad = radius + 2;
  let current = mask;
  for (let step = 0; step < radius; step++) {
    const next = new Uint8Array(current);
    for (let y = REGION.y0 - pad; y <= REGION.y1 + pad; y++) {
      for (let x = REGION.x0 - pad; x <= REGION.x1 + pad; x++) {
        const i = y * W + x;
        if (current[i]) continue;
        if (
          current[i - W] ||
          current[i + W] ||
          current[i - 1] ||
          current[i + 1]
        ) {
          next[i] = 1;
        }
      }
    }
    current = next;
  }
  return current;
}

/**
 * Tayttaa maskatut pikselit diffuusiolla: jokainen maskattu pikseli hakeutuu
 * naapuriensa keskiarvoon, ja maskin ulkopuoliset pikselit pysyvat kiinteina
 * reunaehtona. Koska reiat ovat ohuita, tulos sulautuu ymparistoon saumatta.
 */
function inpaint(indices) {
  const field = new Float32Array(W * H * 3);
  for (let i = 0; i < W * H; i++) {
    for (let c = 0; c < 3; c++) field[i * 3 + c] = data[i * CH + c];
  }
  for (const i of indices) {
    for (let c = 0; c < 3; c++) field[i * 3 + c] = 0;
  }
  const next = new Float32Array(field);
  for (let pass = 0; pass < DIFFUSION_PASSES; pass++) {
    for (const i of indices) {
      for (let c = 0; c < 3; c++) {
        next[i * 3 + c] =
          0.25 *
          (field[(i - W) * 3 + c] +
            field[(i + W) * 3 + c] +
            field[(i - 1) * 3 + c] +
            field[(i + 1) * 3 + c]);
      }
    }
    for (const i of indices) {
      for (let c = 0; c < 3; c++) field[i * 3 + c] = next[i * 3 + c];
    }
  }
  return field;
}

/** Bounding box maskille. */
function boundsOf(mask) {
  let x0 = W,
    x1 = 0,
    y0 = H,
    y1 = 0;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (!mask[y * W + x]) continue;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
  }
  return { x0, x1, y0, y1 };
}

/**
 * Sovittaa logon SVG:n lahdekuvan merkkiin. Palauttaa skaalan (SVG:n
 * viewBoxin leveys kuvapikseleina) ja viewBoxin vasemman ylakulman sijainnin.
 * Sovitus maksimoi leikkauksen ja yhdisteen suhteen (IoU), joten se ei
 * nojaa pelkkiin bounding boxeihin.
 */
async function calibrate(markMask) {
  const REF = 1024;
  const svg = await readFile(LOGO);
  const { data: rgba } = await sharp(svg, { density: 384 })
    .resize(REF, REF, { fit: "fill" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  // Musteen peitto referenssiruudukossa
  const cover = new Uint8Array(REF * REF);
  for (let i = 0; i < REF * REF; i++) cover[i] = rgba[i * 4 + 3] > 128 ? 1 : 0;

  const target = boundsOf(markMask);
  // Musteen rajat referenssissa -> alkuarvaus skaalalle ja siirrolle
  let ix0 = REF,
    ix1 = 0,
    iy0 = REF,
    iy1 = 0;
  for (let y = 0; y < REF; y++) {
    for (let x = 0; x < REF; x++) {
      if (!cover[y * REF + x]) continue;
      if (x < ix0) ix0 = x;
      if (x > ix1) ix1 = x;
      if (y < iy0) iy0 = y;
      if (y > iy1) iy1 = y;
    }
  }
  const guessScale = ((target.x1 - target.x0 + 1) / (ix1 - ix0 + 1)) * REF;

  const iou = (scale, ox, oy) => {
    // scale = viewBoxin leveys kuvapikseleina; (ox,oy) = viewBoxin vasen ylakulma
    let inter = 0,
      union = 0;
    const yA = Math.min(target.y0, Math.floor(oy)) - 4;
    const yB = Math.max(target.y1, Math.ceil(oy + scale)) + 4;
    const xA = Math.min(target.x0, Math.floor(ox)) - 4;
    const xB = Math.max(target.x1, Math.ceil(ox + scale)) + 4;
    for (let y = Math.max(0, yA); y <= Math.min(H - 1, yB); y++) {
      for (let x = Math.max(0, xA); x <= Math.min(W - 1, xB); x++) {
        const u = ((x - ox) / scale) * REF;
        const v = ((y - oy) / scale) * REF;
        const inSvg =
          u >= 0 && v >= 0 && u < REF && v < REF
            ? cover[Math.floor(v) * REF + Math.floor(u)]
            : 0;
        const inImg = markMask[y * W + x];
        if (inSvg || inImg) union++;
        if (inSvg && inImg) inter++;
      }
    }
    return union ? inter / union : 0;
  };

  let best = { iou: -1 };
  const scale0 = guessScale;
  const ox0 = target.x0 - (ix0 / REF) * scale0;
  const oy0 = target.y0 - (iy0 / REF) * scale0;
  for (let ds = -0.08; ds <= 0.08001; ds += 0.005) {
    const scale = scale0 * (1 + ds);
    for (let dx = -10; dx <= 10; dx += 0.5) {
      for (let dy = -10; dy <= 10; dy += 0.5) {
        const score = iou(scale, ox0 + dx, oy0 + dy);
        if (score > best.iou)
          best = { iou: score, scale, ox: ox0 + dx, oy: oy0 + dy };
      }
    }
  }
  return best;
}

const { mask: rawMask, count } = buildMarkMask();
console.log(`merkin pikselit:            ${count}`);

const fit = await calibrate(rawMask);
console.log(
  `SVG-sovitus:                IoU ${fit.iou.toFixed(4)}  ` +
    `viewBox ${fit.scale.toFixed(2)}px @ (${fit.ox.toFixed(2)}, ${fit.oy.toFixed(2)})`,
);

const mask = dilate(rawMask, DILATE_PX);
const indices = [];
for (let i = 0; i < mask.length; i++) if (mask[i]) indices.push(i);
console.log(`maskattu laajennuksen jalkeen: ${indices.length}`);

const field = inpaint(indices);
const out = Buffer.from(data);
for (const i of indices) {
  for (let c = 0; c < 3; c++) {
    out[i * CH + c] = Math.max(0, Math.min(255, Math.round(field[i * 3 + c])));
  }
}

const info = await sharp(out, { raw: { width: W, height: H, channels: CH } })
  .webp({ quality: 92 })
  .toFile(PLATE);
console.log(`kirjoitettu ${PLATE} (${info.size} tavua)`);

// CSS-sijoitus prosentteina, jotta merkki skaalautuu kuvan mukana.
const pct = (v, total) => `${((v / total) * 100).toFixed(3)}%`;
console.log(`
global.css -> .hero-logo:
  left:   ${pct(fit.ox, W)}
  top:    ${pct(fit.oy, H)}
  width:  ${pct(fit.scale, W)}
  aspect-ratio: 1 / 1;`);
