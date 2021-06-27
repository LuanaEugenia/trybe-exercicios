const a = 13
const b = 13
const c = 15
let eUmTriangulo = false

if (a > b - c && a < b + c) {
  if (b > a - c && b < a + c) {
    if (c > a - b && c < a + b) {
      eUmTriangulo = true
    }
  }
}

console.log(eUmTriangulo)