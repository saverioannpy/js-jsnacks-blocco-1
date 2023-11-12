'use strict';

const parola1 = prompt("Inserisci la prima parola");//input prima parola
console.log("La prima parola inserita è: " + parola1);
const parola2 = prompt ("inserisci la seconda parola");//input seconda parola
console.log("La seconda parola inserita è: " + parola2);

if( parola1.length > parola2.length ){ //confronto lunghezza delle due parole tramite il metodo .lenght
    console.log("La parola più corta è: " + parola2);
    console.log("La parola più lunga è: " + parola1);
}else if( parola1.length > parola2.length ){
    console.log("La parola più corta è: " + parola1);
    console.log("La parola più lunga è: " + parola2);
}else{
    console.log("La due parole hanno la stessa lunghezza");
}

