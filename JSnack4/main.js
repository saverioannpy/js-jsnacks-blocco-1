/* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.*/

let array = []; //array utilizzato per memorizzare gli Input
let sum = 0; //variabile utilizzata per la somma

for(let i=0; sum<50; i++){ //come condizione di entrata nel ciclo utilizzo direttamente la variabile sum
    array.push(parseInt(prompt('Inserisci un numero')));
    console.log("input: " + array[i]);
    sum = sum + array[i];
    console.log("somma degli input: " + sum);
}
console.log("I numero inseriti sono: " + array);
console.log("Somma totale: " + sum);
alert("La somma raggiunta è: " + sum );
    
    