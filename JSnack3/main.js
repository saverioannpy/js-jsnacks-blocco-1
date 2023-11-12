/* Chiedi all'utente per 10 volte di inserire un numero
stampa la somma di tutti i numeri inseriri*/
'use strict';

let sumNumers = 0; //dichiariamo la variabile number e la inizializziamo a 0 in quanto verrà sommata durante l'esecuzione del ciclo;
for( let i=0; i < 10 ;i++ ){  
    const number = parseInt(prompt('Inserisci un numero')); //viene chiesto all'utente di inserire un numero e viene salvato nella variabile number convertendoloa in tipo int;
    if(!isNaN(number)){
        console.log("Il numero inserito dall'utente è: " + number); //viene visualizzato al log il numero inserito dall'utente.
        sumNumers = sumNumers + number; //il numero inserito dall'utente viene sommato alla variabile sumNumbers;
    }else{
        console.log("ERRORE: Non è stato inserito un valore numerico.")
    }
    
}
console.log("La somma dei numeri inseriti è  " + sumNumers);//viene visualizzata la somma di tutti i numeri insieriti: 