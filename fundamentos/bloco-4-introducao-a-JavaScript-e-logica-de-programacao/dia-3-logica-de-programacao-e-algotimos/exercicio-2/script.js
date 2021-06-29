const base = 5
const simbolo = '*'
let linha = ''

for (let i = 0; i < base; i++) {
  linha = ''
  
  for (let j = 0; j < base; j++) {
    if (j >= base - i - 1) {
      linha += '*'
    } else {
      linha += ' '
    }
  }

  console.log(linha);
}

//     *
//    **
//   ***
//  ****
// *****