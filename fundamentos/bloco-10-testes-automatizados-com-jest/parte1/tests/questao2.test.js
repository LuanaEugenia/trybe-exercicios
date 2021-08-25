const {myRemove} = require('../questao2');

describe('Questão 2', () => {
  test('retorna o array [1, 2, 4]', () => {
    const resultado  = myRemove([1, 2, 3, 4], 3);

    expect(resultado).toEqual([1, 2, 4]);
    expect(resultado).not.toEqual([1, 2, 3, 4]);
  });

  test('retorna o array [1, 2, 3, 4', () => {
    const resultado  = myRemove([1, 2, 3, 4], 5);

    expect(resultado).toEqual([1, 2, 3, 4]);
  });
});