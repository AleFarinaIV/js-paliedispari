/*Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma*/

function isPalindrome(str) {

    let strVoid = ('');
    let len = str.length
    for (let i = len - 1; i >= 0; i--) {
        console.log(str[i])
        strVoid += str[i]
    }
}