const body = document.querySelector("body");
const range = document.querySelector(".range");
const gameSection = document.querySelector(".gameSection");
const rangeBlock = document.querySelector(".rangeBlock");
const count = document.querySelector(".count");

range.style.width = rangeBlock.clientHeight - 60 + "px";
window.onresize = () => {
  range.style.width = rangeBlock.clientHeight - 60 + "px";
};

range.addEventListener("change", () => {
  count.textContent = "Счёт " + range.value;
});

console.log(gameSection.clientHeight);
