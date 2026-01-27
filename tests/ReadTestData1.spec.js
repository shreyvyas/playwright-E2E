import {test} from '@playwright/test';

import credentials from '../TestData/TestData1.json' assert {type: 'json'};


test('Read Data from JSON', () => {

    console.log(credentials.username);
    console.log(credentials.password);

})  