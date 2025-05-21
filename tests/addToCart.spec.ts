import { test, expect } from '@playwright/test';

test('Add product to cart', async ({ page }) => {
  await page.goto('https://automationexercise.com');

  // Go to Products page
  await page.click('a[href="/products"]');

  // Wait for product listing to load
  await page.waitForSelector('.product-image-wrapper');

  // Hover over the first product to reveal 'Add to cart'
  await page.hover('.product-image-wrapper:first-child');

  // Click 'Add to cart' on first product
  await page.click('.product-image-wrapper:first-child a[data-product-id]');

  // Wait for modal to appear
  await page.waitForSelector('#cartModal', { state: 'visible' });

  // Click the 'View Cart' button inside the modal
  await page.click('#cartModal a[href="/view_cart"]');

  // Assert that at least one product is shown in the cart
  const cartItems = page.locator('.cart_description');
  await expect(cartItems).toHaveCount(1);
});

