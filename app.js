
const operationResult = document.createElement('p');
operationResult.setAttribute('id', 'operationResult');
const operationResultText = document.createTextNode('0');
operationResult.append(operationResultText);
const resultText = document.createTextNode('0');
const result = document.createElement('p');
result.setAttribute('id', 'result');
result.setAttribute('contenteditable', 'true');
result.append(resultText);

const tCalcResult = document.createElement('div');
tCalcResult.classList.add('tCalcResult');
tCalcResult.append(operationResult, result);

///Row 1

const mc = document.createElement('div');
mc.setAttribute('class', 'tCalcCell tCalcOperator');
mc.setAttribute('id', 'mc');
const mcText = document.createTextNode('MC');
mc.append(mcText);

const mPlus = document.createElement('div');
mPlus.setAttribute('class', 'tCalcCell tCalcOperator');
mPlus.setAttribute('id', 'mPlus');
const mPlusText = document.createTextNode('M+');
mPlus.append(mPlusText);


const mMinus = document.createElement('div');
mMinus.setAttribute('class', 'tCalcCell tCalcOperator');
mMinus.setAttribute('id', 'mMinus');
const mMinusText = document.createTextNode('M-');
mMinus.append(mMinusText);


const backSlash = document.createElement('div');
backSlash.setAttribute('class', 'tCalcCell tCalcOperator');
//backSlash.setAttribute('onclick', '');
backSlash.setAttribute('id', 'backSlash');
const backSlashText = document.createTextNode('<-');
backSlash.append(backSlashText);

const tCalcRow1 = document.createElement('div');
tCalcRow1.classList.add('tCalcRow');
tCalcRow1.append(mc, mPlus, mMinus, backSlash);



///Row 2

const percentage = document.createElement('div');
percentage.setAttribute('class', 'tCalcCell tCalcOperator');
percentage.setAttribute('onclick', "")
percentage.setAttribute('id', '%');
const percentageText = document.createTextNode('%');
percentage.append(percentageText);

const ce = document.createElement('div');
ce.setAttribute('class', 'tCalcCell tCalcOperator');
ce.setAttribute('onclick', "clearEntry()")
ce.setAttribute('id', 'ce');
const ceText = document.createTextNode('CE');
ce.append(ceText);

const clear = document.createElement('div');
clear.setAttribute('class', 'tCalcCell tCalcOperator');
clear.setAttribute('onclick', "clearResult()")
clear.setAttribute('id', 'clear');
const clearText = document.createTextNode('C');
clear.append(clearText);

const divide = document.createElement('div');
divide.setAttribute('class', 'tCalcCell tCalcOperator');
divide.setAttribute('onclick', "updateOperation('/')");
divide.setAttribute('id', '/');
const divideText = document.createTextNode('/');
divide.append(divideText);

const tCalcRow2 = document.createElement('div');
tCalcRow2.classList.add('tCalcRow');
tCalcRow2.append(percentage, ce, clear, divide);

///Row 3
const num7 = document.createElement('div');
num7.setAttribute('class', 'tCalcCell');
num7.setAttribute('onclick', "updateOpe('7')")
num7.setAttribute('id', '7');
const num7Text = document.createTextNode('7');
num7.append(num7Text);

const num8 = document.createElement('div');
num8.setAttribute('class', 'tCalcCell');
num8.setAttribute('onclick', "updateOpe('8')")
num8.setAttribute('id', '8');
const num8Text = document.createTextNode('8');
num8.append(num8Text);

const num9 = document.createElement('div');
num9.setAttribute('class', 'tCalcCell');
num9.setAttribute('onclick', "updateOpe('9')")
num9.setAttribute('id', '9');
const num9Text = document.createTextNode('9');
num9.append(num9Text);

const multiply = document.createElement('div');
multiply.setAttribute('class', 'tCalcCell tCalcOperator');
multiply.setAttribute('onclick', "updateOperation('x')");
multiply.setAttribute('id', 'x');
const multiplyText = document.createTextNode('x');
multiply.append(multiplyText);

const tCalcRow3 = document.createElement('div');
tCalcRow3.classList.add('tCalcRow');
tCalcRow3.append(num7, num8, num9, multiply);

