import { test, expect } from '@playwright/test';

test('Handle Radio Button', async ({ page }) => {

    await page.goto("https://letcode.in/test");

    //await page.getByAltText(" Toggle ").click();

    await page.getByText(" Toggle ").click();

    await page.locator("#yes").click();

    await page.pause();

})