const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let quantidadeImpares = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers [i] % 2 !== 0) {
    quantidadeImpares++
  }
}

if (quantidadeImpares === 0) {
  console.log('nenhum valor ímpar encontrado')
} else {
  console.log('Existe(m) ' + quantidadeImpares + ' valor(es) impar(es) no array.')
}
