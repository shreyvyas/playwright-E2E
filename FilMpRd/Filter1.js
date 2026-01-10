//filter: it returns an array
//condition

const nums = [1,2,3,4,5];
const filter1 = nums.filter(n => n%2==0);
console.log(filter1);


//map: transform element
const map1 = nums.map(n => n*2);
console.log(map1);

//reduce: return one value e.g. sum of all elements
const reduce1 = nums.reduce((acc, curr) => {
    return acc+curr;
}, 0);

console.log(reduce1);

//acc - stores the result
//curr - current value picked from array
//acc starts value will be 0 and 1 will be picked from array so it will be 0+1, now result is 1
//now acc=1 and next curr value from array is 2 then 2+1=3