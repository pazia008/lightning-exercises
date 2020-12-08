//exercise#1
// Write a
// function that takes a string of a dog breed as an argument(like 'border collie')
// Have the
// function
// return "my favorite dog breed is"
// plus the passed in string.If no argument is passed to the
// function,
// return "I like cats".
// Execute the
// function in a way that captures the returned value in a variable.
// Console.log the string "When it comes to pets,"
// plus the returned value of the
// function.


const pet = (dog) => {
    if (dog) {
        return `my favorite dog breed is ${dog}`
    }
    return "I like cats"
}

const likeDog = pet("poodle")
const likeCat = pet()
console.log(likeDog)
console.log(likeCat)

//exercise#2

// Add an action that the painter can perform ( a property whose value is a function ).
// Have her take that action by execucting the method you created.

let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    paint: () => "paints the house"
}
console.log(`The painter ${painter.paint()}.`)

//exercise#3
//make a button and use EventListener
const btn = document.querySelector("#btn--fun")
btn.addEventListener("click", () => {
    const button = document.querySelector("#messagebox")
    button.innerHTML = "AYO!"
})

//exercise#4
//practicing loops

const fam = document.querySelector("#family")
let family = [{
        name: "Fred Jones",
        age: 49,
        title: "parent"
    },
    {
        name: "Pat Jones",
        age: 50,
        title: "parent"
    },
    {
        name: "Bubba Jones",
        age: 20,
        title: "adult child"
    },
    {
        name: "Kelly Jones",
        age: 12,
        title: "dependent child"
    },
    {
        name: "Bartleby",
        age: 3,
        title: "pet"
    }
]

//trying to filter the family members

//used .filter to filter
const adults = family.filter((familyMem) => {
    //condition that needs to be met
    if (familyMem.age >= 18) {
        return true
    }
})
console.log(adults)






// const peep = []
// for (let i = 0 < family.length; i++;) {
//     peep.push(`<h3>${family[i].name}</h3>`)
// }

// peeps.innerHTML += peeps.join("")

//using .map() to get family member names
// fam.innerHTML = family.map((famMember) => `<h3>${famMember.name}</h3>`).join("")


//exercise#5
//bracket vs. dot notation

let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010"
}

employee.vacation_days = 20


//eom is a variable, so use brackets
let eom = "employee_of_the_month";
employee[eom] = false

for (let key in employee) {
    console.log(employee[key])
}

console.log(`Our company's lawyer is ${employee.name}`)
console.log(`Jeff was hired on ${employee["hire_date"]}`)