let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmerica = 0;
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
        maiorNumero = numbers[index]
        for (let index = 1; index < numbers.length; index +=1) {
            if(maiorNumero < numbers[index]) {
                maiorNumero = numbers[index];
            }
        }
        mediaAritmerica = soma / index;
        console.log(numbers[index]);
        soma += numbers[index];
        if(numbers[index] > maiorNumero) {
            maiorNumero = numbers[index];
        }
    }

console.log('*******************************************************************');
if (soma > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

console.log('*******************************************************************');
console.log(`O resultado da soma entre os números do array é: ${soma}`);
console.log({ mediaAritmerica });
console.log(maiorNumero);
console.log('*******************************************************************');
