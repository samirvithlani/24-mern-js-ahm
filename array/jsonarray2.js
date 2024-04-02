var companies = [
    {
        name:"Google",
        ceo:"Sundar Pichai",
        employees:[
            {
                name:"John",
                age:30,
                salary:10000,
                gender:"male"
            },
            {
                name:"Mike",
                age:35,
                salary:20000,
                gender:"female"

            }

        ]
    },
    {
        name:"Microsoft",
        ceo:"Satya Nadella",
        employees:[
            {
                name:"Steve",
                age:40,
                salary:30000,
                gender:"female"

            },
            {
                name:"Bill",
                age:45,
                salary:40000,
                gender:"female"
            }
        ]
    },
    {
        name:"Amazon",
        ceo:"Jeff Bezos",
        employees:[
            {
                name:"Mark",
                age:50,
                salary:50000,
                gender:"male"
            },
            {
                name:"Elon",
                age:55,
                salary:60000,
                gender:"female"
            }
        ]
    }
]

//1)find total salary of google employee
//find no of female employees accross all companies
//find no of male employees in amazon


//1)find all employees who is working in google


var gogoleEmployees = companies.find((company)=>company.name =="Google").employees
console.log(gogoleEmployees)

var amazonefemales = companies.find((comp)=>comp.name =="Amazon").employees.filter((emp)=>emp.gender =="female")
console.log(amazonefemales)


var googleSalary = companies.find((comp)=>comp.name =="Google")
.employees.reduce((total,emp)=>total + emp.salary,0)

console.log(googleSalary)
