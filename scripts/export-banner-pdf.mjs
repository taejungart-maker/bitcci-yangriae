/**
 * 현수막 PDF export 스크립트 (127cm × 65cm)
 *
 * 입력: exports/banner_7500x3839_150dpi.png (150DPI 인쇄 사양)
 * 출력: exports/banner_127x65cm.pdf (인쇄소 입고용)
 *
 * 사용법:
 *   node scripts/export-banner-pdf.mjs
 */

import puppeteer from 'puppeteer';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const exportsDir = join(projectRoot, 'exports');

const SOURCE_PNG = join(exportsDir, 'banner_7500x3839_150dpi.png');
const OUTPUT_PDF = join(exportsDir, 'banner_127x65cm.pdf');

async function exportBannerPdf() {
  console.log('🖨️  현수막 PDF export 시작 (127×65cm)...\n');

  const pngBuffer = await readFile(SOURCE_PNG);
  const pngBase64 = pngBuffer.toString('base64');
  console.log(`📥 입력 PNG: banner_7500x3839_150dpi.png (${(pngBuffer.length / 1024 / 1024).toFixed(2)} MB)`);

  const html = `<!DOCTYPE html>
<html>
<head>
<style>
  @page { size: 127cm 65cm; margin: 0; }
  html, body { margin: 0; padding: 0; width: 127cm; height: 65cm; overflow: hidden; }
  img { width: 127cm; height: 65cm; display: block; }
</style>
</head>
<body>
  <img src="data:image/png;base64,${pngBase64}" />
</body>
</html>`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  await mkdir(exportsDir, { recursive: true });
  await page.pdf({
    path: OUTPUT_PDF,
    width: '127cm',
    height: '65cm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  await browser.close();

  const pdfBuffer = await readFile(OUTPUT_PDF);
  console.log(`✅ 저장: exports/banner_127x65cm.pdf (${(pdfBuffer.length / 1024 / 1024).toFixed(2)} MB)`);
  console.log('\n🎉 PDF 생성 완료!');
}

exportBannerPdf().catch(err => {
  console.error('❌ 에러:', err.message);
  process.exit(1);
});
