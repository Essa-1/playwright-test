const { test, expect } = require('@playwright/test');

test('Login functionality', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  // Click on login button
  await page.locator('#login2').click();

  // Wait for modal to appear
  await page.waitForSelector('#loginusername');

  // Enter username
  await page.locator('#loginusername').fill('pavanol');

  // Enter password
  await page.locator('#loginpassword').fill('test@123');

  // Click on login button
  await page.locator("//button[text()='Log in']").click();

  // Wait for logout link to appear
  const logoutLink = page.locator("//a[text()='Log out']");
  await expect(logoutLink).toBeVisible();

  await page.close();
});
