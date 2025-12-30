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


test('Handle Checkbox', async ({ page }) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/");

    await page.getByText("Checkbox").click();

    const checkbox1 = page.locator("//div[@class='Checkbox_section1']/div")
        .filter({ hasText: 'BDT' })
        .getByRole('checkbox')
        .click();

    await page.pause();

})

test('HandleCheckbox1', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // const checkbox2 = page.locator("#checkbox-example")
    //     .filter({ hasText: 'Option2' })
    //     .getByRole('checkbox');

    const checkbox2 = page.locator("#checkBoxOption2");

    await checkbox2.click();

})
