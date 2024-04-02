var users = [
    {
        id:1,
        name:"amit",
        age:30,
        gender:"male",
        isMarried:false
    },
    {
        id:2,
        name:"sumit",
        age:25,
        gender:"male",
        isMarried:true
    },
    {
        id:3,
        name:"jaya",
        age:27,
        gender:"female",
        isMarried:true
    }
]


///
//predicate --> true false..
var females = users.filter((user)=>{

    //gender male -->false
    //gende male -->false
    return user.gender == "female"
    
    //predicate
})

console.log(females)

var marriedUser = users.filter((user)=>user.isMarried == true)
console.log(marriedUser)


