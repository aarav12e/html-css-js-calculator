let display = document.getElementById('display');

let firstValue = "";
let secondValue = "";
let operator = "";
let isSecond = false;

function appendNumber(num) {
    if (!isSecond){
        firstValue += num;
        display.value = firstValue;
    }else{
        secondValue += num;
        display.value = secondValue;
        display.value = firstValue + " " + operator + " " + secondValue;
    }
}

function appendOperator(op) {
    if (firstValue === "") return;
    operator = op;
    isSecond = true;
    display.value = firstValue + " " + operator ;
}
function calculate() {
    if( firstValue === "" || secondValue === "" || operator === "") return;

    let a = parseFloat(firstValue);
    let b = parseFloat(secondValue);
    let result;

    switch(operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result  = b !== 0 ? a / b : "Error"; break;
        case "%": result = a % b; break;
    }
    display.value = result;
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
    if (isSecond) {
        secondValue = secondValue.slice(0, -1);
        display.value = firstValue + " " + operator + " " + secondValue;
    }else if( secondValue !== ""){
        secondValue = secondValue.slice(0, -1);
        display.value = firstValue + " " + operator + " " + secondValue;

    }else {
        isSecond = false;
        display.value = firstValue;
    }
}






