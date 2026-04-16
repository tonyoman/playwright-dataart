import { Page, expect } from '@playwright/test';

export class SecurePage {
    readonly page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifySuccessLogin() {
        await expect(this.page.getByText('You logged into a secure area!')).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
    }

    async logout() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
    }

}