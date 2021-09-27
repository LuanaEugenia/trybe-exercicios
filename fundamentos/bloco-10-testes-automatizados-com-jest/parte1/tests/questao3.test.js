const {myRemoveWithoutCopy} = require('../questao3');

describe('Parte 1 - Questão 3', () => {
  test('remove um item do array e retorna um novo array sem aquele item', () => {
    const array = [1, 2, 3, 4];
    const resultado  = myRemoveWithoutCopy(array, 3);

    expect(resultado).toEqual([1, 2, 4]);
    expect(resultado).not.toEqual([1, 2, 3, 4]);
    expect(array).not.toEqual([1, 2, 3, 4]);
  });

  test('quando o item não existe no array, o array é retornado sem alterações', () => {
    const array = [1, 2, 3, 4];
    const resultado  = myRemoveWithoutCopy(array, 5);

    expect(resultado).toEqual(array);
  });
});