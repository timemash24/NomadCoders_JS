const maxNumForm = document.querySelector("#maxNum-form");
const maxNumInput = document.querySelector("#maxNum-form input");
const guessNumForm = document.querySelector("#guessNum-form");
const guessNumInput = document.querySelector("#guessNum-form input");
const resultNum = document.querySelector("#resultNum");
const resultWin = document.querySelector("#resultWin");

function onGuessNumSubmit(event) {
  event.preventDefault();
  const maxNum = maxNumInput.value;
  const guessNum = guessNumInput.value;
  const randomNum = generateNumber(maxNum);
  resultNum.innerText = `You chose: ${guessNum}, the machine chose ${randomNum}.`;
  if (+randomNum === +guessNum) {
    resultWin.innerText = "You won!";
  } else {
    resultWin.innerText = "You lost!";
  }
}

function generateNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

maxNumForm.addEventListener("submit", onGuessNumSubmit);
guessNumForm.addEventListener("submit", onGuessNumSubmit);
