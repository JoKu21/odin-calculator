//Declaration of Test-Variables
const a = 5;
const b = 10;

//add-function
function sum(a,b){
    return a + b;
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
    return a / b;
}

//Test
console.log(sum(a,b));
console.log(sub(a,b));
console.log(multi(a,b));
console.log(div(a,b));

//function operate -> 

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
    console.log(button0.textContent);
});
button1.addEventListener('click', () => {
    console.log(button1.textContent);
});
button2.addEventListener('click', () => {
    console.log(button2.textContent);
});
button3.addEventListener('click', () => {
    console.log(button3.textContent);
});
button4.addEventListener('click', () => {
    console.log(button4.textContent);
});
button5.addEventListener('click', () => {
    console.log(button5.textContent);
});
button6.addEventListener('click', () => {
    console.log(button6.textContent);
});
button7.addEventListener('click', () => {
    console.log(button7.textContent);
});
button8.addEventListener('click', () => {
    console.log(button8.textContent);
});
button9.addEventListener('click', () => {
    console.log(button9.textContent);
});
buttonback.addEventListener('click', () => {
    console.log(buttonback.textContent);
});
buttonclear.addEventListener('click', () => {
    console.log(buttonclear.textContent);
});
buttonresult.addEventListener('click', () => {
    console.log(buttonresult.textContent);
});
buttonsum.addEventListener('click', () => {
    console.log(buttonsum.textContent);
});
buttonsub.addEventListener('click', () => {
    console.log(buttonsub.textContent);
});
buttonmulti.addEventListener('click', () => {
    console.log(buttonmulti.textContent);
});
buttondiv.addEventListener('click', () => {
    console.log(buttondiv.textContent);
});
buttonComma.addEventListener('click', () => {
    console.log(buttonComma.textContent);
});