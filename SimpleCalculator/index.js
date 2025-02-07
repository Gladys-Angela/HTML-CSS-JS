let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")
let subtractEl = document.getElementById("subtract-el") 
let divideEl= document.getElementById("divide-el")
let multiplyEl = document.getElementById("multiply-el")





function add(){
    sumEl.textContent = `Sum: ${num1 + num2}`

 }


function subtract(){
    subtractEl.textContent = `Subtract: ${num1 - num2}`

}
function divide(){
    divideEl.textContent = `Divide: ${num1 / num2}`

}
function multiply(){
    multiplyEl.textContent = `Multiply: ${num1 * num2}`

}