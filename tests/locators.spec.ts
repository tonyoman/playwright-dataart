import { test, expect } from '@playwright/test';

test(' Practicando locators', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');


  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');

  await page.getByRole('button', { name: 'Login' }).click();

  // validate heading visible
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();

  // Validate the success message
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();

});

test(' Practicando Assertions', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    // Button Visible?
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    // Button enabled?
    await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();

    // Empty input fields
    await expect(page.getByLabel('Username')).toBeEmpty();

    //correct url
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

    // Page title content
    await expect(page).toHaveTitle(/The Internet/);

    // Fill and verify input fields
    await page.getByLabel('Username').fill('tomsmith');
    await expect(page.getByLabel('Username')).toHaveValue('tomsmith');

});

test(' Negative assertions', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    // error not visible on page load
    await expect(page.getByText('Your username is invalid!')).not.toBeVisible();
    
    // Fill form with wrong credentials
    await page.getByLabel('Username').fill('wrongusername');
    await page.getByLabel('Password').fill('WrongPassword!'); 
    await page.getByRole('button', { name: 'Login' }).click();

    // error message visible after failed login
    await expect(page.getByText('Your username is invalid!')).toBeVisible();

    // Login button should not be visible after failed login
    await expect(page.getByRole('button', { name: 'Login', exact: true })).not.toBeVisible();

});