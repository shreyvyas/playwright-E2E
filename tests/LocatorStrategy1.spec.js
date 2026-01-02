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


test('Handle Radio Button1', async({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/Radio");

    // const radioButton = page.locator(".RadioScreen_Container2 div")
    //                     .filter({hasText: 'Very Good'})
    //                     .getByRole('radio');

        const radioButton = page.locator(".RadioScreen_Container2 div")
                        .filter({hasText: 'Very Good'})
                        .locator('input[type="radio"]');

    const isRadioChecked = await radioButton.isChecked();
    console.log(isRadioChecked);

    await radioButton.check();

    const isRadioNowChecked = await radioButton.isChecked();
    console.log(isRadioNowChecked);

    //await page.pause();

})


test('Handle Radio Button2', async({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/Radio");


//     const radioButton = page.locator("//input[@value='veryGood']");
//   //  await radioButton.click();
//     await radioButton.dispatchEvent('click');

//    await expect(radioButton).toBeChecked();

//     radioButton.is

//     const isRadioChecked = await radioButton.isChecked();
//     console.log(isRadioChecked);

    const radio = page.locator('label.MuiFormControlLabel-root', { hasText: 'Very Good' })
                 .locator('[role="radio"]');

    await radio.click();
    await expect(radio).toHaveAttribute('aria-checked', 'true');

    
})