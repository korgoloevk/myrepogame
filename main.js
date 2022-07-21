const body = document.querySelector("body");
const range = document.querySelector(".range");
const gameSection = document.querySelector(".gameSection");
const rangeBlock = document.querySelector(".rangeBlock");
const count = document.querySelector(".count");
count.textContent = "Счёт: " + (+range.value).toFixed(0);

range.style.width = rangeBlock.clientHeight - 60 + "px";
window.onresize = () => {
  range.style.width = rangeBlock.clientHeight - 60 + "px";
};

range.addEventListener("input", () => {
  count.textContent = "Счёт: " + (+range.value).toFixed(0);
});

console.log(gameSection.clientHeight);

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
