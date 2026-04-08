import { test, expect } from '@playwright/test';

test('render home page with key sections', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Clouder');
  await expect(page.getByTestId('menu')).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Turn building data into investment-grade asset intelligence'
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading').getByText('Your portfolio constantly optimized')
  ).toBeVisible();
  await expect(
    page.getByRole('heading').getByText('What asset intelligence does to your portfolio')
  ).toBeVisible();
  await expect(
    page.getByRole('heading').getByText('Simple engagement. Fast time to value.')
  ).toBeVisible();
  await expect(page.getByRole('heading').getByText('Results from our customers')).toBeVisible();
});

test('solutions page navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation').getByRole('link', { name: 'Solutions' }).click();
  await expect(page).toHaveURL('/solutions');
  await expect(
    page.getByRole('heading', { name: 'The new standard for property performance' })
  ).toBeVisible();
});

test('post and category navigation', async ({ page }) => {
  const heading =
    'Energy Savings and Real‑Time Monitoring for a Historic Property with Clouder’s system';
  const category = 'Case study';

  await page.goto('/news');
  await page.getByRole('link', { name: heading }).click();
  await expect(page).toHaveURL(
    '/news/energy-savings-and-real-time-monitoring-for-a-historic-property-with-clouders-system'
  );
  await expect(page.getByRole('heading', { name: heading })).toBeVisible();
  await page.getByRole('link', { name: category }).click();
  await expect(page).toHaveURL('/news/case-study');
  await expect(page).toHaveTitle(`${category} · Clouder`);
  await expect(page.getByRole('heading', { name: heading })).toBeVisible();
});

test('contact form, required fields filled', async ({ page }) => {
  await page.goto('/contact');

  await page.getByRole('textbox', { name: 'First name' }).fill('Wile E.');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Coyote');
  await page.getByRole('textbox', { name: 'Email' }).fill('wile.e.coyote@acme.com');
  await page.getByRole('textbox', { name: 'Message' }).fill('That’s all folks!');

  await page.getByRole('button', { name: 'Send' }).click();

  await expect(page).toHaveURL('/success');
  await expect(page.getByRole('heading', { name: 'Thank you!' })).toBeVisible();
});

test('contact form, required fields missing', async ({ page }) => {
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
