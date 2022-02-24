import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to http://jenkins:8080/
  await page.goto('http://jenkins:8080/');
  await page.screenshot( {path: 'screenshots/login/login.png', fullPage: true});
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
  await expect(page).toHaveURL('http://jenkins:8080/');
  await page.screenshot( {path: 'screenshots/login/homepage.png', fullPage: true});
  await page.locator('.dashboard').screenshot({path: 'screenshots/login/dashboard.png'});
});