const range = document.querySelector(".range");
const btn = document.querySelector(".btn");
let currentValue = +range.value;
const modal = document.querySelector(".modal");
const background = document.querySelector(".background");
let modalShow = false;

range.addEventListener("input", rangeChange);
btn.addEventListener("click", () => {
  yearSelect("gradient1");
});

document.addEventListener("click", (e) => {
  if (modalShow && !e.target.classList.contains("modal")) {
    return false;
  } else {
    modal.classList.add("hidden");
    background.classList.add("hidden");
    modalShow = false;
  }
});

function rangeChange() {
  document.querySelector(".btn_count").textContent = (+this.value).toFixed(0);
  currentValue = (+this.value).toFixed(0);
}

function yearSelect(style) {
  const goodChoice = 1693;
  const userChoice = Math.abs(currentValue - goodChoice);
  //   calculateRange(userChoice);
  if (userChoice < 5) {
    setBtnColor(0);
    console.log("<5");
  } else if (userChoice < 30) {
    setBtnColor(1);
    console.log("<20");
  } else if (userChoice < 50) {
    setBtnColor(2);
    console.log("<30");
  } else {
    setBtnColor(3);
    console.log("else");
  }

  range.classList.add(style);
  modalWork();
}

const colors = [
  "rgba(78, 189, 74, 0.719)",
  "rgba(177, 189, 74, 0.719)",
  "rgba(189, 126, 74, 0.733)",
  "rgba(189, 74, 74, 0.733)",
];

function setBtnColor(num) {
  btn.style.backgroundColor = colors[num];
}

function modalWork() {
  modal.classList.remove("hidden");
  background.classList.remove("hidden");
  modalShow = true;
}

function calculateRange(userChoice) {
  const goodChoice = 1693;
  const min = range.getAttribute("min");
  const max = range.getAttribute("max");
  const differenct = max - min;
}
