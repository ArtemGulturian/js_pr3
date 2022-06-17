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
/*
let result = '';
const lenght = 9;

for (let i = 1; i < lenght; i++) {
    for (let j = 0; j <i; j++){
        result += "*";
    }
    result += '\n';
}
console.log(result);*/

first: for (let i = 0; i < 3; i++){
    console.log(`First Level: ${i}`);
    for (let j = 0; j < 3; j++){
        console.log(`Second Level: ${j}`);
        for (let k = 0; k < 3; k++){
            if (k === 2) continue /*break*/ first;
            console.log(`Third Level: ${k}`);
        }
    }
}