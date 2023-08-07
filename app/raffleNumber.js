// Define the minimum and maximum values
const minValue = 10;
const maxValue = 500;

// Generate a random number between the minimum and maximum values
const secretNumber = generateRandomNumber();

// Function to generate a random number
function generateRandomNumber() {
return parseInt(Math.random() * (maxValue - minValue + 1) + minValue);
}

// Get the element with the ID "menor-valor" and assign the minimum value to it
const minElement = document.getElementById("min-value");
minElement.innerHTML = minValue;

// Get the element with the ID "maior-valor" and assign the maximum value to it
const maxElement = document.getElementById("max-value");
maxElement.innerHTML = maxValue;