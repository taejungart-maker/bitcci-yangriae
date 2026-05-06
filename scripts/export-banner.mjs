/**
 * 현수막 시안 PNG export 스크립트
 *
 * 사용법:
 *   1. 먼저 dev 서버 실행: npm run dev
 *   2. 이 스크립트 실행: node scripts/export-banner.mjs
 *
 * 결과: exports/banner-1270x650.png (고해상도)
 */

import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// 인쇄 사양: 127cm × 65cm @ 150 DPI = 7500px × 3839px
// 실용 사양: 127cm × 65cm @ 100 DPI = 5000px × 2559px
// 화면 미리보기: 1270 × 650
const SIZES = {
  preview: { width: 1270, height: 650, suffix: 'preview' },
  hires: { width: 5000, height: 2559, suffix: '5000x2559_100dpi' },
  print: { width: 7500, height: 3839, suffix: '7500x3839_150dpi' },
};

const URL = 'http://localhost:5173/bitcci-yangriae/#banner';

async function captureBanner() {
  console.log('🎨 현수막 PNG export 시작...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  // exports 폴더 생성
  const exportsDir = join(projectRoot, 'exports');
  await mkdir(exportsDir, { recursive: true });

  for (const [key, size] of Object.entries(SIZES)) {
    console.log(`📸 ${key} 캡처 중... (${size.width}×${size.height})`);

    const page = await browser.newPage();
    await page.setViewport({
      width: size.width,
      height: size.height,
      deviceScaleFactor: 1,
    });

    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });

    // 시안 박스만 선택해서 캡처 (안내 메시지 제외)
    await page.waitForSelector('div[style*="aspect-ratio"]', { timeout: 10000 });

    // 안내 메시지 숨기기
    await page.evaluate(() => {
      const notices = document.querySelectorAll('.absolute.top-3.left-3');
      notices.forEach(n => (n.style.display = 'none'));
      const wrapper = document.querySelector('.bg-gray-200');
      if (wrapper) wrapper.style.background = 'transparent';
    });

    // 시안 박스 위치/크기를 화면 전체로 맞추기
    await page.evaluate((w, h) => {
      const box = document.querySelector('div[style*="aspect-ratio"]');
      if (!box) return;
      box.style.width = `${w}px`;
      box.style.height = `${h}px`;
      box.style.maxWidth = `${w}px`;
      box.style.maxHeight = `${h}px`;
      // 부모 컨테이너 패딩 제거
      const parent = box.parentElement;
      if (parent) {
        parent.style.padding = '0';
        parent.style.minHeight = `${h}px`;
        parent.style.height = `${h}px`;
      }
    }, size.width, size.height);

    // 폰트 로딩 + 애니메이션 안정화 대기
    await new Promise(resolve => setTimeout(resolve, 1500));

    const filename = `banner_${size.suffix}.png`;
    const outputPath = join(exportsDir, filename);

    const bannerBox = await page.$('div[style*="aspect-ratio"]');
    await bannerBox.screenshot({
      path: outputPath,
      type: 'png',
    });

    console.log(`✅ 저장: exports/${filename}`);
    await page.close();
  }

  await browser.close();
  console.log('\n🎉 모든 PNG 생성 완료!');
  console.log(`📁 폴더: ${exportsDir}`);
}

captureBanner().catch(err => {
  console.error('❌ 에러:', err.message);
  console.error('\n⚠️  dev 서버가 실행 중인지 확인하세요: npm run dev');
  process.exit(1);
});
