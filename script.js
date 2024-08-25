var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
});
function nextSequence () {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor(randomNumber);
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeout(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}

function playSound (name) {
  
}