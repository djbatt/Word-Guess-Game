const maxAttempts = 12;
var wordList = ["deadhead", "terrapin", "jerry", "tiedye"];
var userWins = 0;
var userAttempts = 0;
var lettersGuessed = [];
var wordChoice = [];
var currentWordIndex;

function startGame() {
    userAttempts = maxAttempts; // sets the user attempts to the max, it will lower from here.

    document.getElementById("totalWins").innerText = userWins; // sets the html user wins to the amount of wins defined in js.
    document.getElementById("remainingGuesses").innerText = userAttempts; // sets the html user attempts to the amount of attempts in js.
    document.getElementById("guessedLetters").innerText = lettersGuessed; // sets the guessed letter to our lettersGuessed variable
    
    userAttempts = maxAttempts; // set the amount of user attempts to the max
    currentWordIndex = Math.floor(Math.random() * (wordList.length)); // Makes the current word chosen at random.\

    for (var i = 0; i < wordList[currentWordIndex].length; i++) { // loop this statement
        wordChoice.push("_"); // build the guesssing word from the length of a random word.
    }

    for (var i = 0; i < wordChoice.length; i++) { // loop this statement
        document.getElementById("currentWord").innerText += wordChoice[i];
    }

}

function displayFunction() {

}