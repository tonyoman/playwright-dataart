import { test, expect } from '@playwright/test';

test('login exitoso', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill form
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');

  // click login

  await page.getByRole('button', { name: 'Login' }).click();

  // Assert

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  

});


test('login fallido', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('wrongusername');
  await page.getByLabel('Password').fill('WrongPassword!');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your username is invalid!')).toBeVisible();

});

test('logout exitoso', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill Login credentials
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');

  // click login
  await page.getByRole('button', { name: 'Login' }).click();
  // click logout
  await page.getByRole('link', { name: 'Logout' }).click();

  // Assert
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
});