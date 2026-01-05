function getData(data){
    console.log(data);
}

getData(1);     //it will print 1, simple function


function getData1(data, nextFunction){

    console.log(data);

    if(nextFunction){
        nextFunction();                 //simple callback
    }

}

getData1(1, ()=>{
    console.log(2);                   //it will print 1 and 2, no delay
})


function getData2(data, nextFunction){

    setTimeout(()=>{
        console.log(data);
        if(nextFunction){
            nextFunction();
        }
    },2000);

}

getData2(10, ()=>{
    getData2(11, ()=>{
        getData2(12)
    })
})
