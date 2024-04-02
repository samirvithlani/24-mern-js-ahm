var students = [
    {
        id:1,
        name:"ram",
        age:20,
        courses:["math","science"]

    },
    {
        id:2,
        name:"shyam",
        age:21,
        courses:["math","history"]
    },
    {
        id:3,
        name:"mohan",
        age:22,
        courses:["math","science","english"]
    }
]

//2
function removeStudent  (id){

    //stu -> 1 1!= 2 ->?true
    //stu ->2 2!=2 ->?false
    //stu ->3 3!=2 ->?true
    var stu = students.filter((stu)=>stu.id !== id)
    console.log(stu)

}

removeStudent(3)


//1 ->[]
//
var mathstu = students.filter((stu)=>stu.courses.includes("history"))
console.log(mathstu)


//forEach --> no return
//map -->array with same length
//filter -->array with same or less length return predicate true || false
//reduce --> single value
//find --> return first element 

//some

//var isMath  = students.some((stu)=>stu.courses.includes("history"))
//var isMath  = students.every((stu)=>stu.courses.includes("history"))
console.log(isMath)

//find any voter who is born before independence
//all the voter who are born before independence :filter
///find all voters from maharashtra
//find all female voters