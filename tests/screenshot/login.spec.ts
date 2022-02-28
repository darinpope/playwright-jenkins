import { test, expect } from '@playwright/test';
test.use({ viewport: { width: 1920, height: 1080 } });
test('test', async ({ page }) => {
  // Go to http://jenkins:8080/
  await page.goto('/');
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
  await page.screenshot( {path: 'screenshots/login/homepage.png', fullPage: true});
  //await page.locator('.dashboard').screenshot({path: 'screenshots/login/dashboard.png'});

  await page.goto('/manage');
  await page.screenshot( {path: 'screenshots/login/manage.png', fullPage: true});

  await page.goto('/configure');
  await page.screenshot( {path: 'screenshots/login/configure.png', fullPage: true});

  await page.goto('/configureTools/');
  await page.screenshot( {path: 'screenshots/login/configureTools.png', fullPage: true});

  await page.goto('/pluginManager/');
  await page.screenshot( {path: 'screenshots/login/pluginManager/updates.png', fullPage: true});

  await page.goto('/pluginManager/available');
  await page.screenshot( {path: 'screenshots/login/pluginManager/available.png', fullPage: true});

  await page.goto('/pluginManager/installed');
  await page.screenshot( {path: 'screenshots/login/pluginManager/installed.png', fullPage: true});

  await page.goto('/pluginManager/advanced');
  await page.screenshot( {path: 'screenshots/login/pluginManager/advanced.png', fullPage: true});

  await page.goto('/computer/');
  await page.screenshot( {path: 'screenshots/login/computer.png', fullPage: true});
});