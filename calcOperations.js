let currentResult = 0;
let operatorClicked = false;
let operand1 = '';
let operandStack = [];
let operationSelected = "";
let operationStarted = false;

function updateOpe(value) {
    if(!operationStarted){
      currentResult = 0;
      document.getElementById("operationResult").innerHTML = '';
    }
    operand1 = operand1 + value;
    document.getElementById("result").innerHTML = operand1;
}

function updateOperation(operation) {
  if(!operationStarted && (operation === '+' || operation === '-' || operation === '/' )){
    currentResult = 0;
  } else if(!operationStarted){
    currentResult = 1;
  }

  if(!operationStarted && operand1 === ''){
    operand1 = 0;
  }

  operandStack.push(operand1);
  operationStarted = true;
  operationSelected = operation;
  operandStack.push(operation);

  currentResult = calculate(+operand1, currentResult, operationSelected);
  document.getElementById("result").innerHTML = currentResult;
  operand1 = '';
  showCalculatorOutput();
}

function showCalculatorOutput() {
  console.log(operandStack.join(' ')); 
  document.getElementById("operationResult").innerHTML = operandStack.join(' ');
}
// Called on press of '='
function showResult() {
  operandStack.push(operand1);  
  operandStack.push('=');
  showCalculatorOutput();
  currentResult = calculate(currentResult, +operand1, operationSelected);
  document.getElementById("result").innerHTML = currentResult;
  clearOps();
}

function clearResult() {
  document.getElementById("result").innerHTML = 0;
  document.getElementById("operationResult").innerHTML = 0;
  currentResult = 0;
  clearOps();
}

function clearOps(){
  operationSelected = '';
  operand1 = '';
  operandStack = [];
  operationStarted = false; 
}


function clearEntry() {
  console.log("clearEntry");
  document.getElementById("result").innerHTML = 0;
  operand1 = ''
}

function updateOperand(value) {
  console.log("updateOperand ", value, value != 0);
  let operand = +value;
  let currentValue = document.getElementById("result").innerHTML;
  if ((value != 0 || currentValue != 0) && !operatorClicked) {
    document.getElementById("result").innerHTML = currentValue + operand;
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


