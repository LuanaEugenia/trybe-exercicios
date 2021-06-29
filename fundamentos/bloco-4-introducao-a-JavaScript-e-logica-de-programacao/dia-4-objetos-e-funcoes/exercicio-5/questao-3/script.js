function retornaMenorindeceArray(array) {
  let menor

  for (i = 0; i < array.length; i++) {
    if (i === 0) {
      menor = i
    } else if (array[i] < array[menor]) {
      menor = i
    }
  }

  return menor
}

let array = [2, 4, 6, 7, 10, 0, -3]
console.log(retornaMenorindeceArray(array))