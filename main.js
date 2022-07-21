const body = document.querySelector("body");
const range = document.querySelector(".range");
const gameSection = document.querySelector(".gameSection");

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

range.style.width = gameSection.clientHeight - 60 + "px";

window.onresize = () => {
  range.style.width = gameSection.clientHeight - 60 + "px";
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

console.log(gameSection.clientHeight);
