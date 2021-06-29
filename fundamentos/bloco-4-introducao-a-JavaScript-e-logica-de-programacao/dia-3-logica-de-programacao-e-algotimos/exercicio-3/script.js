const base = 5
const simbolo = '*'
let quantidadeDeEspacos

if (base % 2 === 0) {
  quantidadeDeEspacos = base / 2
} else {
  quantidadeDeEspacos = (base - 1) / 2
}

for (let i = 0; i < base; i++) {
  let linha = ''
  
  for (let j = 0; j < base; j++) {
    if (j >= quantidadeDeEspacos && j + quantidadeDeEspacos < base) {
      linha += simbolo
    } else {
      linha += ' '
    }
  }

  quantidadeDeEspacos--
  console.log(linha)

  if (quantidadeDeEspacos < 0) {
    break
  }
}
