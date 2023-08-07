// Get the element with the ID "guess"
const guessElement = document.getElementById("guess");

// Check if the browser supports the Speech Recognition API and create an instance of Speech Recognition
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Set the language for speech recognition to Portuguese (Brazil) and start recognition
recognition.lang = 'pt-BR';
recognition.start();

// Add an event to process the result of speech recognition
recognition.addEventListener('result', onSpeak);

// Function called when speech recognition gets a result
function onSpeak(e) {
    // Get the recognized text from the results
    const guess = e.results[0][0].transcript;
    
    // Display the recognized guess in the HTML element
    showGuess(guess);
    
    // Call the function to check the validity of the guess
    checkValidGuess(guess);
};

// Function to display the recognized guess in an HTML element
function showGuess(guess) {
    guessElement.innerHTML = `
        <div>Você disse</div>
        <span class="box">${guess}</span>
    `;
}

// Restart speech recognition when it ends
recognition.addEventListener('end', () => recognition.start());