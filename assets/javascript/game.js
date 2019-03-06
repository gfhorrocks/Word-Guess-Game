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

var hintText = ["American film and TV directors, writers, and producers. They are sisters, and both are trans women.",
    "It was the third installment of The Matrix trilogy",
    "The first sequel to The Matrix, and the second installment in The Matrix trilogy",
    "It depicts a dystopian future in which reality as perceived by humans is actually a simulated reality",
    "Motion pictures/entertainment company",
    "The primary antagonist in The Matrix franchise",
    "Offers Neo a choice of ingesting a red pill or blue pill",
    "Betrayed the crew of the Nebuchadnezzar to aid Agent Smith to help him achieve information on the Zion mainframe",
    "Operator onboard the Nebuchadnezzar. He was born naturally in Zion",
    "A human from Zion, being one of the rebels participating in the war against the Machines and the Matrix",
    "The operator on board the Nebuchadnezzar, assigned there after the previous operator, Tank, died",
    "Mysterious but powerful figure, incongruously depicted as a cheerful old lady who smokes cigarettes and bakes cookies",
    "Created the first Matrix as a utopia for the humans whose minds inhabited it",
    "Sexually attracted to Neo and offers to help him if he kisses her",
    "Program created to open up the door to the Source for The One",
    "A crew member of the hovercraft Caduceus and a member of the Resistance",
    "The Commander of all Zion defense forces",
    "Senior member of the Zion Council",
    "The One",
    "A computer programmer and a hacker who has escaped from the Matrix",
    "One of the Agents, working together with Jones and Smith",
    "An Agent who was a cohort of Agents Brown and Smith",
    "The leader of the upgraded Agents in The Matrix Reloaded",
    "Agent who was a cohort of Johnson and Thompson",
    "Agent who was a cohort of Johnson and Jackson"];

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

    var userGuess = event.key;
    var fullWord = "";

    incorrectFlag = 1;
    alertText.textContent = "";
    guessesLeftText.textContent = guessesLeft;

    if (event.keyCode >= 65 && event.keyCode <= 90) {

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

            alertText.textContent = "You Guessed the Word ( " +fullWord +" ) right! Press ENTER Key to start a new game!";
            winsText.textContent = wins;
            currentText.textContent = "";
            guessesLeftText.textContent = "";
            guessesText.textContent = "";

            $(".alert").text("Press Escape to get a hint!!");           //Added this last second after we learned jquery ;)

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

            alertText.textContent = "I'm sorry but you failed to get the word right! Press ENTER Key to start a new game!";
            winsText.textContent = wins;
            currentText.textContent = "";
            guessesLeftText.textContent = "";
            guessesText.textContent = "";

            $(".alert").text("Press Escape to get a hint!!");           //Added this last second after we learned jquery ;)

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
    else if(event.keyCode === 27){
        $(".alert").text(hintText[index]);            //Added this last second after we learned jquery ;)
    }
    
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