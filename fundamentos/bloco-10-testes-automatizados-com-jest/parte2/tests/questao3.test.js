const { decode } = require('../questao3');

describe('Parte 2 - Questão 3', () => {
  test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    const resultado = decode('12345');
    expect(resultado).toBe('aeiou');
  });
});