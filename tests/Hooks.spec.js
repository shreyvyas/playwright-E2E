import { test, expect } from '@playwright/test';

//hooks: beforeEach, afterEach, before All and afterAll

//beforeAll
test.beforeAll(() => {

    console.log('Before All');

})

//AfterAll
test.afterAll(() => {
    console.log('AfterAll');
})

//beforeEach
test.beforeEach(() => {
    console.log("Before Each");
})


//afterEach
test.afterEach(() => {
    console.log("After Each");
})

//test
test('Test Method 1', () => {
    console.log("Test1");
})

//test
test('Test Method 2', () => {
    console.log("Test2");
})