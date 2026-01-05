//practice of callback functions

function getData(dataID, nextFunction){

    console.log(dataID);

    if(nextFunction){
        nextFunction("joy");
    }

}

function fetchData(name){
    console.log(name);
}

getData(1, fetchData);