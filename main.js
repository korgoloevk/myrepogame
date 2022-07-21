const body = document.querySelector("body");
const range = document.querySelector(".range");
const gameSection = document.querySelector(".gameSection");

range.style.width = gameSection.clientHeight - 60 + "px";
body.style.height = window.onresize = () => {
  range.style.width = gameSection.clientHeight - 60 + "px";
};

console.log(gameSection.clientHeight);
