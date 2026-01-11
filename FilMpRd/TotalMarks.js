//Get total marks of all students

const students = [
  {name: "Shrey", marks: 80},
  {name: "Anagh", marks: 90},
  {name: "John", marks: 70}
];

const total = students.reduce((acc,curr) => acc+curr.marks,0);
console.log(total);


