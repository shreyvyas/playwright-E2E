//array of objects

const users = [

    {name: "Shrey", age:37},
    {name:"Ananta", age: 37},
    {name:"Anagh", age:9},
    {name:"Ekansh", age: 1}

]

console.log(users);

console.log(users[0]);

console.log(users[0].name);

for(let elem of users){
    console.log(elem.name + ": " + elem.age);
}


// for(let elem in users){
                                                    //it will print undefined
//     console.log(elem.name);

// }


users.forEach(n => console.log(n.age));

