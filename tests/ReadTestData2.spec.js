import {test} from '@playwright/test';

import credentials from '../TestData/TestData2.json' assert{type:'json'}; 


test('Print All Users', ()=> {


    for(const user of credentials){
        console.log(user.username);
        console.log(user.password);
    }


})