const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput = document.querySelector("#second-number");
const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");
const resultText = document.querySelector("#result");

addButton.addEventListener("click", () => {
  if (firstNumberInput.value === "" || secondNumberInput.value === "") {
    resultText.textContent = "Please enter both numbers.";
    return;
  }
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);
  const sum = firstNumber + secondNumber;

  resultText.textContent = `Result: ${sum}`;
});

subtractButton.addEventListener("click", () => {
  if (firstNumberInput.value === "" || secondNumberInput.value === "") {
    resultText.textContent = "Please enter both numbers.";
    return;
  }

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  const difference = firstNumber - secondNumber;

  resultText.textContent = `Result: ${difference}`;
});

multiplyButton.addEventListener("click", () => {
  if (firstNumberInput.value === "" || secondNumberInput.value === "") {
    resultText.textContent = "Please enter both numbers.";
    return;
  }

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  const product = firstNumber * secondNumber;

  resultText.textContent = `Result: ${product}`;
});

divideButton.addEventListener("click", () => {
  if (firstNumberInput.value === "" || secondNumberInput.value === "") {
    resultText.textContent = "Please enter both numbers.";
    return;
  }

  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  if (secondNumber === 0) {
    resultText.textContent = "Cannot divide by zero.";
    return;
  }

  const quotient = firstNumber / secondNumber;

  resultText.textContent = `Result: ${quotient}`;
});
