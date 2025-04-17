let myCourses = ["Learn css Animation", "UI Design Fundamentals", "intro to clean code"]

//create a function that takes a single parameter an array
// and logs all the items of the array to the console
//call the function while passing in MyCourses as an argument

function logItems(arr){
    for(i = 0; i < arr.length; i++){
        console.log(arr[i])

    }
    
}
logItems(myCourses)