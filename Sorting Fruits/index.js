let fruit = ["🍎", "🍊","🍎","🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

/*create a function that puts the apples onto the appleshelf
and the oranges onto the orangeshelf. 
Use a for loop, a condition statement , and the textContent property
*/
function sortFruit(){
for(i = 0; i < fruit.length; i++){
    if(fruit[i] === "🍎"){
        appleShelf.textContent += "🍎"
    } else if(fruit[i] ===  "🍊") {
        orangeShelf.textContent += "🍊"

    }
}
}
sortFruit()