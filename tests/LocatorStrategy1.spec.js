import { test, expect } from '@playwright/test';

test('Handle Radio Button', async ({ page }) => {

    await page.goto("https://letcode.in/test");

    //await page.getByAltText(" Toggle ").click();

    await page.getByText(" Toggle ").click();

    await page.locator("#yes").click();

    await page.pause();

})


test('Handle Checkbox', async({page}) => {

    await page.goto("https://letcode.in/radio");

    const checkbox1 = page.getByLabel(" Remember me ")

    //const isCheckEnabled = await checkbox1.isEnabled();
    const isCheckChecked = await checkbox1.isChecked();

    console.log(isCheckChecked);
    //console.log(isCheckEnabled);

})


test('Handle Checkbox3', async({page})=> {

    await page.goto("https://web-locators-static-site-qa.vercel.app/Checkbox");

    const qaCheckBox = page.locator(".Checkbox_section1 div")
                       .filter({hasText: 'QA'})
                       .getByRole('checkbox');

   const isCheckChecked = await qaCheckBox.isChecked();
   console.log(isCheckChecked);

   await qaCheckBox.click();

   const isCheckNowChecked = await qaCheckBox.isChecked();
   console.log(isCheckNowChecked);

})