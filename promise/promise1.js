const getData = () => {



    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Promise has been resolved!")
        },3000)
        

    })
    console.log(promise)
    console.log("start")

    var x;
    promise.then((data)=>{

            console.log(data)
            x = data
    })
    promise.catch((error)=>{
        console.log(error)
    })
    console.log("end")
    console.log(x)





}

//getData()


const fetchStuData = () => {



    // return "students"

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("promise has been resolved")
        },2000)
    })


}

// var x = fetchStuData()
// console.log(x)
// x.then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

fetchStuData().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})