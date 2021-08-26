const { decode } = require('../questao3');

describe('Parte 2 - Questão 3', () => {
  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    const resultado = decode('12345');
    expect(resultado).toBe('aeiou');
  });
});