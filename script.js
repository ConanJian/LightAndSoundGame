//Global Constants
var clueHoldTime = 500; //how long to hold the clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 5, 4, 3, 2, 1, 2, 4];
var progress = 0;
var guessCounter = 0;
var gamePlaying = false;
var mistake = 0;

var tonePlaying = false;
var volume = 0.2; //between 0.0 - 1.0

function randomPattern(){
  for(let i=0; i < pattern.length; i++){
    let r = Math.ceil(5*Math.random());
    pattern[i] = r;
    console.log(r);
  }
}


function startGame() {
  //initialize game variable
  clueHoldTime = 500;
  progress = 0;
  gamePlaying = true;
  randomPattern();
  document.getElementById("startBtn").classList.add("hidden"); //we are adding the class .hidden to id="startBtn"
  document.getElementById("stopBtn").classList.remove("hidden");
  //document means the DOM as a js object
  playClueSequence();
}
function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  clueHoldTime -= 50;
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    // does setTimeout actually delay the running of code for the time period of delay?
    // I think it does, otherwise I can break the application
    // Also, the application won't stop playing the sound when I press stop(it will stop the playing of the next sound)
    // this is because when the sound is playing the true/false condition has already been checked
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Winner!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  /* I have a log which serves as proof that I didn't just copy the code and make a few changes
  because I will admit my code looks exactly like the sample code. It can be found in proof.txt as is
  basically me writing out my thought process of the code. The documentation was added after I finished making
  the required functionality took me 20mins and it isn't included in my total time*/

  if (btn == pattern[guessCounter]) {
    //guessCounter contains # guessed right
    //and is also the index to the correct answer
    if (guessCounter == progress) {
      //progress+1 tells us what stage to play(stage 1 = progress 0 = play 1 light/sound)
      //here #guessedRight = guessCounter+1 and progress+1 is how many light/sound have been played
      //so guessCounter+1 == progress+1 => guessCounter == progress then we have played the entire stage
      if (progress == pattern.length - 1) {
        //this checks if we have played the last stage
        winGame(); //if played and guessed correct the last stage we win
      } else {
        progress++; //otherwise move on to the next stage
        playClueSequence();
      }
    } else {
      guessCounter++; //update guessCounter if guess right and it isn't time for next stage
    }
  } else {
    mistake++;
    if(mistake == 1){
      alert(mistake+" mistake made.");
    }
    else{
      alert(mistake+" mistakes made."); //literally the grammar was bothering me
    }
    if(mistake == 3){
      loseGame();//stops the game
      mistake = 0;
    }
    if(gamePlaying){
      clueHoldTime +=50; //otherwise when your 2 mistakes in it gets really fast
      playClueSequence();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 434,
  5: 466.2
  //4: 466.2
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
