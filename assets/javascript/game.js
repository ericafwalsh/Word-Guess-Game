

// Array of words that can be guesed in the game
var wordBank = ["lycanthrope", "silver", "moony", "lupin", "puppy"];

// Randomly selects a word in wordBank array and stores it in randomWord
var randomWord;

// Creating an empty array for the correct letters guessed
var correctLetters;

// Creating an empty array for the incorrect letters guessed
var incorrectLetters;

// Number of wins
var numberOfWins = 0;

// Remaining Guesses to show on start
var remainingGuesses;


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


// For flagging when there is a win. Counts the unique caharacters in the randomly selected word
function uniqueLetters(mysteryword) {
    var uniqueArray = [];
    for (i=0; i < mysteryword.length; i++) {
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

    // if the letter has aleady been guessed, then exit this function

    if (correctLetters.indexOf(letterGuessed) >= 0 || incorrectLetters.indexOf(letterGuessed) >= 0) {
        return;
    }

// if the guessed letter is in the word, then add that letter to the array correctLetters

    else if (randomWord.includes(letterGuessed) === true) {
        correctLetters.push(letterGuessed);
    }

// if the guessed letter is not in the random word, then add the letter to the array incorrectLetters

    else {
        incorrectLetters.push(letterGuessed);
    }

// Checks which position the guessed letter is in, then prints a letter or dash

var outputWord = "";

    for (i = 0; i < randomWord.length; i++) {

        if (correctLetters.indexOf(randomWord.charAt(i)) >= 0) {
            outputWord = outputWord + randomWord.charAt(i) + " ";
        }
        else {
            outputWord = outputWord + "_ ";
        }
    }

    // Print the output word

    document.getElementById("word").innerHTML = "Word: " + outputWord;

    // recalculates remaining guesses

    remainingGuesses--;

// Prints the number of guesses remaining, and the letters already guessed

    document.getElementById("guessesRemaining").innerHTML = "Number of Guesses Remaining: " + remainingGuesses;
    document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + incorrectLetters;

// determins when a win happens and resets game

    if (correctLetters.length === uniqueLetters(randomWord)) {
        numberOfWins++;
        document.getElementById("wins").innerHTML = "Wins: " + numberOfWins;
        resetGame();
    }
    

// determines if a loss has happened and resets game

    if (remainingGuesses === 0) {
        resetGame();
    }

};
