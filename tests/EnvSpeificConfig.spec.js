import {test} from '@playwright/test';
import { config } from '../utils/Config.js';

test('Read Env', async()=> {


    console.log(config.base_url);
    console.log(config.username);
    console.log(config.password);


})