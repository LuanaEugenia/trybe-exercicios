const salarioBruto = 3000
const aliquota0075 = 0.075
const aliquota008 = 0.08
const aliquota009 = 0.09
const aliquota011 = 0.11
const aliquota015 = 0.15
const aliquota0225 = 0.225
const aliquota0275 = 0.275
let salarioLiquido

if (salarioBruto <= 1556.94) {
  salarioLiquido = salarioBruto - salarioBruto * aliquota008
} else if (salarioBruto <= 2594.92) {
  salarioLiquido = salarioBruto - salarioBruto * aliquota009
} else if (salarioBruto <= 5189.82) {
  salarioLiquido = salarioBruto - salarioBruto * aliquota011
} else {
  salarioLiquido = salarioBruto - 570.88
}

if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
  salarioLiquido = salarioLiquido - (salarioLiquido * aliquota0075 - 142.80)
} else if (salarioLiquido <= 3751.05) {
  salarioLiquido = salarioLiquido - (salarioLiquido * aliquota015 - 354.80)
} else if (salarioLiquido <= 4664.68) {
  salarioLiquido = salarioLiquido - (salarioLiquido * aliquota0225 - 636.13)
} else if (salarioLiquido <= 4664.68) {
  salarioLiquido = salarioLiquido - (salarioLiquido * aliquota0275 - 869.36)
}

console.log('Tendo um salário bruto de R$' + salarioBruto + ' o salário liquido será de R$' + salarioLiquido)
