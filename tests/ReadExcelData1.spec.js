import {test} from '@playwright/test';

import { readExcel } from '../utils/ExcelReader.js';

const users = readExcel('./TestData/TestData.xlsx', 'Login');

for(const user of users){

    test(`Read Excel Data for ${user.username}`, async()=> {

        console.log(user.username);
        console.log(user.password);

    })


}