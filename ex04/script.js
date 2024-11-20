function task1() {
  let myArray = ["bread", "lettuce", "meat", "cheese", "ketchup", "bread"];
  let target = document.querySelector('#task-1-target');
  // This will run when you click the button.
  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  // Write your code in here
  const colors = document.querySelector("#color-list")
  Array.from(colors.children).forEach(item =>{
    console.log(item.innerText);
  })
}

function task2B() {
  // Write your code in here
let names = document.querySelector("#name-list")
let newList = document.createElement("div")
let task = document.getElementById("task2")

task.append(newList)

Array.from(names.children).forEach(item =>{
  let newEl = document.createElement("li");
  newEl.innerText = "Hi " + item.innerText;
  task.append(newEl)
})
}

function task3() {
  // Write your code in here
let item = document.querySelectorAll('#box flex');
item.forEach(item =>{
  
})
}