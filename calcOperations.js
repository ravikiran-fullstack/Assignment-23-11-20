let operatorClicked = false;
let operand1 = '';
let operationStarted = false;
let previousKeyPress = '';
let previousKey = '';

let counter = 0;
let calResult = [];
let opIndex = 0;
let operandStack = [];

function pressKey(value){
  document.getElementById(value).classList.add('hold-mouse');
  if(previousKey !== ''){
    document.getElementById(previousKey).classList.remove('hold-mouse');
  }
  previousKey = value;
}

function calOpStack(){
  if(!operationStarted){
    calResult[counter] = +operand1;
  } else {
    opIndex += 2;
    counter++;
    calResult[counter] = calculate(parseFloat(calResult[counter-1]), parseFloat(operandStack[opIndex]), operandStack[opIndex-1]);
  } 
  showCalculatorOutput();
  document.getElementById('result').innerHTML = calResult[counter];
}

function updateOpe(value) {
  pressKey(value);
  previousKeyPress = "num";
  if (!operationStarted) {
    document.getElementById("operationResult").innerHTML = "";
  }
  operand1 = operand1 + value;
  document.getElementById("result").innerHTML = operand1;
}

function updateOperation(operation) {
  pressKey(operation);
  if (operand1 !== "") {
    operandStack.push(operand1);
  }

  if(previousKeyPress === 'operator'){
    operandStack.pop();
    operandStack.push(operation);
    showCalculatorOutput();
  } else{
    operandStack.push(operation);
    calOpStack();
  }
    
  operand1 = "";
  operationStarted = true;
  previousKeyPress = 'operator';
}

function showCalculatorOutput() {
  document.getElementById("operationResult").innerHTML = operandStack.join(" ");
}

// Called on press of '='
function showResult() {
  pressKey('=');
  if (previousKeyPress === "operator") {
    operandStack.pop();
    operandStack.push(operand1);
    operandStack.push("=");
    showCalculatorOutput();
    document.getElementById("result").innerHTML = calResult[counter];
  } else {
    operandStack.push(operand1);
    operandStack.push("=");
    calOpStack();
  }
  
  previousKeyPress = "calculate";

  document.getElementById("result").innerHTML = calResult[counter];
  clearOps();
}

function clearResult() {
  pressKey('clear');
  document.getElementById("result").innerHTML = 0;
  document.getElementById("operationResult").innerHTML = 0;
  clearOps();
}

function clearOps() {
  counter = 0;
  calResult = [];
  opIndex = 0;
  operandStack = [];
  operationStarted = false;
}

function clearEntry() {
  pressKey('ce');
  document.getElementById("result").innerHTML = 0;
  operand1 = "";
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
