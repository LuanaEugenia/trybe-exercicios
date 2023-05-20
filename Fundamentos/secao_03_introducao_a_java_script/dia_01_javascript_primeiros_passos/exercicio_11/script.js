let lado1 = 10;
let lado2 = 6;
let lado3 = 5;

if(lado1 <= 0 || lado2 <= 0 || lado3 <= 0){
    console.log('Ângulo inválido!');
} else {
    console.log(lado1 < (lado2+lado3) && lado2 < (lado1+lado3) && lado3 < (lado1+lado2));
}

