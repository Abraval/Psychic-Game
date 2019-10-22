//create an array of letters of alphabet
//get a computer to pick a random letter
//get user guess (make sure user guess=letter)
//every time user makes a guess number of guesses left goes down by 1,number of current guesses goes up by 1
//compare choices
//if same wins go up by 1
//if different losses go up by 1

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);
function setGame() {
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);
  guesses = 10;

}


document.onkeyup = function (event) {

  var directionsText = document.getElementById("directions-text");
  var userChoiceText = document.getElementById("userchoice-text");
  // var computerChoiceText = document.getElementById("computerchoice-text");
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var guessesText = document.getElementById("guesses-left");

  var userGuess = event.key;
  // console.log(userGuess);

  // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  // console.log(computerGuess);


  if ((userGuess >= 'a' && userGuess <= 'z') || (userGuess >= 'A' && userGuess <= 'Z') && (guesses >= 0)) {

    if ((userGuess === computerGuess)) {
      wins++;
      setGame();
      // computerChoiceText.textContent = "The computer chose: " + computerGuess;
    }
    else {
      losses++;
      guesses--;
      
      // computerChoiceText.textContent = "The computer chose: " + computerGuess;
    }

    directionsText.textContent = "";
    userChoiceText.textContent = "You chose: " + userGuess;
    
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses left: " + guesses;

    if (guesses === -1) {
      alert("No more guesses! Start Over")

      guesses = 10;
      wins = 0;
      losses = 0;
      directionsText.textContent = "Press any letter key to start playing!";
      userChoiceText.textContent = "";
      // computerChoiceText.textContent = "";
      winsText.textContent = "";
      lossesText.textContent = "";
      guessesText.textContent = "";

    }

  }

  else {
    alert("Pick a letter!");

  }



};