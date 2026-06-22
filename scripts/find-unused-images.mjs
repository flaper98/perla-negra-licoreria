import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

// ── 1. Recopilar todos los archivos de imagen en /public ──────────────────────
function walkDir(dir, exts) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkDir(full, exts));
    else if (exts.includes(path.extname(entry.name).toLowerCase())) results.push(full);
  }
  return results;
}

const IMG_EXTS = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.avif'];
const allImages = walkDir(PUBLIC, IMG_EXTS).map(f =>
  f.replace(PUBLIC, '').replace(/\\/g, '/').replace(/^\//, '')
);

// ── 2. Recopilar todo el texto del código fuente ──────────────────────────────
const CODE_EXTS = ['.jsx', '.tsx', '.js', '.ts', '.css', '.html'];
const SKIP = ['node_modules', '.next', 'scripts'];

function walkCode(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.some(s => entry.name === s)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkCode(full));
    else if (CODE_EXTS.includes(path.extname(entry.name).toLowerCase())) results.push(full);
  }
  return results;
}

const codeText = walkCode(ROOT).map(f => fs.readFileSync(f, 'utf8')).join('\n');

// ── 3. Extraer todas las rutas de imagen mencionadas en el código ─────────────
const imgRefRegex = /(?:\/img\/|img\/)[^\s"'`)\]>]+?\.(?:png|jpg|jpeg|webp|svg|gif|avif)/gi;
const rawRefs = [...new Set([...codeText.matchAll(imgRefRegex)].map(m =>
  m[0].replace(/^\//, '').replace(/['"`;,)>\]]+$/, '')
))];

// Expandir patrones dinámicos Lima (1..58)
const isLimaDynamic = rawRefs.some(r => r.includes('Lima/') && r.includes('${'));
const expandedRefs = new Set(rawRefs);
if (isLimaDynamic || codeText.includes('Lima/') ) {
  for (let i = 1; i <= 58; i++) {
    expandedRefs.add(`img/promotion/Lima/${i}.webp`);
    expandedRefs.add(`img/promotion/Lima/${i}.png`);
  }
}

// ── 4. Clasificar cada imagen ─────────────────────────────────────────────────
const used = [];
const unused = [];

for (const img of allImages) {
  const name = path.basename(img);
  const isOriginal = name.includes('_original.');
  const isReferenced = [...expandedRefs].some(ref => img.endsWith(ref) || img === ref);

  if (isOriginal) {
    unused.push({ path: img, reason: 'backup _original (no referenciado en código)', kb: Math.round(fs.statSync(path.join(PUBLIC, img)).size / 1024) });
  } else if (!isReferenced) {
    unused.push({ path: img, reason: 'no encontrado en ningún archivo de código', kb: Math.round(fs.statSync(path.join(PUBLIC, img)).size / 1024) });
  } else {
    used.push(img);
  }
}

// ── 5. Reporte ────────────────────────────────────────────────────────────────
console.log('\n════════════════════════════════════════════════════════');
console.log(` Total imágenes: ${allImages.length}  |  En uso: ${used.length}  |  Sin usar: ${unused.length}`);
console.log('════════════════════════════════════════════════════════\n');

const originals = unused.filter(u => u.reason.includes('_original'));
const trulyUnused = unused.filter(u => !u.reason.includes('_original'));

const totalKB = unused.reduce((s, u) => s + u.kb, 0);
const originalsKB = originals.reduce((s, u) => s + u.kb, 0);
const trulyKB = trulyUnused.reduce((s, u) => s + u.kb, 0);

if (trulyUnused.length) {
  console.log(`▶ SIN REFERENCIA EN CÓDIGO (${trulyUnused.length} archivos, ${(trulyKB/1024).toFixed(1)} MB):`);
  for (const u of trulyUnused) console.log(`  ✗  ${u.path.padEnd(80)} ${u.kb} KB`);
  console.log();
}

console.log(`▶ BACKUPS _original (${originals.length} archivos, ${(originalsKB/1024).toFixed(1)} MB):`);
for (const u of originals) console.log(`  ✗  ${u.path.padEnd(80)} ${u.kb} KB`);

console.log(`\n💾 Espacio recuperable total: ${(totalKB/1024).toFixed(1)} MB`);
console.log(`   _original: ${(originalsKB/1024).toFixed(1)} MB  |  otros sin uso: ${(trulyKB/1024).toFixed(1)} MB`);
console.log('════════════════════════════════════════════════════════\n');

// Exportar lista para que el próximo paso sepa qué borrar
fs.writeFileSync(
  path.join(__dirname, 'unused-images.json'),
  JSON.stringify(unused.map(u => u.path), null, 2)
);
console.log('Lista guardada en scripts/unused-images.json\n');
