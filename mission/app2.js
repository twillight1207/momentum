const rangeInput = document.querySelector("#range input");
const guessForm = document.querySelector(".guess");
const guessInput = guessForm.querySelector("#guess-number");
const hiddenMessage = document.querySelector("#message");
const numberMessage = hiddenMessage.querySelector("#number-message");
const winMessage = hiddenMessage.querySelector("#won-lost-message");

const HIDDEN_CLASSNAME = "hidden";

function reLoad() {
  localStorage.clear();
  hiddenMessage.classList.add(HIDDEN_CLASSNAME);
}

function randomNumberGenerate(max) {
  return Math.floor(Math.random() * (max + 1));
}

function wonLost(guessNum, randomNum) {
  if (guessNum === randomNum) {
    winMessage.innerText = "You won!";
  } else {
    winMessage.innerText = "You lost!";
  }
}

function getResults(num1, num2) {
  const randomNum = randomNumberGenerate(num2);
  numberMessage.innerText = `You chose: ${num1}, the machine chose: ${randomNum}`;
  wonLost(num1, randomNum);
}

function handleSubmit(event) {
  event.preventDefault();
  hiddenMessage.classList.remove(HIDDEN_CLASSNAME);
  const guessNum = parseInt(guessInput.value, 10);
  const rangeNum = parseInt(rangeInput.value, 10);
  getResults(guessNum, rangeNum);
  localStorage.setItem("rangeNum", rangeNum);
  localStorage.setItem("guessNum", guessNum);
}

function repeatSubmit(event) {
  event.preventDefault();
  const guessNum = parseInt(guessInput.value, 10);
  getResults(guessNum, savedRangeNum);
}

window.addEventListener("load", reLoad);

const savedRangeNum = localStorage.getItem("rangeNum");

if (savedRangeNum === null) {
  guessForm.addEventListener("submit", handleSubmit);
} else {
  guessForm.addEventListener("submit", repeatSubmit);
}
