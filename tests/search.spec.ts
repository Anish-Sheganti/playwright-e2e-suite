import { test, expect } from '@playwright/test';

test('Search for a product on AutomationExercise', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  // Click on Products page
  await page.click('a[href="/products"]');

  // Wait for search bar and search a product
  await page.fill('input#search_product', 'Dress');
  await page.click('button#submit_search');

  // Assert search results are displayed
  const results = page.locator('.features_items .product-image-wrapper');
  await expect(results.count()).resolves.toBeGreaterThan(0); 
});

