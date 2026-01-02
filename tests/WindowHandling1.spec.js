import {test, expect} from '@playwright/test';

test('Multiple Tab Handling', async({page})=> {

    await page.goto("https://web-locators-static-site-qa.vercel.app/"); //it will open a main/parent page

    await page.getByText("Windows").click();

    //i am about to do something that will open a new tab - listener
    const [newPage] = await Promise.all([                //Promise.all() ensures no timing issue

        page.context().waitForEvent('page'),          //wait until new page is created

        page.getByRole('button', {name:'Launch New Tab'}).click()

    ]);

    await newPage.waitForLoadState();                   //Ensures new tab is fully loaded

    console.log(await newPage.title());

    await newPage.close();                             //Close the new tab

    await page.bringToFront();                         //Brings focus back to the main/parent page

})


test('Unknown tabs → find element → back to parent', async ({ page }) => {

  // 1️⃣ Open parent page
  await page.goto('https://web-locators-static-site-qa.vercel.app/');
  const context = page.context();

  // 2️⃣ Remember parent tab count
  const parentTabCount = context.pages().length;

  // 3️⃣ Do action which opens UNKNOWN number of tabs
  await page.click('#opentab');       // app behavior
  await page.waitForTimeout(2000);    // allow all tabs to open

  // 4️⃣ Get all open tabs
  const allTabs = context.pages();

  // 5️⃣ Get ONLY newly opened tabs
  const newTabs = allTabs.slice(parentTabCount);

  // 6️⃣ Loop through new tabs and find element
  for (const tab of newTabs) {

    await tab.waitForLoadState();

    // 👉 condition (example)
    if (await tab.locator('text=Contact Us').count() > 0) {

      console.log('✅ Correct tab found:', await tab.title());

      // 7️⃣ Click on element in that tab
      await tab.locator('text=Contact Us').first().click();

      // 8️⃣ Close that tab
      await tab.close();
      break;
    }
  }

  // 9️⃣ Back to parent page
  await page.bringToFront();
  console.log('🔙 Back to parent page');
});
