let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]
//fetch the button from the DOM, store it in variable 
//use addEventListener() to listen for button clicks
//log Jane's score when the button is clicked(via data)
gameEl = document.getElementById("game-el")

gameEl.addEventListener("click", function(){
    console.log(data[0].score)
})