//This is my hangman game
//Its themed around Grateful Dead songs, they play while you are guessing for it
//There are seven songs in total

//List of the words available
var songList = ["Brown Eyed Woman", "Mississippi Half Step Toodeloo", "Fire On The Mountain", "Shakedown Street", "Scarlet Begonias", "Casey Jones", "Sugar Magnolia"];

//list of available user input
var inputList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];

const maxAttempts = 10; // uses const to set constant value of maxAttempts to 10
var remainingAttempts = 0; // how many more attempts the user has
var currentWord; //the current word used
var nextWord = [];
const maxAttempts = 10; //maximum number of attempts
var userWins = 0;
var userAttempts = 0;
var lettersGuessed = [];

function startGame() {
    remainingAttempts = maxAttempts;
    gameStarted = false;
    currentWord = Math.floor(Math.random() * (songList.length));

    for (var i = 0; i < songList[currentWord].length; i++) {
        nextWord.push("_");
    }
}