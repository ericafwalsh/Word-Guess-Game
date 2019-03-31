

// Array of words that can be guesed in the game
var wordBank = ["lycanthrope", "silver", "moony", "lupin", "puppy"];
// var wordBank = ["puppy"];

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
            outputWord.concat(randomWord.charAt(i)," ");
        }
        else {
            outputWord.concat("_ ");
        }
    }

    // Print the output word

    document.getElementById("word").innerHTML = outputWord;

    // recalculates remaining guesses

    remainingGuesses = remainingGuesses - (correctLetters.length + incorrectLetters.length);

    document.getElementById("guessesRemaining").innerHTML = "Number of Guesses Remaining: " + remainingGuesses;
    document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + incorrectLetters;

    if (correctLetters.length === uniqueLetters(randomWord)) {
        numberOfWins++;
        document.getElementById("wins").innerHTML = "Wins: " + numberOfWins;
        resetGame();
    }
    
    if (remainingGuesses === 0) {
        resetGame();
    }

};



// pick a random word from the array wordBank
// User Guess a letter
// check to see if letterGuessed is in the word in the array that had been chosen
// if the letter is in the word, then replace _ _ _ _ _ with the filled in word
// if the letter is not in the word, then add the letter to the letters guessed, remove a guess remaining, and make an image happen
// once all the blanks are filled, add a win
// if the number of guesses runs out, make an image appear
// press a key after the lose or win to make the game reset


// use search() to see the position. If it is > 0 then do it again, until it is -1