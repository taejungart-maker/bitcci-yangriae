// 페이지 2 (스냅 사진) 모바일 뷰포트 캡처
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const outDir = path.join(__dirname, '..', '_screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 12/13/14 Pro
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  await page.goto('http://localhost:5173/bitcci-yangriae/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // 첫 클릭으로 BGM 활성화 (실제 사용자 시뮬레이션)
  await page.click('body', { position: { x: 195, y: 700 } });
  await page.waitForTimeout(200);

  // 스와이프로 페이지 2 이동 (오른쪽 → 왼쪽)
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(800);

  // 페이지 2 상단 캡처
  await page.screenshot({
    path: path.join(outDir, 'page2_top.png'),
    fullPage: false,
  });

  // 스크롤하면서 추가 캡처
  await page.evaluate(() => {
    const sc = document.querySelector('.overflow-y-auto');
    if (sc) sc.scrollTop = 600;
  });
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(outDir, 'page2_mid.png'),
    fullPage: false,
  });

  await page.evaluate(() => {
    const sc = document.querySelector('.overflow-y-auto');
    if (sc) sc.scrollTop = 1400;
  });
  await page.waitForTimeout(400);
  await page.screenshot({
    path: path.join(outDir, 'page2_bottom.png'),
    fullPage: false,
  });

  await browser.close();
  console.log('✅ 캡처 완료:', outDir);
})();
