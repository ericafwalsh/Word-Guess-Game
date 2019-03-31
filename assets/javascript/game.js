

// Array of words that can be guesed in the game
var wordBank = ["lycanthrope", "silver", "moony", "lupin", "puppy"];

// Randomly selects a word in wordBank array and stores it in randomWord
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// Creating an empty array for the correct letters guessed
var correctLetters = [];

// Creating an empty array for the incorrect letters guessed
var incorrectLetters = [];




// Function that runs once a key is pressed

document.onkeyup = function (event) {

    // Determines which key was pressed

    var letterGuessed = event.key;

    if (correctLetter.indexOf(letterGuessed) >= 0 || incorrectLetter.indexOf(letterGuessed) >= 0) {
        return;
    }
    
    else if (randomWord.includes(letterGuessed) === true) {
        correctLetters.push(letterGuessed);
    }
    else {
        incorrectLetters.push(letterGuessed);
    }

    // Show blanks for the number of letters in the guessed word
    for (i = 0; i < randomWord.length; i++) {
        if (correctLetters.indexOf(randomWord.charAt(i)) >= 0) {
            console.log(randomWord.charAt(i));
        }
        else {
            console.log(" _");
        }
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