const num = [1,2,3,4,5,6];

//try with filter
const filt = num.filter(n => n*2);
console.log(filt);

//filter will return [1,2,3,4,5,6]
//why it did not work: it check the condition and all returned true
//here map will work because map change/transform the each element
//filter: keep or remove elements, Filter expects your function to return true/false

//now with map
const map1 = num.map(n => n*2);
console.log(map1);