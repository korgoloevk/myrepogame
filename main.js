const range = document.querySelector(".range");
const btn = document.querySelector(".btn");
const btnCount = document.querySelector(".btn_count");
let currentValue = +range.value;
const modal = document.querySelector(".modal");
const background = document.querySelector(".background");
let modalShow = false;
let currentScene = 1;
let currentFlagHeight = 8;
const info = {
  answers: {},
  counts: {},
};

range.addEventListener("input", rangeChange);

btn.addEventListener("click", () => {
  if (currentScene >= 9) {
    return false;
  }
  getInfo();
  yearSelect("gradient" + currentScene);
  changeFlagHeight();
});

//закрываем модальное окно при клике

modal.addEventListener("click", modals);

//устанавливаем значение в кнопку

function rangeChange() {
  btnCount.textContent = (+this.value).toFixed(0);
  currentValue = (+this.value).toFixed(0);
}

//устанавливаем цвет кнопки, градиент слайдерренжа, запускаем модалку

function yearSelect(style) {
  const colorArrayNum = calculateRange(currentValue, gameProp);
  setBtnColor(colorArrayNum);
  range.classList.add(style);
  modalWork();
}

//цвета для кнопку

const colors = [
  "rgba(78, 189, 74, 0.719)",
  "rgba(177, 189, 74, 0.719)",
  "rgba(189, 126, 74, 0.733)",
  "rgba(189, 74, 74, 0.733)",
];

//устанавливаем цвем кнопки

function setBtnColor(num) {
  btn.style.backgroundColor = colors[num];
}

//работа модалки

function modalWork() {
  modal.classList.remove("hidden");
  background.classList.remove("hidden");

  document.querySelector(".modalmsg").textContent =
    gameProp[currentScene].message;
  document.querySelector(".answerModal").textContent =
    gameProp[currentScene].rightСhoice;
  modalShow = true;
}

//на основе выбранного года вычисляем близость к верному ответу и на его основе выдаем значение от наиболее близкого -- 0 до наиболее дальнего -- 4

function calculateRange(userChoice, props) {
  const goodChoice = props[currentScene].rightСhoice;
  const min = props[currentScene].rangeMin;
  const max = props[currentScene].rangeMax;
  const difference = max - min;
  const value = Math.abs(goodChoice - userChoice);
  if (value <= difference * 0.1) {
    return 0;
  } else if (value <= difference * 0.3) {
    return 1;
  } else if (value <= difference * 0.4) {
    return 2;
  } else {
    return 3;
  }
}

//меняем вопросы

function changeScene(props, scene = 1) {
  range.setAttribute("max", props[scene].rangeMax);
  range.setAttribute("min", props[scene].rangeMin);
  range.value =
    (props[scene].rangeMax - props[scene].rangeMin) / 2 + props[scene].rangeMin;
  btnCount.textContent = range.value;
  currentValue = +range.value;
  range.classList.remove("gradient" + (scene - 1));

  // document.querySelector(".flagImage").src = props[scene].imageSrc;
  document.querySelector(".setImg").innerHTML = "";
  document.querySelector(".setImg").append(props[scene].image);
  setInterval(setFlagSize, 10);
}

//собираем текущую информацию для отправки в базу

function getInfo() {
  info.answers[currentScene] = Math.abs(
    +currentValue - gameProp[currentScene].rightСhoice
  );
  const count = calculateRange(currentValue, gameProp);
  info.counts[currentScene] = count;
  // console.log(info);
}

//поведение модального окна
function modals() {
  if (currentScene >= 8) {
    getInfoOnServer(info);
    return false;
  }
  if (this.classList.contains("modal") && modalShow) {
    this.classList.add("hidden");
    background.classList.add("hidden");
    modalShow = false;
    currentScene++;
    changeScene(gameProp, currentScene);
    btn.style.backgroundColor = "rgba(80, 80, 80, 0.719)";
  }
}

function setFlagSize() {
  const flag = document.querySelector(".flagBlock");
  const game = document.querySelector(".game");
  const question = document.querySelector(".question");
  flag.style.height = game.offsetHeight - question.offsetHeight - 10 + "px";
}

// function setFlagSize() {
//   const flag = document.querySelector(".flagBlock");
//   const flagImage = document.querySelector(".setImg");
//   const question = document.querySelector(".question");
//   flag.style.height = flagImage.offsetHeight + "px";
//   modal.style.width = document.querySelector(".setImg").offsetWidth + "px";
// }

setFlagSize();

window.addEventListener("resize", setFlagSize);

function changeFlagHeight() {
  document.querySelector(".flag").style.bottom = currentFlagHeight + 10 + "%";
  currentFlagHeight += 11;
}

function getResult(obj) {
  const countsArray = Object.values(obj.counts);
  const answersArray = Object.values(obj.answers);
  const countsResult = countsArray.reduce((a, b) => {
    return a + b;
  }, 0);
  const answersResult = answersArray.reduce((a, b) => {
    return a + b;
  }, 0);
  // return { counts: countsResult, answers: answersResult };
  if (countsResult > 0) {
    return "" + countsResult + "" + answersResult;
  } else {
    return "" + answersResult;
  }
}

function getInfoOnServer(info) {
  const counts = getResult(info);
  const data = new FormData();
  data.set("count", counts);

  fetch("handler.php", {
    method: "POST",
    body: data,
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const res = data.count.toFixed(2);
      console.log(`Ты справился лучше, чем ${res}% участников`);
    });
}


