function retornaMaiorQuantidadeDeCaracteres(palavras) {
  let palavraComMaiorQuantCaracter

  for(let i = 0; i < palavras.length; i++) {
    if (i === 0) {
      palavraComMaiorQuantCaracter = palavras[i]
    }else if (palavras[i].length > palavraComMaiorQuantCaracter.length) {
      palavraComMaiorQuantCaracter = palavras[i]
    }
  }

  return palavraComMaiorQuantCaracter
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

console.log(retornaMaiorQuantidadeDeCaracteres(nomes))