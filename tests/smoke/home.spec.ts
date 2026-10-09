import { test } from '@playwright/test';

import { HomePage }
from '../../src/pages/HomePage';

test(
    'Validate Playwright Home Page',
    async ({ page }) => {

        const homePage =
            new HomePage(page);

        await homePage.navigate();

        await homePage.validateHomePage();
    }
);