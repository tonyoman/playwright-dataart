import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { SecurePage } from '../../pages/SecurePage';


test.describe('API + UI combined', () => {

    test('Validate post exists via API then check UI', async ({request, page}) => {

        // Step 1: Validate data exists via API
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
        expect(response.status()).toBe(200);

        const post = await response.json();
        expect(post.id).toBe(1);

        // Step 2: Use that data in the UI
        const loginPage = new LoginPage(page);
        const securePage = new SecurePage(page);

        await loginPage.goto();
        await loginPage.login('tomsmith','SuperSecretPassword!');
        await securePage.verifySuccessLogin();

        // Step 3: Log the API data we validated
        console.log('API validated post title: ${post.title}');

    });

    test('API returns 404 for non-existent post', async ({request}) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/99999');

        expect(response.status()).toBe(404);
        

    })


});