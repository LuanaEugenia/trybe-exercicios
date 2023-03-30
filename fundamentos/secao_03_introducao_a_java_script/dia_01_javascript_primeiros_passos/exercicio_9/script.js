let numero1 = 55;
let numero2 = 100;
let numero3 = 15;
let maior;

if(numero1 > numero2 && numero1 > numero3) {
    maior = numero1;
} else if(numero2 > numero1 && numero2 > numero3) {
    maior = numero2;
} else {
    maior = numero3;
}

console.log(maior);