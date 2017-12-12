var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guess = 9;
var guessLeft = 9;
var guessLetters = [];
var letterstoguess = null;

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

var guessLeftupdate = function() {
  document.queryselector('#guessLefthtml').innerHTML = "Guesses left: " + guessLeft;
};

var GuessLetterupdate = function () {
  this.letterstoguess = this.computerChoice[Math.floor(Math.random() * this.computerChoice.length)];
};


