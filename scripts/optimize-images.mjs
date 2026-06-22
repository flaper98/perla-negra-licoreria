import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public');

let totalSaved = 0;
let converted = 0;
let skipped = 0;

async function convert(srcRel, opts = {}) {
  const src = path.join(PUBLIC, srcRel);
  if (!fs.existsSync(src)) { console.log(`  ⊘  no existe: ${srcRel}`); skipped++; return null; }

  const parsed = path.parse(src);
  const originalPath = path.join(parsed.dir, `${parsed.name}_original${parsed.ext}`);
  const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);

  // Ya procesado
  if (fs.existsSync(originalPath)) {
    console.log(`  ↷  ya hecho: ${srcRel}`);
    return srcRel.replace(/\.[^.]+$/, '.webp');
  }

  const origKB = Math.round(fs.statSync(src).size / 1024);

  // Renombrar original
  fs.renameSync(src, originalPath);

  // Convertir
  let pipeline = sharp(originalPath);
  if (opts.width || opts.height) {
    pipeline = pipeline.resize(opts.width || null, opts.height || null, {
      fit: opts.fit || 'inside',
      withoutEnlargement: true,
    });
  }
  await pipeline.webp({ quality: opts.quality || 80 }).toFile(webpPath);

  const newKB = Math.round(fs.statSync(webpPath).size / 1024);
  const saved = origKB - newKB;
  totalSaved += saved;
  converted++;
  console.log(`  ✓  ${path.basename(srcRel).padEnd(55)} ${String(origKB).padStart(6)} KB → ${String(newKB).padStart(5)} KB  (-${Math.round(saved/origKB*100)}%)`);
  return srcRel.replace(/\.[^.]+$/, '.webp');
}

async function main() {
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(' PERLA NEGRA — Optimización de imágenes');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // ── 1. Lima promo PNGs (58 archivos, ~2 MB c/u → 680×850 WebP) ────────────
  console.log('▶ Lima promotion PNGs (58 archivos)...');
  for (let i = 1; i <= 58; i++) {
    await convert(`img/promotion/Lima/${i}.png`, { width: 680, height: 850, fit: 'cover', quality: 80 });
  }

  // ── 2. Imágenes de producto (cards, 600px max) ─────────────────────────────
  console.log('\n▶ Imágenes de producto...');
  const productFiles = [
    'img/products/champagne/Ricadonna_Asti_750ml.png',
    'img/products/champagne/Ricadonna_Rubi_750ml.png',
    'img/products/gin/Beefeater_Pink_Strawberry_700ml.png',
    'img/products/gin/Tanqueray_London_700ml.png',
    'img/products/whisky/Jack_Daniels_Black_750ml.png',
    'img/products/whisky/Jack_Daniels_Apple_750ml.png',
    'img/products/whisky/Johnnie_Walker_Red_Label_750ml.png',
    'img/products/whisky/Johnnie_Walker_Black_Label_750ml.png',
    'img/products/whisky/Johnnie_Walker_Double_Black_750ml.png',
    'img/products/whisky/Johnnie_Walker_Gold_Label_750ml.png',
    'img/products/whisky/Ballantines_750ml.png',
    'img/products/whisky/Something_Special_750ml.png',
    'img/products/whisky/Passport_Scotch_700ml.png',
    'img/products/whisky/Old_Time_750ml.png',
    'img/products/whisky/chivas_regal_12_anos_botella_700ml.png',
    'img/products/whisky/Johnnie_Walker_Blue_Label_750ml.png',
    'img/products/whisky/Johnnie_Walker_Green_Label_750ml.png',
    'img/products/vodka/Smirnoff_Apple_750ml.png',
    'img/products/vodka/Smirnoff_Clásico_700ml.png',
    'img/products/vodka/Smirnoff_Ice_Green_Apple_Bite_355ml.png',
    'img/products/vodka/Absolut_750ml.png',
    'img/products/vinos/Santiago_Queirolo_Magdalena_750ml.png',
    'img/products/vinos/Santiago_Queirolo_Borgoña_750ml.png',
    'img/products/vinos/Tabernero_Borgoña_750ml.png',
    'img/products/vinos/Tabernero_Rosé_750ml.png',
    'img/products/vinos/Tuyo_Gran_Rosé_750ml.png',
    'img/products/vinos/Tabernero_Rosé_Semiseco_Selección_750ml.png',
    'img/products/pisco/Santiago_Queirolo_Quebranta_750ml.png',
    'img/products/pisco/Santiago_Queirolo_Acholado_750ml.png',
    'img/products/pisco/Flor_de_Caña_el_Porton.png',
    'img/products/tequila/Tequila_Jose_Cuervo_750ml.png',
    'img/products/tequila/1800_Tequila_Reserva_750ml.png',
    'img/products/energizantes/Red_Bull_250ml.png',
    'img/products/licores/Baileys_Original_750ml.png',
    'img/products/licores/jigger_750ml.png',
    'img/products/ron/Cartavio_Blanco_750ml.png',
    'img/products/ron/Cartavio_Rubio_750ml.png',
    'img/products/ron/Ron_Flor_de_Caña_12_Años_750ml.png',
    'img/products/ron/Barceló_Añejo_750ml.png',
    'img/products/ron/Flor_de_Caña_Oro_4_Años_750ml.png',
    'img/products/ron/Ron_Flor_de_Caña_Clásico_5_Años.png',
    'img/products/ron/Flor_de_Caña_7_Años.png',
    'img/products/ron/Cabo_Blanco_Black_900ml.png',
  ];
  for (const f of productFiles) {
    await convert(f, { width: 600, height: 600, fit: 'inside', quality: 80 });
  }

  // ── 3. Logos ───────────────────────────────────────────────────────────────
  console.log('\n▶ Logos...');
  await convert('img/logo.png', { width: 400, quality: 80 });
  if (fs.existsSync(path.join(PUBLIC, 'img/logo1.png'))) {
    await convert('img/logo1.png', { width: 400, quality: 80 });
  }

  // ── 4. Hero images ─────────────────────────────────────────────────────────
  console.log('\n▶ Hero images...');
  await convert('img/hero-desktop.png', { width: 1440, quality: 80 });
  await convert('img/hero-mobile.png', { width: 640, quality: 80 });

  // ── 5. Category thumbnails ─────────────────────────────────────────────────
  console.log('\n▶ Category thumbnails...');
  await convert('img/categorias/Gin.png',         { width: 600, quality: 80 });
  await convert('img/categorias/energizante.jpg', { width: 600, quality: 80 });
  await convert('img/categorias/vodka.jpg',       { width: 600, quality: 80 });
  await convert('img/categorias/whisky.jpg',      { width: 600, quality: 80 });
  await convert('img/categorias/vino.jpg',        { width: 600, quality: 80 });

  // ── Resumen ────────────────────────────────────────────────────────────────
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(` ✅  ${converted} imágenes convertidas   ↷  ${skipped} no encontradas`);
  console.log(` 💾  Ahorro total: ${(totalSaved / 1024).toFixed(1)} MB`);
  console.log('═══════════════════════════════════════════════════════════════\n');
}

main().catch(e => { console.error(e); process.exit(1); });
