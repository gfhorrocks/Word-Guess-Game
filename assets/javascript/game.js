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

var wins = 0;
var guessesLeft = 10;

var alertText = document.getElementById("alert-text");
var winsText = document.getElementById("wins-text");
var currentText = document.getElementById("current-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesText = document.getElementById("guesses-text");


var index = Math.floor(Math.random() * 26);
var tempWord = [word[index].length];
var correctLetters = 0;

for (var x = 0; x < word[index].length; x++) {
    tempWord[x] = "_";
}

document.onkeyup = function (event) {

    var userGuess = event.key;
    var fullWord = "";

    alertText.textContent = "";

    for (var i = 0; i < word[index].length; i++) {
        if (tempWord[i] === "_") {
            if (userGuess === word[index].charAt(i)) {
                tempWord[i] = word[index].charAt(i);
                correctLetters++;
                incorrect=0;
            }
        }

        fullWord += " " + tempWord[i] + " ";
    }

    currentText.textContent = fullWord;
    guessesLeftText.textContent = guessesLeft;
    guessesText.textContent += userGuess;

    if (correctLetters === word[index].length) {
        wins++;
        guessesLeft = 10;
        guessedLetters = "";
        correctLetters = 0;
        attempt = 0;
        index = Math.floor(Math.random() * 26);
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

    console.log("Word: " + word[index]);
    console.log("Count: " + correctLetters);
}