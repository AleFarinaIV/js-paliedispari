# Pari e Dispari

L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

# Scomposizione del problema

Dichiarare una variabile
    assegnare a questa variabile il valore(pari o dispari) recuperato dalla prompt specifica

IF variabile === 'pari' || variabile === 'dispari'
    dichiarare una variabile
        asseganare a questa variabile il valore (numero) recuperato dalla prompt specifica
    IF numero >= 1 && <= 5
        dichiarare una variabile che restituisce pari o dispari dalla funzione dove vengono passati come parametri un numero randomico per il computer e il numero scelto in precedenza
        IF risultato della funzione ==== variabile (pari o dispari)
            messaggio positivo
        ELSE 
            messaggio negativo
    ELSE
        segnalare errore nella scelta del numero
ELSE
    segnalare errore nella scelta di pari o dispari

Creare una funzione dove vengono passati due parametri, la quale fa la somma dei due e controla che la somma sia pari o dispari
    