///Row 4
const num4 = document.createElement('div');
num4.setAttribute('class', 'tCalcCell');
num4.setAttribute('onclick', "updateOpe('4')")
num4.setAttribute('id', '4');
const num4Text = document.createTextNode('4');
num4.append(num4Text);

const num5 = document.createElement('div');
num5.setAttribute('class', 'tCalcCell');
num5.setAttribute('onclick', "updateOpe('5')")
num5.setAttribute('id', '5');
const num5Text = document.createTextNode('5');
num5.append(num5Text);

const num6 = document.createElement('div');
num6.setAttribute('class', 'tCalcCell');
num6.setAttribute('onclick', "updateOpe('6')")
num6.setAttribute('id', '6');
const num6Text = document.createTextNode('6');
num6.append(num6Text);

const minus = document.createElement('div');
minus.setAttribute('class', 'tCalcCell tCalcOperator');
minus.setAttribute('onclick', "updateOperation('-')");
minus.setAttribute('id', '-');
const minusText = document.createTextNode('-');
minus.append(minusText);

const tCalcRow4 = document.createElement('div');
tCalcRow4.classList.add('tCalcRow');
tCalcRow4.append(num4, num5, num6, minus);
///Row 5

const num1 = document.createElement('div');
num1.setAttribute('class', 'tCalcCell');
num1.setAttribute('onclick', "updateOpe('1')")
num1.setAttribute('id', '1');
const num1Text = document.createTextNode('1');
num1.append(num1Text);

const num2 = document.createElement('div');
num2.setAttribute('class', 'tCalcCell');
num2.setAttribute('onclick', "updateOpe('2')")
num2.setAttribute('id', '2');
const num2Text = document.createTextNode('2');
num2.append(num2Text);

const num3 = document.createElement('div');
num3.setAttribute('class', 'tCalcCell');
num3.setAttribute('onclick', "updateOpe('3')")
num3.setAttribute('id', '3');
const num3Text = document.createTextNode('3');
num3.append(num3Text);

const add = document.createElement('div');
add.setAttribute('class', 'tCalcCell tCalcOperator');
add.setAttribute('onclick', "updateOperation('+')");
add.setAttribute('id', '+');
const addText = document.createTextNode('+');
add.append(addText);

const tCalcRow5 = document.createElement('div');
tCalcRow5.classList.add('tCalcRow');
tCalcRow5.append(num1, num2, num3, add);

///Row 6

const opp = document.createElement('div');
opp.setAttribute('class', 'tCalcCell');
opp.setAttribute('onclick', "")
opp.setAttribute('id', '+/-');
const oppText = document.createTextNode('+/-');
opp.append(oppText);

const num0 = document.createElement('div');
num0.setAttribute('class', 'tCalcCell');
num0.setAttribute('onclick', "updateOpe('0')")
num0.setAttribute('id', '0');
const num0Text = document.createTextNode('0');
num0.append(num0Text);

const dot = document.createElement('div');
dot.setAttribute('class', 'tCalcCell');
dot.setAttribute('onclick', "updateOpe('.')")
dot.setAttribute('id', ".")
const dotText = document.createTextNode('.');
dot.append(dotText);

const equals = document.createElement('div');
equals.setAttribute('class', 'tCalcCell tCalcOperator');
equals.setAttribute('onclick', "showResult()");
equals.setAttribute('id', "=")
const equalsText = document.createTextNode('=');
equals.append(equalsText);

const tCalcRow6 = document.createElement('div');
tCalcRow6.classList.add('tCalcRow');
tCalcRow6.append(opp, num0, dot, equals);

//////////////
const tCalcOps = document.createElement('div');
tCalcOps.classList.add('tCalcOps');
tCalcOps.append(tCalcRow1);
tCalcOps.append(tCalcRow2);
tCalcOps.append(tCalcRow3);
tCalcOps.append(tCalcRow4);
tCalcOps.append(tCalcRow5);
tCalcOps.append(tCalcRow6);

const tCalc = document.createElement('div');
tCalc.classList.add('tCalc');
tCalc.append(tCalcResult, tCalcOps);

const column = document.createElement('div');
column.classList.add('col-md-6', 'col-12', 'offset-md-3');
column.append(tCalc);

const row = document.createElement('div');
row.classList.add('row');
row.append(column);

const container = document.createElement('div');
container.classList.add('container', 'mt-5');
container.append(row);

document.body.append(container);