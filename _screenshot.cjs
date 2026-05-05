// bitcci-kimdongkwi 사이트 스크린샷 (모바일 + 데스크탑)
const { chromium } = require('playwright');

const URL = 'https://taejungart-maker.github.io/bitcci-kimdongkwi/';
const OUT_DIR = 'C:/Users/sol00/Desktop/sns홍보영상/AI_모루/research/screenshots';
const fs = require('fs');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function capture(page, pageNum, label) {
  // 페이지 N으로 이동: 좌측 N-1번 스와이프
  for (let i = 0; i < pageNum - 1; i++) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(700);
  }
  await page.waitForTimeout(2500); // 모션 완료 대기
  const file = `${OUT_DIR}/page${pageNum}_${label}.png`;
  await page.screenshot({ path: file, fullPage: false });
  console.log(`[OK] ${file}`);
}

(async () => {
  const browser = await chromium.launch();

  // 모바일 (iPhone 14 Pro)
  console.log('=== 모바일 캡처 ===');
  const mctx = await browser.newContext({
    viewport: { width: 393, height: 852 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const mp = await mctx.newPage();
  await mp.goto(URL, { waitUntil: 'networkidle' });
  await mp.waitForTimeout(3000);
  await capture(mp, 1, 'mobile_cover');
  await capture(mp, 2, 'mobile_artist_bio');
  await mctx.close();

  // 데스크탑
  console.log('=== 데스크탑 캡처 ===');
  const dctx = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const dp = await dctx.newPage();
  await dp.goto(URL, { waitUntil: 'networkidle' });
  await dp.waitForTimeout(3000);
  await capture(dp, 1, 'desktop_cover');
  await capture(dp, 2, 'desktop_artist_bio');
  await dctx.close();

  await browser.close();
  console.log('\n=== 완료 ===');
})();
