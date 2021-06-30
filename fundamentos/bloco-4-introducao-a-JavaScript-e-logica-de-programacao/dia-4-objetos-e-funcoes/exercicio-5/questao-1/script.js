let eUmPalindromo = false
let palavra = 'desenvolvimento'

function retornaUmpalindromo(palavra) {
  if(palavra.toUpperCase() === palavra.split('').reverse().join('').toUpperCase()) {
    return true
  } else {
    return false
  }
}

eUmPalindromo = retornaUmpalindromo(palavra)

if (eUmPalindromo) {
  console.log(palavra + ' é um palindromo.')
} else {
  console.log(palavra + ' não é um palindromo.')
}
