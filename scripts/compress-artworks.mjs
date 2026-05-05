import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync, renameSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';

const dir = './public/artworks';
const MAX_DIM = 2000;
const QUALITY = 88;
const SKIP_THRESHOLD_MB = 0.5;

const files = readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
files.sort((a, b) => parseInt(a) - parseInt(b));

let totalBefore = 0;
let totalAfter = 0;

for (const f of files) {
  const fp = join(dir, f);
  const stats = statSync(fp);
  const sizeMB = stats.size / 1024 / 1024;
  totalBefore += sizeMB;

  if (sizeMB < SKIP_THRESHOLD_MB) {
    console.log(`  skip  ${f.padEnd(8)} ${sizeMB.toFixed(2).padStart(6)} MB  (already small)`);
    totalAfter += sizeMB;
    continue;
  }

  const buffer = await sharp(fp)
    .rotate()
    .resize({ width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  // 윈도우 파일 잠금 회피: tmp 파일에 쓰고 원본 삭제 후 rename
  const tmp = fp + '.tmp';
  writeFileSync(tmp, buffer);
  try {
    unlinkSync(fp);
  } catch {}
  // 짧은 대기 후 rename (윈도우 핸들 해제 시간 확보)
  await new Promise(r => setTimeout(r, 80));
  renameSync(tmp, fp);
  const newMB = buffer.length / 1024 / 1024;
  totalAfter += newMB;
  console.log(`  ✓     ${f.padEnd(8)} ${sizeMB.toFixed(2).padStart(6)} MB → ${newMB.toFixed(2).padStart(5)} MB`);
}

console.log('');
console.log(`  Total: ${totalBefore.toFixed(2)} MB → ${totalAfter.toFixed(2)} MB  (saved ${(totalBefore - totalAfter).toFixed(2)} MB)`);
