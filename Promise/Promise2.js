function getData(dataID){


    return new Promise((resolve, reject)=> {

        setTimeout(()=>{

            if(dataID){
                resolve("success");
                console.log(dataID*2);
            }
            else{
                reject("No Data ID")
            }

        }, 2000)

    })

}
getData();
getData(1).then((msg)=>console.log(msg)).catch((msg)=>{console.log(msg)});

getData().then((msg)=>console.log(msg)).catch((msg)=>{console.log(msg)});