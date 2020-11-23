let currentResult = 0;
let operand = 0;
let hasUpdated = false;
let operatorClicked = false;
let operand1 = 0;
let operand2 = 0;

function showResult(){
  document.getElementById('result').innerHTML = currentResult;
}

function clearResult(){
  console.log('clear');
  document.getElementById('result').innerHTML = 0;
  currentResult = 0;
}

function clearEntry(){
  console.log('clearEntry');
  document.getElementById('result').innerHTML = 0;
}

function updateOperand(value){
  hasUpdated = true;
  console.log('updateOperand ',value, value != 0);
  operand = +value;
  let currentValue = document.getElementById('result').innerHTML;
  if((value != 0 || currentValue != 0) && !operatorClicked){
    document.getElementById('result').innerHTML = currentValue + operand;  
    // currentResult = +(currentValue + operand);
  } else{
    document.getElementById('result').innerHTML = operand;
    operatorClicked = false;
  }
}

function add(){
  operatorClicked = true;
  let result = document.getElementById('result').innerHTML;
  if(hasUpdated){
    currentResult += +result;
  }
  document.getElementById('result').innerHTML = currentResult;
  console.log('add',currentResult);
  hasUpdated = false;
}

function subtract(){
  operatorClicked = true;
  let result = document.getElementById('result').innerHTML;
  if(hasUpdated){
    currentResult -= +result;
  }
  document.getElementById('result').innerHTML = currentResult;
  console.log('add',currentResult);
  hasUpdated = false;
}

function multiply(){
  let result = document.getElementById('result').innerHTML;
  currentResult *= +result;
  document.getElementById('result').innerHTML = currentResult;
  console.log('multiply',currentResult);
}

function divide(){
  let result = document.getElementById('result').innerHTML;
  currentResult /= +result;
  document.getElementById('result').innerHTML = currentResult;
  console.log('divide',currentResult);
}

function findReminder(){
  let result = document.getElementById('result').innerHTML;
  currentResult %= +result;
  document.getElementById('result').innerHTML = currentResult;
  console.log('findReminder',currentResult);
}