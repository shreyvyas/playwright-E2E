import { test, expect } from '@playwright/test';

test("browser+context+page+testInfo", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://github.com/shreyvyas?tab=projects");


})

