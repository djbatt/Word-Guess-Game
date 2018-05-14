const maxAttempts = 12;
var wordList = ["deadhead", "terrapin", "jerry", "tiedye"];
var userWins = 0;
var userAttempts = 0;
var lettersGuessed = [];
var wordChoice = [];
var currentWordIndex;

//first lets get the current word span to select a word and show it.
function startGame() {
    
    userAttempts = maxAttempts; // set the amount of user attempts to the max
    currentWordIndex = Math.floor(Math.random() * (wordList.length)); // Makes the current word chosen at random.\
    document.getElementById("totalWins").innerText = userWins;

    for (var i = 0; i < wordList[currentWordIndex].length; i++) { // loop this statement
        wordChoice.push("_"); // build the guesssing word from the length of a random word.
    }

    for (var i = 0; i < wordChoice.length; i++) { // loop this statement
        document.getElementById("currentWord").innerText += wordChoice[i];
    }

}

function displayFunction() {

}