(function () {
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

  // todo Fuctionss
  let minuteValue = sessionLength.innerHTML;

  console.log(minuteValue);
  let secondsValue = 5;
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
      // breaktime = true;
      if (isPlaying === false) {
        isPlaying = true;
        setTimeout(() => {
          timerLabel.innerHTML = "Session started...";
        }, 10);

        // ? timers
        play.innerHTML = "Pause";
        document.querySelector(".main-container").style.boxShadow =
          "0px 0px 20px green";

        secondTimer = setInterval(() => {
          secondsValue--;
          if (secondsValue >= 0) {
            seconds.innerHTML = secondsValue;
            if (secondsValue < 10) {
              seconds.innerHTML = "0" + secondsValue;
            }
          } else {
            --minuteValue;
            minutes.innerHTML = minuteValue;
            secondsValue = 5;

            if (minuteValue === 0) {
              console.log(secondsValue);
              resetBreak();
              minuteValue = breakLength.innerHTML;
              play.innerHTML = "Break Time";
              breakTime();
            }
          }
        }, 1000);
      } else {
        isPlaying = false;
        setTimeout(() => {
          timerLabel.innerHTML = "Session paused...";
        }, 10);
        play.innerHTML = "Play";
        document.querySelector(".main-container").style.boxShadow =
          "0px 0px 20px yellow";

        // ? clear intervals
        clearInterval(secondTimer);
      }
    }
  }

  function resetTimer() {
    isStarted = false;
    firstClick = true;
    secondsValue = 5;
    minutes.style.color = "white";
    seconds.style.color = "white";
    clearInterval(secondTimer);
    clearInterval(breakTimer);
    clearInterval(blinkTimerHide);
    clearInterval(blinkTimerShow);
    minutes.style.opacity = 1;
    seconds.style.opacity = 1;

    timerLabel.innerHTML = "Session";
    play.innerHTML = "Play";
    minutes.innerHTML = sessionLength.innerHTML;
    minuteValue = sessionLength.innerHTML;
    isPlaying = false;
    breaktime = false;
    seconds.innerHTML = "00";
    document.querySelector(".main-container").style.boxShadow =
      "0px 0px 20px grey";
  }

  function resetBreak() {
    secondsValue = 5;
    minutes.style.color = "white";
    seconds.style.color = "white";
    clearInterval(secondTimer);
    clearInterval(breakTimer);
    minutes.innerHTML = breakLength.innerHTML;
    seconds.innerHTML = "00";
    document.querySelector(".main-container").style.boxShadow =
      "0px 0px 20px grey";
    setTimeout(() => {
      timerLabel.innerHTML = "Have some rest...";
    }, 400);
  }

  function breakTime() {
    minutes.style.color = "red";
    seconds.style.color = "red";
    minuteValue = breakLength.innerHTML;
    breaktime = true;
    secondsValue = 5;
    blinkTimerHide = setInterval(() => {
      seconds.style.opacity = 0;
      minutes.style.opacity = 0;
    }, 1000);
    blinkTimerShow = setInterval(() => {
      seconds.style.opacity = 1;
      minutes.style.opacity = 1;
    }, 400);
    breakTimer = setInterval(() => {
      secondsValue--;
      if (secondsValue >= 0) {
        seconds.innerHTML = secondsValue;
        if (secondsValue < 10) {
          seconds.innerHTML = "0" + secondsValue;
        }
      } else {
        secondsValue = 5;
        minuteValue--;
        minutes.innerHTML = minuteValue;
      }
      if (minuteValue === 0) {
        resetTimer();
        minuteValue = sessionLength.innerHTML;
        // clearInterval(breakTimer);
      }
    }, 1000);
  }

  // ?  increment - decrement
  function incrementSessionLength() {
    if (sessionLength.innerHTML >= 1) {
      if (!isStarted) {
        // if (minutes.innerHTML < 10) {
        //   minutes.innerHTML = "0" + minuteValue;
        // }
        sessionLength.innerHTML++;
        minutes.innerHTML++;
        minuteValue++;
      }
    }
  }

  function decrementSessionLength() {
    if (!isStarted) {
      if (sessionLength.innerHTML > 2) {
        sessionLength.innerHTML--;
        minutes.innerHTML--;
        minuteValue--;
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
})();
