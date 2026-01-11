const users = [
  {name: "Shrey", age: 37},
  {name: "Anagh", age: 5},
  {name: "John", age: 20}
];

const filter1 = users.filter(name => users.name);
console.log(filter1);

//it will not work with filter, use map

const map1 = users.map(u => u.name);
console.log(map1);

const age = users.map(u => u.age);
console.log(age);
