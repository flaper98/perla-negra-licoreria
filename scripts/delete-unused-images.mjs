import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const list = JSON.parse(fs.readFileSync(path.join(__dirname, 'unused-images.json'), 'utf8'));

let deleted = 0;
let totalKB = 0;

for (const rel of list) {
  const full = path.join(PUBLIC, rel.replace(/\//g, path.sep));
  if (fs.existsSync(full)) {
    const kb = Math.round(fs.statSync(full).size / 1024);
    fs.unlinkSync(full);
    totalKB += kb;
    deleted++;
    console.log(`  🗑  ${rel}  (${kb} KB)`);
  } else {
    console.log(`  ⊘  ya no existe: ${rel}`);
  }
}

console.log(`\n✅ ${deleted} archivos eliminados — ${(totalKB / 1024).toFixed(1)} MB liberados`);
