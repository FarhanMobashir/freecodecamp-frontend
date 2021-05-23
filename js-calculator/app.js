// result

let result = "";
let count = 0;
let output = result;
// elements
let clear = document.querySelector("#clear");
let preview = document.querySelector(".min-display");
let display = document.querySelector(".answer");

let button = document.querySelectorAll("button").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    setTimeout(() => {
      e.target.style.background = "cadetblue";
    }, 100);
    e.target.style.background = "blue";
  });
});

// console.log(result);
