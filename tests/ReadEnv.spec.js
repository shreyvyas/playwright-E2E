import {test, expect} from '@playwright/test';

test("Read Env File and Open URL", async({page}) => {

    await page.goto('/');

    console.log(process.env.APP_USERNAME);

    console.log(process.env.APP_PASSWORD);

})