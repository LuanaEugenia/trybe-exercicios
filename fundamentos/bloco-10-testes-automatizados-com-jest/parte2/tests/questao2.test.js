const { encode } = require('../questao2');

describe('Parte 2 - Questão 2', () => {
  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    const resultado = encode('aeiou');
    expect(resultado).toBe('12345');
  });
});
