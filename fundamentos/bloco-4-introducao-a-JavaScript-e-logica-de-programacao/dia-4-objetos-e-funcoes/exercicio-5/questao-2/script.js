function retornaMaiorindeceArray(array) {
  let maior

  for (i = 0; i < array.length; i++) {
    if (i === 0) {
      maior = i
    } else if (array[i] > array[maior]) {
      maior = i
    }
  }

  return maior
}
let array = [2, 3, 6, 7, 10, 1]
console.log(retornaMaiorindeceArray(array))