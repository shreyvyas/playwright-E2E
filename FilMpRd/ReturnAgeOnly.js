//From an array of objects, return ages only

const people = [
  {name: "A", age: 10},
  {name: "B", age: 20},
  {name: "C", age: 30}
];

for(let p of people){
    console.log(p.age);
}

const ageOnly = people.map(a => a.age);
console.log(ageOnly);