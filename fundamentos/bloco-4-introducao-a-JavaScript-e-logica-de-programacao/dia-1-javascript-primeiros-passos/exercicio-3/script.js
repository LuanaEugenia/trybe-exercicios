const a = 10
const b = 17
const c = 11

if (a > b && a > c) {
  console.log(a)
} else if (b > a && b > c) {
  console.log(b)
} else if (c > a && c > b) {
  console.log(c)
} else {
  console.log('Todos os valores são iguais.')
}