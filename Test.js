//Create a person object that contains three keys: name, age, country
//Use yourself as an example to set the values for name, age, country
// Create afunction, logData(), that uses the person object to create 
//a string in the following format:
// "per is 35 years old and lives in norway"
//call the logData() function to verify that it works

let person = {
    name: "Gladys",
    age: 24,
    country: "Kenya",

}

function logData(){
    let details = person.name + " " + "is " + person.age + " years old and lives in " + person.country
}
console.log(logData)

//second test(if else statement)
let age = 15

// less that 6 years old = free
// 6 to 17 years = child discount
// 18 to 26 years = student discount
// 27 to 66 years = full price
// over 66 years = senior citizen discount

//create a conditional statement(if/else/else if) that logs out the discount
//passenger will get based upon the valuebof age variable

if(age < 6){
    console.log("free")
} else if(age <= 17){
     console.log("child dicount")
} else if(age <= 26){
     console.log("student dicount")
} else if(age <= 66){
     console.log("full price")
} else {
     console.log("senior citizen discount")
}

//Third test(for loop)
let largeCountriess = ["China", "India", "USA", "Indonesia", "Pakistan"]
/*use a for loop to log the following to the console:
The 5 largest countries in the world:
-China
-India
-United States
-Indonesia
-Pakistan
*/
console.log("The 5 largest countries in the world:")
for(i = 0; i < largeCountriess.length; i++){

    console.log("-" + largeCountriess[i])

}
//Fourth test (push,pop,unshift,shift challenge)
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

//You need to help me fixup the largestCountries array so that
//China and pakistan are added back into their respective places
// Use push() or pop() and their counterparts unshift() & shift()
//Google how to use unshift() and shift()

largeCountries.push("Pakistan") //adds element
largeCountries.unshift("China") //adds an element in the beginning
largeCountries.unshift() // removes the first element
largeCountries.pop() //removes the last element
console.log(largeCountries)

//Fifth test - Logical Operators
let dayOfMonth = 13
let weekday = "Friday"

//If it is Friday the 13th, log out this spooky face: 😱
// use the logical "AND operator " -> &&

if(dayOfMonth === 13 && weekday === "Friday"){
    console.log("😱")
} else if (dayOfMonth === 10 && weekday === "Thursday"){
    console.log("😝")
} else {
    console.log("Not valid")
}

//Sixth test -> Rock,paper,scissor
let hands = ["rock","paper","scissor"] 

//create a function thet returns a random item from the array
function random_item(){
    
    let randomIndex = Math.floor(Math.random() * hands.length)
    return hands[randomIndex]
}
console.log(random_item())