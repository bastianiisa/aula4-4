const readlineSync = require('readline-sync');
let i = 0
while (readlineSync.question("Insira um número: " != 0)){
    console.log(i)
    i++
}






const frase = readlineSync.question("Insira um número: ");


console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);