import { test, expect } from '@playwright/test';

test('render home page with key sections', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Clouder');
  await expect(page.getByTestId('menu')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Turn building performance into value' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading').getByText('The future of real estate is data')
  ).toBeVisible();
  await expect(page.getByRole('heading').getByText('Increased asset value')).toBeVisible();
  await expect(page.getByRole('heading').getByText('Get up and running in 14 days')).toBeVisible();
  await expect(
    page.getByRole('heading').getByText('Learn how our customers are using Clouder')
  ).toBeVisible();
});

test('product page navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation').getByRole('link', { name: 'Product' }).click();
  await expect(page).toHaveURL('/product');
  await expect(
    page.getByRole('heading', { name: ' The new standard for commercial property performance ' })
  ).toBeVisible();
});

test('blog post navigation', async ({ page }) => {
  const heading = 'New Finnish Innovation Revolutionizes Buildings';

  await page.goto('/news');
  await page.getByRole('link', { name: heading }).click();
  await expect(page).toHaveURL('/news/2024-05-24-press-release');
  await expect(page.getByRole('heading', { name: heading })).toBeVisible();
});

test('contact form submit, required fields  filled', async ({ page }) => {
  await page.goto('/contact');

  await page.getByRole('textbox', { name: 'First name' }).fill('Wile E.');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Coyote');
  await page.getByRole('textbox', { name: 'Email' }).fill('wile.e.coyote@acme.com');
  await page.getByRole('textbox', { name: 'Message' }).fill('That’s all folks!');

  await page.getByRole('button', { name: 'Send' }).click();

  await expect(page).toHaveURL('/success');
  await expect(page.getByRole('heading', { name: 'Thank you!' })).toBeVisible();
});

test('contact form submit, required fields missing', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page).toHaveURL('/contact');
});

test('404 page and back to home link', async ({ page }) => {
  await page.goto('/non-existing-page');
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  const backToLink = page.getByRole('link', { name: 'Back to home' });
  await expect(backToLink).toBeVisible();

  await backToLink.click();
  await expect(page).toHaveTitle('Clouder');
});
