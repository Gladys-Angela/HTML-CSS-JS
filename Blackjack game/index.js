//create two variables, firstCard and secondCard
//Set their values to a random number between 2-11
//create a variable, sum, and set it to the sum of the two cards
//Write a conditional according to these rules:
// less or equal to 20 = Do you want to draw a new card😊
//21 = You got blackjack 🥳
//else = You're out of the game😥
let firstCard = 10
let secondCard = 7
let hasBlackJack = false
let sum = firstCard + secondCard
console.log(sum)

if (sum <= 20) {
    console.log("Do you want to draw a new card😊")
} else if (sum == 21) {
    console.log("You got blackjack 🥳")
    hasBlackJack = true
} else{
    console.log("You're out of the game😥")
}
//CASH OUT
console.log(hasBlackJack)