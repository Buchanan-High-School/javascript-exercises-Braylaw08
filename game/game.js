let formInput = document.querySelector('#user-input');
let form = document.querySelector('form');
let compChoice = ["rock", "paper", "scissors", "fire", "water", "air", "sponge"];
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
    } else if (userInput == "rock" && compThrow == "fire") {
        alert("Fire! Dang it you won.")
    } else if(userInput == "rock" && compThrow == "sponge") {
        alert("Sponge! How do I let this happen.")
    } else if(userInput == "rock" && compThrow =="water") {
        alert("Water! Hahaha loser.")
    } else if(userInput == "rock" && compThrow == "air") {
        alert("Air! Yes I win")
    } else if(userInput == "paper" && compThrow == "scissors") {
        alert("Scissors! Imagine losing.")
    } else if(userInput == "paper" && compThrow == "rock") {
        alert("rock! You won?")
    } else if(userInput == "paper" && compThrow == "paper") {
        alert("paper! Imagine thinking the samething as a computer.")
    } else if(userInput == "paper" && compThrow == "air") {
        alert("Air! Gotcha")
    } else if(userInput == "paper" && compThrow == "water") {
        alert("Water! I win, somehow.")
    } else if(userInput == "paper" && compThrow == "fire") {
        alert("Fire! Ha ha I burn you.")
    } else if(userInput == "paper" && compThrow == "sponge") {
        alert("Sponge! This means I won haha.")
    }else if(userInput == "scissors" && compThrow == "rock") {
        alert("Rock! L bozo you suck.")
    } else if(userInput == "scissors" && compThrow == "paper") {
        alert("Paper! I lost, how?")
    } else if(userInput == "scissors" && compThrow == "scissors") {
        alert("scissors!. A tie, thats impossible.")
    } else if(userInput =="scissors" &&compThrow == "water") {
        alert("Water! Ha you rusted")
    } else if(userInput == "scissors" && compThrow == "fire") {
        alert("Fire! I met you.")
    } else if(userInput == "scissors" && compThrow == "sponge") {
        alert("Sponge! You cut me.")
    } else if(userInput == "scissors" && compThrow == "air") {
        alert("Air! You win I guess.")
    }else if(userInput == "water" && compThrow == "rock") {
        alert("Rock! I lost, I hate playing with you.")
    } else if(userInput == "water" && compThrow == "paper") {
        alert("Paper! lets gooooo!")
    } else if(userInput == "water" && compThrow == "scissors") {
        alert("Scissors! hoooooowwww!")
    } else if(userInput == "water" && compThrow == "air") {
        alert("Air! I win.")
    } else if(userInput == "water" && compThrow =="fire") {
        alert("Fire! I lost")
    } else if(userInput == "water" && compInput == "sponge") {
        alert("Sponge! Ha I win.")
    } else if(userInput == "water" && compThrow == "water") {
        alert("Water! its a tie.")
    } else if(userInput == "air" && compThrow == "rock") {
        alert("Rock! I lost GG.")
    } else if(userInput == "air" && compThrow == "paper") {
        alert("Paper! Haha.")
    } else if(userInput == "air" &&compThrow == "scissors") {
        alert("Scissors! L BOZO.")
    } else if(userInput == "air" && compThrow == "water") {
        alert("Water! We don't talk about that.")
    } else if(userInput == "air" && compThrow == "fire") {
        alert("Fire! I really hate this")
    } else if(userInput == "air" && compThrow == "sponge") {
        alert("Sponge! You suck.")
    } else if(userInput == "air" && compThrow == "air") {
        alert("Air! You got lucky that this is a tie.")
    } else if(userInput == "fire" && compThrow == "rock") {
        alert("Rock! Take the L")
    } else if(userInput == "fire" && compThrow == "paper") {
        alert("Paper! you burned me.")
    } else if(userInput == "fire" && compThrow == "scissors") {
        alert("Scissors! You melted me.")
    } else if(userInput == "fire" && compThrow == "water") {
        alert("Water! I smothered you.")
    } else if(userInput == "fire" && compThrow == "air") {
        alert("Air! Blew you out.")
    } else if(userInput == "fire" && compThrow == "sponge") {
        alert("Sponge! Yeah I lost.")
    } else if(userInput == "fire" && compThrow == "fire") {
        alert("Fire! Oh, a hot tie.")
    } else if(userInput == "sponge" && compThrow == "rock") {
        alert("Rock! Ha you lost.")
    } else if(userInput == "sponge" && compThrow == "paper") {
        alert("Paper! I guess I lost.")
    } else if(userInput == "sponge" && compThrow == "scissors") {
        alert("Scissors! I cut you in half.")
    } else if(userInput == "sponge" && compThrow == "fire") {
        alert("Fire! Burn.")
    } else if(userInput == "sponge" && compThrow == "water") {
        alert("Water! You absorbed me.")
    } else if(userInput == "sponge" && compThrow == "air") {
        alert("Air! DANG IT!")
    } else if(userInput == "sponge" && compThrow == "sponge") {
        alert("Sponge! What a tie.")
    } else if(userInput == "rock, paper, scissors, air, water, fire, or sponge") {
        alert("Really!")
    } else if(userInput == "") {
        alert("Please enter something in the box.")
    } else {
        alert("That is not an option stupid")
    }
}