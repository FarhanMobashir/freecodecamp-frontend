// ? Elemets
const MinDisplay = document.querySelector(".min-display");
const answer = document.querySelector(".answer");
const buttons = document.querySelectorAll(".buttons");
console.log(MinDisplay, buttons, answer);

// ? Event Listeners
buttons.forEach((btn) => btn.addEventListener("click", main));

// ? Functions
let result = "";
let mainResult = "";
let equalClicked = false;
function isOperator(n) {
  if (n === "+" || n === "-" || n === "/" || n === "*") {
    return true;
  } else {
    return false;
  }
}

// update the mini diplay for operators
function updateMinDisplayForOperators(e) {
  // let curr = e.target.innerText;
  if (result.length < 30) {
    if (
      isOperator(result[result.length - 1]) === false &&
      result.length !== 0
    ) {
      if (
        e.target.innerText === "+" ||
        e.target.innerText === "-" ||
        e.target.innerText === "*" ||
        e.target.innerText === "/"
      ) {
        result += e.target.innerText;
        console.log(result);
        console.log(isOperator(result[result.length - 1]));
        MinDisplay.innerText = result;
      }
    }
  }
}

// update the mini diplay for numbers
function updateMinDisplayForNumber(e) {
  if (result.length < 30) {
    if (
      e.target.innerText !== "AC" &&
      e.target.innerText !== "*" &&
      e.target.innerText !== "+" &&
      e.target.innerText !== "-" &&
      e.target.innerText !== "/" &&
      e.target.innerText !== "." &&
      e.target.innerText !== "="
    ) {
      if (equalClicked) {
        result = "";
        MinDisplay.innerText = "=>";
        answer.innerText = "";
        equalClicked = false;
      }
      result += e.target.innerText;
      console.log(result);
      MinDisplay.innerText = result;
    }
  }
}

// on clicking AC it reset the results
function clear(e) {
  if (e.target.innerText === "AC") {
    result = "";
    MinDisplay.innerText = "=>";
    answer.innerText = "";
  }
}

// on clicking equal it displays the result on display
function getResult(e) {
  if (e.target.innerText === "=") {
    mainResult = eval(result);
    answer.innerText = mainResult;
    equalClicked = true;
  }
}

// works after first click
function restartAfterEqualCLick(e) {
  if (answer.innertext !== "") {
    result = "";
    answer.innerText = result;
  }
}

// main function
function main(e) {
  setTimeout(() => {
    e.target.style.background = "cadetblue";
  }, 100);
  e.target.style.background = "dodgerblue";
  clear(e);
  updateMinDisplayForNumber(e);
  updateMinDisplayForOperators(e);
  if (mainResult !== "") {
    clear(e);
    console.log("Hello");
  }

  getResult(e);
}
