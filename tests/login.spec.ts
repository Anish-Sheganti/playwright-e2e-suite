import { test, expect } from '@playwright/test';

test('Login to AutomationExercise', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await page.click('a[href="/login"]');

  await page.fill('input[data-qa="login-email"]', 'kadambari102000@gmail.com');
  await page.fill('input[data-qa="login-password"]', 'Kavya@123');
  await page.click('button[data-qa="login-button"]');


  const loggedInText = page.locator('ul.nav.navbar-nav li', { hasText: 'Logged in as' });
  await expect(loggedInText).toBeVisible({ timeout: 5000 }); // wait up to 5 seconds
});


