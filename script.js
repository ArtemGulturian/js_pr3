"use strict";

let num = 50;

/*
while (num <= 55) {
    console.log(num);
    num++;
}*

do {
    console.log(num);
    num++;
}
while (num < 55);*

for (let i = 1; i < 10;  i++) {
    if(i === 6) {
        //break;
        continue;
    }
    console.log(i);
}*/

//--------------------

let result = '';
const lenght = 9;

for (let i = 1; i < lenght; i++) {
    for (let j = 0; j <i; j++){
        result += "*";
    }
    result += '\n';
}
console.log(result);