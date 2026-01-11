//Count how many numbers are greater than 10 using reduce

const num = [5, 12, 18, 3, 25];

const filt = num.filter(n => n>10);
console.log(filt.length);

//using reduce
const rdc = num.reduce((acc,curr) => {
    if(curr > 10){
        acc++;
    }
    return acc;
},0);

console.log(rdc);
