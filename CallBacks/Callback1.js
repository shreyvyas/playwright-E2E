//sync operations - one by one
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");


//async operations
console.log("Async Task 1");

setTimeout(() => console.log("It will execute after 2 seconds"), 2000);
//register this task and move on
//goes to timer queue

//JavaScript starts timer, continues execution and comes back later

//if time is 0ms instead of 2000 then also it will print after 3rd statement
//Because setTimeout only starts a timer and JavaScript continues executing the next lines without waiting.

//setTimeout does not pause execution, it only schedules the code

console.log("It should not block because of above code");







