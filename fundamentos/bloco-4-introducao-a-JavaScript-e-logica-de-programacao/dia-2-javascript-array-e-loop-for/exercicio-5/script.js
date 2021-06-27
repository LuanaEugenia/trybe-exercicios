const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let maiorValor

for (let i = 0; i < numbers.length; i++) {
  if (i === 0) {
    maiorValor = numbers[i]
  } else if (maiorValor < numbers[i]) {
    maiorValor = numbers[i]
  }
}

console.log('O maior valor é: ' + maiorValor)