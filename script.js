var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
});
function nextSequence () {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor(randomNumber);
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeout(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}