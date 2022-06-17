"use strict";

//let num = 50;

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
console.log(result);*
/*
first: for (let i = 0; i < 3; i++){
    console.log(`First Level: ${i}`);
    for (let j = 0; j < 3; j++){
        console.log(`Second Level: ${j}`);
        for (let k = 0; k < 3; k++){
            if (k === 2) continue /*break* first;
            console.log(`Third Level: ${k}`);
        }
    }
}
//------------------
for (let i = 5; i < 11; i++){
    console.log(i);
}

for (let i = 20; i > 9; i--){
    if (i === 13) {break}
    console.log(i);
}

for (let i = 2; i < 11; i++){
    console.log(i);
    i +=1;
}

let i = 20;
while (i < 21){
    if (i===12){break;}
    console.log(i);
    i--;
}
//------------------

let j = 3;
while (j < 16){
    if (j === 16){break;}
    console.log(j);
    j+=2;
}*/
/*
const arrayOfNumbers = [];
let j = 5;
for (let i = 0; i <= 5; i++){
        arrayOfNumbers[i] = j;
        j++;
}
console.log(arrayOfNumbers);
*
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++){
            arrayOfNumbers[i - 5] = i;
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
*/


// Продвинутые задания на использование циклов

// Место для первой задачи

    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    // Пишем решение вот тут
    for (let i = 0; i < arr.length; i++){
        result[i] = arr[i];
    }
    //console.log(arr.length);
    console.log(result);
    // Не трогаем
    //return result;

// Место для второй задачи

        // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
        const data = [5, 10, 'Shopping', 20, 'Homework'];
    
        // Пишем решение вот тут
        for (let i = 0; i < data.length; i++){
            
            if (typeof(data[i])==='string'){
                data[i] = `${data[i]} - done`;
            } else
            if (typeof(data[i])==='number'){
                data[i] = data[i] * 2;
            }

        }
        console.log(data);

    //------------------------
// Место для третьей задачи

    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i=1; i <= data.length; i++){
        result[i - 1] = data[data.length - i]
    }
    console.log(result);
    // Не трогаем
    

    //----------------------

const lines = 10;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++){
        result += "  ";
    }
    for (let j = 0; j < 2 * i + 1; j++){
        result += " *";
        }
result += '\n';
}
console.log(result);