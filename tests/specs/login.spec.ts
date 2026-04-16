import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { SecurePage } from '../../pages/SecurePage';

test.describe('Login functionality', () => {

    test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const securePage = new SecurePage(page);


    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await securePage.verifySuccessLogin();

    });
    
    test('Failed login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('invalidUser', 'invalidPassword');
    await expect(page.getByText('Your username is invalid!')).toBeVisible();

    });

    test('Successful logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const securePage = new SecurePage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await securePage.logout();
    await expect(page.getByRole('heading', { name: 'Login Page', exact: true })).toBeVisible();

    });
});