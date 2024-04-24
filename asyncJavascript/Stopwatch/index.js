
let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

startButton = document.querySelector("#start");
stopButton = document.querySelector("#stop");
resetButton = document.querySelector("#reset");


function startTimer(){
  if(!isRunning){
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 100);
  }
}

function stopTimer(){
  if(isRunning){
    isRunning = false;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}

function updateTime() {
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

function updateDisplay() {
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hoursDisplay = hours > 0 ? String(hours).padStart(2, '0') + ':' : '';
  const minutesDisplay = (hours > 0 || minutes > 0) ? String(minutes).padStart(2, '0') + ':' : '';
  const secondsDisplay = String(seconds).padStart(2, '0');

  display = document.querySelector("#display");
  display.textContent = hoursDisplay + minutesDisplay + secondsDisplay;
}

startButton.addEventListener("click", startTimer )
stopButton.addEventListener("click", stopTimer )
resetButton.addEventListener("click", resetTimer )