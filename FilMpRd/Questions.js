//Convert numbers to strings: [1,2,3] → ["1","2","3"]

const nums = [1,2,3,4,5];

const map1 = nums.map(n => n.toString());
console.log(map1);


//From [5,12,8,3,25] return numbers > 10
const nums1 = [5,12,8,3,25];
const filter1 = nums1.filter(n => n>10);
console.log(filter1);


//From users array, return users whose age >= 18
const users = [
  {name: "Shrey", age: 37},
  {name: "Anagh", age: 5},
  {name: "John", age: 20}
];

const filter2 = users.filter(u => u.age>18);
console.log(filter2);


//From ["apple","cat","banana"] return words length > 3
const words = ["apple","cat","banana"];
const filter3 = words.filter(w => w.length>3);
console.log(filter3);

//Remove falsy values from [0,1,false,2,"",3,null]
const words1 = [0,1,false,2,"",3,null];
const filter4 = words1.filter(Boolean);
console.log(filter4);


//From employees, return salary between 1000 and 2000 give data
const employees = [
  { name: "A", salary: 800 },
  { name: "B", salary: 1200 },
  { name: "C", salary: 1500 },
  { name: "D", salary: 2000 },
  { name: "E", salary: 2500 }
];

const sal = employees.filter(e => e.salary >= 1000 && e.salary <= 2000);
console.log(sal);


//From users array, create object count by age group: {adult:?, kid:?}
const result = users.reduce((acc, user) => {
  if (user.age >= 18) {
    acc.adult++;
  } else {
    acc.kid++;
  }
  return acc;
}, { adult: 0, kid: 0 });

console.log(result);


//Convert ["a","b","c"] to "abc"
const char = ["a","b","c"];
const rd1 = char.reduce((acc,curr)=> acc+curr);
console.log(rd1);

