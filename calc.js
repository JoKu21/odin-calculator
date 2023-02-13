//Declare output-variable (initial)
const outputInitial = 0;

//Declare output-variable (result)
const outputResult = 0;

//Declare array-variable as operator help variable
const helpVariable = ['0'];

//Declare variables
let a = 1;
let b = 1;

//add-function
function sum(a,b,outputInitial){
    if(outputInitial == '0') {
        outputInitial = document.getElementById('outputField').textContent;
        a = outputInitial;
        outputInitial = 0;
        return outputField.textContent = '0';
    } else {
        b = document.getElementById('outputField').textContent;
        let addVar = a + b;
        return console.log(addVar);
    }
    /*let text = document.getElementById('outputField').textContent;
    return console.log(text);*/
    //return a + b;
}

//subtract-function
function sub(a,b){
    return a - b;
}

//multiply-function
function multi(a,b){
    return a * b;
}

//divide-function
function div(a,b){
    if(b != 0) {
        return a / b;
    } else {
        return 'ERROR';
    }
}

//clear-function
function clear() {
    outputInitial = 0;
    outputResult = 0;
    a = 0;
    b = 0;
    helpVariable.length = 0;
    helpVariable.push(0);
    outputField.textContent = helpVariable;
}

//back-function
function back(a) {
    return a.pop();
}

//result-function

//Test
console.log(sum(a,b));
console.log(sub(a,b));
console.log(multi(a,b));
console.log(div(a,b));

//function operate -> takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(varOld) {
    varOld = Number(helpVariable[0]);
    console.log(varOld);
};

//declare numberButtons
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button0 = document.getElementById('button0');
const buttonComma = document.getElementById('button-comma');

//declare operatorButtons
const buttonsum = document.getElementById('sum');
const buttonsub = document.getElementById('sub');
const buttonmulti = document.getElementById('multi');
const buttondiv = document.getElementById('div');

//declare correctButtons
const buttonclear = document.getElementById('button-clear');
const buttonback = document.getElementById('button-back');
const buttonresult = document.getElementById('result');

//declare outputField
const outputField = document.getElementById('outputField');

//testField
button0.addEventListener('click', () => {
    if(helpVariable[0] == 0) {
        helpVariable[0] = '0';
        outputField.textContent = helpVariable;
    } else {
        helpVariable.push(0);
        outputField.textContent = helpVariable.join('');
    }
    console.log(button0.textContent);
});
button1.addEventListener('click', () => {
    if(helpVariable[0] == 0) {
        helpVariable[0] = '1';
        outputField.textContent = helpVariable;
    } else {
        helpVariable.push(1);
        outputField.textContent = helpVariable.join('');
    }
    console.log(button1.textContent);
});
button2.addEventListener('click', () => {if(helpVariable[0] == 0) {
        helpVariable[0] = '2';
        outputField.textContent = helpVariable;
    } else {
        helpVariable.push(2);
        outputField.textContent = helpVariable.join('');
    }
    console.log(button2.textContent);
});
button3.addEventListener('click', () => {if(helpVariable[0] == 0) {
        helpVariable[0] = '3';
        outputField.textContent = helpVariable;
    } else {
        helpVariable.push(3);
        outputField.textContent = helpVariable.join('');
    }
    console.log(button3.textContent);
});
button4.addEventListener('click', () => {if(helpVariable[0] == 0) {
        helpVariable[0] = '4';
        outputField.textContent = helpVariable;
    } else {
        helpVariable.push(4);
        outputField.textContent = helpVariable.join('');
    }
    console.log(button4.textContent);
});
button5.addEventListener('click', () => {if(helpVariable[0] == 0) {
        helpVariable[0] = '5';
        outputField.textContent = helpVariable;
    } else {
        helpVariable.push(5);
        outputField.textContent = helpVariable.join('');
    }
    console.log(button5.textContent);
});
button6.addEventListener('click', () => {if(helpVariable[0] == 0) {
        helpVariable[0] = '6';
        outputField.textContent = helpVariable;
    } else {
        helpVariable.push(6);
        outputField.textContent = helpVariable.join('');
    }
    console.log(button6.textContent);
});
button7.addEventListener('click', () => {if(helpVariable[0] == 0) {
        helpVariable[0] = '7';
        outputField.textContent = helpVariable;
    } else {
        helpVariable.push(7);
        outputField.textContent = helpVariable.join('');
    }
    console.log(button7.textContent);
});
button8.addEventListener('click', () => {if(helpVariable[0] == 0) {
        helpVariable[0] = '8';
        outputField.textContent = helpVariable;
    } else {
        helpVariable.push(8);
        outputField.textContent = helpVariable.join('');
    }
    console.log(button8.textContent);
});
button9.addEventListener('click', () => {if(helpVariable[0] == 0) {
        helpVariable[0] = '9';
        outputField.textContent = helpVariable;
    } else {
        helpVariable.push(9);
        outputField.textContent = helpVariable.join('');
    }
    console.log(button9.textContent);
});
buttonback.addEventListener('click', () => {
    back(helpVariable);
    outputField.textContent = helpVariable.join('');
    console.log(buttonback.textContent);
});
buttonclear.addEventListener('click', () => {
    clear(a,b,outputInitial,outputResult,helpVariable);
    console.log(buttonclear.textContent);
});
buttonresult.addEventListener('click', () => {
    console.log(buttonresult.textContent);
});
buttonsum.addEventListener('click', () => {
    outputField.textContent = sum(a,b,outputInitial);
    console.log(buttonsum.textContent);
});
buttonsub.addEventListener('click', () => {
    outputField.textContent = sub(a,b);
    console.log(buttonsub.textContent);
});
buttonmulti.addEventListener('click', () => {
    outputField.textContent = multi(a,b);
    console.log(buttonmulti.textContent);
});
buttondiv.addEventListener('click', () => {
    outputField.textContent = div(a,b);
    console.log(buttondiv.textContent);
});
buttonComma.addEventListener('click', () => {
    console.log(buttonComma.textContent);
});