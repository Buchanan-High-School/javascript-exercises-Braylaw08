let jokeBtn = document.querySelector(`#joke`)
let saveBtn = document.querySelector(`#save`)
let jokeContainer = document.querySelector(`#text`)
let jokeId = document.querySelector(`.jokeId`)
let savedJokeContainer = document.querySelector(".saved")

jokeBtn.addEventListener("click", getJoke);
window.addEventListener("DOMContentLoaded", loadSavedJokes);

let options = {
    headers:{
        "Accept":"application/json",
        "User-Agent":"Buchanan High School CS1 (https://buchananschools.com)"
    }
}

async function getJoke() {
    let request = await fetch("https://icanhazdadjoke.com", options)
    let response = await request.json()
    jokeContainer.innerText = response.joke
    jokeId.value = response.id
}

let form = document.querySelector(`form`)
form.addEventListener("submit", function(event) {
    event.preventDefault();
    saveJoke(event.target);
})

function saveJoke(form) {
    let formData = new FormData(form)
    let jokeObject = Object.fromEntries(formData)
    jokeObject["joke"] = jokeContainer.textContent
    localStorage.setItem(jokeObject.jokeId, JSON.stringify(jokeObject))
    loadSavedJokes()
}

function loadSavedJokes() {
    let savedJokes = Object.entries(localStorage);
    savedJokeContainer.innerHTML = savedJokes.map(joke => {
        let jokeData = JSON.parse(joke[1]);
        return `
            <li>
                <p>${jokeData.joke}</p>
                <p>${jokeData.notes}</p>
                <p>${jokeData.score}</p>
                <button class="delete" data-jokeID="${jokeData.jokeId}">delete</button>
            </li>    
        `
    }).join("")
    let savedJokeDeleteBtn = document.querySelectorAll(".delete");
    savedJokeDeleteBtn.forEach(button => {
        button.addEventListener("click", (event) => {
            deleteJoke(event.target);
        })
    })
}

function deleteJoke(button) {
    let jokeId = button.dataset.jokeid;
    localStorage.removeItem(jokeId);
    loadSavedJokes();
}