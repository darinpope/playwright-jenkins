import { test, expect } from '@playwright/test';
test('test', async ({ page, browser }) => {
  const context = await browser.newContext({
    recordVideo: {
      dir: "./recordings"
    }
  });
  // Go to http://jenkins:8080/
  await page.goto('http://jenkins:8080/');
  // Click [placeholder="Username"]
  await page.locator('[placeholder="Username"]').click();
  // Fill [placeholder="Username"]
  await page.locator('[placeholder="Username"]').fill('admin');
  // Press Tab
  await page.locator('[placeholder="Username"]').press('Tab');
  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('admin');
  // Press Tab
  await page.locator('[placeholder="Password"]').press('Tab');
  // Press Enter
  await page.locator('text=Sign in').press('Enter');
  await context.close();
});