let currentResult = 0;
let operand = 0;
let hasUpdated = false;
let operatorClicked = false;
let operand1 = null;
let operand2 = null;
let operandStack = [];
let operationSelected = "";

let operationStarted = false;

function updateOpe(value) {
  if (!operationStarted) {
    //document.getElementById("operandStack").innerHTML = +value;
    operand1 = +value;
    operandStack.push(value);
  } else {
    operand2 = +value;
    operandStack.push(value);
    // document.getElementById('operand1').innerHTML = `${operand1} ${operationSelected} ${operand2}`;
  }
  showCalculatorOutput();
}

function updateOperation(operation) {
  if(operand1 === null ){
    operand1 = 0;
    operandStack.push(operand1);
  }
  operationStarted = true;
  operationSelected = operation;
  operandStack.push(operation);
  //document.getElementById("operandStack").innerHTML = `${operand1} ${operation}`;

  if (operand1 != null && operand2 != null && operationStarted) {
    let result = calculate(operand1, operand2, operationSelected);
    document.getElementById("result").innerHTML = "Result:" + result;
    operand1 = result;
    currentResult = result;
  }
  showCalculatorOutput();
}

function showCalculatorOutput() {
  console.log(operandStack.join(" ")); 
  document.getElementById("operationResult").innerHTML = operandStack.join(" ");
}

function showResult() {
  currentResult = calculate(operand1, operand2, operationSelected);
  document.getElementById("result").innerHTML = currentResult;
  operationSelected = "";
  operand1 = null;
  operand2 = null;
  operandStack = [];
  operationStarted = false; 
}

function updateOperand(value) {
  hasUpdated = true;
  console.log("updateOperand ", value, value != 0);
  operand = +value;
  let currentValue = document.getElementById("result").innerHTML;
  if ((value != 0 || currentValue != 0) && !operatorClicked) {
    document.getElementById("result").innerHTML = currentValue + operand;
    // currentResult = +(currentValue + operand);
  } else {
    document.getElementById("result").innerHTML = operand;
    operatorClicked = false;
  }
}

function calculate(_operand1, _operand2, _operator) {
  let output;
  switch (_operator) {
    case "+":
      output = _operand1 + _operand2;
      break;
    case "-":
      output = _operand1 - _operand2;
      break;
    case "x":
      output = _operand1 * _operand2;
      break;
    case "/":
      output = _operand1 / _operand2;
      break;
    case "%":
      output = _operand1 % _operand2;
      break;
  }
  return output;
}

function clearResult() {
  console.log("clear");
  document.getElementById("result").innerHTML = 0;
  document.getElementById("operationResult").innerHTML = 0;
  currentResult = 0;
  operandStack = [];
  operand1 = null;
  operand2 = null;
  operation = "";
}

function clearEntry() {
  console.log("clearEntry");
  document.getElementById("result").innerHTML = 0;
}
