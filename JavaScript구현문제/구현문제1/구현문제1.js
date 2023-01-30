const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColors = "#";
  for (let i = 0; i < 6; i++) {
    hexColors += hex[getRandomNumber()];
  }
  //   console.log(hexColors);

  color.textContent = hexColors;
  document.body.style.backgroundColor = hexColors;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

// https://www.youtube.com/watch?v=3PHXvlpOkf4&t=421s

// 얘기할 것
//  getElementById , querySelector차이
//  Math.random 사용법
//  document.body... 이렇게 접근하는 것이 왜 가능할까?
//  hex란?
//
