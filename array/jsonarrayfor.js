var employees =[
    {
        id:101,
        name:"John",
        age:40,
    },
    {
        id:102,
        name:"Peter",
        age:35,
    },
    {
        id:103,
        name:"Sam",
        age:30,
    }
]

//forEach--->
//employees[i]
employees.forEach((emp)=>{

    console.log(emp.id + " " + emp.name + " " + emp.age)
})
//map function

var emps = employees.map((emp)=>{

    return emp.age
})
console.log(emps)

//{id:101,name:"John",age:40}

var emps1 = employees.map((emp)=>{

    return {
        employeeid:emp.id + 1000,
        name:emp.name.toUpperCase(),
        age:emp.age
    }
})
console.log(emps1)


//reduce...


var totalAge = employees.reduce((total,emp)=>{
    return total + emp.age
},0)

console.log(totalAge)
