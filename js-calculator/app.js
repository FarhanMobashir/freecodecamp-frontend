// ? Elemets
const MinDisplay = document.querySelector(".min-display");
const answer = document.querySelector(".answer");
const buttons = document.querySelectorAll(".buttons");
console.log(MinDisplay, buttons, answer);

// ? Event Listeners
buttons.forEach((btn) => btn.addEventListener("click", main));

// ? Functions
let result = "";
function updateMinDisplay(e) {
  if (result.length < 30) {
    if (
      e.target.innerText !== "AC" &&
      e.target.innerText !== "." &&
      e.target.innerText !== "="
    ) {
      result += e.target.innerText;
      console.log(result);
      MinDisplay.innerText = result;
    }
  }
}

function clear(e) {
  if (e.target.innerText === "AC") {
    result = "";
    MinDisplay.innerText = "=>";
    answer.innerText = result;
  }
}

function getResult(e) {
  if (e.target.innerText === "=") {
    let mainResult = eval(result);
    answer.innerText = mainResult;
    result = "";
  }
}

function restartAfterEqualCLick(e) {
  if (answer.innertext !== "") {
    result = "";
    answer.innerText = result;
  }
}

function main(e) {
  setTimeout(() => {
    e.target.style.background = "cadetblue";
  }, 100);
  e.target.style.background = "dodgerblue";
  updateMinDisplay(e);
  clear(e);
  getResult(e);
}
