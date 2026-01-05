function getData(dataID, nextFunction){

    console.log("Data ID is: " +dataID);

}

//calling getData function
getData(1);


function getData1(dataID, nextFunction){

    console.log("Data ID is: " +dataID);

    if(nextFunction){
        nextFunction();
    }

}

//calling getData1 function
getData1(1, ()=>{
    getData1(2);
})