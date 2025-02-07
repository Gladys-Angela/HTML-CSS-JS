//startGame() Function (with the conditions below)
//create two variables, firstCard and secondCard
//Set their values to a random number between 2-11
//create a variable, sum, and set it to the sum of the two cards
//Write a conditional according to these rules:
// less or equal to 20 = Do you want to draw a new card😊
//21 = You got blackjack 🥳
//else = You're out of the game😥
let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard + 5
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
    console.log(message)
}
