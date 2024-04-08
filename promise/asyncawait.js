const getData = () => {



    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
           // resolve("Promise has been resolved!")
           reject("Promise has been rejected!")
        },3000)
        

    })


}



async function printData (){



    const data = await getData()
    console.log(data)
    

        // getData().then((data)=>{
        //     console.log(data)
        // }).catch((error)=>{
        //     console.log(error)
        // })


}

printData()