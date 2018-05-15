var wordList = ["deadhead", "terrapin", "jerry", "tiedye", "stealie", "skeleton"];
var selectedWord;
var wordChoice = [];

var userWins = 0;
var userLosses = 0;
var userAttempts = 10;
var lettersGuessed = [];
var letterPos = [];

function startGame() {
    document.onkeydown()

    document.getElementById("totalWins").innerText = userWins; // sets the html user wins to the amount of wins defined in js.
    document.getElementById("totalLosses").innerText = userLosses; // sets the html user wins to the amount of wins defined in js.
    document.getElementById("remainingGuesses").innerText = userAttempts; // sets the html user attempts to the amount of attempts in js

    selectedWord = Math.floor(Math.random() * (wordList.length)); // selectedWord variable is now equal to a random number value selected from the wordList array.

    for (var i = 0; i < wordList[selectedWord].length; i++) { // loop until i is equal to the length of the selected word
        wordChoice.push("_"); // Push underscores into the word choice array
    }

    for (var i = 0; i < wordChoice.length; i++) { // loop until i is equal to the length of the wordChoice variable.
        document.getElementById("currentWord").innerText += wordChoice[i]; //change the inner text of the current to be the wordChoice array.
    }

    
    console.log(selectedWord);
    console.log(wordChoice);

}

document.onkeyup = function(event) { //Pressing a key is now the function, defined by the event parameter
    if(event.keyCode >= 65 && event.keyCode <=90) { // if you press keys a-z run the script below.
    script.script.script
    }
}