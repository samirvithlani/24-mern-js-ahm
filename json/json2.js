var product = {

    brand: "apple",
    model: "iphone 15",
    price: 1500,
    colors:["black","white","gold","silver"],

    details:{
        display: "6.7 inch",
        memory: "128GB",
        camera: "12MP",
        battery: "4000mAh"   
    }
    

}
console.log(product.model);

for(let i=0;i<product.colors.length;i++){
    console.log(product.colors[i]);
}