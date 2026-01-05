function getData(dataID){
    console.log(dataID);
}

getData(1);


const data = () => {
    console.log("anonynums fn");
}

data();


function callback(dataID, nextFunction){

    console.log(dataID);

    if(nextFunction){
        nextFunction();
    }

}

callback(2);

callback(3, ()=>{
    console.log("next data");
})