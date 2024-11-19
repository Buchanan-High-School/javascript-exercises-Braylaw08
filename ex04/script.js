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
  
}

function task2B() {
  // Write your code in here
  let names = document.querySelectorAll("Li")
let target = document.querySelector("#name-list")
names.forEach(item => {
  let newEl = document.createElement("li");
  newEl.innerText = "Hi " +item.innerText;
  target.appendChild(newEl)
})
}

function task3() {
  // Write your code in here
}
