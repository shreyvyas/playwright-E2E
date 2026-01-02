import {test, expect} from '@playwright/test';

test('Tab Handling 1', async({page}) => {

    await page.goto("https://web-locators-static-site-qa.vercel.app/Windows");

    const context = page.context();

   // console.log(context);

   const parentTabCount = context.pages().length;
   console.log(parentTabCount);

   const [newPage] = await Promise.all([

        page.context().waitForEvent('page'),
        page.getByRole('button', {name:'Launch New Tab'}).click()

   ]);

   await newPage.waitForLoadState(); 
   
   console.log(context.pages().length);


})