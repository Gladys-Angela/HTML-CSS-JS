//Setting the Stage
//let player = "Per"
const player = "Per"
//let opponent = "Nick"
const opponent = "Nick"
//let game = "Amazing fighter"
const game = "Amazing fighter"
//const points = 0
let points = 0
//const hasWon = false
let hasWon = false

//playing the game
points += 100
hasWon = true

//announcing winner
if(hasWon){
    //console.log(player + " got " + points + " points and won the " + game + " game!")
    console.log(`${player} got  ${points} points and won the ${game} game!`)

} else {
    //console.log(" The winner is " + opponent + "! " + player + "lost the game!")
    console.log(`The winner is ${opponent} ! ${player} + lost the game!`)
}
