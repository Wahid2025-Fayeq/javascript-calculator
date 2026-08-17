const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput = document.querySelector("#second-number");
const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");
const resultText = document.querySelector("#result");

function inputsAreValid() {
  if (firstNumberInput.value === "" || secondNumberInput.value === "") {
    resultText.textContent = "Please enter both numbers.";
    return false;
  }
  return true;
}

function getNumbers() {
  return {
    firstNumber: Number(firstNumberInput.value),
    secondNumber: Number(secondNumberInput.value),
  };
}

addButton.addEventListener("click", () => {
  if (!inputsAreValid()) {
    return;
  }
  const { firstNumber, secondNumber } = getNumbers();
  const sum = firstNumber + secondNumber;

  resultText.textContent = `Result: ${sum}`;
});

subtractButton.addEventListener("click", () => {
  if (!inputsAreValid()) {
    return;
  }

  const { firstNumber, secondNumber } = getNumbers();
  const difference = firstNumber - secondNumber;

  resultText.textContent = `Result: ${difference}`;
});

multiplyButton.addEventListener("click", () => {
  if (!inputsAreValid()) {
    return;
  }

  const { firstNumber, secondNumber } = getNumbers();
  const product = firstNumber * secondNumber;

  resultText.textContent = `Result: ${product}`;
});

divideButton.addEventListener("click", () => {
  if (!inputsAreValid()) {
    return;
  }

  const { firstNumber, secondNumber } = getNumbers();

  if (secondNumber === 0) {
    resultText.textContent = "Cannot divide by zero.";
    return;
  }
  const quotient = firstNumber / secondNumber;
  resultText.textContent = `Result: ${quotient}`;
});
