import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

test('Handle Button', async ({ page }) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    const buttonLink = page.getByText("Button");

    await buttonLink.click();

    const button = page.getByRole("button", { name: "Click this button", exact: true });

    button.click();

    await page.pause();


})

test('Edit', async ({ page }) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Edit").click();

    await page.getByPlaceholder("Click here to enter your name here").fill("Joy and Max");

})


test('Handle Dropdown', async ({ page }) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Dropdown").click();

    const dropdown1 = page.locator(".Dropdown_section1 select.dropdown");
    await dropdown1.selectOption({ value: 'Australia' });

    await page.pause();

})



