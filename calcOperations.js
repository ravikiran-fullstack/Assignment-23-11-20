let currentResult = 0;
let operatorClicked = false;
let operand1 = '';
let operandStack = [];
let operationSelected = "";
let operationStarted = false;
let previousKeyPress = '';
let previousKey = '';

function pressKey(value){
  document.getElementById(value).classList.add('hold-mouse');
  if(previousKey !== ''){
    document.getElementById(previousKey).classList.remove('hold-mouse');
  }
  previousKey = value;
}

function updateOpe(value) {
  previousKeyPress = 'num';
  pressKey(value);
  
  // document.getElementById(value).classList.remove('jiggle');
  // document.getElementById(value).classList.add('shrink');
  
    if(!operationStarted){
      currentResult = 0;
      document.getElementById("operationResult").innerHTML = '';
    }
    operand1 = operand1 + value;
    document.getElementById("result").innerHTML = operand1;
   
}

function updateOperation(operation) {
  pressKey(operation);
  if(!operationStarted && (operation === '+' || operation === '-' )){
    currentResult = 0;
  } else if(!operationStarted){
    currentResult = 1;
  }

  if(!operationStarted && operand1 === ''){
    operand1 = 0;
  }

  if(operand1 !== ''){
    operandStack.push(operand1);
  }

  if(previousKeyPress === 'operator'){
    operandStack.pop();
    operandStack.push(operation);
    temp = currentResult;
    currentResult = +operand1;
    operand1 = temp;
  } else{
    operandStack.push(operation);
  }

  operationSelected = operation;
  

  if(previousKeyPress === 'num' && operationStarted && operation === '-'){
    currentResult = calculate(currentResult, +operand1, operationSelected);
  } else {
    currentResult = calculate(+operand1, currentResult, operationSelected);
  }

  operationStarted = true;
  document.getElementById("result").innerHTML = currentResult;
  operand1 = '';
  showCalculatorOutput();
  previousKeyPress = 'operator';
}

function showCalculatorOutput() {
  console.log(operandStack.join(' ')); 
  document.getElementById("operationResult").innerHTML = operandStack.join(' ');
}
// Called on press of '='
function showResult() {
  pressKey('=');
  if(previousKeyPress === 'operator'){
    operandStack.pop();
    operandStack.push(operand1);  
    operandStack.push('=');
  } else{
    operandStack.push(operand1);  
    operandStack.push('=');
  }
  
  showCalculatorOutput();
  previousKeyPress = 'calculate';
  currentResult = calculate(currentResult, +operand1, operationSelected);
  document.getElementById("result").innerHTML = currentResult;
  clearOps();
}

function clearResult() {
  pressKey('clear');
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
  pressKey('ce');
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


