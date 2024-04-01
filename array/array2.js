var users = ["raj","sagar","parth","sagar","sahil","sagar","sachin"]

console.log(users)
//index, deletecount
//users.splice(1,3)
//users.splice(2,0,"karan")
//users.splice(2,0,"karan","kishan")
//var x = users.splice(3,3,"karan","kishan")
//console.log("x -->",x)
console.log(users)

//includes...

var x1 = users.includes("sagar")
console.log("x1 -->",x1)

var ind = users.indexOf("sagar")
var ind2 = users.indexOf("sagar",ind+1)
console.log("ind -->",ind)
console.log("ind2 -->",ind2)

var ind = users.lastIndexOf("sagar")
console.log("ind -->",ind)
















