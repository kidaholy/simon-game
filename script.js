var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
function nextSequence () {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor(randomNumber);
  gamePattern.push(randomChosenColor);
}