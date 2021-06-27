const numbers = []

for (let i = 0; i < 25; i++) {
  numbers.push(i + 1)
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] + '/' + 2 + ' = ' + numbers[i] / 2)
}