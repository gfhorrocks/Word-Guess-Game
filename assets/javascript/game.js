//MAIN ARRAY DECLARATION FOR THE MATRIX GAME

var word = ["wachowskis",
    "revolutions",
    "reloaded",
    "matrix",
    "warner",
    "smith",
    "morpheus",
    "cypher",
    "tank",
    "niobe",
    "link",
    "oracle",
    "architect",
    "persephone",
    "keymaker",
    "bane",
    "lock",
    "hamann",
    "neo",
    "trinity",
    "brown",
    "jones",
    "johnson",
    "jackson",
    "thompson"];

//VARIABLE DECLARATIONS

var wins = 0;                
var guessesLeft = 10;
var incorrectFlag = 0;
var alertText = document.getElementById("alert-text");
var winsText = document.getElementById("wins-text");
var currentText = document.getElementById("current-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesText = document.getElementById("guesses-text");
var index = Math.floor(Math.random() * 25);
var tempWord = [word[index].length];
var correctLetters = 0;

//FILLING THE TEMPWORD WITH UNDERSCORES

for (var x = 0; x < word[index].length; x++) {
    tempWord[x] = "_";
}

//ON KEY UP FUNCTION

document.onkeyup = function (event) {
    console.clear();
    var userGuess = event.key;
    var fullWord = "";

    incorrectFlag = 1;
    alertText.textContent = "";
    guessesLeftText.textContent = guessesLeft;

//CHECKING TO SEE IF LETTER HAS BEEN USED FIRST

    if (usedBefore(userGuess, guessesText.textContent) === false) { 
        for (var i = 0; i < word[index].length; i++) {

            if (userGuess === word[index].charAt(i)) {

                tempWord[i] = word[index].charAt(i);
                correctLetters++;
                incorrectFlag = 0;
            }

            fullWord += " " + tempWord[i] + " ";
        }

        currentText.textContent = fullWord;
        guessesText.textContent += userGuess;

    }
    else {
        incorrectFlag = 0;
    }

//IF IT MAKES IT HERE WITH FLAG 1 - IT NEVER FOUND THE LETTER IN THE STRING

    if (incorrectFlag === 1) {

        guessesLeft--;
        guessesLeftText.textContent = guessesLeft;


    }

//WIN CONDTION WHEN THE NUMBER OF CORRECT NUMBERS IS = TO THE LENGTH OF STRING

    if (correctLetters === word[index].length) {
        wins++;
        guessesLeft = 10;
        guessedLetters = "";
        correctLetters = 0;
        index = Math.floor(Math.random() * 25);
        tempWord = [word[index].length];

        for (var x = 0; x < word[index].length; x++) {
            tempWord[x] = "_";
        }

        alertText.textContent = "You Guessed the Word right! Press a Key to start a new game!";
        winsText.textContent = wins;
        currentText.textContent = "";
        guessesLeftText.textContent = "";
        guessesText.textContent = "";
    }

//LOSE CONDITION WHEN THE NUMBER OF GUESSESLEFT IS 0

    if (guessesLeft === 0) {
        guessesLeft = 10;
        guessedLetters = "";
        correctLetters = 0;
        index = Math.floor(Math.random() * 25);
        tempWord = [word[index].length];

        for (var x = 0; x < word[index].length; x++) {
            tempWord[x] = "_";
        }

        alertText.textContent = "I'm sorry but you failed to get the word right! Press a Key to start a new game!";
        winsText.textContent = wins;
        currentText.textContent = "";
        guessesLeftText.textContent = "";
        guessesText.textContent = "";
    }

//RESERVED FOR CONSOLE LOGGING (USED FOR HOURS AND HOURS)

    // console.log("Word: " + word[index]);
    // console.log("Letter Guessed: " +userGuess);
    // console.log("Correct Letters" + correctLetters);
    // console.log("Guess Text: " +guessesText.textContent);
    // console.log("Guesses Left: " +guessesLeft);
    // console.log("Incorrect Flag: " +incorrectFlag);
    // console.log("TempWord: " +tempWord);
    // console.log("Guesses Text: " +guessesLeftText.textContent);
}

//SIMPLE USEDBEFORE FUNCTION TO RETURN TRUE OR FALSE

function usedBefore(gLetter, guessesT) {

    for (i = 0; i < guessesT.length; i++) {

        if (gLetter === guessesT.charAt(i)) {

            return true;
        }
    }
    return false;
}