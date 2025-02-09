//renderGame() Function (with the conditions below)
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
//creating an array of cards
//use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
//create a function, getRandomCard(), return number between 1 and 13

function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1
    
}

// create a new function called startGame() that calls renderGame()
function startGame(){
    renderGame()
}

function renderGame() {
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    //create a for loop that renders out all the cards instead of just two
    for (i= 0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " "

    }

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
    
}
 //create a function newCard() that logs out "Drawing a new card"

 function newCard(){
    console.log("Drawing a new card")
    //create a variable , and hard code its value to a number(2-11)
    //add the new card to the sum variable
    //call startGame()
    let card = getRandomCard()
    sum += card
    //push the card to the cards array
    cards.push(card)
    console.log(cards)


    renderGame()
    


 }
 