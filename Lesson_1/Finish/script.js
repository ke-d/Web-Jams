
// Target the h1 element
let headerElement = document.getElementById("targetme");

// Add a onClick listener
// https://developer.mozilla.org/en-US/docs/Web/Events
headerElement.addEventListener("click", function () {
    headerElement.innerText = "I was clicked!!";
});

// Grab all the elements with class targetus
let arrayOfElements = document.getElementsByClassName("targetus");

// Get the counter element
let counterElement = document.getElementById("counter");

// Create a counter and set it to 0
let counter = 0;

for (let i = 0; i < arrayOfElements.length; i++) {
    arrayOfElements[i].addEventListener("click", function (e) {
        counter++;
        counterElement.innerText = counter;
        e.target.style.display = "none";
    });
}

