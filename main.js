const range = document.querySelector(".range");
const btn = document.querySelector(".btn");
const btnCount = document.querySelector(".btn_count");
let currentValue = +range.value;
const modal = document.querySelector(".modal");
const background = document.querySelector(".background");
let modalShow = false;
let currentScene = 1;

range.addEventListener("input", rangeChange);
btn.addEventListener("click", () => {
  yearSelect("gradient" + currentScene);
});

document.addEventListener("click", (e) => {
  if (modalShow && e.target.classList.contains("modal")) {
    modal.classList.add("hidden");
    background.classList.add("hidden");
    modalShow = false;
    currentScene++;
    changeScene(gameProp, currentScene);
    btn.style.backgroundColor = "rgba(80, 80, 80, 0.719)";
  }
});

function rangeChange() {
  btnCount.textContent = (+this.value).toFixed(0);
  currentValue = (+this.value).toFixed(0);
}

function yearSelect(style) {
  const colorArrayNum = calculateRange(currentValue, gameProp);
  console.log(colorArrayNum);
  setBtnColor(colorArrayNum);

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
  document.querySelector(".modalMessage").textContent =
    gameProp[currentScene].message;
  modalShow = true;
}

function calculateRange(userChoice, props) {
  const goodChoice = props[currentScene].rightСhoice;
  const min = props[currentScene].rangeMin;
  const max = props[currentScene].rangeMax;
  const difference = max - min;
  const value = Math.abs(goodChoice - userChoice);
  if (value <= difference * 0.1) {
    return 0;
  } else if (value <= difference * 0.2) {
    return 1;
  } else if (value <= difference * 0.3) {
    return 2;
  } else {
    return 3;
  }
}

function changeScene(props, scene = 1) {
  range.setAttribute("max", props[scene].rangeMax);
  range.setAttribute("min", props[scene].rangeMin);
  range.value =
    (props[scene].rangeMax - props[scene].rangeMin) / 2 + props[scene].rangeMin;
  btnCount.textContent = range.value;
  range.classList.remove("gradient" + (scene - 1));

  // document.querySelector(".flagImage").src = props[scene].imageSrc;
  document.querySelector(".setImg").innerHTML = "";
  document.querySelector(".setImg").append(props[scene].image);
}
