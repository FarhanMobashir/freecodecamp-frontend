// (function () {
// todo Variables to be used

// * play and reset
const play = document.querySelector(".play");
const reset = document.querySelector(".reset-btn");

// * timer label
const timerLabel = document.querySelector("#timer-label");

// * session
const sessionPlus = document.querySelector("#session-increment");
const sessionMinus = document.querySelector("#session-decrement");
const sessionLength = document.querySelector("#session-length");

// * Break
const breakPlus = document.querySelector("#break-increment");
const breakMinus = document.querySelector("#break-decrement");
const breakLength = document.querySelector("#break-length");

// * Minutes ans seconds
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// todo Event Listeners

play.addEventListener("click", startTimer); //? will play and pause the time
reset.addEventListener("click", resetTimer); //? will restart the timer
sessionPlus.addEventListener("click", incrementSessionLength); //?  will increment session length
sessionMinus.addEventListener("click", decrementSessionLength); //? will increment session length
breakPlus.addEventListener("click", incrementBreakLength); //? will decrement break length
breakMinus.addEventListener("click", decrementBreakLength); //? will decrement break length

//todo  animations
function anim1() {
  var animation1 = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.querySelector(".animation1"), // required
    path: "./play.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: true,
  });
}

function anim2() {
  var animation2 = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.querySelector(".animation2"), // required
    path: "./break.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: true,
  });
}

// todo Fuctionss

// variables
let minuteValue = sessionLength.innerHTML;
let initialMinute = 25;
let initialbreak = 5;
let secondsValue = 60;
let isStarted = false;
let isPlaying = false;
let breaktime = false;
let firstClick = true;
let secondTimer;
let breakTimer;
let blinkTimerHide;
let blinkTimerShow;

function startTimer() {
  isStarted = true;
  if (!breaktime) {
    if (firstClick) {
      minuteValue--;
      minutes.innerHTML = minuteValue;
      firstClick = false;
    }
    if (isPlaying === false) {
      isPlaying = true;
      setTimeout(() => {
        timerLabel.innerHTML = "Started";
      }, 10);

      // ? timers
      play.innerHTML = "Pause";
      secondTimer = setInterval(() => {
        animation1 = null;
        secondsValue--;
        if (secondsValue >= 0) {
          seconds.innerHTML = secondsValue;
          if (minuteValue === 0 && secondsValue === 0) {
            console.log(secondsValue);
            resetBreak();
            minuteValue = breakLength.innerHTML;
            play.innerHTML = "Break";
            breakTime();
          }
          if (secondsValue < 10) {
            seconds.innerHTML = "0" + secondsValue;
          }
          if (secondsValue === 0) {
            minuteValue--;
            minutes.innerHTML = minuteValue;
            secondsValue = 60;
          }
          if (minuteValue < 10) {
            minutes.innerHTML = "0" + minuteValue;
          }
        }
      }, 1000);
    } else {
      isPlaying = false;
      setTimeout(() => {
        timerLabel.innerHTML = "Paused";
      }, 10);
      play.innerHTML = "Play";
      // ? clear intervals
      clearInterval(secondTimer);
    }
  }
}

function resetTimer() {
  isStarted = false;
  firstClick = true;
  secondsValue = 60;
  minutes.style.color = "#585855";
  seconds.style.color = "#585855";
  clearInterval(secondTimer);
  clearInterval(breakTimer);
  clearInterval(blinkTimerHide);
  clearInterval(blinkTimerShow);
  minutes.style.opacity = 1;
  seconds.style.opacity = 1;
  timerLabel.innerHTML = "Session";
  play.innerHTML = "Play";
  minutes.innerHTML = initialMinute;
  sessionLength.innerHTML = initialMinute;
  minuteValue = sessionLength.innerHTML;
  breakLength.innerHTML = initialbreak;
  isPlaying = false;
  breaktime = false;
  seconds.innerHTML = "00";
}

function resetBreak() {
  secondsValue = 60;
  minutes.style.color = "#585855";
  seconds.style.color = "#585855";
  clearInterval(secondTimer);
  clearInterval(breakTimer);
  minutes.innerHTML = breakLength.innerHTML;
  seconds.innerHTML = "00";
  setTimeout(() => {
    timerLabel.innerHTML = "It's Break";
  }, 400);
}

function breakTime() {
  minutes.style.color = "red";
  seconds.style.color = "red";
  minuteValue = breakLength.innerHTML - 1;
  breaktime = true;
  secondsValue = 60;
  breakTimer = setInterval(() => {
    secondsValue--;

    if (secondsValue >= 0) {
      seconds.innerHTML = secondsValue;
      if (minuteValue === 0 && secondsValue === 0) {
        resetTimer();
        minuteValue = sessionLength.innerHTML;
      }
      if (secondsValue < 10) {
        seconds.innerHTML = "0" + secondsValue;
      }
      if (secondsValue === 0) {
        minuteValue--;
        minutes.innerHTML = minuteValue;
        secondsValue = 60;
      }
    }

    if (minuteValue < 10) {
      minutes.innerHTML = "0" + minuteValue;
    }
    if (minuteValue < 1 && secondsValue <= 10) {
      document.querySelector(".beep").play();
    }
  }, 1000);
}

// ?  increment - decrement
function incrementSessionLength() {
  if (sessionLength.innerHTML >= 1) {
    if (!isStarted) {
      sessionLength.innerHTML++;
      minutes.innerHTML++;
      minuteValue++;
      if (sessionLength.innerHTML < 10) {
        minutes.innerHTML = "0" + minutes.innerHTML;
      }
    }
  }
}

function decrementSessionLength() {
  if (!isStarted) {
    if (sessionLength.innerHTML > 2) {
      sessionLength.innerHTML--;
      minutes.innerHTML--;
      minuteValue--;
      if (sessionLength.innerHTML < 10) {
        minutes.innerHTML = "0" + minutes.innerHTML;
      }
    }
  }
}

function incrementBreakLength() {
  if (!isStarted) {
    if (breakLength.innerHTML >= 1) {
      breakLength.innerHTML++;
    }
  }
}

function decrementBreakLength() {
  if (!isStarted) {
    if (breakLength.innerHTML > 1) {
      breakLength.innerHTML--;
    }
  }
}
// })();
