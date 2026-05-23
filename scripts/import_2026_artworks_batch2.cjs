// 2026 추가 작품 20점 import (페이지 28~47용)
// 소스: E:\인사아트참고용\양리애 작가\갤러리앱_자료 (부모 폴더)
// 대상: public/artworks2026/8.jpg ~ 27.jpg (1~7번 뒤에 이어붙임)

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = 'E:/인사아트참고용/양리애 작가/갤러리앱_자료';
const DEST = path.join(__dirname, '..', 'public', 'artworks2026');

// 정렬 순서: 숫자 오름차순 → KakaoTalk 번호 오름차순
const SOURCES = [
  '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg',
  '9.jpg', '13.jpg', '16.jpg', '17.jpg', '18.jpg', '50.jpg',
  'KakaoTalk_20260523_170916306_01.jpg',
  'KakaoTalk_20260523_170916306_02.jpg',
  'KakaoTalk_20260523_170916306_04.jpg',
  'KakaoTalk_20260523_170916306_05.jpg',
  'KakaoTalk_20260523_170916306_06.jpg',
  'KakaoTalk_20260523_170916306_07.jpg',
  'KakaoTalk_20260523_170916306_08.jpg',
  'KakaoTalk_20260523_170916306_09.jpg',
];

const START_INDEX = 8; // 기존 1~7 다음

if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

(async () => {
  let totalBefore = 0, totalAfter = 0;
  for (let i = 0; i < SOURCES.length; i++) {
    const srcPath = path.join(SRC, SOURCES[i]);
    const destNum = START_INDEX + i;
    const destPath = path.join(DEST, `${destNum}.jpg`);

    if (!fs.existsSync(srcPath)) {
      console.error(`❌ 소스 없음: ${srcPath}`);
      continue;
    }

    const beforeBytes = fs.statSync(srcPath).size;
    totalBefore += beforeBytes;

    await sharp(srcPath)
      .rotate()
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(destPath);

    const afterBytes = fs.statSync(destPath).size;
    totalAfter += afterBytes;

    console.log(`  ${SOURCES[i]} → ${destNum}.jpg : ${(beforeBytes/1024).toFixed(0)}KB → ${(afterBytes/1024).toFixed(0)}KB`);
  }
  console.log(`\n✅ ${SOURCES.length}작품 완료: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB`);
})();
