const gameProp = {
  1: {
    rangeMin: 1600,
    rangeMax: 1700,
    imageSrc: "img/1.png",
    rightСhoice: 1693,
    backgroundGradient:
      "linear-gradient(90deg, rgba(255, 57, 57, 1) 0%, rgba(205, 196, 51, 1) 84%, rgba(38, 251, 30, 1) 91%, rgba(205, 196, 51, 1) 97%)",
    message:
      "Первый в истории России и утвержденный самим Петром I флаг страны.",
  },
  2: {
    rangeMin: 1700,
    rangeMax: 1800,
    imageSrc: "img/2.png",
    rightСhoice: 1721,
    backgroundGradient:
      "linear-gradient(90deg, rgba(255, 57, 57, 1) 0%, rgba(205, 196, 51, 1) 84%, rgba(38, 251, 30, 1) 91%, rgba(205, 196, 51, 1) 97%)",
    message:
      "После победы в Северной войне настроения сменяются, триколог Петр обзывает “иностранным” и склоняется с желтому цвету. Часто вид знамени и детами под себя меняли новые правители.",
  },
  3: {
    rangeMin: 1800,
    rangeMax: 1900,
    imageSrc: "img/3.png",
    rightСhoice: 1858,
    backgroundGradient:
      "linear-gradient(90deg, rgba(255, 57, 57, 1) 0%, rgba(205, 196, 51, 1) 84%, rgba(38, 251, 30, 1) 91%, rgba(205, 196, 51, 1) 97%)",
    message:
      "Новый флаг, новые смыслы: Чёрный — орёл, жёлтый — поле, белый — защитник Георгий Победоносец.",
  },
  4: {
    rangeMin: 1900,
    rangeMax: 1950,
    imageSrc: "img/4.png",
    rightСhoice: 1914,
    backgroundGradient:
      "linear-gradient(90deg, rgba(255, 57, 57, 1) 0%, rgba(205, 196, 51, 1) 84%, rgba(38, 251, 30, 1) 91%, rgba(205, 196, 51, 1) 97%)",
    message:
      "Новый символ времён Первой Мировой войны означал единение царя (двухглавый орёл) и народа (триколор).",
  },
  5: {
    rangeMin: 1910,
    rangeMax: 1950,
    imageSrc: "img/5.png",
    rightСhoice: 1918,
    backgroundGradient:
      "linear-gradient(90deg, rgba(255, 57, 57, 1) 0%, rgba(205, 196, 51, 1) 84%, rgba(38, 251, 30, 1) 91%, rgba(205, 196, 51, 1) 97%)",
    message: "Флаг нового государства, тогда ещё называвшегося РСФСР.",
  },
  6: {
    rangeMin: 1920,
    rangeMax: 1980,
    imageSrc: "img/6.png",
    rightСhoice: 1922,
    backgroundGradient:
      "linear-gradient(90deg, rgba(255, 57, 57, 1) 0%, rgba(205, 196, 51, 1) 84%, rgba(38, 251, 30, 1) 91%, rgba(205, 196, 51, 1) 97%)",
    message:
      "Расположение и размер звезд на флаге СССР менялись, но символика оставалась неизменной.",
  },
  7: {
    rangeMin: 1990,
    rangeMax: 2000,
    imageSrc: "img/7.png",
    rightСhoice: 1991,
    backgroundGradient:
      "linear-gradient(90deg, rgba(255, 57, 57, 1) 0%, rgba(205, 196, 51, 1) 84%, rgba(38, 251, 30, 1) 91%, rgba(205, 196, 51, 1) 97%)",
    message:
      "На то, чтобы концепт нового флага укрепился в обществе и Конституции ушёл год. В 1990-м он казался оммажем на царские времена, но уже в 1991-м был прописал официально в главном документа страны. ",
  },
  8: {
    rangeMin: 1993,
    rangeMax: 2001,
    imageSrc: "img/8.png",
    rightСhoice: 1993,
    backgroundGradient:
      "linear-gradient(90deg, rgba(255, 57, 57, 1) 0%, rgba(205, 196, 51, 1) 84%, rgba(38, 251, 30, 1) 91%, rgba(205, 196, 51, 1) 97%)",
    message:
      "В 1993-м президент Ельцин подписал указ, меняющий сразу три вещи: соотношение сторон флага (предыдущий был уже) и два оттенка цвета. ",
  },
};

function createImages(obj) {
  for (const key in obj) {
    const image = new Image();
    image.src = obj[key].imageSrc;
    obj[key].image = image;
  }
}

createImages(gameProp);
