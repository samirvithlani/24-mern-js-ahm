var countries = [
    {
        name:"India",
        capital:"New Delhi",
        states:[
            {
                name:"Gujarat",
                cities:[
                    {
                        name:"Ahmedabad",
                        population:1000
                    },
                    {
                        name:"Surat",
                        population:800
                    }
                ]
            },
            {
                name:"Maharashtra",
                cities:[
                    {
                        name:"Mumbai",
                        population:2000
                    },
                    {
                        name:"Pune",
                        population:1500
                    }
                ]
            }
        ]
    }
]
//find all states of india

var que1 = countries.find((country)=>country.name == "India").states
console.log(que1)

var indiaPopulation = countries.find((country)=>country.name =="India").
states.map((state)=>state.cities.map((city)=>city.population)).map((city)=>city.reduce((a,b)=>a+b),0).
reduce((x,y)=>x+y,0)

console.log(indiaPopulation)