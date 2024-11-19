console.log("i here");

let names = document.querySelectorAll("li")
let target = document.querySelector("#reciever")

console.log(names)

names.forEach(item => {
    let newEl = document.createElement("li");
    newEl.innerText = "Hi " +item.innerText;
    newEl.style.fontWeight = 800;
    target.appendChild(newEl)
})