const body = document.querySelector("body");
const range = document.querySelector(".range");
const gameSection = document.querySelector(".gameSection");
const rangeBlock = document.querySelector(".rangeBlock");
const count = document.querySelector(".count");
count.textContent = "Счёт: " + (+range.value).toFixed(0);

range.style.width = rangeBlock.clientHeight - 60 + "px";

range.addEventListener("input", () => {
  count.textContent = "Счёт: " + (+range.value).toFixed(0);
});

console.log(gameSection.clientHeight);

let vh = window.innerHeight * 0.01;
window.addEventListener("resize", () => {
  range.style.width = rangeBlock.clientHeight - 60 + "px";
});
