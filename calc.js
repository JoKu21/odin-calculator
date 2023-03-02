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
let a = 0;
let b = 0;
let operator = '';
let operatorHelp = '';

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

function result(){
    console.log(a);
    console.log(b);
    console.log(helpVar);
    console.log(operator);
}

function operate(sign) {
    if(a == 0){
       a = Number(displayOutput.textContent);
       operator = sign;
       operatorHelp = operator;
       displayOutput.textContent = '';
       //return a;
    } else {
        operator = operatorHelp;
        b = Number(displayOutput.textContent);
        switch(operator) {
            case '+':
                helpVar = sum(a,b);
                displayOutput.textContent = '';
                displayOutput.textContent = helpVar;
                a = helpVar;
                b = 0;
                operatorHelp = sign;
                break;

            case '-':
                helpVar = sub(a,b)
                displayOutput.textContent = '';
                displayOutput.textContent = helpVar;
                a = helpVar;
                b = 0;
                operatorHelp = sign;
                break;

            case '*':
                helpVar = multi(a,b)
                displayOutput.textContent = '';
                displayOutput.textContent = helpVar;
                a = helpVar;
                b = 0;
                operatorHelp = sign;
                break;

            case'/':
                helpVar = div(a,b)
                displayOutput.textContent = '';
                displayOutput.textContent = helpVar;
                a = helpVar;
                b = 0;
                operatorHelp = sign;
                break;

            default:
                displayOutput.textContent = ''; 
        }
        
    }
}

function addSign(num) {
    if(helpVar == '') {
        let x = displayOutput.textContent;
        x += num;
        return displayOutput.textContent = x;
    } else {
        displayOutput.textContent = '';
        helpVar = '';
        addSign(num);
    }
}

function removeSign() {
    let y = displayOutput.textContent.toString();
    let help = y.slice(0,y.length-1);
    return displayOutput.textContent = Number(help);
}

function clear() {
    a = 0;
    b = 0;
    displayOutput.textContent = '';
    operator = '';
    helpVar = '';
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

buttonBack.addEventListener('click',() => {removeSign();});
buttonClear.addEventListener('click',() => {clear();});
buttonResult.addEventListener('click',() => {result();});

buttonSum.addEventListener('click',() => {
    if(operator == ''){
        operate('+');
    } else {
        operator = '+';
        operate(operator);
    }}
);

buttonSub.addEventListener('click',() => {
    if(operator == ''){
        operate('-');
    } else {
        operator = '-';
        operate(operator);
    }}
);

buttonMulti.addEventListener('click',() => {
    if(operator == ''){
        operate('*');
    } else {
        operator = '*';
        operate(operator);
    }}
);

buttonDiv.addEventListener('click',() => {
    if(operator == ''){
        operate('/');
    } else {
        operator = '/';
        operate(operator);
    }}
);

