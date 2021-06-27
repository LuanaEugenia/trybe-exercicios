const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let menorValor

for (let i = 0; i < numbers.length; i++) {
  if (i === 0) {
    menorValor = numbers[i]
  } else if (menorValor > numbers[i]) {
    menorValor = numbers[i]
  }
}

console.log('O menor valor é: ' + menorValor)