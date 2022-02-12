// Generate a random number.
var maxNumber = 20;
var correctNumber = Math.floor(Math.random() * maxNumber) + 1;

// Variable to track if the user have guessed the number.
var guessIsWrong = true;

// Instruction text for the user.
var instruction = "Guess on a number between 1 and " + maxNumber + "): ";

while (guessIsWrong) {
    // Get a guess from the user.
    var guessString = prompt(instruction);
    var guess = parseInt(guessString, 10);
    
    // Evaluate the number that the user guessed.
    if (guess === correctNumber) {
        guessIsWrong = false;
    } else if (guess > correctNumber) {
        instruction = " Guess was to high, guess again: ";
    } else {
        instruction = "Guess was to low, guess again: ";
    }
}

instruction =
    "Congratulations you guessed " +
    correctNumber +
    ", which is the correct number!";
alert(instruction);
