// Function to check if the guess is valid
function checkValidGuess(guess) {
    // Convert the guess to a number
    const number = +guess;
  

    // Check if the guess is invalid (not a number)
    if (isInvalidGues(number)) {
        // Display a message indicating that it's not a number
        guessElement.innerHTML += "<div>Não é um número</div>";

        // Check if the guess was the phrase "TERMINATE GAME" to end the game
        if (guess.toUpperCase() === "TERMINAR JOGO") {
            // Display a message of giving up and a button to play again
            document.body.innerHTML =
                `
                <h2>Você desistiu &#128532 !!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="play-again" class="btn-play">Jogar novamente</button>
                `
            // Change the background color of the body to black
            document.body.style.background = "black";
        } else {
            // If it wasn't the phrase "TERMINATE GAME", display a message of invalid value
            guessElement.innerHTML += '<div>Valor Inválido</div>';
        }
        return;
    }

    // Check if the number is outside the range defined by minValue and maxValue
    if (isOutOfRange(number)) {
        // Display a message indicating that the number is outside the valid range
        guessElement.innerHTML += `<div>Valor inválido: Fale um número entre ${minValue} e ${maxValue}</div>`;
        return;
    }

    // Check if the number matches the secret number
    if (number === secretNumber) {
        // If the player guesses the secret number, display a message of congratulations and a button to play again
        document.body.innerHTML = `
        <h1>🎉</h1><h2>Parabéns você acertou! </h2>
        <h3> O número secreto é ${secretNumber}</h3>

        <button id="play-again" class="btn-play">Jogar novamente</button>
        `;
       
    } else if (number > secretNumber) {
        // If the number is greater than the secret number, display a message indicating that the secret number is smaller
        guessElement.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
    } else {
        // If the number is smaller than the secret number, display a message indicating that the secret number is greater
        guessElement.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;
    } 
}

// Function to check if the number is invalid (not a number)
function isInvalidGues(number) {
    return Number.isNaN(number);
}

// Function to check if the number is outside the range defined by minValue and maxValue
function isOutOfRange(number) {
    return number < minValue || number > maxValue;
}

// Add a click event to the body of the page
document.body.addEventListener('click', (e) => {
    // Check if the clicked element has the ID "play-again"
    if (e.target.id === 'play-again') {
        // Reload the page to play again
        window.location.reload();
    }
});
