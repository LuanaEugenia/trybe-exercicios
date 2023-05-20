const numbers = [19, 21, 30, 3, 45, 22, 15];

const verificaNumeroDivisivePor3e5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(`O número divisível por 3 e 5 é: ${verificaNumeroDivisivePor3e5}`);