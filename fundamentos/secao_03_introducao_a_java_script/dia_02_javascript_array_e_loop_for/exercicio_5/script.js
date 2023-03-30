let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmerica = 0;
let maiorNumero = numbers[0];
let menorNumero = numbers[0];
let quantidadeNumeroImpares = 0;
let saoImpares = [];
const mensagem = 'Não há no array, números ímpares.';

for (let index = 0; index < numbers.length; index += 1) {
    mediaAritmerica = soma / index;
    console.log(numbers[index]);
    soma += numbers[index];

    if (maiorNumero < numbers[index]) {
        maiorNumero = numbers[index];
    }

    if (menorNumero > numbers[index]) {
        menorNumero = numbers[index];
    }

    if (numbers[index] % 2 != 0) {
        quantidadeNumeroImpares = quantidadeNumeroImpares + 1;
        saoImpares.push(numbers[index]);
    }
}

if (quantidadeNumeroImpares === 0) {
    mensagem;
}


console.log('*******************************************************************');
if (soma > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

console.log('*******************************************************************');
console.log(`O resultado da soma entre os números do array é: ${soma}`);
console.log(`A média aritmética é: ${mediaAritmerica}`);
console.log(`O maior número do Array: ${maiorNumero}`);
console.log(`O menor número do Array: ${menorNumero}`);
console.log(`A quantidade de números ímapares são: ${quantidadeNumeroImpares}.`);
console.log(`Números ímpares: ${saoImpares}`);
console.log('*******************************************************************');
