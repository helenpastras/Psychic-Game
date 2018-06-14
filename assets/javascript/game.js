// Define letters that can be used //
var alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
    
// Declare variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;

// Random computer guess
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)

// Update number of guesses left for the user 
var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};
var updateNextGuess = function() {
    this.userGuess = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
  };

  var updateGuessesSoFar = function() {
    // Display user guesses as letters separated by commas. 
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessesSoFar.join(', ');
  };

//guess count reset on correct guess
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessesSoFar = [];
    
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

    updateLetterToGuess();
    updateGuessesLeft();


    //Event listening for game play
document.onkeypress = function(event) {
    var userGuess = event.key;
        alert("Your Choice: " + userGuess);
// Conditions
if (guessesLeft > 0){    
    if(userGuess === computerChoice){
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        alert("You are in my head!!! " + "The Computer's Choice was: " + computerGuess);
        reset();
    }else {
        losses++;
        guesses--;
        console.log(losses)
        alert("You lost to the computer. " + " The Computer's Choice was: " + computerGuess);
}}else if(guessesLeft == 0){
        alert("Game Over! Zoltar gets your soul!")
    };
    
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("guessesleft").innerHTML = "Guesses left: " + guesses;
}
