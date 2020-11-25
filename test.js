let currentResult = 0;
let operatorClicked = false;
let operand1 = '';
let operandStack = [];
let operationSelected = '';
let operationStarted = false;
let previousKeyPress = '';
let previousOperation = '';

let counter = 0;
let calResult = [];
let opIndex = 0;

function calOpStack(){
  if(!operationStarted){
    calResult[counter] = +operand1;
  } else {
    opIndex += 2;
    counter++;
    
    calResult[counter] = calculate(parseFloat(calResult[counter-1]), parseFloat(operandStack[opIndex]), operandStack[opIndex-1]);
    console.log(calResult[counter-1], operandStack[opIndex], operandStack[opIndex-1], calResult[counter]);
  } 
  showCalculatorOutput();
  document.getElementById('result').innerHTML = calResult[counter];
}


function updateOpe(value) {
  previousKeyPress = "num";
  if (!operationStarted) {
    currentResult = 0;
    document.getElementById("operationResult").innerHTML = "";
  }
  operand1 = operand1 + value;
  document.getElementById("result").innerHTML = operand1;
}

function updateOperation(operation) {
  operationSelected = operation;
  // if (!operationStarted) {
  //   if (operation === "x" || operation === "/") {
  //     currentResult = 1;
  //   } else {
  //     currentResult = 0;
  //   }
  //   currentResult = calculate(+operand1, currentResult, operation);
  // } else {
  //   currentResult = calculate(currentResult, +operand1, operation);
  // }

  if (operand1 !== "") {
    operandStack.push(operand1);
  }

  if(previousKeyPress === 'operator'){
    operandStack.pop();
    operandStack.push(operation);
  } else{
    operandStack.push(operation);
  }

  // operandStack.push(operation);
  console.log('operandStack', operandStack);
  calOpStack();
  // console.log(
  //   currentResult,
  //   +operand1,
  //   operation,
  //   operationStarted,
  //   operandStack
  // );
  operand1 = "";
  operationStarted = true;
  previousKeyPress = 'operator';
}

// function updateOperation(operation) {

//   if(!operationStarted && (operation === '+' || operation === '-' )){
//     currentResult = 0;
//   } else if(!operationStarted){
//     currentResult = 1;
//   }

//   if(!operationStarted && operand1 === ''){
//     operand1 = 0;
//   }

//   if(operand1 !== ''){
//     operandStack.push(operand1);
//   }

//   if(previousKeyPress === 'operator'){
//     operandStack.pop();
//     operandStack.push(operation);
//     temp = currentResult;
//     currentResult = +operand1;
//     operand1 = temp;
//   } else{
//     operandStack.push(operation);
//   }

//   document.getElementById('opStack').innerHTML = operandStack;

//   operationSelected = operation;

//   if(previousKeyPress === 'num' && operationStarted && operation === '-'){
//     currentResult = calculate(currentResult, +operand1, operationSelected);
//   } else {
//     currentResult = calculate(+operand1, currentResult, operationSelected);
//   }

//   operationStarted = true;
//   document.getElementById("result").innerHTML = currentResult;
//   operand1 = '';
//   showCalculatorOutput();
//   previousKeyPress = 'operator';
// }

function showCalculatorOutput() {
  console.log(operandStack.join(" "));
  document.getElementById("operationResult").innerHTML = operandStack.join(" ");
}
// Called on press of '='
function showResult() {
  if (previousKeyPress === "operator") {
    operandStack.pop();
    operandStack.push(operand1);
    operandStack.push("=");
  } else {
    operandStack.push(operand1);
    operandStack.push("=");
  }

  showCalculatorOutput();
  previousKeyPress = "calculate";
  currentResult = calculate(currentResult, +operand1, operationSelected);

  console.log(
    currentResult,
    +operand1,
    operationSelected,
    operationStarted,
    operandStack
  );

  document.getElementById("result").innerHTML = currentResult;
  clearOps();
}

function clearResult() {
  document.getElementById("result").innerHTML = 0;
  document.getElementById("operationResult").innerHTML = 0;
  currentResult = 0;
  clearOps();
}

function clearOps() {
  operationSelected = "";
  operand1 = "";
  operandStack = [];
  operationStarted = false;
}

function clearEntry() {
  console.log("clearEntry");
  document.getElementById("result").innerHTML = 0;
  operand1 = "";
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
