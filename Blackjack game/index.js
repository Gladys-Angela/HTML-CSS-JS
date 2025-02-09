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

let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let player = {
    name: "Gladys",
    chips: 160
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
//create a function, getRandomCard(), return number between 1 and 13
function getRandomCard() {
    //if 1 = return 11
    //if 11-13 = return 10
    let randomNumber= Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
    
    
}

// create a new function called startGame() that calls renderGame()
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    

    renderGame()
}

function renderGame() {
    
    cardsEl.textContent = "Cards: "
    //create a for loop that renders out all the cards instead of just two
    for (i= 0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " "

    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card😊"
        
    } else if (sum === 21) {
        message ="You got blackjack 🥳"
        hasBlackJack = true
        
    } else {
        message ="You're out of the game😥"
        isAlive = false
        
    }

    messageEl.textContent = message
    
    
}
 //create a function newCard() that logs out "Drawing a new card"

function newCard(){
    
    //create a variable , and hard code its value to a number(2-11)
    //add the new card to the sum variable
    //call startGame()
    //Only allow the player to get a new card id she is Alibve and does not have blackkack
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    
    }
    
} 