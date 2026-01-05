function getData(dataID){

    return dataID;

}

const data = getData(10);
console.log(data);                   //sync func - no delay - output given

//suppose there is one function which sends request to server and not sure when server will give response
//here in this case we need to set some delay in our code so it takes the data and print
//it should not block other code block


function getData1(dataID){

    //suppose we are passing one number to server and it double the number and return
    //not sure how much time it will take to calculate
    
    //so we will add some delay

    setTimeout(()=>{                               //this is fake delay just for our understanding
        return dataID*2;                          //because there is no real server
    },2000)

}

//setTimeout: just to simulate delay
//in real async delay is natural

const data1 = getData1(2);
console.log(data1);   //it will print undefined
//why undefined: data will return after some delay but console.log happened instantly and there was no data


function getData2(dataID, nextFunction){

    setTimeout(()=> {
        nextFunction(dataID*2);
    },2000)

}

getData2(2, (result)=>{

    console.log(result);

});

