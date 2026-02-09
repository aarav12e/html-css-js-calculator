let display = document.getElementById("display");

let firstValue = "";
let secondValue = "";
let operator = "";
let isSecond = false; 

function appendNumber(num) {
  if (!isSecond) {
    firstValue += num;
    display.value = firstValue;
  } else {
    secondValue += num;
    display.value = firstValue + " " + operator + " " + secondValue;
  }
}

function appendOperator(op) {
  if (firstValue === "") return;

  operator = op;
  isSecond = true;
  display.value = firstValue + " " + operator;
}

function calculate() {
  if (firstValue === "" || secondValue === "") return;

  let a = parseFloat(firstValue);
  let b = parseFloat(secondValue);
  let result;

  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = b !== 0 ? a / b : "Error"; break;
    case "%": result = a % b; break;
  }

  display.value = result;

  // reset but keep result for next calculation
  firstValue = result.toString();
  secondValue = "";
  operator = "";
  isSecond = false;
}

function clearDisplay() {
  firstValue = "";
  secondValue = "";
  operator = "";
  isSecond = false;
  display.value = "";
}

function deleteLast() {
  if (!isSecond) {
    firstValue = firstValue.slice(0, -1);
    display.value = firstValue;
  } else if (secondValue !== "") {
    secondValue = secondValue.slice(0, -1);
    display.value = firstValue + " " + operator + " " + secondValue;
  } else {
    operator = "";
    isSecond = false;
    display.value = firstValue;
  }
}
