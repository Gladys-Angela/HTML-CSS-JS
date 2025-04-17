let myLeads = ["www.awesomelead.com"]

//Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
//push a new value to the array
myLeads.push("www.trying.com")
//turn the array into a string again
myLeads = JSON.stringify(myLeads)
//console log the string using typeof to verify if its a string
console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

//save input button click
//push the value form the inputEl into the myLeads array
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
   renderLeads()
})

//variable listItems, to hold all the html for the listItems
//assign to an empty string
//wrap the lead in an anchor tag <a> inside the <li>
function renderLeads(){
    let listItems = ""
    for(i = 0; i < myLeads.length; i++){
        //listItems += "<li><a  target = '_blank'href='#'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
            <a target = '_blank' href='${myLeads[i]}'> 
            ${myLeads[i]}
            </a>
        </li>`
        

        
        //create element
        //set text content
        //append to ul
        // const li= document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)

    }
ulEl.innerHTML = listItems
}
//localstorage.setItem(key, value)
//localstorage.getItem(key)
//localstorage.clear()
//should be string 
//localStorage.setItem("myLeads", "www.girls.com")
// let lead = localStorage.getItem("myLeads")
// console.log(lead)
//localStorage.clear()

