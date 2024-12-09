// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  // Don't change the variable name
  let listItems = document.querySelectorAll('Li');

  // This is called a conditional. If it finds matches
  // for your variable, it will tell each of them to 
  // respond to a hover ("mouseover") event.
  if (listItems.length > 1) {
    listItems.forEach((item) =>
      item.addEventListener("mouseover", handleHover),
    );
  }
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  const element = document.getElementById("circle");
  element.remove()
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
  let target = document.querySelector('.box')
  const newDiv1 = document.createElement("div");
  
  newDiv1.innerText = "this is text"
  target.appendChild(newDiv1);
  newDiv1.classList.add("item","new")
  const newDiv2 = document.createElement("div");
  newDiv2.innerText = "this is text"
  target.insertBefore(newDiv2,target.firstChild)
  newDiv2.classList.add("item","new")
}

// Don't change this function
function handleHover(event) {
  // Change the text of the target
  event.target.textContent = "OFF";
}
