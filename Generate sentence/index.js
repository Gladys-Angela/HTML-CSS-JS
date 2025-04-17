//The generateSentence(desc, arr) takes two parameter: a description and an array.
//It should return a string based upon the description and array
// Example 1: If you pass in "Largest countries" and ["China", "India","USA"],
//it should return the string : "The 3 largest countries China, india, usa"

// Example 2: If you pass in "Best fruits" and ["Apples", "Bananas"], it hsould return:
// "The 2 best fruits are apples, bananas"

//use both a for loop and a template string to solve the challenge

function generateSentence(desc, arr){
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for(let i = 0; i < arr.length; i++){
        if(i=== lastIndex){
            baseString += arr[i]
        }else {
        baseString += arr[i] + ", " 
    }
}
    return baseString
}
const sentence = generateSentence("highest mountains", ["Mt.Everest","USA"])
console.log(sentence)