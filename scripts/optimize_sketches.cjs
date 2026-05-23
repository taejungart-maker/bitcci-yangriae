// 스케치 사진 모바일 최적화 (sharp)
// - 가로 1200px 이내 유지, JPEG quality 82
// - 원본은 sketches/_originals/ 로 백업
// 실행: node scripts/optimize_sketches.cjs

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.join(__dirname, '..', 'public', 'sketches');
const BACKUP = path.join(SRC, '_originals');

if (!fs.existsSync(BACKUP)) fs.mkdirSync(BACKUP, { recursive: true });

const files = fs.readdirSync(SRC).filter(f => /\.(jpg|jpeg|png)$/i.test(f) && !f.startsWith('_'));

(async () => {
  let totalBefore = 0, totalAfter = 0;
  for (const file of files) {
    const srcPath = path.join(SRC, file);
    const backupPath = path.join(BACKUP, file);
    const tmpPath = path.join(SRC, `_tmp_${file}`);

    // 원본 백업 (한 번만)
    if (!fs.existsSync(backupPath)) fs.copyFileSync(srcPath, backupPath);

    const beforeBytes = fs.statSync(backupPath).size;
    totalBefore += beforeBytes;

    await sharp(backupPath)
      .rotate() // EXIF orientation 자동 처리
      .resize({ width: 1200, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(tmpPath);

    fs.renameSync(tmpPath, srcPath);
    const afterBytes = fs.statSync(srcPath).size;
    totalAfter += afterBytes;

    const ratio = ((1 - afterBytes / beforeBytes) * 100).toFixed(1);
    console.log(`  ${file}: ${(beforeBytes/1024).toFixed(0)}KB → ${(afterBytes/1024).toFixed(0)}KB (-${ratio}%)`);
  }
  console.log(`\n✅ 완료: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB`);
})();
