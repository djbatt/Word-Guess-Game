const maxAttempts = 12;
var wordList = ["deadhead", "terrapin", "jerry", "tiedye", "stealie", "skeleton"];
var userWins = 0;
var userLosses = 0;
var userAttempts = 0;
var lettersGuessed = [];
var wordChoice = [];
var currentWordIndex;

function startGame() {

    pageStats();
    winGame();
    loseGame();

    currentWordIndex = Math.floor(Math.random() * (wordList.length)); // Creates a number to represent the currentWordIndex

    for (var i = 0; i < wordList[currentWordIndex].length; i++) {
        wordChoice.push("_"); // Picks the word according to the index, and then pushes underscores according to the length of the word picked.
    }

    for (var i = 0; i < wordChoice.length; i++) { //Sets the currentWord ID elements text to be equal to the wordChoice
        document.getElementById("currentWord").innerText += wordChoice[i];
    }

    console.log(currentWordIndex);
    console.log(wordChoice);

}

function pageStats() {
    userAttempts = maxAttempts; // sets the user attempts to the max, it will lower from here.
    document.getElementById("totalWins").innerText = userWins; // sets the html user wins to the amount of wins defined in js.
    document.getElementById("totalLosses").innerText = userLosses; // sets the html user wins to the amount of wins defined in js.
    document.getElementById("remainingGuesses").innerText = userAttempts; // sets the html user attempts to the amount of attempts in js.
    //document.getElementById("guessedLetters").innerText = lettersGuessed; // sets the guessed letter to our lettersGuessed variable

}

function winGame() {
    if (wordChoice.indexOf("_") === -1) {
        userWins++;
    }
}

function loseGame() {
    if (remainingGuesses <= 0) {
        userLosses++;
    }
}