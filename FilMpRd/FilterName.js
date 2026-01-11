//Filter users age > 18 and return only names

const users = [
  {name: "Shrey", age: 37},
  {name: "Anagh", age: 5},
  {name: "John", age: 20}
];

const names = users.filter(a => a.age>18)
              .map(a => a.name);

console.log(names);