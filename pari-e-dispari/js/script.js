const evenOrOdd = prompt ('Scegli pari o dispari')
console.log("hai scelto: " , evenOrOdd)

if ((evenOrOdd.toLowerCase() === "pari") || (evenOrOdd.toLowerCase() === "dispari")) {
    const number = Number(prompt ('Inserisci un numero tra 1 e 5'));
    if (number >= 1 && number <= 5) {
        let result = sumAndResult(Math.floor(Math.random() * 5 + 1), number)
        console.log("La somma dei due numeri è: " , result)
        if(result === evenOrOdd) {
            console.log("hai vinto tu!!")
         } else {
            console.log("hai perso!!")
         }
    } else {
        console.log('Devi inserire un numero tra 1 e 5')
    }
}else {
    console.log('Devi inserire "pari" o "dispari"')
}