//startGame() Function (with the conditions below)
//create two variables, firstCard and secondCard
//Set their values to a random number between 2-11
//create a variable, sum, and set it to the sum of the two cards
//Write a conditional according to these rules:
// less or equal to 20 = Do you want to draw a new card😊
//21 = You got blackjack 🥳
//else = You're out of the game😥
//store the message-el paragraph in a variable called messageEl
//display the message in the messageEl using messageEl.textContent
//store the sum paragraph in a variable called sumEl
//Render the sum on the page using this format = "Sum: 14"
//store the cards paragraph in a variable called cardsEl
//Render the cars on the page using this format = "Cards: 10 4"
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card😊"
        
    } else if (sum === 21) {
        message ="You got blackjack 🥳"
        hasBlackJack = true
        
    } else{
        message ="You're out of the game😥"
        isAlive = false
        
    }

    //console.log(hasBlackJack)
    //console.log(isAlive)
    //console.log(message)
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
}
 //create a function newCard() that logs out "Drawing a new card"

 function newCard(){
    console.log("Drawing a new card")
 }
  