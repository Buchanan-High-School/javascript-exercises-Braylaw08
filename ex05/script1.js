const colors = ["red", "blue", "pink", "aqua", "yellow", "crimson", "silver"]
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


const colorSpan = document.querySelector("#color");
const colorBtn = document.querySelector("#get-color");

colorBtn.addEventListener("click", function() {
    console.log("clicked color")
    let pickedColor = getRandomNumber(colors)
    document.body.style.backgroundColor = colors[pickedColor]
    colorSpan.innerText = colors[pickedColor]
})

const randBtn = document.querySelector("#random-color");
randBtn.addEventListener("click", function() {
    console.log("clicked random")
    let pickedColor = "#";
    for (let el=0; el<6; el++){
        pickedColor += hex[getRandomNumber(hex)];
        console.log(pickedColor)
    }
    document.body.style.backgroundColor = pickedColor;
    colorSpan.innerText = pickedColor;
})

function getRandomNumber(list) {
    return Math.floor(Math.random()*list.length)
}

const savebtn = document.querySelector('#save-color');
savebtn.addEventListener("click", function() {
    console.log("clicked save")
    let target = document.querySelector('#colors');
    const newLi = document.createElement("li")
    newLi.innerText = document.body.style.backgroundColor
    target.appendChild(newLi)
})