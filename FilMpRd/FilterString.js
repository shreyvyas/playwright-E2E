//Filter strings longer than 3 characters

const words = ["hi", "hello", "hey", "bye", "good"];

const str = words.filter(w => w.length>3);
console.log(str);