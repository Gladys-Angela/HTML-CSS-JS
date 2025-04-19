//create a function that renders the three team images
//use a for loop, template string(``), plus equals (+=)
//.innerHTMl to solve the challenge

const imgs = [
    "images/guurl.avif",
    "images/male.avif",
    "images/vince.avif",
]

const container = document.getElementById("container")

function renderImg(){
    for(let i = 0; i < imgs.length; i++){
        container.innerHTML += `<img alt= " Employee in the company" class="team-img" src="${imgs[i]}">`
    }
}
renderImg()