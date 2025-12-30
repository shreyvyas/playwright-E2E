import { test, expect } from '@playwright/test';

test.describe.parallel('Parallel test', () => {

    test('Test1', () => {
        console.log("test1");
    })

    test('Test2', () => {
        console.log("Test2");
    })


})