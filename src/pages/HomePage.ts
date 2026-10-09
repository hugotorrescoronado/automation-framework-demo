import { expect, Page } from '@playwright/test';

export class HomePage {

    constructor(
        private page: Page
    ) {}

    async navigate() {

        await this.page.goto(
            'https://playwright.dev/'
        );
    }

    async validateHomePage() {

        await expect(
            this.page
        ).toHaveTitle(/Playwright/);
    }
}