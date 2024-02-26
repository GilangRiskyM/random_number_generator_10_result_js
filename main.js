// Random Number Generator

const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");
const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const myLabel4 = document.getElementById("myLabel4");
const myLabel5 = document.getElementById("myLabel5");
const myLabel6 = document.getElementById("myLabel6");
const myLabel7 = document.getElementById("myLabel7");
const myLabel8 = document.getElementById("myLabel8");
const myLabel9 = document.getElementById("myLabel9");
const myLabel10 = document.getElementById("myLabel10");

let min;
let max;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;
let randomNum5;
let randomNum6;
let randomNum7;
let randomNum8;
let randomNum9;
let randomNum10;

myButton.onclick = function () {
  min = minInput.value;
  min = Number(min);
  max = maxInput.value;
  max = Number(max);
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  randomNum4 = Math.floor(Math.random() * max) + min;
  randomNum5 = Math.floor(Math.random() * max) + min;
  randomNum6 = Math.floor(Math.random() * max) + min;
  randomNum7 = Math.floor(Math.random() * max) + min;
  randomNum8 = Math.floor(Math.random() * max) + min;
  randomNum9 = Math.floor(Math.random() * max) + min;
  randomNum10 = Math.floor(Math.random() * max) + min;
  myLabel1.textContent = randomNum1;
  myLabel2.textContent = randomNum2;
  myLabel3.textContent = randomNum3;
  myLabel4.textContent = randomNum4;
  myLabel5.textContent = randomNum5;
  myLabel6.textContent = randomNum6;
  myLabel7.textContent = randomNum7;
  myLabel8.textContent = randomNum8;
  myLabel9.textContent = randomNum9;
  myLabel10.textContent = randomNum10;
};
