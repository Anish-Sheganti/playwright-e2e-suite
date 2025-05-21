import { test, expect } from '@playwright/test';

test('Search for a product', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  // Go to Products page
  await page.click('a[href="/products"]');

  // Wait for the search box and type a product name
  await page.waitForSelector('#search_product');
  await page.fill('#search_product', 'top'); // use a valid keyword like "top" or "dress"

  // Click the search button
  await page.click('#submit_search');

  // Wait for results to load
  const results = page.locator('.features_items .product-image-wrapper');
  await expect(results.first()).toBeVisible(); // check if at least one is visible

  // Optional: count them
  const count = await results.count();
  console.log(`Found ${count} results`);
  expect(count).toBeGreaterThan(0);
});

