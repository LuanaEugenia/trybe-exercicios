const calcularFatorial = (numero) => {
  resultado = numero;

  for (let i = numero - 1; i > 1; i -= 1) {
    resultado *= i;
  }

  return resultado;
} 

const numero = 4;

console.log(calcularFatorial(numero));
