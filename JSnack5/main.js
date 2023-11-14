'use strict';

//Fai inserire un numero, che chiameremo N, all’utente.
//Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.


const n = parseInt(prompt("Inserisci un numero"));
const array = [];
let i = 0;
let y = 0; 
let number = 0;

while( y < n){
    while(i < 10){
        number = Math.floor(Math.random() * (100 - 1) + 1);
        array[i] = number;
        i++; 
    }
    console.log("L'array generato numero" + i+1);
    console.log("è" + array);
}

