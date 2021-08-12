let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");
let options = {
    method: "GET"
};

function jokeRequest() {
    let requestUrl = "https://apis.ccbp.in/jokes/random";
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");
            let jokeTextstatus = jsonData.value;
            jokeTextEl.textContent = jokeTextstatus;

        })
}
jokeBtnEl.addEventListener("click", jokeRequest);