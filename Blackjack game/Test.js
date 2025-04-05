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
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
/*use a for loop to log the following to the console:
The 5 largest countries in the world:
-China
-India
-United States
-Indonesia
-Pakistan
*/
console.log("The 5 largest countries in the world:")
for(i = 0; i < largeCountries.length; i++){

    console.log("-" + largeCountries[i])

}
//4:22:26
