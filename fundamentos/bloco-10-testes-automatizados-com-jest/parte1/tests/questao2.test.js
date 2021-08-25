const {myRemove} = require('../questao2');

describe('Questão 2', () => {
  test('remove um item do array e retorna um novo array sem aquele item', () => {
    const array = [1, 2, 3, 4];
    const resultado  = myRemove(array, 3);

    expect(resultado).toEqual([1, 2, 4]);
    expect(resultado).not.toEqual(array);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  test('quando o item não existe no array, o array é retornado sem alterações', () => {
    const resultado  = myRemove([1, 2, 3, 4], 5);

    expect(resultado).toEqual([1, 2, 3, 4]);
  });
});