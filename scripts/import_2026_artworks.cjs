// 2026 신규 작품 7점 import + 최적화
// 소스: E:\인사아트참고용\양리애 작가\갤러리앱_자료\작품
// 대상: public/artworks2026/1.jpg ~ 7.jpg

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = 'E:/인사아트참고용/양리애 작가/갤러리앱_자료/작품';
const DEST = path.join(__dirname, '..', 'public', 'artworks2026');

// 사용자가 폴더에 넣은 순서대로 (숫자 작은 것부터 → KakaoTalk 마지막)
const SOURCES = [
  '8.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '14.jpg',
  '15.jpg',
  'KakaoTalk_20260523_170916306_03.jpg',
];

if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

(async () => {
  let totalBefore = 0, totalAfter = 0;
  for (let i = 0; i < SOURCES.length; i++) {
    const srcPath = path.join(SRC, SOURCES[i]);
    const destPath = path.join(DEST, `${i + 1}.jpg`);

    if (!fs.existsSync(srcPath)) {
      console.error(`❌ 소스 없음: ${srcPath}`);
      continue;
    }

    const beforeBytes = fs.statSync(srcPath).size;
    totalBefore += beforeBytes;

    await sharp(srcPath)
      .rotate() // EXIF 자동 회전
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(destPath);

    const afterBytes = fs.statSync(destPath).size;
    totalAfter += afterBytes;

    console.log(`  ${SOURCES[i]} → ${i + 1}.jpg : ${(beforeBytes/1024).toFixed(0)}KB → ${(afterBytes/1024).toFixed(0)}KB`);
  }
  console.log(`\n✅ 7작품 완료: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB`);
})();
