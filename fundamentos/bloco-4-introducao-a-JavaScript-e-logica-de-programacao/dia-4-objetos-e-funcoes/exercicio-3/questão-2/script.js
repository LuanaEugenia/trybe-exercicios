let maiorValor = 0

maiorValor = retornaMaiorValor(7, 2)

function retornaMaiorValor(a, b) {
  if (a > b) {
    return console.log(a)
  } else if (b > a) {
    return console.log(b)
  } else {
    return console.log('Todos os valores são iguais.')
  }
}

console.log(maiorValor)
