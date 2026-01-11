const names = ["kohli", "ronaldo", "messi"];

console.log(names);   //direct printing

//index based for loop
for(let i=0; i<names.length; i++){

    console.log(names[i]);

}

//for..of loop                    //it will print names
for(let name of names){
    console.log(name);
}

//for..in loop                      //it will print index
for(let name in names){
    console.log(name);
}


//for..each
const name = names.forEach(n => console.log(n));