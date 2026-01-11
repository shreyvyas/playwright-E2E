const num = [1,2,3,4,5,6];

//filter even numbers

const even = num.filter(n => n%2==0);
console.log(even);

//it will return true/false
const map1 = num.map(n => n%2==0);
console.log(map1);

//try reduce also
const red1 = num.reduce(n=> n%10);
console.log(red1);


//correct approach is filter which returns the new array as per condition