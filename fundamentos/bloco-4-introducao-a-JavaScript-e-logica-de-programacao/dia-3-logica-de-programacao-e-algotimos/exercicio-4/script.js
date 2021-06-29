let base = 3;
let espacoDoMeio = 0;
let linha = '';

if (base % 2 === 1) {
  for (let i = 0; i < base; i++) {
    linha = '';

    if (i == 1) {
      espacoDoMeio = 1;
    } else if (i > 1) {
      espacoDoMeio += 2;
    }

    for (let j = 0; j < base; j++) {
      if (i === base - 1) {
        linha += '* '
        continue;
      }

      if (j < base - (i + 1)) {
        linha += ' '
      } else {
        linha += '*'

        for (let k = 0; k < espacoDoMeio; k++) {
          linha += ' '
        }

        if (i > 0) {
          linha += '*'
        }

        break;
      }
    }

    console.log(linha)
  }
} else {
  console.log('Aceitamos apenas números ímpares. Por favor, tente novamente!')
}