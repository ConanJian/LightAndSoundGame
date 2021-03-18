//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;

function startGame()
{
  //initialize game variable
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden"); //we are adding the class .hidden to id="startBtn"
  document.getElementById("stopBtn").classList.remove("hidden");
  //document means the DOM as a js object
}
function stopGame()
{
  gamePlaying = false;
  document.getElementId("startBtn").classList.remove("hidden");
  document.getElementId("stopBtn").classList.add("hidden");
}
