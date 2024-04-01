var products = [
    {
        id: 1,
        name: "Apple",
        price: 100,
    },
    {
        id: 2,
        name: "Banana",
        price: 200,
    },
    {
        id: 3,
        name: "Cherry",
        price: 300,
    },
    {
        id: 4,
        name: "Dates",
        price: 400,
    }
]

var sum =0
for(let i=0;i<products.length;i++){
    console.log(products[i].name)
    sum = sum + products[i].price

}
console.log("sum -->",sum)

var filtproducts =[]


for(let i=0;i<products.length;i++){

    if(products[i].price <=200){

        filtproducts.push(products[i])
    }

}
console.log("filtproducts -->",filtproducts)

var flag = false
for(let i=0;i<filtproducts.length;i++){

    if(products[i].name.startsWith("A") || products[i].name.startsWith("a")){
       flag = true
       
    }
    else{
        flag = false
        break
    }


}

console.log("flag -->",flag)