//async-await lets JavaScript wait for future data in a clean way

//JavaScript has future work: API Call/File Read/DB Call

//here same code we will do in all 3 types

//1. callback

function getData(dataID, nextFunction){

    setTimeout(()=>{
        nextFunction(dataID*2);
    },2000)

}

getData(2, (result)=>{
    console.log(result);
})


//2. Promise
function getData1(dataID){

    return new Promise((resolve, reject)=> {

        setTimeout(()=>{

            if(dataID){
                resolve("success");
                console.log(dataID*2);
            }
            else{
                reject("no data")
            }

        },2000)

    })
}

getData1(3).then((msg)=>console.log(msg)).catch((msg)=>console.log(msg));


//3. async-await
//In Playwright, most APIs return Promises, so we use await to wait for the action to complete before moving to the next step.
//Async–await is preferred over .then() because it makes asynchronous code easier to read and maintain.