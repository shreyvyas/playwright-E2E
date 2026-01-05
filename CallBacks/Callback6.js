function getData(){

    setTimeout(()=>{
        return 10;
    },2000)

}

const data = getData();
console.log(data);
//data comes in future so it will print undefined
//here actual use comes in picture of callback
//when data comes do this

function getData1(nextFunction){

    setTimeout(()=>{
        const data = 10;
        nextFunction(data);
    }, 2000);

}

const data1 = getData1((result)=>{
    console.log(result);
})
