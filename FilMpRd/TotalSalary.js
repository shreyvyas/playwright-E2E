//calculate salary of all employees

const employees = [
  {name: "A", salary: 1000},
  {name: "B", salary: 1500},
  {name: "C", salary: 2000}
];

const totalSalary = employees.reduce((acc,curr) => acc+curr.salary, 0);

console.log(totalSalary);