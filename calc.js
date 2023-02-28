//button declaration
const button0 = document.getElementById('button0');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const buttonDot = document.getElementById('buttonDot');

const buttonSum = document.getElementById('sum');
const buttonSub = document.getElementById('sub');
const buttonMulti = document.getElementById('multi');
const buttonDiv = document.getElementById('div');

const buttonClear = document.getElementById('clear');
const buttonBack = document.getElementById('back');
const buttonResult = document.getElementById('result');

const displayOutput = document.getElementById('outputField');

//additional declaration
let helpVar = '';
let a = 5;
let b = 3
let operator = '';

//functions

function sum(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function multi(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}

function operate(a,b,operator) {
    switch(operator) {
        case '+':
            sum(a,b)
            break;

        case '-':
            sub(a,b)
            break;

        case '*':
            multi(a,b)
            break;

        case'/':
            div(a,b)
            break;

        default:
            return 'no legal operation' 
    }
}

function addSign(num) {
    let x = displayOutput.textContent;
    x += num;
    return displayOutput.textContent = x;
}

//Add functions to buttons
button0.addEventListener('click',() => {addSign('0');});
button1.addEventListener('click',() => {addSign('1');});
button2.addEventListener('click',() => {addSign('2');});
button3.addEventListener('click',() => {addSign('3');});
button4.addEventListener('click',() => {addSign('4');});
button5.addEventListener('click',() => {addSign('5');});
button6.addEventListener('click',() => {addSign('6');});
button7.addEventListener('click',() => {addSign('7');});
button8.addEventListener('click',() => {addSign('8');});
button9.addEventListener('click',() => {addSign('9');});
buttonDot.addEventListener('click',() => {addSign('.');});

