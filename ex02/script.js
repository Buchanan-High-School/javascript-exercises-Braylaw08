// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  let target = document.querySelector("#text-content")
  console.log(target)
  target.innerText = "something new"
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  let target = document.querySelector("#task2")
  console.log(target)
  target.style.backgroundColor = 'red';
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
  let target = document.querySelector("#list")
  const newLi = document.createElement("li");
  newLi.innerText = "mow"
  target.appendChild(newLi);
}
