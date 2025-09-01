import { test, expect } from '@playwright/test';
const VULN = process.env.XSS_VULN_URL;
const SAFE = process.env.XSS_SAFE_URL;
test.skip(!VULN || !SAFE, 'Provide XSS_VULN_URL and XSS_SAFE_URL');
test('DOM XSS executes on vulnerable app but not on secure app', async ({ page }) => {
  page.on('dialog', async d => { await d.dismiss(); });
  await page.goto(`${VULN}?q=onerror=alert(1337)`);
  await page.goto(`${SAFE}?q=onerror=alert(1337)`);
  const c = await page.content();
  expect(c).not.toMatch(/onerror=alert\(1337\)/);
});
