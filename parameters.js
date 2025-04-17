//parameters ==> inside a function
// arguments ==> outside a function 

function greetUser(greeting, name, emoji){
    console.log(`${greeting}, ${name} ${emoji} `)
}
greetUser("Welcome back", "Gladys", "🥰")
// Numbers as function parameters
//Create a function add(), that adds two numbers together and return the sum
function add(num1, num2){
    console.log(`${num1 + num2}`)
}
add(3,4)
add(9,102)
//another way
function add(num1, num2){
    return num1 + num2
}
console.log(add(3,4))
console.log(add(9,102))

//create a function, getFirst(arr), that retuns the first item in the array
//call it with an array as an argument to verify that it works
function getFirst(arr){
    return `${arr[0]}`
}
console.log(getFirst(["Angie you are killing it","Think positive","Focus on blessings"]))

