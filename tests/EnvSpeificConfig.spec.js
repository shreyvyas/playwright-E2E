import {test} from '@playwright/test';

test('Read Env', async()=> {


    console.log(config.base_url);
    console.log(config.username);
    console.log(config.password);


})