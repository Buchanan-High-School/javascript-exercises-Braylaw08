let formInput = document.querySelector('#user-input');
let form = document.querySelector('form');
let compChoice = ["rock", "paper", "scissors"];
form.addEventListener('submit', function(event) {
    event.preventDefault()
    rps(formInput.value)
})
function pickRandomChoice() {
    return Math.floor(Math.random()*compChoice.length);
}
function rps(userInput) {
    let compThrow = compChoice[pickRandomChoice()]
    if(userInput == "rock" && compThrow == "paper") {
        alert("Paper! Ha ha you lose.")
    } else if(userInput == "rock" && compThrow == "scissors") {
        alert("siccors! Dang it you won, congratulations.")
    } else if(userInput == "rock" && compThrow == "rock") {
        alert("Rock! A tie.")
    } else if(userInput == "paper" && compThrow == "scissors") {
        alert("Scissors! Imagine losing.")
    } else if(userInput == "paper" && compThrow == "rock") {
        alert("rock! You won?")
    } else if(userInput == "paper" && compThrow == "paper") {
        alert("paper! Imagine thinking the samething as a computer.")
    } else if(userInput == "scissors" && compThrow == "rock") {
        alert("Rock! L bozo you suck.")
    } else if(userInput == "scissors" && compThrow == "paper") {
        alert("Paper! I lost, how?")
    } else if(userInput == "scissors" && compThrow == "scissors") {
        alert("scissors!. A tie, thats impossible.")
    } else if(userInput == "Rock, paper, or scissors") {
        alert("alright really!")
    } else {
        alert("You were supposed to pick rock, paper, or scissors stupid.")
    }
}