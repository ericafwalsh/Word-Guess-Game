

// Array of words that can be guesed in the game
var wordBank = ["lycanthrope", "silver", "moony", "lupin", "puppy"];

// Randomly selects a word in wordBank array and stores it in randomWord
var randomWord;

// Creating an array for the correct letters guessed
var correctLetters;

// Creating an array for the incorrect letters guessed
var incorrectLetters;

// Number of wins to show on start
var numberOfWins = 0;

// Remaining Guesses to show on start
var remainingGuesses;

// Allowable characters
var allowedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// function that changes the display to each moon image to block or none depending on how many guesses left
function updateMoons() {
    var i = 12 - remainingGuesses;
    if (i !== 0) {
        document.getElementById("moon" + i.toString()).style.display = "none";
    }
    document.getElementById("moon" + (i + 1).toString()).style.display = "block";
}


// function that turns off all moons except the first one when the game is over
function resetMoons() {
    for (i = 2; i < 14; i++) {
        document.getElementById("moon" + i.toString()).style.display = "none";
    }
    document.getElementById("moon1").style.display = "block";
}

// function for a werewolf image
function updateWerewolfImage() {
    if (remainingGuesses === 0) {
        document.getElementById("man").style.display = "none";
        document.getElementById("werewolf").style.display = "block";
        document.getElementById("puppy").style.display = "none";
    }
    else {
        document.getElementById("man").style.display = "block";
        document.getElementById("werewolf").style.display = "none";
        document.getElementById("puppy").style.display = "none";
    }
}


// Making a function to reset the game, which picks a random word, empties the arrays for letters guessed, and resets the remaining guesses
function resetGame() {

    // Randomly selects a word in wordBank array and stores it in randomWord
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // Creating an empty array for the correct letters guessed
    correctLetters = [];

    // Creating an empty array for the incorrect letters guessed
    incorrectLetters = [];

    // reseting remaining guesses
    remainingGuesses = 12;
}

// For flagging when there is a win. Counts the unique characters in the randomly selected word
function uniqueLetters(mysteryword) {
    var uniqueArray = [];
    for (i = 0; i < mysteryword.length; i++) {
        if (uniqueArray.indexOf(mysteryword.charAt(i)) < 0) {
            uniqueArray.push(mysteryword.charAt(i));
        }
    }
    var countOfUniqueArray = uniqueArray.length;
    return countOfUniqueArray;
}


// Start the game, and reset the game
resetGame();

// This function runs once a key is pressed

document.onkeyup = function (event) {

    // Determines which key was pressed

    var letterGuessed = event.key;

    // if the remaining Guesses equals 12, meaning the game has started over, resets the moons to the beginning
    if (remainingGuesses === 12) {
        resetMoons();
    };

    // if the letter has aleady been guessed, then exit this function   
    if (correctLetters.indexOf(letterGuessed) >= 0 || incorrectLetters.indexOf(letterGuessed) >= 0 || allowedCharacters.indexOf(letterGuessed) < 0) {
        return;
    }

    // if the guessed letter is in the word, then add that letter to the array correctLetters

    else if (randomWord.includes(letterGuessed) === true) {
        correctLetters.push(letterGuessed);
    }

    // if the guessed letter is not in the random word, then add the letter to the array incorrectLetters

    else {
        incorrectLetters.push(letterGuessed);

        // subtracts one from remaining guesses

        remainingGuesses--;

        // runs the function that decides if an image should be shown or not
        updateMoons();

    }

    // creates an empty string where the correct letter or dash are concated to
    var outputWord = "";

    // Checks which position the guessed letter is in, then concats a letter or dash
    for (i = 0; i < randomWord.length; i++) {

        if (correctLetters.indexOf(randomWord.charAt(i)) >= 0) {
            outputWord = outputWord + randomWord.charAt(i) + " ";
        }
        else {
            outputWord = outputWord + "_ ";
        }
    }

    // calls the function that determines if man/werewolf image needs to be shown

    updateWerewolfImage();

    // Print the output word

    document.getElementById("word").innerHTML = "Word: " + outputWord;


    // Prints the number of guesses remaining, and the letters already guessed

    document.getElementById("guessesRemaining").innerHTML = "Number of Guesses Remaining: " + remainingGuesses;
    document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + incorrectLetters;

    // determines when a win happens by comparing the unique characters in the correctLetters guessed array
    // to the unique letters in the random word, and resets game

    if (correctLetters.length === uniqueLetters(randomWord)) {
        numberOfWins++;
        document.getElementById("wins").innerHTML = "Wins: " + numberOfWins;
        document.getElementById("man").style.display = "none";
        document.getElementById("werewolf").style.display = "none";
        document.getElementById("puppy").style.display = "block";
        resetGame();
    }

    // determines if a loss has happened and resets game

    if (remainingGuesses === 0) {
        resetGame();
    }

};
