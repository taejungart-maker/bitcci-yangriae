/**
 * SNS 공유용 썸네일 (1200×630) 생성
 *
 *   node scripts/make-thumbnail.mjs
 *
 * → public/thumbnail.jpg 저장
 */

import sharp from 'sharp';
import { writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';

const W = 1200;
const H = 630;
const SRC = './public/artworks/13.jpg';
const DEST = './public/thumbnail.jpg';

// 1. 커버 이미지 로드 + 1200x630 크롭
const baseBuffer = await sharp(SRC)
  .resize({ width: W, height: H, fit: 'cover', position: 'center' })
  .jpeg({ quality: 90 })
  .toBuffer();

// 2. 어두운 그라데이션 오버레이 + 텍스트 SVG
const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="darken" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(0,0,0,0.55)"/>
      <stop offset="50%" stop-color="rgba(0,0,0,0.35)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.7)"/>
    </linearGradient>
  </defs>

  <!-- 배경 어둡게 -->
  <rect width="${W}" height="${H}" fill="url(#darken)"/>

  <!-- 상단 라벨 -->
  <text x="${W/2}" y="160" text-anchor="middle"
        font-family="'Noto Sans KR','Malgun Gothic',sans-serif"
        font-size="24" font-weight="400" fill="rgba(255,255,255,0.85)"
        letter-spacing="8">
    제 11회 양리애 개인전
  </text>

  <!-- 보라 라인 -->
  <line x1="${W/2 - 28}" y1="195" x2="${W/2 + 28}" y2="195"
        stroke="rgba(180,168,204,0.6)" stroke-width="1.5"/>

  <!-- 큰 메인 타이틀 -->
  <text x="${W/2}" y="305" text-anchor="middle"
        font-family="'Noto Serif KR','Noto Sans KR',serif"
        font-size="92" font-weight="600" fill="#ffffff"
        letter-spacing="6">
    껍데기들
  </text>

  <!-- 부제 (한글) -->
  <text x="${W/2}" y="385" text-anchor="middle"
        font-family="'Noto Sans KR','Malgun Gothic',sans-serif"
        font-size="28" font-weight="300" fill="rgba(255,255,255,0.9)"
        font-style="italic" letter-spacing="2">
    상상하는 무언가를 가지고 와서는
  </text>

  <!-- 일정/장소 박스 -->
  <line x1="${W/2 - 200}" y1="465" x2="${W/2 + 200}" y2="465"
        stroke="rgba(255,255,255,0.3)" stroke-width="1"/>

  <text x="${W/2}" y="510" text-anchor="middle"
        font-family="'Noto Sans KR','Malgun Gothic',sans-serif"
        font-size="22" font-weight="400" fill="rgba(255,255,255,0.85)"
        letter-spacing="2">
    2026. 5. 20 — 5. 25
  </text>

  <text x="${W/2}" y="550" text-anchor="middle"
        font-family="'Noto Sans KR','Malgun Gothic',sans-serif"
        font-size="20" font-weight="300" fill="rgba(255,255,255,0.7)"
        letter-spacing="3">
    인사아트센터 5층 경남갤러리
  </text>
</svg>
`;

const overlayBuffer = Buffer.from(svg);

// 3. 합성
const finalBuffer = await sharp(baseBuffer)
  .composite([{ input: overlayBuffer, top: 0, left: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toBuffer();

// 4. 임시 파일 후 rename (윈도우 잠금 회피)
const tmp = DEST + '.tmp';
writeFileSync(tmp, finalBuffer);
try { unlinkSync(DEST); } catch {}
await new Promise(r => setTimeout(r, 80));
const { renameSync } = await import('fs');
renameSync(tmp, DEST);

console.log(`✓ Thumbnail created: ${DEST}`);
console.log(`  Size: ${W}×${H}, ${(finalBuffer.length / 1024).toFixed(1)} KB`);
