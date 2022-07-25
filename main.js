const range = document.querySelector(".range");
const btn = document.querySelector(".btn");
range.addEventListener("input", rangeChange);
btn.addEventListener("click", yearSelect);
let currentValue = +range.value;
const modal = document.querySelector(".modal");
let modalShow = false;

function rangeChange() {
  document.querySelector(".btn_count").textContent = (+this.value).toFixed(0);
  currentValue = (+this.value).toFixed(0);
}

function yearSelect() {
  const goodChoice = 1693;
  const userChoice = Math.abs(currentValue - goodChoice);
  if (userChoice < 10) {
    setBtnColor(0);
    console.log("<10");
  } else if (userChoice < 20) {
    setBtnColor(1);
    console.log("<20");
  } else if (userChoice < 30) {
    setBtnColor(2);
    console.log("<30");
  } else {
    setBtnColor(3);
    console.log("else");
  }

  range.classList.add("testSystem");
  modal.classList.remove("hidden");
  modalShow = true;
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

window.addEventListener("click", (e) => {
  if (modalShow && !e.target.classList.contains("modal")) {
    e.stopPropagation();
    return false;
  } else {
    modal.classList.add("hidden");
    modalShow = false;
  }
});

window.ontouchend = (e) => {
  e.preventDefault();
};
