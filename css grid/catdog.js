let blockingBtn = document.querySelector("#blocker")
let catBtn = document.querySelector("#cat-fact")
let dogBtn = document.querySelector("#dog-fact")
let container = document.querySelector("#response")

blockingBtn.addEventListener("click", blockingFn)
catBtn.addEventListener("click", getCatFact)
dogBtn.addEventListener("click", getDogFact)

function blockingFn() {
    alert("This blocks the main process!")
}

function getCatFact() {
    fetch("https://meowfacts.herokuapp.com").then(request => {
        return request.json()
    }).then(result => {
        container.innerText = `Cat Fact: ${result.data[0]}`
    })
}

function getDogFact() {
    fetch("https://dogapi.dog/api/v2/facts").then(request => {
        return request.json()
    }).then(result => {
        container.innerText = `Dog Fact: ${result.data[0].attributes.body}`
    })
}