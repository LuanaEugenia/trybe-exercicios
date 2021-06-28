let n = 5;
let linha = '';

for(let i = 0; i < n; i += 1) {
  linha = '';
  for(let k = 1; k < n +1; k += 1) {
    linha +='*';
  }
  console.log(linha);
}